import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';

const EditCharacter = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!user) {
        setError('Debes estar conectado para editar un personaje.');
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from('characters')
          .select('*')
          .eq('id', id)
          .eq('user_id', user.id)
          .single();
        if (error) throw error;
        if (!data) throw new Error('Personaje no encontrado');
        setCharacter(data);
      } catch (err) {
        setError('No se pudo cargar el personaje: ' + err.message);
        console.error('Error fetching character:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id, user]);

  if (loading) return <p className="text-white montserrat text-center">Cargando...</p>;
  if (error) return <p className="text-red-600 montserrat text-center">{error}</p>;
  if (!character) return <p className="text-white montserrat text-center">Personaje no encontrado</p>;

  return <Navigate to={`/characters/${id}`} state={{ character }} replace />;
};

export default EditCharacter;