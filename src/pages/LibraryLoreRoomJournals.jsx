import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { v4 as uuidv4 } from 'uuid';
import Pagination from '../components/Pagination';
import SkeletonPage from '../components/SkeletonLoader';
import JournalLinkDialog from '../components/JournalLinkDialog';

export default function LibraryLoreRoomJournals() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: roomId } = useParams();
  const { user } = useAuth();

  const [room, setRoom] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [roomJournals, setRoomJournals] = useState([]);
  const [availableJournals, setAvailableJournals] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [wikiPages, setWikiPages] = useState([]);
  const [mapPins, setMapPins] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  const [tempCharacterId, setTempCharacterId] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Initialize Tiptap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: 'text-yellow-500 hover:text-yellow-300 underline cursor-pointer',
        },
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4 text-white montserrat',
      },
      handleKeyDown: (view, event) => {
        // Detect [[ when typing
        if (event.key === '[') {
          const { from } = view.state.selection;
          const textBefore = view.state.doc.textBetween(Math.max(0, from - 1), from, '');
          
          // If previous character is also '[', show dialog
          if (textBefore === '[') {
            setTimeout(() => {
              setShowLinkDialog(true);
            }, 10);
          }
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      // Also check on update in case paste or other operations
      const { from } = editor.state.selection;
      const textBefore = editor.state.doc.textBetween(Math.max(0, from - 2), from, '');
      
      if (textBefore === '[[' && !showLinkDialog) {
        setShowLinkDialog(true);
      }
    },
  });

  // Fetch room, journals, characters, wiki pages, and map pins
  useEffect(() => {
    const fetchData = async () => {
      if (!user || !roomId) return;
      setLoading(true);

      try {
        // Fetch room
        const { data: roomData, error: roomError } = await supabase
          .from('rooms')
          .select('id, name, owner_id, members')
          .eq('id', roomId)
          .single();
        if (roomError) throw roomError;
        setRoom(roomData);
        setIsOwner(user.id === roomData.owner_id);

        // Check if user is a member
        const isMember = roomData.owner_id === user.id || roomData.members.includes(user.id);
        if (!isMember) {
          setError('No tienes acceso a esta sala.');
          setLoading(false);
          return;
        }

        // Fetch room journal instances
        const { data: journalInstances, error: journalError } = await supabase
          .from('room_journal_instances')
          .select('*, journals(id, user_id)')
          .eq('room_id', roomId)
          .order('created_at', { ascending: false });
        if (journalError) throw journalError;
        setRoomJournals(journalInstances || []);

        // Fetch available journals from room members (for import)
        const { data: journalsData, error: availableError } = await supabase
          .from('journals')
          .select('*')
          .in('user_id', [roomData.owner_id, ...roomData.members])
          .order('created_at', { ascending: false });
        if (availableError) throw availableError;
        setAvailableJournals(journalsData || []);

        // Fetch characters from room members
        const { data: charData, error: charError } = await supabase
          .from('characters')
          .select('id, name')
          .in('user_id', [roomData.owner_id, ...roomData.members])
          .order('name');
        if (charError) throw charError;
        setCharacters(charData || []);

        // Fetch wiki pages
        const { data: wikiData, error: wikiError } = await supabase
          .from('wiki_pages')
          .select('id, title, content')
          .eq('room_id', roomId);
        if (wikiError) throw wikiError;
        setWikiPages(wikiData || []);

        // Fetch map pins (need to get maps first, then pins)
        const { data: mapsData, error: mapsError } = await supabase
          .from('maps')
          .select('id')
          .eq('room_id', roomId);
        if (mapsError) throw mapsError;

        if (mapsData && mapsData.length > 0) {
          const mapIds = mapsData.map(m => m.id);
          const { data: pinsData, error: pinsError } = await supabase
            .from('pins')
            .select('id, title, description, color')
            .in('map_id', mapIds);
          if (pinsError) throw pinsError;
          setMapPins(pinsData || []);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error al cargar datos: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, roomId]);

  // Load content when editing
  useEffect(() => {
    if (editor && selectedJournal && showModal) {
      editor.commands.setContent(selectedJournal.content || '');
      setTempTitle(selectedJournal.title || '');
      setTempCharacterId(selectedJournal.character_id || '');
    } else if (editor && !selectedJournal && showModal) {
      editor.commands.setContent('');
      setTempTitle('');
      setTempCharacterId('');
    }
  }, [selectedJournal, showModal, editor]);

  // Handle journal import
  const handleImportJournal = async (journal) => {
    try {
      // Check if already imported
      const existing = roomJournals.find(rj => rj.journal_id === journal.id);
      if (existing) {
        setError('Este diario ya está importado.');
        return;
      }

      const newInstance = {
        id: uuidv4(),
        room_id: roomId,
        journal_id: journal.id,
        user_id: user.id,
        title: journal.title,
        content: journal.content,
        character_id: journal.character_id || null,
      };

      const { error } = await supabase
        .from('room_journal_instances')
        .insert(newInstance);
      if (error) throw error;

      setRoomJournals([newInstance, ...roomJournals]);
    } catch (err) {
      setError('Error al importar el diario: ' + err.message);
      console.error('Error importing journal:', err);
    }
  };

  // Parse [[ ]] links and HTML links from content
  const parseLinks = useCallback((htmlContent) => {
    const links = [];
    
    // Parse [[ ]] syntax links
    const bracketRegex = /\[\[(Wiki|Mapa):([^\]]+)\]\]/g;
    let match;
    while ((match = bracketRegex.exec(htmlContent)) !== null) {
      const [, type, name] = match;
      const linkType = type.toLowerCase() === 'wiki' ? 'wiki_page' : 'map_pin';
      
      // Find the linked item
      let linkedId = null;
      if (linkType === 'wiki_page') {
        const page = wikiPages.find(p => p.title === name.trim());
        if (page) linkedId = page.id;
      } else {
        const pin = mapPins.find(p => p.title === name.trim());
        if (pin) linkedId = pin.id;
      }

      if (linkedId) {
        links.push({
          link_type: linkType,
          linked_id: linkedId,
          link_text: match[0],
        });
      }
    }
    
    // Parse HTML links (<a href="...">text</a>)
    const htmlLinkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/g;
    while ((match = htmlLinkRegex.exec(htmlContent)) !== null) {
      const [, href, linkText] = match;
      
      // Check if it's a wiki or map link
      if (href.includes('/wiki')) {
        // Find wiki page by title (linkText)
        const page = wikiPages.find(p => p.title === linkText.trim());
        if (page) {
          links.push({
            link_type: 'wiki_page',
            linked_id: page.id,
            link_text: `[[Wiki:${linkText.trim()}]]`,
          });
        }
      } else if (href.includes('/map')) {
        // Find map pin by title (linkText)
        const pin = mapPins.find(p => p.title === linkText.trim());
        if (pin) {
          links.push({
            link_type: 'map_pin',
            linked_id: pin.id,
            link_text: `[[Mapa:${linkText.trim()}]]`,
          });
        }
      }
    }

    return links;
  }, [wikiPages, mapPins]);

  // Handle link selection from dialog
  const handleLinkSelect = useCallback((linkText, type, linkedId, itemTitle) => {
    if (!editor) return;

    const { from } = editor.state.selection;
    
    // Remove the [[ that triggered the dialog (2 characters back)
    editor.commands.deleteRange({ from: from - 2, to: from });
    
    // Create the URL based on type - include the item ID in the URL for navigation
    const url = type === 'wiki' 
      ? `/library/lore-room/${roomId}/wiki#${linkedId}`
      : `/library/lore-room/${roomId}/map#${linkedId}`;
    
    // Insert the [[Wiki:Page Name]] or [[Mapa:Pin Name]] syntax as a clickable HTML link
    // Tiptap's insertContent with proper link structure
    editor.commands.insertContent({
      type: 'text',
      text: linkText,
      marks: [
        {
          type: 'link',
          attrs: {
            href: url,
            target: '_self',
          },
        },
      ],
    });
  }, [editor, roomId]);

  // Handle save
  const handleSave = async () => {
    if (!tempTitle || !editor) {
      setError('Título y contenido requeridos.');
      return;
    }

    const htmlContent = editor.getHTML();
    if (!htmlContent || htmlContent === '<p></p>') {
      setError('El contenido no puede estar vacío.');
      return;
    }

    setLoading(true);
    try {
      const links = parseLinks(htmlContent);

      if (selectedJournal) {
        // Update existing journal instance
        const { error: updateError } = await supabase
          .from('room_journal_instances')
          .update({
            title: tempTitle,
            content: htmlContent,
            character_id: tempCharacterId || null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', selectedJournal.id);
        if (updateError) throw updateError;

        // Also update base journal if it exists
        if (selectedJournal.journal_id) {
          const { error: baseJournalError } = await supabase
            .from('journals')
            .update({
              title: tempTitle,
              content: htmlContent,
              character_id: tempCharacterId || null,
              updated_at: new Date().toISOString(),
            })
            .eq('id', selectedJournal.journal_id);
          if (baseJournalError) throw baseJournalError;
        }

        // Delete old links
        await supabase
          .from('journal_links')
          .delete()
          .eq('journal_id', selectedJournal.id);

        // Create new links
        if (links.length > 0) {
          const linksToInsert = links.map(link => ({
            id: uuidv4(),
            journal_id: selectedJournal.id,
            ...link,
          }));
          const { error: linksError } = await supabase
            .from('journal_links')
            .insert(linksToInsert);
          if (linksError) throw linksError;
        }

        setRoomJournals(roomJournals.map(rj =>
          rj.id === selectedJournal.id
            ? { ...rj, title: tempTitle, content: htmlContent, character_id: tempCharacterId || null }
            : rj
        ));
      } else {
        // Create new journal (both base journal and room instance)
        const newJournalId = uuidv4();
        const { error: journalError } = await supabase
          .from('journals')
          .insert({
            id: newJournalId,
            user_id: user.id,
            title: tempTitle,
            content: htmlContent,
            character_id: tempCharacterId || null,
            room_id: roomId,
          });
        if (journalError) throw journalError;

        // Then create the room journal instance
        const newInstance = {
          id: uuidv4(),
          room_id: roomId,
          journal_id: newJournalId,
          user_id: user.id,
          title: tempTitle,
          content: htmlContent,
          character_id: tempCharacterId || null,
        };

        const { error: instanceError } = await supabase
          .from('room_journal_instances')
          .insert(newInstance);
        if (instanceError) throw instanceError;

        // Create links if any
        if (links.length > 0) {
          const linksToInsert = links.map(link => ({
            id: uuidv4(),
            journal_id: newInstance.id,
            ...link,
          }));
          const { error: linksError } = await supabase
            .from('journal_links')
            .insert(linksToInsert);
          if (linksError) throw linksError;
        }

        // Refresh the list
        const { data: updatedJournals, error: fetchError } = await supabase
          .from('room_journal_instances')
          .select('*, journals(id, user_id)')
          .eq('room_id', roomId)
          .order('created_at', { ascending: false });
        if (fetchError) throw fetchError;
        setRoomJournals(updatedJournals || []);

        // Also update available journals list
        const { data: updatedAvailable, error: availableError } = await supabase
          .from('journals')
          .select('*')
          .in('user_id', [room.owner_id, ...room.members])
          .order('created_at', { ascending: false });
        if (availableError) throw availableError;
        setAvailableJournals(updatedAvailable || []);
      }

      setShowModal(false);
      setSelectedJournal(null);
      setTempTitle('');
      setTempCharacterId('');
      editor.commands.setContent('');
      setError(null);
    } catch (err) {
      console.error('Error saving journal:', err);
      setError('Error al guardar el diario: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (journal) => {
    setSelectedJournal(journal);
    setShowModal(true);
  };

  // Handle navigation from read view to edit mode
  useEffect(() => {
    if (location.state?.editJournalId && roomJournals.length > 0) {
      const journalToEdit = roomJournals.find(j => j.id === location.state.editJournalId);
      if (journalToEdit) {
        setSelectedJournal(journalToEdit);
        setShowModal(true);
        // Clear the state to prevent re-triggering
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location.state, roomJournals, navigate, location.pathname]);

  // Handle delete
  const handleDelete = async (journalId) => {
    if (!window.confirm('¿Estás seguro de eliminar este diario de la sala?')) return;

    try {
      // Delete links first
      await supabase
        .from('journal_links')
        .delete()
        .eq('journal_id', journalId);

      // Delete journal instance
      const { error } = await supabase
        .from('room_journal_instances')
        .delete()
        .eq('id', journalId);
      if (error) throw error;

      setRoomJournals(roomJournals.filter(rj => rj.id !== journalId));
    } catch (err) {
      console.error('Error deleting journal:', err);
      setError('Error al eliminar el diario: ' + err.message);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setShowModal(false);
    setSelectedJournal(null);
    setTempTitle('');
    setTempCharacterId('');
    if (editor) {
      editor.commands.setContent('');
    }
    setShowLinkDialog(false);
  };

  // Handle back navigation
  const handleClickBack = () => {
    navigate(`/library/lore-room/${roomId}`);
  };

  // Pagination
  const totalPages = Math.ceil(roomJournals.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedJournals = roomJournals.slice(startIndex, endIndex);

  const truncateHtml = (html, maxLength = 200) => {
    const text = html.replace(/<[^>]+>/g, '');
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading && !room) return <SkeletonPage />;

  return (
    <>
      <style>
        {`
          .ProseMirror {
            outline: none;
            min-height: 300px;
            background-color: #000000;
            color: #ffffff;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #ffffff;
          }
          .ProseMirror p {
            margin: 0.5rem 0;
          }
          .ProseMirror a {
            color: #a855f7;
            text-decoration: underline;
            cursor: pointer;
          }
          .ProseMirror a:hover {
            color: #c084fc;
          }
          .ProseMirror h1, .ProseMirror h2, .ProseMirror h3 {
            color: #ffffff;
            font-family: 'Cinzel', serif;
          }
          .ProseMirror ul, .ProseMirror ol {
            padding-left: 1.5rem;
          }
          .ProseMirror strong {
            font-weight: bold;
          }
          .ProseMirror em {
            font-style: italic;
          }
        `}
      </style>
      <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
        <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mt-4 text-center">
            <h1 className="cinzel text-page-title landing-title">
              {room?.name}
            </h1>
            <h2 className="cinzel text-section-title mt-4">
              Diarios
            </h2>
          </div>
          {error && <p className="text-red-500 mt-2 text-center montserrat text-body">{error}</p>}
          <main className="w-full mx-auto mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          {/* Create/Import Section */}
          <div className="border border-white rounded-2xl p-4 md:p-6 bg-black">
            <div className="flex justify-between items-center mb-4">
              <h3 className="cinzel text-section-title text-white">Diarios</h3>
              <button
                onClick={() => {
                  setSelectedJournal(null);
                  setTempTitle('');
                  setTempCharacterId('');
                  setError(null);
                  if (editor) {
                    editor.commands.setContent('');
                  }
                  setShowModal(true);
                }}
                className="bg-white hover:bg-gray-200 text-black px-4 py-2 md:px-6 md:py-3 rounded-xl montserrat font-bold text-body transition-all border border-white"
              >
                Crear Nuevo Diario
              </button>
            </div>
            <h4 className="cinzel text-lg sm:text-xl md:text-2xl mb-4 text-white">Importar Diarios Existentes</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {availableJournals
                .filter(j => !roomJournals.some(rj => rj.journal_id === j.id))
                .map(journal => (
                  <div
                    key={journal.id}
                    className="flex justify-between items-center p-3 bg-black rounded-xl border border-white hover:border-gray-400 transition-all"
                  >
                    <span className="montserrat text-body text-white">{journal.title}</span>
                    <button
                      onClick={() => handleImportJournal(journal)}
                      className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg montserrat text-body font-semibold transition-all"
                    >
                      Importar
                    </button>
                  </div>
                ))}
              {availableJournals.filter(j => !roomJournals.some(rj => rj.journal_id === j.id)).length === 0 && (
                <p className="text-gray-400 montserrat text-body text-center py-4">No hay diarios disponibles para importar.</p>
              )}
            </div>
          </div>

          {/* Journals List */}
          <div>
            <h3 className="cinzel text-section-title mb-4 text-white">Diarios de la Sala</h3>
            {roomJournals.length === 0 ? (
              <p className="text-gray-400 montserrat text-body text-center py-8">No hay diarios en esta sala.</p>
            ) : (
              <>
                {paginatedJournals.map((journal) => {
                  const characterName = journal.character_id 
                    ? characters.find(c => c.id === journal.character_id)?.name 
                    : null;
                  
                  return (
                    <div
                      key={journal.id}
                      className="flex flex-col md:flex-row items-center justify-between cursor-pointer my-4 p-4 rounded-xl border border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300"
                    >
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
                                <h3 className="montserrat text-body px-2 py-2 font-thin">
                                  Título: {journal.title}
                                </h3>
                                {characterName && (
                                  <h3 className="montserrat text-body px-2 py-2 font-thin">
                                    Autor: {characterName}
                                  </h3>
                                )}
                              </div>
                              <div className="flex flex-col">
                                <p className="montserrat text-body font-thin px-2">
                                  Fecha: {journal.created_at 
                                    ? format(new Date(journal.created_at), 'd MMMM yyyy', { locale: es })
                                    : 'Fecha no disponible'}
                                </p>
                                <p className="montserrat text-body font-thin px-2">
                                  Resumen:
                                </p>
                                <p className="montserrat italic text-small font-thin py-2 px-2">
                                  {truncateHtml(journal.content)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-4">
                        <button
                          className="w-20 sm:w-24 md:w-28 bg-slate-800 hover:bg-slate-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-small sm:text-base transition-all duration-300"
                          onClick={() => navigate(`/library/lore-room/${roomId}/journals/${journal.id}`)}
                        >
                          Ver
                        </button>
                        <button
                          className="w-20 sm:w-24 md:w-28 bg-slate-800 hover:bg-slate-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-small sm:text-base transition-all duration-300"
                          onClick={() => handleEdit(journal)}
                        >
                          Editar
                        </button>
                        <button
                          className="w-20 sm:w-24 md:w-28 bg-red-800 hover:bg-red-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-small sm:text-base transition-all duration-300"
                          onClick={() => handleDelete(journal.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  );
                })}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={roomJournals.length}
                    onItemsPerPageChange={(newItemsPerPage) => {
                      setItemsPerPage(newItemsPerPage);
                      setPage(1);
                    }}
                  />
                )}
              </>
            )}
          </div>
        </main>

        {/* Edit Modal */}
        {showModal && editor && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-black border border-white rounded-2xl p-8 w-11/12 md:w-3/4 max-w-5xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="cinzel text-section-title text-white font-bold">
                  {selectedJournal ? 'Editar Diario' : 'Crear Nuevo Diario'}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-white hover:text-red-500 transition-colors text-3xl font-bold"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white mb-2 montserrat text-body font-semibold">Título:</label>
                  <input
                    type="text"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    className="w-full p-3 bg-black text-white border border-white rounded-xl montserrat text-body focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all"
                    disabled={loading}
                    placeholder="Título del diario..."
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 montserrat text-body font-semibold">
                    Contenido (usa [[ para enlazar):
                  </label>
                  <div className="border border-white rounded-xl overflow-hidden">
                    <EditorContent editor={editor} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 montserrat text-body font-semibold">Personaje:</label>
                  <select
                    value={tempCharacterId}
                    onChange={(e) => setTempCharacterId(e.target.value)}
                    className="w-full p-3 bg-black text-white border border-white rounded-xl montserrat text-body focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all"
                    disabled={loading}
                  >
                    <option value="">Sin Personaje</option>
                    {characters.map((char) => (
                      <option key={char.id} value={char.id}>
                        {char.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  onClick={handleCancel}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl montserrat text-body transition-all"
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl montserrat text-body transition-all"
                  disabled={loading}
                >
                  {loading ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Link Dialog */}
        <JournalLinkDialog
          isOpen={showLinkDialog}
          onClose={() => setShowLinkDialog(false)}
          onSelect={handleLinkSelect}
          wikiPages={wikiPages}
          mapPins={mapPins}
        />

          <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
            <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
              Volver
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
