import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { supabase } from '../supabaseClient';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { format } from 'date-fns';
import { Edit2, Trash2, X } from 'lucide-react';
import { es } from 'date-fns/locale';

const Journals = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [characterId, setCharacterId] = useState('');
  const [characters, setCharacters] = useState([]);
  const [journals, setJournals] = useState([]);
  const [editingJournalId, setEditingJournalId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [journalToDelete, setJournalToDelete] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  // Initialize Quill editor
  useEffect(() => {
    if (editorRef.current && !quillRef.current && isModalOpen) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['clean'],
          ],
        },
      });

      quillRef.current.on('text-change', () => {
        setContent(quillRef.current.root.innerHTML);
      });

      const editor = editorRef.current.querySelector('.ql-editor');
      const toolbar = editorRef.current.previousSibling;
      if (editor) {
        editor.style.backgroundColor = '#000000'; // bg-slate-800
        editor.style.color = '#ffffff'; // text-white
        editor.style.borderRadius = '0.5rem';
        editor.style.margin = '12px';
        editor.style.padding = '12px';
        editor.style.minHeight = '200px';
        editor.style.fontFamily = 'Montserrat, sans-serif';
      }
      if (toolbar) {
        toolbar.style.backgroundColor = '#ffffff'; // bg-slate-700
        toolbar.style.borderRadius = '0.5rem 0.5rem 0 0';
        toolbar.style.borderBottom = 'none';
      }
    }

    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change');
        quillRef.current = null;
      }
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (quillRef.current && content !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = content;
    }
  }, [content, isModalOpen]);

  // Fetch characters and journals
  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const { data: charData, error: charError } = await supabase
          .from('characters')
          .select('id, name')
          .eq('user_id', user.id)
          .order('name');
        if (charError) throw charError;
        setCharacters(charData || []);

        const { data: journalData, error: journalError } = await supabase
          .from('journals')
          .select('*, characters(name)')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        if (journalError) throw journalError;
        setJournals(journalData || []);
      } catch (err) {
        setError('No se pudo cargar los datos: ' + err.message);
        console.error(err);
      }
    };

    fetchData();
  }, [user]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Debes ingresar un título.');
      return;
    }
    if (!quillRef.current.getText().trim()) {
      setError('El contenido no puede estar vacío.');
      return;
    }

    try {
      setError(null);
      if (editingJournalId) {
        const { error } = await supabase
          .from('journals')
          .update({
            title,
            content,
            character_id: characterId || null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingJournalId)
          .eq('user_id', user.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('journals')
          .insert({
            user_id: user.id,
            title,
            content,
            character_id: characterId || null,
          });
        if (error) throw error;
      }

      const { data, error: fetchError } = await supabase
        .from('journals')
        .select('*, characters(name)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (fetchError) throw fetchError;
      setJournals(data || []);

      setContent('');
      setTitle('');
      setCharacterId('');
      setEditingJournalId(null);
      setIsModalOpen(false);
    } catch (err) {
      setError('No se pudo guardar el diario: ' + err.message);
      console.error(err);
    }
  };

  // Handle edit journal
  const handleEdit = (journal) => {
    setTitle(journal.title || '');
    setContent(journal.content || '');
    setCharacterId(journal.character_id || '');
    setEditingJournalId(journal.id);
    setError(null);
    setIsModalOpen(true);
  };

  // Handle delete journal
  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('journals')
        .delete()
        .eq('id', journalToDelete.id)
        .eq('user_id', user.id);
      if (error) throw error;
      setJournals(journals.filter(j => j.id !== journalToDelete.id));
      setDeleteDialogOpen(false);
      setJournalToDelete(null);
    } catch (err) {
      setError('No se pudo eliminar el diario: ' + err.message);
      console.error(err);
    }
  };

  // Search and filter journals
  const filteredJournals = journals.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.characters?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const groupedJournals = characters.reduce((acc, char) => {
    acc[char.id] = filteredJournals.filter(j => j.character_id === char.id);
    return acc;
  }, {});
  const unlinkedJournals = filteredJournals.filter(j => !j.character_id);

  const handleClickBack = () => {
    navigate('/landing');
  };

  const truncateHtml = (html, maxLength = 200) => {
    const text = html.replace(/<[^>]+>/g, '');
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white bg-black">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">Diarios</h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center montserrat animate-pulse">
            {error}
          </p>
        )}
        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar en tus diarios por titulo o autor..."
            className="w-full p-2 bg-slate-800 text-white rounded montserrat focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            aria-label="Buscar diarios"
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="montserrat text-xl bg-slate-800 hover:bg-slate-600 p-2 rounded-2xl border-1 border-white cursor-pointer w-fit self-center"
        >
          Crear Diario
        </button>
        {characters.map((char) => (
          groupedJournals[char.id]?.length > 0 && (
            <div key={char.id}>
              <h2 className="cinzel text-2xl md:text-4xl">Crónicas de {char.name}</h2>
              <div className="my-4">
              </div>
              {groupedJournals[char.id].map((entry) => (
                <JournalEntry
                  key={entry.id}
                  entry={entry}
                  onEdit={handleEdit}
                  onDelete={(entry) => {
                    setJournalToDelete(entry);
                    setDeleteDialogOpen(true);
                  }}
                />
              ))}
            </div>
          )
        ))}
        {unlinkedJournals.length > 0 && (
          <div>
            <h2 className="cinzel text-2xl md:text-4xl">Crónicas Perdidas</h2>
            {unlinkedJournals.map((entry) => (
              <JournalEntry
                key={entry.id}
                entry={entry}
                onEdit={handleEdit}
                onDelete={(entry) => {
                  setJournalToDelete(entry);
                  setDeleteDialogOpen(true);
                }}
              />
            ))}
          </div>
        )}
        {filteredJournals.length === 0 && (
          <p className="text-white text-center montserrat text-lg">
            No se encontraron diarios.
          </p>
        )}
      </main>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>

      {/* Create/Edit Journal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-4 rounded-lg border-1 border-white w-11/12 md:w-1/2 max-w-4xl relative flex flex-col">
            <h2 className="cinzel text-2xl mb-4">{editingJournalId ? 'Editar Diario' : 'Crear Diario'}</h2>
            {error && (
              <p className="text-red-600 text-sm mb-4 montserrat animate-pulse">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm montserrat mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título del diario..."
                  className="w-full p-2 bg-black text-white rounded montserrat border-1 border-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                  required
                  aria-label="Título del diario"
                />
              </div>
              <div>
                <label className="block text-white text-sm montserrat mb-2">
                  Contenido
                </label>
                <div ref={editorRef} className="bg-black border-1 p-1 m-1" />
              </div>
              <div>
                <label className="block text-white text-sm montserrat mb-2">
                  Vinculado a Personaje
                </label>
                <select
                  value={characterId}
                  onChange={(e) => setCharacterId(e.target.value)}
                  className="w-full p-2 bg-black text-white rounded montserrat border-1 border-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                  aria-label="Seleccionar personaje"
                >
                  <option value="">Sin Personaje</option>
                  {characters.map((char) => (
                    <option key={char.id} value={char.id}>
                      {char.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="p-2 bg-slate-600 text-white rounded montserrat hover:bg-slate-500 transition-all duration-300"
                  aria-label={editingJournalId ? 'Actualizar diario' : 'Crear diario'}
                >
                  {editingJournalId ? 'Actualizar' : 'Crear'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setContent('');
                    setTitle('');
                    setCharacterId('');
                    setEditingJournalId(null);
                    setError(null);
                    setIsModalOpen(false);
                  }}
                  className="p-2 bg-slate-600 text-white rounded montserrat hover:bg-slate-500 transition-all duration-300"
                  aria-label="Cancelar"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-4 rounded-lg border-1 border-white max-w-sm w-full text-center">
            <h2 className="cinzel text-2xl mb-4">Eliminar Diario</h2>
            <p className="text-white montserrat mb-6">
              ¿Estás seguro de que deseas eliminar "{journalToDelete.title}"?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="p-2 bg-slate-600 text-white rounded montserrat hover:bg-slate-500 transition-all duration-300"
                aria-label="Cancelar eliminación"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="p-2 bg-red-800 text-white rounded montserrat hover:bg-red-600 transition-all duration-300"
                aria-label="Confirmar eliminación"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const JournalEntry = ({ entry, onEdit, onDelete }) => {
  const truncateHtml = (html, maxLength = 200) => {
    const text = html.replace(/<[^>]+>/g, '');
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between cursor-pointer my-4 p-4 rounded-xl border-transparent border-1 hover:border-white hover:shadow-lg hover:shadow-gray-700">
      <ul className="mb-4">
        <li>
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <div className="rounded-full w-25 h-25 md:w-45 md:h-45">
                <img className="rounded-full" src="/assets/image/journal.png" alt="Journal Image" />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <h3 className="montserrat text-xl px-2 py-2 font-thin">
                  Título: {entry.title}
                </h3>
                {entry.characters?.name && (
                  <h3 className="montserrat text-xl px-2 py-2 font-thin">
                    Autor: {entry.characters.name}
                  </h3>
                )}
              </div>
              <div className="flex flex-col">
                <p className="montserrat text-md font-thin px-2">
                  Fecha: {format(new Date(entry.created_at), 'd MMMM yyyy', { locale: es })}
                </p>
                <p className="montserrat text-md font-thin px-2">
                  Resumen:
                </p>
                <p className="montserrat italic text-xs font-thin py-2 px-2">
                  {truncateHtml(entry.content)}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex flex-wrap flex-row md:flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-4">
        <button
          className="w-25 bg-slate-800 hover:bg-slate-600 p-2 rounded-2xl border-1 border-white cursor-pointer montserrat"
          onClick={() => onEdit(entry)}
        >
          Editar
        </button>
        <button
          className="w-25 bg-red-800 hover:bg-red-600 p-2 rounded-2xl border-1 border-white cursor-pointer montserrat"
          onClick={() => onDelete(entry)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Journals;