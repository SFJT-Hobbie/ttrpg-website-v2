import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { supabase } from '../supabaseClient';
import { Skull, Trash2, User } from 'lucide-react';
import { getAvatarUrl } from '../utils/imageUtils';
import Pagination from '../components/Pagination';

const Characters = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [characters, setCharacters] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [modalCharacter, setModalCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [alivePage, setAlivePage] = useState(1);
  const [deceasedPage, setDeceasedPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    if (user) {
      const fetchCharacters = async () => {
        try {
          const { data, error } = await supabase
            .from('characters')
            .select('*')
            .eq('user_id', user.id);
          if (error) throw error;
          setCharacters(data || []);
        } catch (err) {
          setError('No se pudo cargar los personajes: ' + err.message);
          console.error('Error fetching characters:', err);
        }
      };
      fetchCharacters();
    }
  }, [user]);

  const openModal = useCallback((action, character) => {
    setModalAction(action);
    setModalCharacter(character);
    setModalOpen(true);
    setError(null);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalAction(null);
    setModalCharacter(null);
    setError(null);
  }, []);

  const confirmAction = useCallback(async () => {
    try {
      if (modalAction === 'delete') {
        const { error } = await supabase
          .from('characters')
          .delete()
          .eq('id', modalCharacter.id);
        if (error) throw error;
        setCharacters(characters.filter(c => c.id !== modalCharacter.id));
      } else if (modalAction === 'toggleStatus') {
        const updatedData = {
          ...modalCharacter.data,
          status: modalCharacter.data?.status === 'deceased' ? 'alive' : 'deceased',
          deathDate: modalCharacter.data?.status === 'deceased' ? null : new Date().toISOString().split('T')[0],
        };
        const { error } = await supabase
          .from('characters')
          .update({ data: updatedData })
          .eq('id', modalCharacter.id);
        if (error) throw error;
        setCharacters(
          characters.map(c =>
            c.id === modalCharacter.id ? { ...c, data: updatedData } : c
          )
        );
      }
      closeModal();
    } catch (err) {
      setError('No se pudo completar la acción: ' + err.message);
      console.error('Error:', err);
    }
  }, [modalAction, modalCharacter, characters, closeModal]);

  const handleClickBack = useCallback(() => {
    navigate('/landing');
  }, [navigate]);

  const aliveCharacters = useMemo(() => 
    characters.filter(char => char.data?.status !== 'deceased'),
    [characters]
  );
  const deceasedCharacters = useMemo(() => 
    characters.filter(char => char.data?.status === 'deceased'),
    [characters]
  );

  // Pagination calculations
  const aliveTotalPages = Math.ceil(aliveCharacters.length / itemsPerPage);
  const deceasedTotalPages = Math.ceil(deceasedCharacters.length / itemsPerPage);
  
  const aliveStartIndex = (alivePage - 1) * itemsPerPage;
  const aliveEndIndex = aliveStartIndex + itemsPerPage;
  const paginatedAliveCharacters = aliveCharacters.slice(aliveStartIndex, aliveEndIndex);
  
  const deceasedStartIndex = (deceasedPage - 1) * itemsPerPage;
  const deceasedEndIndex = deceasedStartIndex + itemsPerPage;
  const paginatedDeceasedCharacters = deceasedCharacters.slice(deceasedStartIndex, deceasedEndIndex);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">Personajes</h1>
        </div>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/characters/new/pc"
            className="montserrat text-sm sm:text-base md:text-lg bg-emerald-700 hover:bg-emerald-600 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white cursor-pointer text-center transition-all duration-300"
            aria-label="Crear personaje jugable"
          >
            Crear PC
          </Link>
          <Link
            to="/characters/new/npc"
            className="montserrat text-sm sm:text-base md:text-lg bg-emerald-700 hover:bg-emerald-600 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white cursor-pointer text-center transition-all duration-300"
            aria-label="Crear personaje no jugable"
          >
            Crear NPC
          </Link>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          {error && (
            <p className="text-red-600 text-small mb-4 text-center montserrat animate-pulse">
              {error}
            </p>
          )}
          <div>
            <h2 className="cinzel text-section-title">Vivos</h2>
            {aliveCharacters.length === 0 ? (
              <p className="text-white text-center montserrat text-body">
                No hay almas vivas en el reino.
              </p>
            ) : (
            <>
              {paginatedAliveCharacters.map(char => (
                <CharacterCard key={char.id} char={char} openModal={openModal} />
              ))}
              <Pagination
                currentPage={alivePage}
                totalPages={aliveTotalPages}
                onPageChange={setAlivePage}
                itemsPerPage={itemsPerPage}
                totalItems={aliveCharacters.length}
                onItemsPerPageChange={(newItemsPerPage) => {
                  setItemsPerPage(newItemsPerPage);
                  setAlivePage(1);
                }}
              />
            </>
          )}
          </div>
          <div>
            <h2 className="cinzel text-section-title">Fallecidos</h2>
            {deceasedCharacters.length === 0 ? (
              <p className="text-white text-center montserrat text-body">
                Ningún alma ha perecido aún.
              </p>
            ) : (
            <>
              {paginatedDeceasedCharacters.map(char => (
                <CharacterCard key={char.id} char={char} openModal={openModal} />
              ))}
              <Pagination
                currentPage={deceasedPage}
                totalPages={deceasedTotalPages}
                onPageChange={setDeceasedPage}
                itemsPerPage={itemsPerPage}
                totalItems={deceasedCharacters.length}
                onItemsPerPageChange={(newItemsPerPage) => {
                  setItemsPerPage(newItemsPerPage);
                  setDeceasedPage(1);
                }}
              />
            </>
            )}
          </div>
        </main>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-slate-800 p-4 md:p-6 rounded-lg border border-white max-w-sm w-full text-center"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="cinzel text-section-title mb-4">
              {modalAction === 'delete' ? 'Eliminar Personaje' : modalAction === 'toggleStatus' && modalCharacter.data?.status === 'deceased' ? 'Revivir Personaje' : 'Marcar como Fallecido'}
            </h2>
            {error && (
              <p className="text-red-600 text-small mb-4 montserrat animate-pulse">{error}</p>
            )}
            <p className="text-white montserrat text-body mb-6">
              {modalAction === 'delete'
                ? `¿Estás seguro de que deseas eliminar a ${modalCharacter.name}?`
                : modalCharacter.data?.status === 'deceased'
                ? `¿Estás seguro de que deseas revivir a ${modalCharacter.name}?`
                : `¿Estás seguro de que deseas marcar a ${modalCharacter.name} como fallecido?`}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={confirmAction}
                className="px-4 py-2 md:px-6 md:py-3 bg-red-800 text-white rounded-2xl montserrat hover:bg-red-600 transition-all duration-300 text-sm sm:text-base"
                aria-label="Confirmar acción"
              >
                Confirmar
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 md:px-6 md:py-3 bg-slate-600 text-white rounded-2xl montserrat hover:bg-slate-500 transition-all duration-300 text-sm sm:text-base"
                aria-label="Cancelar acción"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CharacterCard = React.memo(({ char, openModal }) => {
  const status = char.data?.status || 'alive';

  return (
    <div className="flex flex-col md:flex-row items-center justify-between cursor-pointer my-4 p-4 rounded-xl border border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
      <ul className="mb-4">
        <li>
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 border border-white flex items-center justify-center rounded-full overflow-clip">
                {char.data?.picture ? (
                  <img
                    className="object-cover w-full h-full"
                    src={getAvatarUrl(char.data.picture, 180)}
                    alt={char.name}
                    loading="lazy"
                  />
                ) : (
                  <User className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 text-white" />
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="flex flex-col md:flex-row text-yellow-500">
                <h3 className="cinzel text-lg sm:text-xl md:border-r md:border-yellow-500 px-2 py-2 font-thin">
                  {char.name}
                </h3>
                <p className="cinzel text-lg sm:text-xl md:border-r md:border-yellow-500 px-2 py-2 font-thin capitalize">
                  {char.data?.ageStage || ''} {char.data?.race || 'Desconocida'}
                </p>
                <p className="cinzel text-lg sm:text-xl px-2 py-2 font-thin">
                  {char.data?.alignment || 'Desconocido'}
                </p>
              </div>
              {char.type === 'PC' && (
                <>
                  <div className="hidden md:flex md:flex-row flex-wrap">
                    <p className="montserrat text-small md:text-base border-r border-white px-2 font-thin">
                      STR: {char.data?.abilityScores.strength || 'N/A'}
                    </p>
                    <p className="montserrat text-small md:text-base border-r border-white px-2 font-thin">
                      DEX: {char.data?.abilityScores.dexterity || 'N/A'}
                    </p>
                    <p className="montserrat text-small md:text-base border-r border-white px-2 font-thin">
                      CON: {char.data?.abilityScores.constitution || 'N/A'}
                    </p>
                    <p className="montserrat text-small md:text-base border-r border-white px-2 font-thin">
                      INT: {char.data?.abilityScores.intelligence || 'N/A'}
                    </p>
                    <p className="montserrat text-small md:text-base border-r border-white px-2 font-thin">
                      WIS: {char.data?.abilityScores.wisdom || 'N/A'}
                    </p>
                    <p className="montserrat text-small md:text-base px-2 font-thin">
                      CHA: {char.data?.abilityScores.charisma || 'N/A'}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row flex-wrap">
                    <p className="montserrat text-small md:text-base md:border-r md:border-white px-2 font-thin">
                      Clase: {char.data?.class || 'Desconocida'}
                    </p>
                    <p className="montserrat text-small md:text-base md:border-r md:border-white px-2 font-thin">
                      Nivel: {char.data?.level || 'N/A'}
                    </p>
                    <p className="montserrat text-small md:text-base px-2 font-thin">
                      Exp: {char.data?.xp || 'N/A'}
                    </p>
                  </div>
                </>
              )}
              {status === 'deceased' && (
                <div className="flex flex-col">
                  <p className="montserrat text-small md:text-base font-thin px-2">
                    Epitafio:
                  </p>
                  <p className="montserrat italic text-small font-thin py-2 px-2">
                    {char.data?.deathDescription || 'Descansa en paz.'}
                  </p>
                  <p className="montserrat text-small md:text-base font-thin px-2">
                    Lugar de Descanso:
                  </p>
                  <p className="montserrat italic text-small font-thin py-2 px-2">
                    {char.data?.restingSite || 'Desconocido.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
      <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-4">
        <Link
          to={`/characters/edit/${char.id}`}
          className="w-20 sm:w-24 md:w-28 bg-slate-800 hover:bg-slate-600 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-center text-xs sm:text-sm transition-all duration-300"
          aria-label={`Ver ${char.name}`}
        >
          Ver
        </Link>
        <button
          className={`w-20 sm:w-24 md:w-28 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-xs sm:text-sm transition-all duration-300 ${
            status === 'deceased' ? 'bg-purple-800 hover:bg-purple-600' : 'bg-purple-800 hover:bg-purple-600'
          }`}
          onClick={() => openModal('toggleStatus', char)}
          aria-label={status === 'deceased' ? `Revivir ${char.name}` : `Matar ${char.name}`}
        >
          {status === 'deceased' ? 'Revivir' : 'Matar'}
        </button>
        <button
          className={`w-20 sm:w-24 md:w-28 px-2 py-2 rounded-2xl border border-white cursor-pointer montserrat text-xs sm:text-sm transition-all duration-300 ${
            status === 'deceased' ? 'bg-red-800 hover:bg-red-600' : 'hidden'
          }`}
          onClick={() => openModal('delete', char)}
          aria-label={`Eliminar ${char.name}`}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for better memoization
  return (
    prevProps.char.id === nextProps.char.id &&
    prevProps.char.name === nextProps.char.name &&
    prevProps.char.data?.status === nextProps.char.data?.status &&
    prevProps.char.data?.picture === nextProps.char.data?.picture
  );
});

CharacterCard.displayName = 'CharacterCard';

export default Characters;