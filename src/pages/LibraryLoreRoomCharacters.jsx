import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { supabase } from '../supabaseClient';
import { User } from 'lucide-react';
import { getAvatarUrl } from '../utils/imageUtils';
import Pagination from '../components/Pagination';
import SkeletonPage from '../components/SkeletonLoader';
import { v4 as uuidv4 } from 'uuid';

const LibraryLoreRoomCharacters = () => {
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const { user } = useAuth();
  const [room, setRoom] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [roomInstances, setRoomInstances] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [modalCharacter, setModalCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [inactivePage, setInactivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch room info and all characters from room members
  useEffect(() => {
    const fetchData = async () => {
      if (!user || !roomId) return;
      setLoading(true);

      try {
        // Fetch room details
        const { data: roomData, error: roomError } = await supabase
          .from('rooms')
          .select('id, name, owner_id, members')
          .eq('id', roomId)
          .single();
        if (roomError) throw roomError;
        setRoom(roomData);

        // Check if user is a member
        const isMember = roomData.owner_id === user.id || roomData.members.includes(user.id);
        if (!isMember) {
          setError('No tienes acceso a esta sala.');
          setLoading(false);
          return;
        }

        // Fetch all characters from room members
        const { data: charactersData, error: charactersError } = await supabase
          .from('characters')
          .select('*')
          .in('user_id', [roomData.owner_id, ...roomData.members]);
        if (charactersError) throw charactersError;
        setCharacters(charactersData || []);

        // Fetch room character instances
        const { data: instancesData, error: instancesError } = await supabase
          .from('room_character_instances')
          .select('*')
          .eq('room_id', roomId);
        if (instancesError) throw instancesError;
        setRoomInstances(instancesData || []);
      } catch (err) {
        setError('No se pudo cargar los datos: ' + err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, roomId]);

  // Get active/inactive characters based on room instances
  const activeCharacters = useMemo(() => {
    const activeInstanceIds = roomInstances
      .filter(inst => inst.is_active)
      .map(inst => inst.character_id);
    return characters.filter(char => activeInstanceIds.includes(char.id));
  }, [characters, roomInstances]);

  const inactiveCharacters = useMemo(() => {
    const activeInstanceIds = roomInstances
      .filter(inst => inst.is_active)
      .map(inst => inst.character_id);
    return characters.filter(char => !activeInstanceIds.includes(char.id));
  }, [characters, roomInstances]);

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

  const toggleActiveStatus = useCallback(async (character) => {
    try {
      const existingInstance = roomInstances.find(inst => inst.character_id === character.id);
      
      if (existingInstance) {
        // Update existing instance
        const { error } = await supabase
          .from('room_character_instances')
          .update({ 
            is_active: !existingInstance.is_active,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingInstance.id);
        if (error) throw error;

        // Update local state
        setRoomInstances(roomInstances.map(inst =>
          inst.id === existingInstance.id
            ? { ...inst, is_active: !inst.is_active }
            : inst
        ));
      } else {
        // Create new instance with character snapshot (deep copy)
        const snapshot = JSON.parse(JSON.stringify(character.data || {}));
        const instanceData = {
          id: uuidv4(),
          room_id: roomId,
          character_id: character.id,
          user_id: user.id,
          is_active: true,
          instance_data: snapshot,
        };

        const { error } = await supabase
          .from('room_character_instances')
          .insert(instanceData);
        if (error) throw error;

        // Update local state
        setRoomInstances([...roomInstances, instanceData]);
      }
    } catch (err) {
      setError('No se pudo actualizar el estado: ' + err.message);
      console.error('Error toggling active status:', err);
    }
  }, [roomId, user, roomInstances]);

  const confirmAction = useCallback(async () => {
    try {
      if (modalAction === 'toggleStatus') {
        const existingInstance = roomInstances.find(inst => inst.character_id === modalCharacter.id);
        
        if (existingInstance) {
          // Update the room instance's snapshot data
          const currentInstanceData = existingInstance.instance_data || {};
          const updatedInstanceData = {
            ...currentInstanceData,
            status: currentInstanceData?.status === 'deceased' ? 'alive' : 'deceased',
            deathDate: currentInstanceData?.status === 'deceased' ? null : new Date().toISOString().split('T')[0],
          };
          
          const { error } = await supabase
            .from('room_character_instances')
            .update({ 
              instance_data: updatedInstanceData,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingInstance.id);
          if (error) throw error;

          // Update local state
          setRoomInstances(roomInstances.map(inst =>
            inst.id === existingInstance.id
              ? { ...inst, instance_data: updatedInstanceData }
              : inst
          ));
          
          // Update characters array for UI (merge instance data with character data)
          setCharacters(characters.map(c =>
            c.id === modalCharacter.id
              ? { ...c, data: { ...c.data, ...updatedInstanceData } }
              : c
          ));
        } else {
          // If no instance exists, create one with the death status
          const snapshot = JSON.parse(JSON.stringify(modalCharacter.data || {}));
          snapshot.status = 'deceased';
          snapshot.deathDate = new Date().toISOString().split('T')[0];
          
          const instanceData = {
            id: uuidv4(),
            room_id: roomId,
            character_id: modalCharacter.id,
            user_id: user.id,
            is_active: true,
            instance_data: snapshot,
          };

          const { error } = await supabase
            .from('room_character_instances')
            .insert(instanceData);
          if (error) throw error;

          setRoomInstances([...roomInstances, instanceData]);
          setCharacters(characters.map(c =>
            c.id === modalCharacter.id
              ? { ...c, data: { ...c.data, ...snapshot } }
              : c
          ));
        }
      }
      closeModal();
    } catch (err) {
      setError('No se pudo completar la acción: ' + err.message);
      console.error('Error:', err);
    }
  }, [modalAction, modalCharacter, characters, roomInstances, roomId, user, closeModal]);

  const handleClickBack = useCallback(() => {
    navigate(`/library/lore-room/${roomId}`);
  }, [navigate, roomId]);

  // Get active status for a character
  const getActiveStatus = useCallback((characterId) => {
    const instance = roomInstances.find(inst => inst.character_id === characterId);
    return instance?.is_active || false;
  }, [roomInstances]);

  // Get room instance for a character
  const getRoomInstance = useCallback((characterId) => {
    return roomInstances.find(inst => inst.character_id === characterId);
  }, [roomInstances]);

  // Pagination calculations
  const activeTotalPages = Math.ceil(activeCharacters.length / itemsPerPage);
  const inactiveTotalPages = Math.ceil(inactiveCharacters.length / itemsPerPage);
  
  const activeStartIndex = (activePage - 1) * itemsPerPage;
  const activeEndIndex = activeStartIndex + itemsPerPage;
  const paginatedActiveCharacters = activeCharacters.slice(activeStartIndex, activeEndIndex);
  
  const inactiveStartIndex = (inactivePage - 1) * itemsPerPage;
  const inactiveEndIndex = inactiveStartIndex + itemsPerPage;
  const paginatedInactiveCharacters = inactiveCharacters.slice(inactiveStartIndex, inactiveEndIndex);

  if (loading || !room) return <SkeletonPage />;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">{room.name}</h1>
          <h2 className="cinzel text-section-title mt-4">Personajes</h2>
        </div>
        <main className="flex flex-col border border-white rounded-xl w-full mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
        {error && (
          <p className="text-red-600 text-body mb-4 text-center montserrat animate-pulse">
            {error}
          </p>
        )}
        <div>
          <h2 className="cinzel text-section-title">Activos</h2>
          {activeCharacters.length === 0 ? (
            <p className="text-white text-center montserrat text-body">
              No hay personajes activos en esta sala.
            </p>
          ) : (
            <>
              {paginatedActiveCharacters.map(char => (
                <CharacterCard 
                  key={char.id} 
                  char={char} 
                  openModal={openModal}
                  isActive={getActiveStatus(char.id)}
                  onToggleActive={() => toggleActiveStatus(char)}
                  roomId={roomId}
                  roomInstance={getRoomInstance(char.id)}
                />
              ))}
              <Pagination
                currentPage={activePage}
                totalPages={activeTotalPages}
                onPageChange={setActivePage}
                itemsPerPage={itemsPerPage}
                totalItems={activeCharacters.length}
                onItemsPerPageChange={(newItemsPerPage) => {
                  setItemsPerPage(newItemsPerPage);
                  setActivePage(1);
                }}
              />
            </>
          )}
        </div>
        <div>
          <h2 className="cinzel text-section-title">Inactivos</h2>
          {inactiveCharacters.length === 0 ? (
            <p className="text-white text-center montserrat text-body">
              No hay personajes inactivos en esta sala.
            </p>
          ) : (
            <>
              {paginatedInactiveCharacters.map(char => (
                <CharacterCard 
                  key={char.id} 
                  char={char} 
                  openModal={openModal}
                  isActive={getActiveStatus(char.id)}
                  onToggleActive={() => toggleActiveStatus(char)}
                  roomId={roomId}
                  roomInstance={getRoomInstance(char.id)}
                />
              ))}
              <Pagination
                currentPage={inactivePage}
                totalPages={inactiveTotalPages}
                onPageChange={setInactivePage}
                itemsPerPage={itemsPerPage}
                totalItems={inactiveCharacters.length}
                onItemsPerPageChange={(newItemsPerPage) => {
                  setItemsPerPage(newItemsPerPage);
                  setInactivePage(1);
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-slate-800 p-4 rounded-lg border-1 border-white max-w-sm w-full text-center"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="cinzel text-section-title mb-4">
              {modalAction === 'toggleStatus' && modalCharacter.data?.status === 'deceased' 
                ? 'Revivir Personaje' 
                : 'Marcar como Fallecido'}
            </h2>
            {error && (
              <p className="text-red-600 text-body mb-4 montserrat animate-pulse">{error}</p>
            )}
            <p className="text-white montserrat text-body mb-6">
              {modalCharacter.data?.status === 'deceased'
                ? `¿Estás seguro de que deseas revivir a ${modalCharacter.name}?`
                : `¿Estás seguro de que deseas marcar a ${modalCharacter.name} como fallecido?`}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmAction}
                className="p-2 bg-red-800 text-white rounded montserrat text-body hover:bg-red-600 transition-all duration-300"
                aria-label="Confirmar acción"
              >
                Confirmar
              </button>
              <button
                onClick={closeModal}
                className="p-2 bg-slate-600 text-white rounded montserrat text-body hover:bg-slate-500 transition-all duration-300"
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

const CharacterCard = React.memo(({ char, openModal, isActive, onToggleActive, roomId, roomInstance }) => {
  // Use instance data if available, otherwise use character data
  const displayData = roomInstance?.instance_data || char.data;
  const status = displayData?.status || 'alive';

  return (
    <div className="flex flex-col md:flex-row items-center justify-between cursor-pointer my-4 p-4 rounded-xl border-transparent border-1 hover:border-white hover:shadow-lg hover:shadow-gray-700">
      <ul className="mb-4">
        <li>
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <div className="w-25 h-25 md:w-45 md:h-45 border-white border-1 flex items-center justify-center rounded-full overflow-clip">
                {displayData?.picture ? (
                  <img
                    className="object-cover w-full h-full"
                    src={getAvatarUrl(displayData.picture, 180)}
                    alt={char.name}
                    loading="lazy"
                  />
                ) : (
                  <User className="w-25 h-25 md:w-45 md:h-45 text-white" />
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row text-yellow-500">
                <h3 className="cinzel text-section-title md:border-r border-white px-2 py-2 font-thin">
                  {char.name}
                </h3>
                <p className="cinzel text-section-title md:border-r border-white px-2 py-2 font-thin capitalize">
                  {displayData?.ageStage || ''} {displayData?.race || 'Desconocida'}
                </p>
                <p className="cinzel text-section-title px-2 py-2 font-thin">
                  {displayData?.alignment || 'Desconocido'}
                </p>
              </div>
              {char.type === 'PC' && (
                <>
                  <div className="hidden md:flex md:flex-row">
                    <p className="montserrat text-body border-r border-white px-2 font-thin">
                      STR: {displayData?.abilityScores?.strength || 'N/A'}
                    </p>
                    <p className="montserrat text-body border-r border-white px-2 font-thin">
                      DEX: {displayData?.abilityScores?.dexterity || 'N/A'}
                    </p>
                    <p className="montserrat text-body border-r border-white px-2 font-thin">
                      CON: {displayData?.abilityScores?.constitution || 'N/A'}
                    </p>
                    <p className="montserrat text-body border-r border-white px-2 font-thin">
                      INT: {displayData?.abilityScores?.intelligence || 'N/A'}
                    </p>
                    <p className="montserrat text-body border-r border-white px-2 font-thin">
                      WIS: {displayData?.abilityScores?.wisdom || 'N/A'}
                    </p>
                    <p className="montserrat text-body px-2 font-thin">
                      CHA: {displayData?.abilityScores?.charisma || 'N/A'}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <p className="montserrat text-body md:border-r border-white px-2 font-thin">
                      Clase: {displayData?.class || 'Desconocida'}
                    </p>
                    <p className="montserrat text-body md:border-r border-white px-2 font-thin">
                      Nivel: {displayData?.level || 'N/A'}
                    </p>
                    <p className="montserrat text-body px-2 font-thin">
                      Exp: {displayData?.xp || 'N/A'}
                    </p>
                  </div>
                </>
              )}
              {status === 'deceased' && (
                <div className="flex flex-col">
                  <p className="montserrat text-body font-thin px-2">
                    Epitafio:
                  </p>
                  <p className="montserrat italic text-small font-thin py-2 px-2">
                    {displayData?.deathDescription || 'Descansa en paz.'}
                  </p>
                  <p className="montserrat text-body font-thin px-2">
                    Lugar de Descanso:
                  </p>
                  <p className="montserrat italic text-small font-thin py-2 px-2">
                    {displayData?.restingSite || 'Desconocido.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
      <div className="flex flex-row md:flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-4">
        <Link
          to={`/characters/edit/${char.id}`}
          state={{ fromLoreRoom: roomId }}
          className="w-25 bg-slate-800 hover:bg-slate-600 p-2 rounded-2xl border border-white cursor-pointer montserrat text-body text-center"
          aria-label={`Ver ${char.name}`}
        >
          Ver
        </Link>
        <button
          className={`w-25 p-2 rounded-2xl border border-white cursor-pointer montserrat text-body ${
            status === 'deceased' ? 'bg-purple-800 hover:bg-purple-600' : 'bg-purple-800 hover:bg-purple-600'
          }`}
          onClick={() => openModal('toggleStatus', char)}
          aria-label={status === 'deceased' ? `Revivir ${char.name}` : `Matar ${char.name}`}
        >
          {status === 'deceased' ? 'Revivir' : 'Matar'}
        </button>
        <button
          className={`w-25 p-2 rounded-2xl border border-white cursor-pointer montserrat text-body ${
            isActive ? 'bg-green-800 hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-600'
          }`}
          onClick={onToggleActive}
          aria-label={isActive ? `Desactivar ${char.name}` : `Activar ${char.name}`}
        >
          {isActive ? 'Activo' : 'Inactivo'}
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  const prevDisplayData = prevProps.roomInstance?.instance_data || prevProps.char.data;
  const nextDisplayData = nextProps.roomInstance?.instance_data || nextProps.char.data;
  return (
    prevProps.char.id === nextProps.char.id &&
    prevProps.char.name === nextProps.char.name &&
    prevDisplayData?.status === nextDisplayData?.status &&
    prevDisplayData?.picture === nextDisplayData?.picture &&
    prevProps.isActive === nextProps.isActive &&
    prevProps.roomId === nextProps.roomId &&
    prevProps.roomInstance?.id === nextProps.roomInstance?.id
  );
});

CharacterCard.displayName = 'CharacterCard';

export default LibraryLoreRoomCharacters;

