import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { useAuth } from '../AuthContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { user, loading, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await signIn({ email, password });
    if (error) {
      setError(error.message);
      console.error('Login error:', error.message);
    } else {
      navigate('/landing', { replace: true });
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center text-white text-center cinzel text-2xl animate-pulse"
      >
        Cargando lore...
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen min-w-screen flex items-center justify-center text-white"
    >
      <div className="text-center flex flex-col w-80 md:w-100">
        <h1 className="text-4xl cinzel mb-6">Iniciar Sesión</h1>
        {error && (
          <p className="text-red-600 text-sm mb-4 montserrat animate-pulse">
            {error}
          </p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="w-full p-2 mb-4 mr-2 ml-2 bg-gray-800 text-white rounded montserrat focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            required
            aria-label="Correo electrónico"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full p-2 mb-4 mr-2 ml-2 bg-gray-800 text-white rounded montserrat focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            required
            aria-label="Contraseña"
          />
          <div className="flex justify-center items-center mx-auto">
            <button
              type="submit"
              className="w-fit p-2 bg-emerald-700 text-white rounded hover:bg-emerald-400 montserrat transition-all duration-300"
              aria-label="Iniciar Sesión"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm montserrat">
          ¿Aún no tienes cuenta?{' '}
          <Link
            to="/register"
            className="text-gray-400 hover:text-gray-200 hover:underline transition-all duration-300"
            aria-label="Registrarse"
          >
            Regístrate
          </Link>
        </p>
        <Link
          to="/"
          className="text-gray-400 text-xs hover:text-gray-200 hover:underline transition-all duration-300 montserrat mt-8 p-2"
          aria-label="Registrarse"
        >
          Vuelve al Inicio
        </Link>
      </div>
    </motion.div>
  );
};

export default Login;