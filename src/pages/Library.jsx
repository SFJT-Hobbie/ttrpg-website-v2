import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function Library() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loreRoomId, setLoreRoomId] = useState('');
  const [roomName, setRoomName] = useState('');
  const [username, setUsername] = useState('');
  const [color, setColor] = useState('#ff0000');
  const [showOptions, setShowOptions] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [error, setError] = useState(null);
  const [userRooms, setUserRooms] = useState([]);
  const [loadingRooms, setLoadingRooms] = useState(false);

  // Fetch existing user profile on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;

      try {
        const { data: profile, error: profileError } = await supabase
          .from('user_profiles')
          .select('username, color')
          .eq('user_id', user.id)
          .single();
        if (profileError && profileError.code !== 'PGRST116') throw profileError; // Ignore if no row found
        if (profile) {
          setUsername(profile.username || '');
          setColor(profile.color || '#ff0000');
        }
      } catch (err) {
        console.error('Fetch profile error:', err);
        setError('Error al cargar perfil existente. Usando valores predeterminados.');
      }
    };

    fetchUserProfile();
  }, [user]);

  // Fetch user's rooms when options are shown
  const fetchUserRooms = async () => {
    if (!user) return;
    setLoadingRooms(true);
    try {
      // Fetch all rooms and filter client-side for user membership
      const { data: allRooms, error: roomsError } = await supabase
        .from('rooms')
        .select('id, name, owner_id, members')
        .order('name', { ascending: true });
      if (roomsError) throw roomsError;
      
      // Filter rooms where user is owner or member
      const userRoomsList = (allRooms || []).filter(
        (room) => room.owner_id === user.id || (room.members && room.members.includes(user.id))
      );
      setUserRooms(userRoomsList);
    } catch (err) {
      console.error('Fetch user rooms error:', err);
      setError('Error al cargar tus Lore Rooms.');
    } finally {
      setLoadingRooms(false);
    }
  };

  useEffect(() => {
    if (showOptions && user) {
      fetchUserRooms();
    }
  }, [showOptions, user]);

  const handleChangeId = (e) => setLoreRoomId(e.target.value);
  const handleChangeName = (e) => setRoomName(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangeColor = (e) => setColor(e.target.value);

  // Save user profile (username and color)
  const saveUserProfile = async () => {
    if (!username) {
      throw new Error('Proporcione un nombre de usuario.');
    }
    const { error: profileError } = await supabase
      .from('user_profiles')
      .upsert({ user_id: user.id, username, color }, { onConflict: 'user_id' });
    if (profileError) throw profileError;
  };

  // Create a new room
  const handleCreateSubmit = async () => {
    if (!roomName || !username) {
      setError('Proporcione nombre de room y username.');
      return;
    }

    try {
      // 1️⃣ Save username and color to user_profiles
      await saveUserProfile();

      // 2️⃣ Generate UUID for room id
      const roomId = uuidv4();

      // 3️⃣ Insert room with generated id, owner_id, and creator as initial member
      const { data: newRoom, error: roomError } = await supabase
        .from('rooms')
        .insert({ id: roomId, name: roomName, owner_id: user.id, members: [user.id] })
        .select('id')
        .single();
      if (roomError) throw roomError;

      navigate(`/library/lore-room/${newRoom.id}`);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // Navigate to a room
  const handleRoomClick = (roomId) => {
    navigate(`/library/lore-room/${roomId}`);
  };

  // Join room
  const handleJoinSubmit = async () => {
    if (!loreRoomId || !username) {
      setError('Ingrese un Lore Room ID válido y un username.');
      return;
    }

    try {
      // 1️⃣ Save username and color to user_profiles
      await saveUserProfile();

      // 2️⃣ Check if room exists
      const { data: room, error: roomError } = await supabase
        .from('rooms')
        .select('id, members')
        .eq('id', loreRoomId)
        .single();
      if (roomError) throw roomError;

      // 3️⃣ Check if user is already a member
      const isMember = room.members.includes(user.id);
      if (!isMember) {
        // Append user to members array
        const { error: updateError } = await supabase
          .from('rooms')
          .update({ members: [...room.members, user.id] })
          .eq('id', loreRoomId);
        if (updateError) throw updateError;
      }

      navigate(`/library/lore-room/${loreRoomId}`);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip relative">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">Biblioteca de Mundos</h1>
        </div>

        {showOptions && (
          <main className="m-auto montserrat relative z-20 w-full md:w-2/3">
            {/* User's existing rooms */}
            <div className="mb-8">
              <h2 className="cinzel text-section-title mb-4 text-center">Tus Lore Rooms</h2>
              {loadingRooms ? (
                <p className="text-center text-gray-500">Cargando...</p>
              ) : userRooms.length > 0 ? (
                <div className="flex flex-col space-y-3">
                  {userRooms.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => handleRoomClick(room.id)}
                      className="w-full mx-auto bg-slate-900 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-700 hover:border-slate-500 flex justify-between items-center"
                    >
                      <span className="cinzel text-body">{room.name}</span>
                      <span className="text-xs text-gray-400 montserrat">
                        {room.owner_id === user.id ? 'Propietario' : 'Miembro'}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 text-small">No tienes Lore Rooms aún</p>
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => { setShowJoinForm(true); setShowCreateForm(false); }}
                className="w-full sm:w-fit mx-auto bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-2xl cursor-pointer transition-all duration-300 text-sm sm:text-base"
              >
                Unirse a una Lore Room
              </button>
              <button
                onClick={() => { setShowCreateForm(true); setShowJoinForm(false); }}
                className="w-full sm:w-fit mx-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-2xl cursor-pointer transition-all duration-300 text-sm sm:text-base"
              >
                Crear una Lore Room
              </button>
            </div>

            {showJoinForm && (
              <div className="mt-4">
                <form
                  onSubmit={(e) => { e.preventDefault(); handleJoinSubmit(); }}
                  className="flex flex-col justify-center text-center space-y-4 w-full md:w-1/3 mx-auto"
                >
                  <input
                    className="rounded-2xl border w-full h-16 sm:h-20 bg-black/90 px-4 text-center focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 text-sm sm:text-base"
                    type="text"
                    value={loreRoomId}
                    onChange={handleChangeId}
                    placeholder="Introduce el Lore Room ID"
                  />
                  <input
                    className="rounded-2xl border w-full h-16 sm:h-20 bg-black/90 px-4 text-center focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 text-sm sm:text-base"
                    type="text"
                    value={username}
                    onChange={handleChangeUsername}
                    placeholder="Tu nombre de usuario"
                  />
                  <input
                    className="mx-auto w-12 h-12 sm:w-15 sm:h-12 mt-2"
                    type="color"
                    value={color}
                    onChange={handleChangeColor}
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-fit mx-auto bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-2xl cursor-pointer transition-all duration-300 text-sm sm:text-base"
                  >
                    Continuar
                  </button>
                </form>
              </div>
            )}

            {showCreateForm && (
              <div className="mt-4">
                <form
                  onSubmit={(e) => { e.preventDefault(); handleCreateSubmit(); }}
                  className="flex flex-col justify-center text-center space-y-4 w-full md:w-1/3 mx-auto"
                >
                  <input
                    className="rounded-2xl border w-full h-16 sm:h-20 bg-black/90 px-4 text-center focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 text-sm sm:text-base"
                    type="text"
                    value={roomName}
                    onChange={handleChangeName}
                    placeholder="Nombre de la Lore Room"
                  />
                  <input
                    className="rounded-2xl border w-full h-16 sm:h-20 bg-black/90 px-4 text-center focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 text-sm sm:text-base"
                    type="text"
                    value={username}
                    onChange={handleChangeUsername}
                    placeholder="Tu nombre de usuario"
                  />
                  <input
                    className="w-full sm:w-auto mx-auto h-12 mt-2"
                    type="color"
                    value={color}
                    onChange={handleChangeColor}
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-fit mx-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-2xl cursor-pointer transition-all duration-300 text-sm sm:text-base"
                  >
                    Crear
                  </button>
                </form>
              </div>
            )}

            {error && <p className="text-red-500 mt-2 text-center text-small">{error}</p>}
          </main>
        )}

        {!showOptions && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-0 mt-20 pointer-events-none">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="cinzel text-lg sm:text-xl opacity-25">Haz Click</p>
              <img
                onClick={() => setShowOptions(true)}
                src="/assets/image/dragon-entrance.png"
                className="object-cover opacity-25 transition ease-in-out duration-500 hover:opacity-40 cursor-pointer pointer-events-auto"
                alt="A stylized dragon guarding a library entrance"
              />
              <p className="cinzel text-lg sm:text-xl opacity-25">En la Puerta</p>
            </div>
          </div>
        )}
        <div
          onClick={() => navigate('/landing')}
          className="mt-8 mb-4 text-center cursor-pointer"
        >
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}