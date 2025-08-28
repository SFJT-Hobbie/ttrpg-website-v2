import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function LibraryLoreRoomWiki() {
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const { user } = useAuth();
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  const [room, setRoom] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [flatPages, setFlatPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  const [tempContent, setTempContent] = useState('');
  const [tempParentId, setTempParentId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Compute hierarchical tree from flat list
  const pages = useMemo(() => {
    const pageMap = {};
    flatPages.forEach(page => { page.children = []; pageMap[page.id] = page; });
    return flatPages.filter(page => {
      if (page.parent_id && pageMap[page.parent_id]) {
        pageMap[page.parent_id].children.push(page);
      }
      return !page.parent_id;
    });
  }, [flatPages]);

  // Fetch room and pages from Supabase
  useEffect(() => {
    const fetchData = async () => {
      if (!user || !roomId) return;
      setLoading(true);

      try {
        const { data: roomData, error: roomError } = await supabase
          .from('rooms')
          .select('id, name, owner_id')
          .eq('id', roomId)
          .single();
        if (roomError) throw roomError;
        setRoom(roomData);
        setIsOwner(user.id === roomData.owner_id);

        const { data: pagesData, error: pagesError } = await supabase
          .from('wiki_pages')
          .select('id, room_id, title, content, parent_id, created_at, updated_at')
          .eq('room_id', roomId)
          .order('created_at', { ascending: true });
        if (pagesError) throw pagesError;
        setFlatPages(pagesData || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error al cargar datos de la wiki.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, roomId]);

  // Instantiate Quill when modal opens
  useEffect(() => {
    if (showModal && editorRef.current && selectedPage) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ],
        },
      });

      quillInstance.current.root.innerHTML = selectedPage.content;
      quillInstance.current.on('text-change', () => {
        setTempContent(quillInstance.current.root.innerHTML);
      });

      setTempTitle(selectedPage.title);
      setTempParentId(selectedPage.parent_id);

      return () => {
        if (quillInstance.current) {
          quillInstance.current.off('text-change');
          quillInstance.current = null;
        }
      };
    }
  }, [showModal, selectedPage]);

  // Load content when a page is selected
  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  // Open modal for editing
  const handleEdit = (page) => {
    setSelectedPage(page);
    setShowModal(true);
  };

  // Save changes to Supabase
  const handleSave = async () => {
    if (!isOwner) {
      setError('Solo el dueño puede editar páginas.');
      return;
    }
    if (!selectedPage || !tempTitle || !tempContent) {
      setError('Título y contenido requeridos.');
      return;
    }

    setLoading(true);
    try {
      const updatedPage = {
        title: tempTitle,
        parent_id: tempParentId || null,
        content: tempContent,
        updated_at: new Date().toISOString()
      };
      const { error } = await supabase
        .from('wiki_pages')
        .update(updatedPage)
        .eq('id', selectedPage.id);
      if (error) throw error;

      const updatedFlatPages = flatPages.map(p => p.id === selectedPage.id ? { ...p, ...updatedPage } : p);
      setFlatPages(updatedFlatPages);
      setSelectedPage({ ...selectedPage, ...updatedPage });
      setShowModal(false);
      setError(null);
    } catch (err) {
      console.error('Error updating wiki page:', err);
      setError('Error al guardar la página.');
    } finally {
      setLoading(false);
    }
  };

  // Create new page in Supabase
  const handleCreatePage = async () => {
    if (!isOwner) {
      setError('Solo el dueño puede crear páginas.');
      return;
    }

    setLoading(true);
    try {
      const newPage = {
        id: uuidv4(),
        room_id: roomId,
        title: 'New Page',
        content: '<p>Edit me...</p>',
        parent_id: selectedPage?.id || null
      };
      const { data, error } = await supabase
        .from('wiki_pages')
        .insert(newPage)
        .select('*')
        .single();
      if (error) throw error;

      setFlatPages([...flatPages, data]);
      handleSelectPage(data);
      setShowModal(true);
    } catch (err) {
      console.error('Error creating wiki page:', err);
      setError('Error al crear la página.');
    } finally {
      setLoading(false);
    }
  };

  // Delete page in Supabase
  const handleDelete = async (pageId) => {
    if (!isOwner) {
      setError('Solo el dueño puede eliminar páginas.');
      return;
    }
    if (!window.confirm('¿Estás seguro de eliminar esta página y sus subpáginas?')) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('wiki_pages')
        .delete()
        .eq('id', pageId);
      if (error) throw error;

      const updatedFlatPages = flatPages.filter(p => p.id !== pageId);
      setFlatPages(updatedFlatPages);
      if (selectedPage?.id === pageId) setSelectedPage(null);
      setError(null);
    } catch (err) {
      console.error('Error deleting wiki page:', err);
      setError('Error al eliminar la página.');
    } finally {
      setLoading(false);
    }
  };

  // Close modal without saving
  const handleCancel = () => {
    setShowModal(false);
    setTempTitle('');
    setTempContent('');
    setTempParentId(null);
  };

  // Back navigation
  const handleClickBack = () => {
    navigate(`/library/lore-room/${roomId}`);
  };

  // Recursive component for rendering page tree
  const renderPageTree = (pages, level = 0) => (
    <ul className={`space-y-2 ${level > 0 ? 'ml-4' : ''}`}>
      {pages.map(page => (
        <li key={page.id}>
          <div className="cursor-pointer hover:underline" onClick={() => handleSelectPage(page)}>
            {page.title}
          </div>
          {page.children.length > 0 && renderPageTree(page.children, level + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <style>
        {`
          .quill > * {
            border-color: inherit !important;
            color: inherit !important;
          }
          .quill > .ql-toolbar {
            border-radius: 10px 10px 0 0;
          }
          .quill > .ql-container {
            font-size: inherit;
            border-radius: 0 0 10px 10px;
          }
          .ql-toolbar.ql-snow .ql-picker-label {
            color: inherit !important;
            opacity: 0.76;
          }
          .ql-snow .ql-picker {
            color: inherit !important;
          }
          .quill > .ql-container > .ql-editor.ql-blank::before {
            color: inherit;
          }
          .ql-snow.ql-toolbar button svg {
            opacity: 0.76;
            color: currentColor;
          }
          .ql-snow .ql-stroke {
            stroke: currentColor !important;
          }
          .ql-snow .ql-fill {
            fill: currentColor !important;
          }
          .ql-picker-item {
            color: #444 !important;
          }
          .ql-editor {
            background-color: black;
            color: white;
            min-height: 200px;
          }
          .ql-toolbar.ql-snow {
            background-color: #2d3748;
            border-color: #4a5568 !important;
          }
          .ql-container.ql-snow {
            border-color: #4a5568 !important;
          }
          .ql-snow .ql-picker-options {
            background-color: #2d3748;
            color: white;
          }
          .ql-snow .ql-tooltip {
            background-color: #2d3748;
            color: white;
          }
          .ql-syntax {
            background-color: #000 !important;
            color: #f8f8f2 !important;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
            z-index: 50;
            padding: 20px 0;
          }
          .modal-content {
            background: black;
            padding: 20px;
            border-width: 1px;
            border-radius: 8px;
            width: 80%;
            max-width: 800px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
          }
          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            color: white;
          }
        `}
      </style>
      <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
        <div className="top-0 mx-auto mt-4 text-center">
          <h1 className="cinzel text-5xl md:text-7xl landing-title">
            Wiki - Lore Room "{room.name}"
          </h1>
        </div>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {loading && <p className="text-yellow-500 mt-2 text-center">Cargando...</p>}
        <main className="w-10/12 h-10/12 mx-auto my-8 space-y-8 p-4 flex flex-col md:flex-row">
          {/* Sidebar for page tree */}
          <aside className="w-full md:w-1/4 pr-4">
            <h2 className="cinzel text-2xl mb-4">Páginas</h2>
            {pages.length > 0 ? (
              renderPageTree(pages)
            ) : (
              <p className="text-gray-500">No hay páginas disponibles.</p>
            )}
            {isOwner && (
              <button
                onClick={handleCreatePage}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl mt-4"
                disabled={loading}
              >
                Nueva Página
              </button>
            )}
          </aside>
          {/* Main viewer */}
          <div className="w-full md:w-3/4 px-4 quill border-2 h-full p-2 rounded-2xl">
            {selectedPage ? (
              <>
                <h2 className="cinzel text-3xl mb-4 text-yellow-500">{selectedPage.title}</h2>
                {selectedPage.children.length > 0 && (
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 wrap-anywhere md:gap-2 items-center text-center border-5 border-double rounded-2xl p-4 mx-auto">
                    {selectedPage.children.map(child => (
                      <div
                        key={child.id}
                        className="border p-2 cinzel text-md md:text-lg hover:underline hover:underline-offset-4 hover:text-yellow-500 hover:decoration-yellow-500 cursor-pointer text-center my-4 py-2"
                        onClick={() => handleSelectPage(child)}
                      >
                        {child.title}
                      </div>
                    ))}
                  </div>
                )}
                {isOwner && (
                  <div className="my-8 space-x-4">
                    <button
                      onClick={() => handleEdit(selectedPage)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                      disabled={loading}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(selectedPage.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl"
                      disabled={loading}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
                <div className="ql-editor bg-gray-800 p-4 text-white" dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
              </>
            ) : (
              <div className="text-center text-gray-500 p-10">
                <p>No hay páginas en la wiki. {isOwner ? 'Crea una nueva página para comenzar.' : 'Espera a que el dueño cree una página.'}</p>
                {isOwner && (
                  <button
                    onClick={handleCreatePage}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl mt-4"
                    disabled={loading}
                  >
                    Crear Página
                  </button>
                )}
              </div>
            )}
          </div>
        </main>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={handleCancel}>&times;</span>
              <label className="block text-white mb-2">Título:</label>
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-300 rounded"
                disabled={loading}
              />
              <label className="block text-white mb-2">Capítulo Padre:</label>
              <select
                value={tempParentId || ''}
                onChange={(e) => setTempParentId(e.target.value ? e.target.value : null)}
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-300 rounded"
                disabled={loading}
              >
                <option value="">Ninguno</option>
                {flatPages.filter(p => p.id !== selectedPage?.id).map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
              <div ref={editorRef} className="border border-gray-300 rounded mb-4" />
              <div className="space-x-4 mt-8">
                <button
                  onClick={handleCancel}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl"
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl"
                  disabled={loading}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
        <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto w-fit left-0 right-0 cursor-pointer">
          <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
            Volver
          </p>
        </div>
      </section>
    </>
  );
}