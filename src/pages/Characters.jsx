import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { supabase } from '../supabaseClient';
import { Skull, Trash2, User } from 'lucide-react';

const Characters = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [characters, setCharacters] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [modalCharacter, setModalCharacter] = useState(null);
  const [error, setError] = useState(null);

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

  const openModal = (action, character) => {
    setModalAction(action);
    setModalCharacter(character);
    setModalOpen(true);
    setError(null);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalAction(null);
    setModalCharacter(null);
    setError(null);
  };

  const confirmAction = async () => {
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
  };

  const handleClickBack = () => {
    navigate('/landing');
  };

  const aliveCharacters = characters.filter(char => char.data?.status !== 'deceased');
  const deceasedCharacters = characters.filter(char => char.data?.status === 'deceased');

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white bg-black overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">Personajes</h1>
      </div>
      <div className="mt-8 flex space-x-4">
        <Link
          to="/characters/new/pc"
          className="montserrat text-xl bg-emerald-800 hover:bg-emerald-600 p-2 rounded-2xl border-1 border-white cursor-pointer"
          aria-label="Crear personaje jugable"
        >
          Crear PC
        </Link>
        <Link
          to="/characters/new/npc"
          className="montserrat text-xl bg-emerald-800 hover:bg-emerald-600 p-2 rounded-2xl border-1 border-white cursor-pointer"
          aria-label="Crear personaje no jugable"
        >
          Crear NPC
        </Link>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center montserrat animate-pulse">
            {error}
          </p>
        )}
        <h2 className="cinzel text-2xl md:text-4xl">Vivos</h2>
        {aliveCharacters.length === 0 ? (
          <p className="text-white text-center montserrat text-lg">
            No hay almas vivas en el reino.
          </p>
        ) : (
          aliveCharacters.map(char => (
            <CharacterCard key={char.id} char={char} openModal={openModal} />
          ))
        )}
        <h2 className="cinzel text-2xl md:text-4xl">Fallecidos</h2>
        {deceasedCharacters.length === 0 ? (
          <p className="text-white text-center montserrat text-lg">
            Ningún alma ha perecido aún.
          </p>
        ) : (
          deceasedCharacters.map(char => (
            <CharacterCard key={char.id} char={char} openModal={openModal} />
          ))
        )}
      </main>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
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
            <h2 className="cinzel text-2xl mb-4">
              {modalAction === 'delete' ? 'Eliminar Personaje' : modalAction === 'toggleStatus' && modalCharacter.data?.status === 'deceased' ? 'Revivir Personaje' : 'Marcar como Fallecido'}
            </h2>
            {error && (
              <p className="text-red-600 text-sm mb-4 montserrat animate-pulse">{error}</p>
            )}
            <p className="text-white montserrat mb-6">
              {modalAction === 'delete'
                ? `¿Estás seguro de que deseas eliminar a ${modalCharacter.name}?`
                : modalCharacter.data?.status === 'deceased'
                ? `¿Estás seguro de que deseas revivir a ${modalCharacter.name}?`
                : `¿Estás seguro de que deseas marcar a ${modalCharacter.name} como fallecido?`}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmAction}
                className="p-2 bg-red-800 text-white rounded montserrat hover:bg-red-600 transition-all duration-300"
                aria-label="Confirmar acción"
              >
                Confirmar
              </button>
              <button
                onClick={closeModal}
                className="p-2 bg-slate-600 text-white rounded montserrat hover:bg-slate-500 transition-all duration-300"
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

const CharacterCard = ({ char, openModal }) => {
  const status = char.data?.status || 'alive';

  return (
    <div className="flex flex-col md:flex-row items-center justify-between cursor-pointer my-4 p-4 rounded-xl border-transparent border-1 hover:border-white hover:shadow-lg hover:shadow-gray-700">
      <ul className="mb-4">
        <li>
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <div className="w-25 h-25 md:w-45 md:h-45 border-white border-1 flex items-center justify-center rounded-full overflow-clip">
                {char.data?.picture ? (
                  <img
                    className="object-cover w-full h-full"
                    src={char.data.picture}
                    alt={char.name}
                  />
                ) : (
                  <User className="w-25 h-25 md:w-45 md:h-45 text-white" />
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row text-yellow-500">
                <h3 className="cinzel text-xl md:border-r-1 px-2 py-2 font-thin">
                  {char.name}
                </h3>
                <p className="cinzel text-xl md:border-r-1 px-2 py-2 font-thin capitalize">
                  {char.data?.ageStage || ''} {char.data?.race || 'Desconocida'}
                </p>
                <p className="cinzel text-xl px-2 py-2 font-thin">
                  {char.data?.alignment || 'Desconocido'}
                </p>
              </div>
              {char.type === 'PC' && (
                <>
                  <div className="hidden md:flex md:flex-row">
                    <p className="montserrat text-md border-r-1 px-2 font-thin">
                      STR: {char.data?.abilityScores.strength || 'N/A'}
                    </p>
                    <p className="montserrat text-md border-r-1 px-2 font-thin">
                      DEX: {char.data?.abilityScores.dexterity || 'N/A'}
                    </p>
                    <p className="montserrat text-md border-r-1 px-2 font-thin">
                      CON: {char.data?.abilityScores.constitution || 'N/A'}
                    </p>
                    <p className="montserrat text-md border-r-1 px-2 font-thin">
                      INT: {char.data?.abilityScores.intelligence || 'N/A'}
                    </p>
                    <p className="montserrat text-md border-r-1 px-2 font-thin">
                      WIS: {char.data?.abilityScores.wisdom || 'N/A'}
                    </p>
                    <p className="montserrat text-md px-2 font-thin">
                      CHA: {char.data?.abilityScores.charisma || 'N/A'}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <p className="montserrat text-md md:border-r-1 px-2 font-thin">
                      Clase: {char.data?.class || 'Desconocida'}
                    </p>
                    <p className="montserrat text-md md:border-r-1 px-2 font-thin">
                      Nivel: {char.data?.level || 'N/A'}
                    </p>
                    <p className="montserrat text-md px-2 font-thin">
                      Exp: {char.data?.xp || 'N/A'}
                    </p>
                  </div>
                </>
              )}
              {status === 'deceased' && (
                <div className="flex flex-col">
                  <p className="montserrat text-md font-thin px-2">
                    Epitafio:
                  </p>
                  <p className="montserrat italic text-xs font-thin py-2 px-2">
                    {char.data?.deathDescription || 'Descansa en paz.'}
                  </p>
                  <p className="montserrat text-md font-thin px-2">
                    Lugar de Descanso:
                  </p>
                  <p className="montserrat italic text-xs font-thin py-2 px-2">
                    {char.data?.restingSite || 'Desconocido.'}
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
          className="w-25 bg-slate-800 hover:bg-slate-600 p-2 rounded-2xl border-1 border-white cursor-pointer montserrat text-center"
          aria-label={`Ver ${char.name}`}
        >
          Ver
        </Link>
        <button
          className={`w-25 p-2 rounded-2xl border-1 border-white cursor-pointer montserrat ${
            status === 'deceased' ? 'bg-purple-800 hover:bg-purple-600' : 'bg-purple-800 hover:bg-purple-600'
          }`}
          onClick={() => openModal('toggleStatus', char)}
          aria-label={status === 'deceased' ? `Revivir ${char.name}` : `Matar ${char.name}`}
        >
          {status === 'deceased' ? 'Revivir' : 'Matar'}
        </button>
        <button
          className={`w-25 p-2 rounded-2xl border-1 border-white cursor-pointer montserrat ${
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
};

export default Characters;