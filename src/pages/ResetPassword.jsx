import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext.jsx';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { updatePassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const { error } = await updatePassword(password);
    if (error) {
      setError(error.message);
    } else {
      navigate('/landing', { replace: true });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center text-white bg-black"
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center flex flex-col w-full max-w-md mx-auto">
          <h1 className="cinzel text-page-title mb-6">Nueva Contraseña</h1>
          {error && (
            <p className="text-red-600 text-small mb-4 montserrat animate-pulse">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nueva contraseña"
              className="w-full p-2 md:p-3 mb-4 bg-slate-800 text-white rounded montserrat text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              required
              aria-label="Nueva contraseña"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar contraseña"
              className="w-full p-2 md:p-3 mb-4 bg-slate-800 text-white rounded montserrat text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              required
              aria-label="Confirmar contraseña"
            />
            <div className="flex justify-center items-center mx-auto">
              <button
                type="submit"
                className="w-full sm:w-fit px-4 py-2 md:px-6 md:py-3 bg-emerald-700 text-white rounded-2xl hover:bg-emerald-600 montserrat transition-all duration-300 text-sm sm:text-base"
              >
                Cambiar Contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
