import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { supabase } from '../supabaseClient';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { format } from 'date-fns';
import { Edit2, Trash2, X } from 'lucide-react';
import { es } from 'date-fns/locale';
import Pagination from '../components/Pagination';
import { useDebounce } from '../hooks/useDebounce';

const Journals = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageMap, setPageMap] = useState({}); // Track pages for each character group
  const [unlinkedPage, setUnlinkedPage] = useState(1);
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

  // Handle navigation from read view to edit mode
  useEffect(() => {
    if (location.state?.editJournalId && journals.length > 0) {
      const journalToEdit = journals.find(j => j.id === location.state.editJournalId);
      if (journalToEdit) {
        setTitle(journalToEdit.title || '');
        setContent(journalToEdit.content || '');
        setCharacterId(journalToEdit.character_id || '');
        setEditingJournalId(journalToEdit.id);
        setError(null);
        setIsModalOpen(true);
        // Clear the state to prevent re-triggering
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location.state, journals, navigate, location.pathname]);

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

  // Debounce search input
  const debouncedSearch = useDebounce(search, 300);

  // Search and filter journals
  const filteredJournals = useMemo(() => 
    journals.filter(j =>
      j.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      j.characters?.name?.toLowerCase().includes(debouncedSearch.toLowerCase())
    ),
    [journals, debouncedSearch]
  );

  const groupedJournals = useMemo(() => 
    characters.reduce((acc, char) => {
      acc[char.id] = filteredJournals.filter(j => j.character_id === char.id);
      return acc;
    }, {}),
    [characters, filteredJournals]
  );
  const unlinkedJournals = useMemo(() => 
    filteredJournals.filter(j => !j.character_id),
    [filteredJournals]
  );

  // Get paginated journals for a character
  const getPaginatedJournals = (journalList, charId) => {
    const page = pageMap[charId] || 1;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return journalList.slice(startIndex, endIndex);
  };

  // Get paginated unlinked journals
  const getPaginatedUnlinkedJournals = () => {
    const startIndex = (unlinkedPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return unlinkedJournals.slice(startIndex, endIndex);
  };

  const handlePageChange = (charId, newPage) => {
    setPageMap(prev => ({ ...prev, [charId]: newPage }));
  };

  const handleClickBack = () => {
    navigate('/landing');
  };

  const truncateHtml = (html, maxLength = 200) => {
    const text = html.replace(/<[^>]+>/g, '');
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">Diarios</h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          {error && (
            <p className="text-red-600 text-small mb-4 text-center montserrat animate-pulse">
              {error}
            </p>
          )}
          <div className="mb-4 md:mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar en tus diarios por titulo o autor..."
              className="w-full p-2 md:p-3 bg-slate-800 text-white rounded montserrat text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              aria-label="Buscar diarios"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="montserrat text-sm sm:text-base md:text-lg bg-slate-800 hover:bg-slate-600 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white cursor-pointer w-full sm:w-fit self-center transition-all duration-300"
          >
            Crear Diario
          </button>
        {characters.map((char) => {
          const charJournals = groupedJournals[char.id] || [];
          if (charJournals.length === 0) return null;
          
          const paginatedJournals = getPaginatedJournals(charJournals, char.id);
          const totalPages = Math.ceil(charJournals.length / itemsPerPage);
          const currentPage = pageMap[char.id] || 1;
          
            return (
              <div key={char.id}>
                <h2 className="cinzel text-section-title">Crónicas de {char.name}</h2>
              <div className="my-4">
              </div>
              {paginatedJournals.map((entry) => (
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
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(newPage) => handlePageChange(char.id, newPage)}
                  itemsPerPage={itemsPerPage}
                  totalItems={charJournals.length}
                  onItemsPerPageChange={(newItemsPerPage) => {
                    setItemsPerPage(newItemsPerPage);
                    setPageMap({});
                    setUnlinkedPage(1);
                  }}
                />
              )}
            </div>
          );
        })}
          {unlinkedJournals.length > 0 && (
            <div>
              <h2 className="cinzel text-section-title">Crónicas Perdidas</h2>
            {getPaginatedUnlinkedJournals().map((entry) => (
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
            {Math.ceil(unlinkedJournals.length / itemsPerPage) > 1 && (
              <Pagination
                currentPage={unlinkedPage}
                totalPages={Math.ceil(unlinkedJournals.length / itemsPerPage)}
                onPageChange={setUnlinkedPage}
                itemsPerPage={itemsPerPage}
                totalItems={unlinkedJournals.length}
                onItemsPerPageChange={(newItemsPerPage) => {
                  setItemsPerPage(newItemsPerPage);
                  setPageMap({});
                  setUnlinkedPage(1);
                }}
              />
            )}
          </div>
        )}
          {filteredJournals.length === 0 && (
            <p className="text-white text-center montserrat text-body">
              No se encontraron diarios.
            </p>
          )}
        </main>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>

      {/* Create/Edit Journal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-black p-4 md:p-6 rounded-lg border border-white w-full md:w-11/12 lg:w-1/2 max-w-4xl relative flex flex-col max-h-[90vh] overflow-y-auto">
            <h2 className="cinzel text-section-title mb-4">{editingJournalId ? 'Editar Diario' : 'Crear Diario'}</h2>
            {error && (
              <p className="text-red-600 text-small mb-4 montserrat animate-pulse">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-small montserrat mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título del diario..."
                  className="w-full p-2 md:p-3 bg-black text-white rounded montserrat text-sm sm:text-base border border-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                  required
                  aria-label="Título del diario"
                />
              </div>
              <div>
                <label className="block text-white text-small montserrat mb-2">
                  Contenido
                </label>
                <div ref={editorRef} className="bg-black border border-white p-1 m-1" />
              </div>
              <div>
                <label className="block text-white text-small montserrat mb-2">
                  Vinculado a Personaje
                </label>
                <select
                  value={characterId}
                  onChange={(e) => setCharacterId(e.target.value)}
                  className="w-full p-2 md:p-3 bg-black text-white rounded montserrat text-sm sm:text-base border border-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
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
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 md:px-6 md:py-3 bg-slate-600 text-white rounded-2xl montserrat hover:bg-slate-500 transition-all duration-300 text-sm sm:text-base"
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
                  className="px-4 py-2 md:px-6 md:py-3 bg-slate-600 text-white rounded-2xl montserrat hover:bg-slate-500 transition-all duration-300 text-sm sm:text-base"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 p-4 md:p-6 rounded-lg border border-white max-w-sm w-full text-center">
            <h2 className="cinzel text-section-title mb-4">Eliminar Diario</h2>
            <p className="text-white montserrat text-body mb-6">
              ¿Estás seguro de que deseas eliminar "{journalToDelete.title}"?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="px-4 py-2 md:px-6 md:py-3 bg-slate-600 text-white rounded-2xl montserrat hover:bg-slate-500 transition-all duration-300 text-sm sm:text-base"
                aria-label="Cancelar eliminación"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 md:px-6 md:py-3 bg-red-800 text-white rounded-2xl montserrat hover:bg-red-600 transition-all duration-300 text-sm sm:text-base"
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

const JournalEntry = React.memo(({ entry, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const truncateHtml = React.useCallback((html, maxLength = 200) => {
    const text = html.replace(/<[^>]+>/g, '');
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }, []);

  const handleView = () => {
    navigate(`/journals/${entry.id}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between cursor-pointer my-4 p-4 rounded-xl border border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
      <ul className="mb-4">
        <li>
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36">
                <img className="rounded-full w-full h-full object-cover" src="/assets/image/journal.png" alt="Journal Image" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="flex flex-col">
                <h3 className="montserrat text-base sm:text-lg md:text-xl px-2 py-2 font-thin">
                  Título: {entry.title}
                </h3>
                {entry.characters?.name && (
                  <h3 className="montserrat text-base sm:text-lg md:text-xl px-2 py-2 font-thin">
                    Autor: {entry.characters.name}
                  </h3>
                )}
              </div>
              <div className="flex flex-col">
                <p className="montserrat text-small md:text-base font-thin px-2">
                  Fecha: {format(new Date(entry.created_at), 'd MMMM yyyy', { locale: es })}
                </p>
                <p className="montserrat text-small md:text-base font-thin px-2">
                  Resumen:
                </p>
                <p className="montserrat italic text-small font-thin py-2 px-2">
                  {truncateHtml(entry.content)}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-4">
        <button
          className="w-20 sm:w-24 md:w-28 bg-slate-800 hover:bg-slate-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-xs sm:text-sm transition-all duration-300"
          onClick={handleView}
        >
          Ver
        </button>
        <button
          className="w-20 sm:w-24 md:w-28 bg-slate-800 hover:bg-slate-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-xs sm:text-sm transition-all duration-300"
          onClick={() => onEdit(entry)}
        >
          Editar
        </button>
        <button
          className="w-20 sm:w-24 md:w-28 bg-red-800 hover:bg-red-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-xs sm:text-sm transition-all duration-300"
          onClick={() => onDelete(entry)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.entry.id === nextProps.entry.id &&
    prevProps.entry.title === nextProps.entry.title &&
    prevProps.entry.content === nextProps.entry.content &&
    prevProps.entry.created_at === nextProps.entry.created_at
  );
});

JournalEntry.displayName = 'JournalEntry';

export default Journals;