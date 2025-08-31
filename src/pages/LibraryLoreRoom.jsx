import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';

export default function LibraryLoreRoom() {
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const { user } = useAuth();

  const [room, setRoom] = useState(null);
  const [userData, setUserData] = useState({ username: '', color: '#FF0000', role: 'member' });
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch room info and members
  useEffect(() => {
    const fetchRoom = async () => {
      if (!user || !roomId) return;

      try {
        // Fetch room details
        const { data: roomData, error: roomError } = await supabase
          .from('rooms')
          .select('id, name, owner_id, members')
          .eq('id', roomId)
          .single();
        if (roomError) throw roomError;
        setRoom(roomData);

        // Fetch user profiles for all members
        const { data: profiles, error: profilesError } = await supabase
          .from('user_profiles')
          .select('user_id, username, color')
          .in('user_id', roomData.members);
        if (profilesError) throw profilesError;

        // Construct members list with inferred roles
        const membersList = roomData.members.map((memberId) => {
          const profile = profiles.find((p) => p.user_id === memberId) || {
            username: 'Sin nombre',
            color: '#FF0000',
          };
          return {
            user_id: memberId,
            username: profile.username,
            color: profile.color,
            role: memberId === roomData.owner_id ? 'owner' : 'member',
          };
        });
        setMembers(membersList);

        // Set current user's data
        const currentUserProfile = profiles.find((p) => p.user_id === user.id) || {
          username: '',
          color: '#FF0000',
        };
        setUserData({
          username: currentUserProfile.username,
          color: currentUserProfile.color,
          role: user.id === roomData.owner_id ? 'owner' : 'member',
        });
      } catch (err) {
        console.error('Fetch room error:', err);
        setError('Error al cargar la sala.');
        // Fallback to red if fetch fails
        setUserData((prev) => ({ ...prev, color: '#FF0000' }));
        setMembers((prev) =>
          prev.map((m) => ({ ...m, color: '#FF0000' }))
        );
      }
    };

    fetchRoom();
  }, [user, roomId]);

  // Update username/color for current user
  const handleUpdateProfile = async () => {
    setError(null);
    if (!userData.username) {
      setError('Proporcione un nombre de usuario.');
      return;
    }

    try {
      // Update user_profiles
      const { error: updateError } = await supabase
        .from('user_profiles')
        .upsert({ user_id: user.id, username: userData.username, color: userData.color }, { onConflict: 'user_id' });
      if (updateError) throw updateError;

      // Update local members state
      setMembers(members.map((m) =>
        m.user_id === user.id ? { ...m, username: userData.username, color: userData.color } : m
      ));
    } catch (err) {
      console.error('Update profile error:', err);
      setError('Error al actualizar tus datos.');
    }
  };

  // Owner can remove a member
  const handleRemoveMember = async (userIdToRemove) => {
    if (userData.role !== 'owner') return;

    try {
      // Fetch current members array
      const { data: roomData, error: fetchError } = await supabase
        .from('rooms')
        .select('members')
        .eq('id', roomId)
        .single();
      if (fetchError) throw fetchError;

      // Update members array to exclude the removed user
      const updatedMembers = roomData.members.filter((id) => id !== userIdToRemove);
      const { error: updateError } = await supabase
        .from('rooms')
        .update({ members: updatedMembers })
        .eq('id', roomId);
      if (updateError) throw updateError;

      // Update local state
      setMembers(members.filter((m) => m.user_id !== userIdToRemove));
    } catch (err) {
      console.error('Remove member error:', err);
      setError('Error al eliminar miembro.');
    }
  };

  if (!room) return <p className="text-white text-center mt-10">Cargando sala...</p>;

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-x-clip overflow-y-auto">
      <h1 className="cinzel text-5xl md:text-7xl mt-4 text-center">
        {room.name}
      </h1>
      <h2 className="cinzel text-5xl md:text-7xl mt-4 text-center">
        Table
      </h2>

      <main className="w-10/12 mx-auto rounded-2xl my-8 space-y-8 border border-white p-4">
        {/* User profile */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleUpdateProfile(); }}
          className="flex flex-col md:flex-row justify-center items-center text-center w-fit mx-auto border-dashed border rounded-2xl p-4"
        >
          <div className="flex flex-col w-auto md:w-150 mx-4 md:mx-0">
            <p className="text-center text-xs text-gray-500 my-2">
              Define tu nombre y color para la sala colaborativa
            </p>
            <input
              className="rounded-2xl border w-full md:w-1/2 mx-auto my-2 py-2 bg-black/90 text-center text-lg md:text-xl cinzel focus:outline-none"
              type="text"
              value={userData.username}
              onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              placeholder="Personaje"
            />
            <input
              className="w-10 h-10 mx-auto my-2 focus:outline-none"
              type="color"
              value={userData.color}
              onChange={(e) => setUserData({ ...userData, color: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-500 text-white font-bold p-2 rounded-2xl cursor-pointer cinzel w-fit h-fit mx-auto md:m-4 my-2 text-sm"
          >
            Guardar
          </button>
        </form>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

        {/* Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly items-center p-6 space-x-0 md:space-x-8 text-2xl md:text-5xl cinzel">
          <div
            onClick={() => navigate(`/library/lore-room/${roomId}/wiki`)}
            className="flex items-center justify-center w-50 h-50 cursor-pointer rounded-2xl border-2 border-transparent hover:shadow-white hover:shadow-sm"
          >
            <h2>Wiki</h2>
          </div>
          <div
            onClick={() => navigate(`/library/lore-room/${roomId}/map`)}
            className="flex items-center justify-center w-50 h-50 cursor-pointer rounded-2xl border-2 border-transparent hover:shadow-white hover:shadow-sm"
          >
            <h2>Mapa</h2>
          </div>
        </div>

        {/* Members list */}
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl cinzel mb-2">Miembros</h3>
          <ul className="space-y-2">
            {members.map((m) => (
              <li key={m.user_id} className="flex justify-between items-center border rounded-2xl p-2">
                <span className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: m.color }} />
                  <span>
                    {m.username || 'Sin nombre'} ({m.role})
                  </span>
                </span>
                {userData.role === 'owner' && m.user_id !== user.id && (
                  <button
                    onClick={() => handleRemoveMember(m.user_id)}
                    className="bg-red-700 hover:bg-red-500 text-white font-bold py-1 px-2 rounded-2xl text-sm"
                  >
                    Eliminar
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <div className="w-1/2 md:w-1/5 mt-4">
        <img className="rounded-2xl opacity-75" src="/assets/image/multiversal-eye.png" alt="" />
      </div>

      <div
        onClick={() => navigate('/landing')}
        className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer"
      >
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}