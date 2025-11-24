import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import SkeletonPage from '../components/SkeletonLoader';
import { ChevronRight, ChevronDown, Search, X, Menu, Plus, Edit2, Trash2, Home } from 'lucide-react';

export default function LibraryLoreRoomWiki() {
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const { user } = useAuth();

  const [room, setRoom] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [flatPages, setFlatPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  const [tempParentId, setTempParentId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [creatingNewPage, setCreatingNewPage] = useState(false);

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
    },
  });

  // Compute hierarchical tree from flat list
  const pages = useMemo(() => {
    const pageMap = {};
    flatPages.forEach(page => { 
      page.children = []; 
      pageMap[page.id] = page; 
    });
    return flatPages.filter(page => {
      if (page.parent_id && pageMap[page.parent_id]) {
        pageMap[page.parent_id].children.push(page);
      }
      return !page.parent_id;
    });
  }, [flatPages]);

  // Filter pages based on search query
  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return pages;
    const query = searchQuery.toLowerCase();
    
    const filterTree = (pageList) => {
      return pageList.filter(page => {
        const matches = 
          page.title.toLowerCase().includes(query) ||
          (page.content && page.content.toLowerCase().includes(query));
        
        const filteredChildren = filterTree(page.children || []);
        if (filteredChildren.length > 0) {
          page.filteredChildren = filteredChildren;
          return true;
        }
        return matches;
      }).map(page => {
        if (page.filteredChildren) {
          page.children = page.filteredChildren;
        }
        return page;
      });
    };
    
    return filterTree(pages);
  }, [pages, searchQuery]);

  // Get breadcrumbs for selected page
  const breadcrumbs = useMemo(() => {
    if (!selectedPage) return [];
    const path = [];
    let current = flatPages.find(p => p.id === selectedPage.id);
    while (current) {
      path.unshift(current);
      current = current.parent_id 
        ? flatPages.find(p => p.id === current.parent_id)
        : null;
    }
    return path;
  }, [selectedPage, flatPages]);

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

  // Load editor content when modal opens
  useEffect(() => {
    if (showModal && editor) {
      if (selectedPage) {
        editor.commands.setContent(selectedPage.content || '');
        setTempTitle(selectedPage.title || '');
        setTempParentId(selectedPage.parent_id || null);
        setCreatingNewPage(false);
      } else {
        editor.commands.setContent('<p>Edit me...</p>');
        setTempTitle('');
        setTempParentId(null);
        setCreatingNewPage(true);
      }
    }
  }, [showModal, selectedPage, editor]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showModal) {
        if (e.key === 'Escape') {
          handleCancel();
        } else if (e.ctrlKey && e.key === 's') {
          e.preventDefault();
          handleSave();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, tempTitle, editor]);

  // Toggle node expansion
  const toggleNode = useCallback((pageId) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(pageId)) {
        next.delete(pageId);
      } else {
        next.add(pageId);
      }
      return next;
    });
  }, []);

  // Expand all nodes
  const expandAll = useCallback(() => {
    const allIds = new Set();
    const collectIds = (pageList) => {
      pageList.forEach(page => {
        if (page.children && page.children.length > 0) {
          allIds.add(page.id);
          collectIds(page.children);
        }
      });
    };
    collectIds(filteredPages);
    setExpandedNodes(allIds);
  }, [filteredPages]);

  // Collapse all nodes
  const collapseAll = useCallback(() => {
    setExpandedNodes(new Set());
  }, []);

  // Load content when a page is selected
  const handleSelectPage = useCallback((page) => {
    setSelectedPage(page);
    // Auto-expand parent nodes
    const expandPath = (pageId) => {
      const page = flatPages.find(p => p.id === pageId);
      if (page && page.parent_id) {
        setExpandedNodes(prev => new Set([...prev, page.parent_id]));
        expandPath(page.parent_id);
      }
    };
    expandPath(page.id);
  }, [flatPages]);

  // Open modal for editing
  const handleEdit = useCallback((page) => {
    setSelectedPage(page);
    setShowModal(true);
    setError(null);
  }, []);

  // Create new page
  const handleCreatePage = useCallback((parentId = null) => {
    if (!isOwner) {
      setError('Solo el dueño puede crear páginas.');
      return;
    }
    setSelectedPage(null);
    setTempParentId(parentId || selectedPage?.id || null);
    setShowModal(true);
    setError(null);
  }, [isOwner, selectedPage]);

  // Save changes to Supabase
  const handleSave = useCallback(async () => {
    if (!isOwner) {
      setError('Solo el dueño puede editar páginas.');
      return;
    }
    if (!tempTitle.trim() || !editor) {
      setError('Título y contenido requeridos.');
      return;
    }

    const htmlContent = editor.getHTML();
    if (!htmlContent || htmlContent === '<p></p>') {
      setError('El contenido no puede estar vacío.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      if (creatingNewPage) {
        // Create new page
        const newPage = {
          id: uuidv4(),
          room_id: roomId,
          title: tempTitle,
          content: htmlContent,
          parent_id: tempParentId || null
        };
        const { data, error: insertError } = await supabase
          .from('wiki_pages')
          .insert(newPage)
          .select('*')
          .single();
        if (insertError) throw insertError;

        setFlatPages([...flatPages, data]);
        setSelectedPage(data);
        setShowModal(false);
      } else if (selectedPage) {
        // Update existing page
        const updatedPage = {
          title: tempTitle,
          parent_id: tempParentId || null,
          content: htmlContent,
          updated_at: new Date().toISOString()
        };
        const { error: updateError } = await supabase
          .from('wiki_pages')
          .update(updatedPage)
          .eq('id', selectedPage.id);
        if (updateError) throw updateError;

        const updatedFlatPages = flatPages.map(p => 
          p.id === selectedPage.id ? { ...p, ...updatedPage } : p
        );
        setFlatPages(updatedFlatPages);
        setSelectedPage({ ...selectedPage, ...updatedPage });
        setShowModal(false);
      }
    } catch (err) {
      console.error('Error saving page:', err);
      setError('Error al guardar la página.');
    } finally {
      setLoading(false);
    }
  }, [isOwner, tempTitle, tempParentId, editor, creatingNewPage, selectedPage, roomId, flatPages]);

  // Delete page in Supabase
  const handleDelete = useCallback(async (pageId) => {
    if (!isOwner) {
      setError('Solo el dueño puede eliminar páginas.');
      return;
    }
    if (!window.confirm('¿Estás seguro de eliminar esta página y sus subpáginas?')) return;

    setLoading(true);
    try {
      // Delete all child pages recursively
      const deleteChildren = async (parentId) => {
        const children = flatPages.filter(p => p.parent_id === parentId);
        for (const child of children) {
          await deleteChildren(child.id);
          await supabase.from('wiki_pages').delete().eq('id', child.id);
        }
      };
      await deleteChildren(pageId);
      
      const { error } = await supabase
        .from('wiki_pages')
        .delete()
        .eq('id', pageId);
      if (error) throw error;

      const updatedFlatPages = flatPages.filter(p => p.id !== pageId);
      setFlatPages(updatedFlatPages);
      if (selectedPage?.id === pageId) setSelectedPage(null);
    } catch (err) {
      console.error('Error deleting page:', err);
      setError('Error al eliminar la página.');
    } finally {
      setLoading(false);
    }
  }, [isOwner, flatPages, selectedPage]);

  // Close modal without saving
  const handleCancel = useCallback(() => {
    setShowModal(false);
    setTempTitle('');
    setTempParentId(null);
    setCreatingNewPage(false);
    setError(null);
  }, []);

  // Back navigation
  const handleClickBack = useCallback(() => {
    navigate(`/library/lore-room/${roomId}`);
  }, [navigate, roomId]);

  // Recursive TreeNode component
  const TreeNode = ({ page, level = 0 }) => {
    const isExpanded = expandedNodes.has(page.id);
    const isSelected = selectedPage?.id === page.id;
    const hasChildren = page.children && page.children.length > 0;
    const indent = level * 1.5;

    return (
      <div className="select-none">
        <div
          className={`
            group flex items-center gap-2 py-2 px-2 rounded-lg cursor-pointer transition-all
            ${isSelected 
              ? 'bg-emerald-900/50 border border-emerald-700' 
              : 'hover:bg-white/5 border border-transparent'
            }
          `}
          onClick={() => handleSelectPage(page)}
          style={{ paddingLeft: `${indent}rem` }}
        >
          {hasChildren ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(page.id);
              }}
              className="flex-shrink-0 p-0.5 hover:bg-white/10 rounded transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          ) : (
            <div className="w-5" />
          )}
          <span className={`montserrat text-body flex-1 truncate ${isSelected ? 'font-semibold' : ''}`}>
            {page.title}
          </span>
          {isOwner && (
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleEdit(page)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                title="Editar"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleCreatePage(page.id)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                title="Crear subpágina"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {page.children.map(child => (
              <TreeNode key={child.id} page={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!room || loading) return <SkeletonPage />;

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
              {room.name}
            </h1>
            <h2 className="cinzel text-section-title mt-4">
              Wiki
            </h2>
          </div>
          {error && !showModal && (
            <p className="text-red-500 mt-2 text-center montserrat text-body">{error}</p>
          )}
          
          <div className="flex gap-4 mt-6 md:mt-8 relative">
            {/* Collapsible Sidebar */}
            <aside
              className={`
                transition-all duration-300 ease-in-out flex-shrink-0
                ${sidebarCollapsed 
                  ? 'w-0 overflow-hidden' 
                  : 'w-full md:w-80'
                }
              `}
            >
              <div className="border border-white rounded-2xl p-4 md:p-6 space-y-4 h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between mb-2">
                  <h2 className="cinzel text-section-title">Páginas</h2>
                  <button
                    onClick={() => setSidebarCollapsed(true)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Colapsar sidebar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar páginas..."
                    className="w-full pl-10 pr-8 py-2 bg-black border border-white rounded-lg montserrat text-body focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Search Results Count */}
                {searchQuery && (
                  <p className="montserrat text-small text-gray-400">
                    {filteredPages.length} resultado(s) encontrado(s)
                  </p>
                )}

                {/* Expand/Collapse All */}
                {filteredPages.length > 0 && (
                  <div className="flex gap-2">
                    <button
                      onClick={expandAll}
                      className="flex-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg montserrat text-small transition-colors"
                    >
                      Expandir Todo
                    </button>
                    <button
                      onClick={collapseAll}
                      className="flex-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg montserrat text-small transition-colors"
                    >
                      Colapsar Todo
                    </button>
                  </div>
                )}

                {/* Page Tree */}
                <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                  {filteredPages.length > 0 ? (
                    filteredPages.map(page => (
                      <TreeNode key={page.id} page={page} />
                    ))
                  ) : (
                    <p className="montserrat text-body text-gray-500 text-center py-4">
                      {searchQuery ? 'No se encontraron resultados' : 'No hay páginas disponibles.'}
                    </p>
                  )}
                </div>

                {/* New Page Button */}
                {isOwner && (
                  <button
                    onClick={() => handleCreatePage()}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg montserrat text-body transition-colors"
                    disabled={loading}
                  >
                    <Plus className="w-4 h-4" />
                    Nueva Página
                  </button>
                )}
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 relative">
              {/* Sidebar Toggle for Collapsed State - Desktop */}
              {sidebarCollapsed && (
                <button
                  onClick={() => setSidebarCollapsed(false)}
                  className="absolute -left-12 top-0 p-2 bg-black border border-white rounded-r-lg hover:bg-white/10 transition-all duration-300 hidden md:flex items-center justify-center shadow-lg z-10"
                  title="Mostrar navegación"
                >
                  <Menu className="w-4 h-4" />
                </button>
              )}
              
              <div className="border border-white rounded-2xl p-4 md:p-6 space-y-4">
                {/* Mobile Toggle Button */}
                {sidebarCollapsed && (
                  <button
                    onClick={() => setSidebarCollapsed(false)}
                    className="mb-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-white rounded-lg montserrat text-body transition-colors md:hidden"
                  >
                    <Menu className="w-4 h-4" />
                    Mostrar Navegación
                  </button>
                )}
                {/* Breadcrumbs */}
                {selectedPage && breadcrumbs.length > 0 && (
                  <nav className="flex items-center gap-2 montserrat text-small text-gray-400">
                    <button
                      onClick={() => setSelectedPage(null)}
                      className="hover:text-white transition-colors flex items-center gap-1"
                    >
                      <Home className="w-3.5 h-3.5" />
                      Inicio
                    </button>
                    {breadcrumbs.map((crumb, index) => (
                      <React.Fragment key={crumb.id}>
                        <span>/</span>
                        <button
                          onClick={() => handleSelectPage(crumb)}
                          className={`hover:text-white transition-colors ${
                            index === breadcrumbs.length - 1 ? 'text-white font-semibold' : ''
                          }`}
                        >
                          {crumb.title}
                        </button>
                      </React.Fragment>
                    ))}
                  </nav>
                )}

                {/* Page Content */}
                {selectedPage ? (
                  <div className="space-y-4">
                    {/* Page Header */}
                    <div className="flex items-start justify-between">
                      <h2 className="cinzel text-section-title text-yellow-500">
                        {selectedPage.title}
                      </h2>
                      {isOwner && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(selectedPage)}
                            className="p-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors"
                            title="Editar"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(selectedPage.id)}
                            className="p-2 bg-red-700 hover:bg-red-600 rounded-lg transition-colors"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Child Pages Grid */}
                    {selectedPage.children && selectedPage.children.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 border border-dashed border-white rounded-xl">
                        {selectedPage.children.map(child => (
                          <button
                            key={child.id}
                            onClick={() => handleSelectPage(child)}
                            className="p-3 border border-white rounded-lg hover:bg-white/5 hover:border-yellow-500 transition-all text-left"
                          >
                            <h3 className="cinzel text-lg text-yellow-500">{child.title}</h3>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Page Content */}
                    <div 
                      className="prose prose-invert max-w-none montserrat text-body"
                      dangerouslySetInnerHTML={{ __html: selectedPage.content }} 
                    />
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="montserrat text-body text-gray-500 mb-4">
                      {searchQuery 
                        ? 'Selecciona una página de los resultados de búsqueda'
                        : isOwner 
                          ? 'Selecciona una página o crea una nueva para comenzar.'
                          : 'Espera a que el dueño cree una página.'
                      }
                    </p>
                    {isOwner && !searchQuery && (
                      <button
                        onClick={() => handleCreatePage()}
                        className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg montserrat text-body transition-colors"
                        disabled={loading}
                      >
                        Crear Primera Página
                      </button>
                    )}
                  </div>
                )}
              </div>
            </main>
          </div>

          {/* Edit Modal */}
          {showModal && editor && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCancel}
            >
              <div 
                className="bg-black border border-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-white">
                  <h2 className="cinzel text-section-title">
                    {creatingNewPage ? 'Crear Nueva Página' : 'Editar Página'}
                  </h2>
                  <button
                    onClick={handleCancel}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {error && (
                    <p className="text-red-500 montserrat text-body bg-red-900/20 border border-red-700 rounded-lg p-3">
                      {error}
                    </p>
                  )}

                  {/* Title Input */}
                  <div>
                    <label className="block text-white mb-2 montserrat text-body font-semibold">
                      Título:
                    </label>
                    <input
                      type="text"
                      value={tempTitle}
                      onChange={(e) => setTempTitle(e.target.value)}
                      className="w-full p-3 bg-black text-white border border-white rounded-lg montserrat text-body focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Título de la página..."
                      disabled={loading}
                      autoFocus
                    />
                  </div>

                  {/* Parent Selector */}
                  <div>
                    <label className="block text-white mb-2 montserrat text-body font-semibold">
                      Página Padre (opcional):
                    </label>
                    <div className="relative">
                      <select
                        value={tempParentId || ''}
                        onChange={(e) => setTempParentId(e.target.value ? e.target.value : null)}
                        className="w-full p-3 pr-10 bg-black text-white border border-white rounded-lg montserrat text-body focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
                        disabled={loading}
                      >
                        <option value="">Ninguno (página raíz)</option>
                        {flatPages
                          .filter(p => p.id !== selectedPage?.id)
                          .map(p => (
                            <option key={p.id} value={p.id}>
                              {p.title}
                            </option>
                          ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Editor */}
                  <div>
                    <label className="block text-white mb-2 montserrat text-body font-semibold">
                      Contenido:
                    </label>
                    <div className="border border-white rounded-lg overflow-hidden">
                      <EditorContent editor={editor} />
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 p-6 border-t border-white">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg montserrat text-body transition-colors"
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg montserrat text-body transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Guardando...' : 'Guardar'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Back Button */}
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
