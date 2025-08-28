import React, { Suspense, useEffect, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import Particles from '../components/Particles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { DiceBoxContext } from '../DiceBoxContext';
import FloatingAudioPlayer from '../components/FloatingAudioPlayer';

export default function Title() {
  const navigate = useNavigate();
  const { disableThreeJS } = useContext(DiceBoxContext);

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

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen min-w-screen flex items-center justify-center overflow-clip relative"
    >
      {!disableThreeJS && (
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
          camera={{ position: [0, 0, 100], fov: 75 }}
        >
          <Suspense fallback={<h1>Loading...</h1>}>
            <Particles count={150} />
            <ambientLight intensity={0.5} />
          </Suspense>
        </Canvas>
      )}
      <div onClick={handleClick} className="flex flex-col space-y-8 text-center cursor-pointer">
        <h1 className="text-6xl md:text-9xl cinzel relative z-10 landing-title">Aristilia</h1>
      </div>
      <FloatingAudioPlayer />
    </motion.section>
  );
}