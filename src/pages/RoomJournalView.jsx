import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { supabase } from '../supabaseClient';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Edit2, ArrowLeft } from 'lucide-react';
import SkeletonPage from '../components/SkeletonLoader';

const RoomJournalView = () => {
  const navigate = useNavigate();
  const { id: roomId, journalId } = useParams();
  const { user } = useAuth();
  const [journal, setJournal] = useState(null);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !roomId || !journalId) return;

    const fetchJournal = async () => {
      try {
        setLoading(true);
        
        // Fetch room to check access
        const { data: roomData, error: roomError } = await supabase
          .from('rooms')
          .select('id, name, owner_id, members')
          .eq('id', roomId)
          .single();
        
        if (roomError) throw roomError;
        
        // Check if user is a member
        const isMember = roomData.owner_id === user.id || roomData.members.includes(user.id);
        if (!isMember) {
          setError('No tienes acceso a esta sala.');
          setLoading(false);
          return;
        }

        // Fetch room journal instance
        const { data: journalData, error: fetchError } = await supabase
          .from('room_journal_instances')
          .select('*')
          .eq('id', journalId)
          .eq('room_id', roomId)
          .single();

        if (fetchError) throw fetchError;
        if (!journalData) {
          setError('Diario no encontrado');
          return;
        }
        
        setJournal(journalData);

        // Fetch character if linked
        if (journalData.character_id) {
          const { data: charData, error: charError } = await supabase
            .from('characters')
            .select('name')
            .eq('id', journalData.character_id)
            .single();
          
          if (!charError && charData) {
            setCharacter(charData);
          }
        }
      } catch (err) {
        console.error('Error fetching journal:', err);
        setError('No se pudo cargar el diario: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJournal();
  }, [user, roomId, journalId]);

  const handleEdit = () => {
    navigate(`/library/lore-room/${roomId}/journals`, { state: { editJournalId: journalId } });
  };

  const handleBack = () => {
    navigate(`/library/lore-room/${roomId}/journals`);
  };

  if (loading) {
    return <SkeletonPage />;
  }

  if (error || !journal) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mt-4 text-center">
            <h1 className="cinzel text-page-title landing-title">Error</h1>
            <p className="montserrat text-body mt-4 text-red-600">{error || 'Diario no encontrado'}</p>
            <div onClick={handleBack} className="mt-8 mb-4 text-center cursor-pointer">
              <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
                Volver
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">Diario</h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col space-y-2">
                <h2 className="cinzel text-section-title">{journal.title}</h2>
                {character?.name && (
                  <p className="montserrat text-base md:text-lg font-thin">
                    Autor: {character.name}
                  </p>
                )}
                <div className="flex flex-col md:flex-row md:gap-4 text-small md:text-base">
                  <p className="montserrat font-thin">
                    Creado: {format(new Date(journal.created_at), 'd MMMM yyyy', { locale: es })}
                  </p>
                  {journal.updated_at && journal.updated_at !== journal.created_at && (
                    <p className="montserrat font-thin">
                      Actualizado: {format(new Date(journal.updated_at), 'd MMMM yyyy', { locale: es })}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-4">
                <button
                  onClick={handleEdit}
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-600 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white cursor-pointer montserrat text-sm sm:text-base transition-all duration-300"
                >
                  <Edit2 size={18} />
                  Editar
                </button>
                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-600 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white cursor-pointer montserrat text-sm sm:text-base transition-all duration-300"
                >
                  <ArrowLeft size={18} />
                  Volver
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div 
                className="ql-editor bg-slate-800 p-4 md:p-6 text-white rounded-xl border border-white" 
                dangerouslySetInnerHTML={{ __html: journal.content || '' }} 
              />
            </div>
          </div>
        </main>
        <div onClick={handleBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomJournalView;

