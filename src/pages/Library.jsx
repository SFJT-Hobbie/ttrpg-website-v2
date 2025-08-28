import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid'; // Import uuid v4

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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip relative">
      <div className="top-0 mx-auto mt-4 text-center z-10">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">Biblioteca de Mundos</h1>
      </div>

      {showOptions && (
        <main className="m-auto montserrat z-10 w-2/3">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => { setShowJoinForm(true); setShowCreateForm(false); }}
              className="w-fit mx-auto bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer"
            >
              Unirse a una Lore Room
            </button>
            <button
              onClick={() => { setShowCreateForm(true); setShowJoinForm(false); }}
              className="w-fit mx-auto bg-emerald-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer"
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
                  className="rounded-2xl border w-full h-20 bg-black/90 px-4 text-center focus:outline-none"
                  type="text"
                  value={loreRoomId}
                  onChange={handleChangeId}
                  placeholder="Introduce el Lore Room ID"
                />
                <input
                  className="rounded-2xl border w-full h-20 bg-black/90 px-4 text-center focus:outline-none"
                  type="text"
                  value={username}
                  onChange={handleChangeUsername}
                  placeholder="Tu nombre de usuario"
                />
                <button
                  type="submit"
                  className="w-fit mx-auto bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer"
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
                  className="rounded-2xl border w-full h-20 bg-black/90 px-4 text-center focus:outline-none"
                  type="text"
                  value={roomName}
                  onChange={handleChangeName}
                  placeholder="Nombre de la Lore Room"
                />
                <input
                  className="rounded-2xl border w-full h-20 bg-black/90 px-4 text-center focus:outline-none"
                  type="text"
                  value={username}
                  onChange={handleChangeUsername}
                  placeholder="Tu nombre de usuario"
                />
                <input
                  className="w-full h-12 mt-2"
                  type="color"
                  value={color}
                  onChange={handleChangeColor}
                />
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer"
                >
                  Crear
                </button>
              </form>
            </div>
          )}

          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </main>
      )}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-0 mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="cinzel text-xl opacity-25">Haz Click</p>
          <img
            onClick={() => setShowOptions(true)}
            src="/assets/image/dragon-entrance.png"
            className="object-cover opacity-25 transition ease-in-out duration-500 hover:opacity-40 cursor-pointer"
            alt="A stylized dragon guarding a library entrance"
          />
          <p className="cinzel text-xl opacity-25">En la Puerta</p>
        </div>
        <div
          onClick={() => navigate('/landing')}
          className="bottom-0 w-fit my-8 mx-auto left-0 right-0 z-10 cursor-pointer"
        >
          <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}