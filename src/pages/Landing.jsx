import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { useAuth } from '../AuthContext.jsx';
import Icon from '@mdi/react';
import { 
  mdiViewDashboardOutline,
  mdiDiceD20Outline,
  mdiDiceD12Outline,
  mdiDiceD10Outline,
  mdiDiceD8Outline,
  mdiDiceD6Outline,
  mdiDiceD4Outline,
  mdiPalette 
} from '@mdi/js';
import DragonSkull from '../components/Dragon-Skull';

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const dragonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
      duration: 3.5
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Landing = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

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

  const handleClickTools = () => {
    navigate('/tools');
  };

  const handleClickRules = () => {
    navigate('/rules');
  };

  const handleClickCharacters = () => {
    navigate('/characters');
  };

  const handleClickJournals = () => {
    navigate('/journals');
  };

  const handleClickBiblioteca = () => {
    navigate('/library');
  };

  const handleClickOut = async () => {
    const { error } = await signOut();
    if (error) {
      console.error('Logout error:', error.message);
    } else {
      navigate('/login', { replace: true });
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex flex-col items-center justify-center text-white bg-black"
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div variants={itemVariants} className="mt-4 text-center mb-32">
          <h1 className="cinzel text-page-title landing-title">Aristilia</h1>
        </motion.div>
        <motion.div variants={itemVariants} className="my-auto flex flex-col md:flex-row justify-end items-center">
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end space-y-6 md:space-y-8 pr-0 md:pr-4">
            <motion.div variants={itemVariants}>
              <ul className="text-lg sm:text-xl md:text-2xl text-center md:text-right space-y-6 md:space-y-8 garamond tracking-widest">
              <motion.li variants={itemVariants} onClick={handleClickRules} className="hover:text-hover:shadow-gray-700 hover:text-shadow-md hover:underline hover:underline-offset-8 cursor-pointer">
                <a href="/rules">Reglas</a>
              </motion.li>
              <motion.li variants={itemVariants} onClick={handleClickCharacters} className="hover:text-hover:shadow-gray-700 hover:text-shadow-md hover:underline hover:underline-offset-8 cursor-pointer">
                <a href="/characters">Personajes</a>
              </motion.li>
              <motion.li variants={itemVariants} onClick={handleClickJournals} className="hover:text-hover:shadow-gray-700 hover:text-shadow-md hover:underline hover:underline-offset-8 cursor-pointer">
                <a href="/journals">Diarios</a>
              </motion.li>
              <motion.li variants={itemVariants} onClick={handleClickBiblioteca} className="hover:text-hover:shadow-gray-700 hover:text-shadow-md hover:underline hover:underline-offset-8 cursor-pointer">
                <a href="/library">Biblioteca de Mundos</a>
              </motion.li>
              <motion.li variants={itemVariants} onClick={handleClickOut} className="text-red-700 hover:text-shadow-red-900 hover:text-shadow-md hover:underline hover:underline-offset-8 cursor-pointer">
                Salir
              </motion.li>
            </ul>
          </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="hidden border border-white rounded-4xl mt-8 p-4">
          <ul className="gap-4 grid grid-cols-4">
            <motion.li variants={itemVariants} onClick={handleClickTools} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <a href="/tools"><Icon path={mdiViewDashboardOutline} size={1.25} /></a>
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiDiceD20Outline} size={1.25} />
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiDiceD12Outline} size={1.25} />
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiDiceD10Outline} size={1.25} />
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiDiceD8Outline} size={1.25} />
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiDiceD6Outline} size={1.25} />
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiDiceD4Outline} size={1.25} />
            </motion.li>
            <motion.li variants={itemVariants} className="rounded-full m-1 p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer">
              <Icon path={mdiPalette} size={1.25} />
            </motion.li>
          </ul>
        </motion.div>
        <motion.div variants={dragonVariants}>
          <DragonSkull className="absolute top-0 bottom-0 left-0 right-0 ml-auto mr-auto mt-auto mb-auto w-100 h-100 z-[-1] opacity-10" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Landing;