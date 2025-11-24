import React, { useState, useEffect } from 'react';
import SkeletonPage from '../components/SkeletonLoader';
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

  if (!room) return <SkeletonPage />;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-x-clip overflow-y-auto">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            {room.name}
          </h1>
        </div>
        <main className="w-full mx-auto rounded-2xl mt-6 md:mt-8 space-y-6 md:space-y-8 border border-white p-4 md:p-6 lg:p-8">
          {/* User profile */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleUpdateProfile(); }}
          className="flex flex-col md:flex-row justify-center items-center text-center w-fit mx-auto border-dashed border border-white rounded-2xl p-4 md:p-6"
        >
          <div className="flex flex-col w-auto md:w-150 mx-4 md:mx-0">
            <p className="text-center text-small text-gray-500 my-2 montserrat">
              Define tu nombre y color para la sala colaborativa
            </p>
            <input
              className="rounded-2xl border border-white w-full md:w-1/2 mx-auto my-2 py-2 bg-black/90 text-center text-small sm:text-base cinzel focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
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
            className="bg-slate-800 hover:bg-slate-600 text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-2xl cursor-pointer cinzel w-fit h-fit mx-auto md:m-4 my-2 text-body transition-all duration-300"
          >
            Guardar
          </button>
        </form>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

          {/* Navigation */}
          <div className="w-full flex flex-col sm:flex-row justify-center md:justify-evenly items-center p-4 md:p-6 gap-4 md:gap-8 cinzel">
            <div
              onClick={() => navigate(`/library/lore-room/${roomId}/wiki`)}
              className="flex items-center justify-center w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 cursor-pointer rounded-2xl border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Wiki</h2>
            </div>
            <div
              onClick={() => navigate(`/library/lore-room/${roomId}/map`)}
              className="flex items-center justify-center w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 cursor-pointer rounded-2xl border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Mapa</h2>
            </div>
            <div
              onClick={() => navigate(`/library/lore-room/${roomId}/characters`)}
              className="flex items-center justify-center w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 cursor-pointer rounded-2xl border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Personajes</h2>
            </div>
            <div
              onClick={() => navigate(`/library/lore-room/${roomId}/journals`)}
              className="flex items-center justify-center w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 cursor-pointer rounded-2xl border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-gray-700 transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Diarios</h2>
            </div>
          </div>

          {/* Members list */}
          <div className="mt-6 md:mt-8">
            <h3 className="cinzel text-section-title mb-2">Miembros</h3>
            <ul className="space-y-2">
              {members.map((m) => (
                <li key={m.user_id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-white rounded-2xl p-2 md:p-4 gap-2">
                  <span className="flex items-center space-x-2">
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: m.color }} />
                    <span className="montserrat text-body">
                      {m.username || 'Sin nombre'} ({m.role})
                    </span>
                  </span>
                  {userData.role === 'owner' && m.user_id !== user.id && (
                    <button
                      onClick={() => handleRemoveMember(m.user_id)}
                      className="bg-red-800 hover:bg-red-600 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-2xl text-small sm:text-base montserrat transition-all duration-300"
                    >
                      Eliminar
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </main>

        <div className="w-full sm:w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/multiversal-eye.png" alt="" />
        </div>

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