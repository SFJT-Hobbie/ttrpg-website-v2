import React, { Suspense, useEffect, useContext, useRef } from 'react'; // Import useRef
import { Canvas } from '@react-three/fiber';
import Particles from '../components/Particles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { DiceBoxContext } from '../DiceBoxContext';

export default function Title() {
  const navigate = useNavigate();
  const { disableThreeJS } = useContext(DiceBoxContext);
  const audioRef = useRef(null); // Create a ref for the audio element

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

    // --- AUTOPLAY LOGIC ---
    const playAudio = async () => {
      // We check if audioRef.current exists
      if (audioRef.current) {
        try {
          // Try to play the audio
          await audioRef.current.play();
          console.log('Audio autoplayed successfully!');
        } catch (error) {
          // Autoplay was blocked.
          console.error('Audio autoplay was prevented:', error);
          // Set up a one-time event listener to play on the first user interaction
          const playOnFirstInteraction = () => {
             if (audioRef.current) {
                audioRef.current.play();
             }
          };
          window.addEventListener('click', playOnFirstInteraction, { once: true });
          window.addEventListener('keydown', playOnFirstInteraction, { once: true });
        }
      }
    };

    playAudio();
    // --- END AUTOPLAY LOGIC ---

    return () => {
      lenis.destroy();
      // Cleanup the event listeners if the component unmounts before interaction
      // The { once: true } option often handles this, but explicit removal is safer.
      // window.removeEventListener('click', playOnFirstInteraction);
      // window.removeEventListener('keydown', playOnFirstInteraction);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleClick = () => {
    // We can ensure the audio is playing here as well, just in case.
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
    navigate('/login');
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center overflow-clip relative bg-black"
    >
      {/* Canvas and other elements... */}
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
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div onClick={handleClick} className="flex flex-col space-y-6 md:space-y-8 text-center cursor-pointer">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl cinzel relative z-10 landing-title">Aristilia</h1>
        </div>
      </div>

      {/* Add the audio tag back, but without 'autoplay'. 
        We control it from useEffect. 'loop' is useful for background music.
      */}
      <audio ref={audioRef} src="/assets/audio/Narcissistic-Tendencies.mp3" loop />
    </motion.section>
  );
}