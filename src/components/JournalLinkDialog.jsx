import React, { useState, useMemo, useEffect } from 'react';
import { X, Search, BookOpen, MapPin } from 'lucide-react';

const JournalLinkDialog = ({ isOpen, onClose, onSelect, wikiPages = [], mapPins = [] }) => {
  const [activeTab, setActiveTab] = useState('wiki');
  const [searchQuery, setSearchQuery] = useState('');

  // Reset search when tab changes
  useEffect(() => {
    setSearchQuery('');
  }, [activeTab]);

  const filteredWikiPages = useMemo(() => {
    if (!searchQuery.trim()) return wikiPages;
    const query = searchQuery.toLowerCase();
    return wikiPages.filter(page => 
      page.title.toLowerCase().includes(query)
    );
  }, [wikiPages, searchQuery]);

  const filteredMapPins = useMemo(() => {
    if (!searchQuery.trim()) return mapPins;
    const query = searchQuery.toLowerCase();
    return mapPins.filter(pin => 
      pin.title.toLowerCase().includes(query)
    );
  }, [mapPins, searchQuery]);

  const handleSelect = (type, item) => {
    const linkText = type === 'wiki' 
      ? `[[Wiki:${item.title}]]`
      : `[[Mapa:${item.title}]]`;
    onSelect(linkText, type, item.id, item.title);
    onClose();
    setSearchQuery('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-black border border-white rounded-2xl w-11/12 md:w-3/4 max-w-5xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white">
          <h2 className="cinzel text-3xl text-white font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Enlazar a...
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 transition-colors p-2 hover:bg-gray-900 rounded-full"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 p-4 border-b border-white">
          <button
            onClick={() => setActiveTab('wiki')}
            className={`flex-1 px-6 py-4 cinzel text-xl font-bold rounded-xl transition-all flex items-center justify-center gap-3 ${
              activeTab === 'wiki'
                ? 'bg-white text-black'
                : 'bg-black text-white border border-white hover:bg-gray-900'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Wiki
          </button>
          <button
            onClick={() => setActiveTab('mapa')}
            className={`flex-1 px-6 py-4 cinzel text-xl font-bold rounded-xl transition-all flex items-center justify-center gap-3 ${
              activeTab === 'mapa'
                ? 'bg-white text-black'
                : 'bg-black text-white border border-white hover:bg-gray-900'
            }`}
          >
            <MapPin className="w-5 h-5" />
            Mapa
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-white">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Buscar en ${activeTab === 'wiki' ? 'Wiki' : 'Mapa'}...`}
              className="w-full pl-12 pr-4 py-3 bg-black text-white border border-white rounded-xl montserrat focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all"
              autoFocus
            />
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 bg-black">
          {activeTab === 'wiki' ? (
            filteredWikiPages.length > 0 ? (
              <ul className="space-y-3">
                {filteredWikiPages.map((page) => (
                  <li
                    key={page.id}
                    onClick={() => handleSelect('wiki', page)}
                    className="p-5 bg-black border border-white hover:bg-gray-900 rounded-xl cursor-pointer transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="cinzel text-xl text-white font-bold mb-2">
                          {page.title}
                        </h3>
                        {page.content && (
                          <p className="montserrat text-sm text-gray-400 line-clamp-2">
                            {page.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 montserrat text-lg">
                  {searchQuery ? 'No se encontraron páginas' : 'No hay páginas de wiki disponibles'}
                </p>
              </div>
            )
          ) : (
            filteredMapPins.length > 0 ? (
              <ul className="space-y-3">
                {filteredMapPins.map((pin) => (
                  <li
                    key={pin.id}
                    onClick={() => handleSelect('mapa', pin)}
                    className="p-5 bg-black border border-white hover:bg-gray-900 rounded-xl cursor-pointer transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white"
                          style={{ backgroundColor: pin.color || '#000000' }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="cinzel text-xl text-white font-bold mb-2">
                          {pin.title}
                        </h3>
                        {pin.description && (
                          <p className="montserrat text-sm text-gray-400">
                            {pin.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-16">
                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 montserrat text-lg">
                  {searchQuery ? 'No se encontraron pins' : 'No hay pins de mapa disponibles'}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalLinkDialog;
