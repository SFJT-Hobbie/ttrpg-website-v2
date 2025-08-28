import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { useAuth } from '../AuthContext.jsx';

const Register = () => {
  const navigate = useNavigate();
  const { user, loading, signUp } = useAuth();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await signUp({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      setError(error.message);
      console.error('Registration error:', error.message);
    } else {
      navigate('/login', { replace: true });
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
        Creando tu leyenda...
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
        <h1 className="text-4xl cinzel mb-6">Registrarse</h1>
        {error && (
          <p className="text-red-600 text-sm mb-4 montserrat animate-pulse">
            {error}
          </p>
        )}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nombre de usuario"
            className="w-full p-2 mb-4 mr-2 ml-2 bg-gray-800 text-white rounded montserrat focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            required
            aria-label="Nombre de usuario"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full p-2 mb-4 mr-2 ml-2 bg-gray-800 text-white rounded montserrat focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            required
            aria-label="Correo electrónico"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full p-2 mb-4 mr-2 ml-2 bg-gray-800 text-white rounded montserrat focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            required
            aria-label="Contraseña"
          />
          <div className="flex justify-center items-center mx-auto">
            <button
              type="submit"
              className="p-2 bg-emerald-700 text-white rounded hover:bg-emerald-400 w-25 montserrat transition-all duration-300"
              aria-label="Registrarse"
            >
              Registrarse
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm montserrat">
          ¿Ya tienes cuenta?{' '}
          <Link
            to="/login"
            className="text-gray-400 hover:text-gray-200 hover:underline transition-all duration-300"
            aria-label="Iniciar Sesión"
          >
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;