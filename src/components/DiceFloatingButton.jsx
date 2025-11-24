import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-50 w-14 h-14 md:w-16 md:h-16 bg-red-700 hover:bg-red-600 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Roll Dice"
      >
        <Icon path={mdiDiceD20} size={1.5} className="text-white" />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-20 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 bg-gray-900 border border-white rounded-lg p-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <Icon path={mdiClose} size={1} />
              </button>

              {/* Title */}
              <h3 className="cinzel text-white text-xl mb-4 text-center">Select Die</h3>

              {/* Dice Grid */}
              <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                {diceTypes.map((die) => (
                  <motion.button
                    key={die.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRoll(die.id)}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-transparent hover:border-white transition-all"
                  >
                    <Icon path={die.icon} size={2} className="text-white mb-2" />
                    <span className="montserrat text-white text-sm">{die.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DiceFloatingButton;

