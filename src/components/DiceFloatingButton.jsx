import { useContext, useState } from 'react';
import { motion as M, AnimatePresence } from 'framer-motion';
import { Icon } from '@mdi/react';
import {
  mdiDiceD20Outline,
  mdiDiceD20,
  mdiDiceD12Outline,
  mdiDiceD10Outline,
  mdiDiceD8Outline,
  mdiDiceD6Outline,
  mdiDiceD4Outline,
  mdiClose,
} from '@mdi/js';
import { DiceBoxContext } from '../DiceBoxContext';

const diceTypes = [
  { id: 'd20', icon: mdiDiceD20Outline, label: 'D20' },
  { id: 'd12', icon: mdiDiceD12Outline, label: 'D12' },
  { id: 'd10', icon: mdiDiceD10Outline, label: 'D10' },
  { id: 'd8', icon: mdiDiceD8Outline, label: 'D8' },
  { id: 'd6', icon: mdiDiceD6Outline, label: 'D6' },
  { id: 'd4', icon: mdiDiceD4Outline, label: 'D4' },
];

const DiceFloatingButton = () => {
  const { rollDice, disableThreeJS } = useContext(DiceBoxContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleRoll = (dieType) => {
    rollDice(`1${dieType}`);
    setIsOpen(false);
  };

  if (disableThreeJS) return null;

  return (
    <>
      {/* Dice FAB — bottom-right, consistent across all breakpoints */}
      <M.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(true)}
        className="fab-base fixed bottom-4 right-4 z-50 flex h-13 w-13 items-center justify-center md:bottom-6 md:right-6 md:h-14 md:w-14"
        aria-label="Roll Dice"
      >
        <Icon path={mdiDiceD20} size={1.4} className="text-amber-200" />
      </M.button>

      {/* Dice picker popover */}
      <AnimatePresence>
        {isOpen && (
          <>
            <M.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            <M.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 12 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              className="fixed bottom-20 right-4 left-4 z-50 max-w-[17rem] ml-auto rounded-2xl border border-white/15 bg-zinc-950/92 p-4 shadow-2xl backdrop-blur-xl md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:p-5"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 text-zinc-400 transition-colors hover:text-white"
                aria-label="Close"
              >
                <Icon path={mdiClose} size={0.85} />
              </button>

              <h3 className="cinzel mb-4 text-center text-base tracking-wide text-amber-200/90">Select Die</h3>

              <div className="grid grid-cols-3 gap-2.5">
                {diceTypes.map((die) => (
                  <M.button
                    key={die.id}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => handleRoll(die.id)}
                    className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-amber-400/40 hover:bg-white/10"
                  >
                    <Icon path={die.icon} size={1.6} className="mb-1 text-zinc-200" />
                    <span className="montserrat text-[11px] tracking-wide text-zinc-400">{die.label}</span>
                  </M.button>
                ))}
              </div>
            </M.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DiceFloatingButton;

