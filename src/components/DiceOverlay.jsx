import { useContext, useEffect, useState } from 'react';
import { DiceBoxContext } from '../DiceBoxContext';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Dice overlay component that shows rolling dice and results
 * Fixed position overlay in bottom-right corner
 */
const DiceOverlay = () => {
  const { isRolling, lastRoll, disableThreeJS } = useContext(DiceBoxContext);
  const [showResult, setShowResult] = useState(false);

  // Show result when roll completes
  useEffect(() => {
    if (lastRoll && !isRolling) {
      setShowResult(true);
      const timer = setTimeout(() => {
        setShowResult(false);
      }, 3000); // Show result for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [lastRoll, isRolling]);

  if (disableThreeJS) return null;

  return (
    <AnimatePresence>
      {(isRolling || showResult) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 pointer-events-none"
        >
          <div className="bg-black bg-opacity-80 border border-white rounded-lg p-4 min-w-[200px]">
            {isRolling && (
              <div className="text-center">
                <p className="cinzel text-white text-lg mb-2">Lanzando dados...</p>
                <div className="animate-spin text-yellow-500 text-2xl">⚄</div>
              </div>
            )}
            {showResult && lastRoll && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="cinzel text-yellow-500 text-2xl md:text-3xl mb-2">
                  {lastRoll.total}
                </p>
                {lastRoll.results.length > 1 && (
                  <p className="montserrat text-white text-sm">
                    {lastRoll.results.map((r, i) => (
                      <span key={i}>
                        {r.value}
                        {i < lastRoll.results.length - 1 ? ' + ' : ''}
                      </span>
                    ))}
                  </p>
                )}
                <button
                  onClick={() => {
                    setShowResult(false);
                  }}
                  className="mt-2 px-3 py-1 bg-slate-700 text-white rounded text-xs montserrat hover:bg-slate-600 pointer-events-auto"
                >
                  Cerrar
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiceOverlay;
