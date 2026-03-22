import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext.jsx';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await resetPassword(email);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
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
          <h1 className="cinzel text-page-title mb-6">Recuperar Contraseña</h1>

          {sent ? (
            <div className="space-y-4">
              <p className="montserrat text-sm sm:text-base text-gray-300">
                Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña.
              </p>
              <Link
                to="/login"
                className="text-gray-400 text-small hover:text-gray-200 hover:underline transition-all duration-300 montserrat mt-8 p-2 inline-block"
              >
                Volver al inicio de sesión
              </Link>
            </div>
          ) : (
            <>
              {error && (
                <p className="text-red-600 text-small mb-4 montserrat animate-pulse">
                  {error}
                </p>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
                  className="w-full p-2 md:p-3 mb-4 bg-slate-800 text-white rounded montserrat text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                  required
                  aria-label="Correo electrónico"
                />
                <div className="flex justify-center items-center mx-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-fit px-4 py-2 md:px-6 md:py-3 bg-emerald-700 text-white rounded-2xl hover:bg-emerald-600 montserrat transition-all duration-300 text-sm sm:text-base"
                  >
                    Enviar enlace de recuperación
                  </button>
                </div>
              </form>
              <Link
                to="/login"
                className="text-gray-400 text-small hover:text-gray-200 hover:underline transition-all duration-300 montserrat mt-8 p-2 inline-block"
              >
                Volver al inicio de sesión
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
