import { useContext, useEffect, useState } from 'react';
import { DiceBoxContext } from '../DiceBoxContext';
import { DICE_RESULT_DISPLAY_MS } from '../constants/dice.js';
import { motion as M, AnimatePresence } from 'framer-motion';

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
      }, DICE_RESULT_DISPLAY_MS);
      return () => clearTimeout(timer);
    }
  }, [lastRoll, isRolling]);

  if (disableThreeJS) return null;

  return (
    <AnimatePresence>
      {(isRolling || showResult) && (
        <M.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.9 }}
          transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          className="fixed bottom-20 right-4 z-50 pointer-events-none md:bottom-[5.5rem] md:right-6"
        >
          <div className="min-w-[180px] rounded-2xl border border-white/15 bg-zinc-950/92 p-4 shadow-2xl backdrop-blur-xl">
            {isRolling && (
              <div className="text-center">
                <p className="cinzel text-amber-200/90 text-base mb-2">Lanzando dados...</p>
                <div className="animate-spin text-amber-400 text-2xl">⚄</div>
              </div>
            )}
            {showResult && lastRoll && (
              <M.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="cinzel text-amber-300 text-2xl md:text-3xl mb-1">
                  {lastRoll.total}
                </p>
                {lastRoll.results.length > 1 && (
                  <p className="montserrat text-zinc-400 text-xs">
                    {lastRoll.results.map((r, i) => (
                      <span key={i}>
                        {r.value}
                        {i < lastRoll.results.length - 1 ? ' + ' : ''}
                      </span>
                    ))}
                  </p>
                )}
                <button
                  onClick={() => setShowResult(false)}
                  className="mt-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition-colors hover:bg-white/10 pointer-events-auto montserrat"
                >
                  Cerrar
                </button>
              </M.div>
            )}
          </div>
        </M.div>
      )}
    </AnimatePresence>
  );
};

export default DiceOverlay;
