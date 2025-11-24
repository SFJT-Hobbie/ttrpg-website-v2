import { useContext, useEffect, useRef, useState } from 'react';
import { DiceBoxContext } from '../DiceBoxContext';
import { Icon } from '@mdi/react';
import { 
  mdiDiceD4,
  mdiDiceD6,
  mdiDiceD8,
  mdiDiceD10,
  mdiDiceD12,
  mdiDiceD20,
} from '@mdi/js';

const DiceModal = () => {
  const { showModal, setShowModal, selectedDie } = useContext(DiceBoxContext);
  const [rolled, setRolled] = useState(false);
  const [rollResult, setRollResult] = useState(null);
  const modalRef = useRef(null);

  // Map die types to MDI icons
  const dieIcons = {
    d4: mdiDiceD4,
    d6: mdiDiceD6,
    d8: mdiDiceD8,
    d10: mdiDiceD10,
    d12: mdiDiceD12,
    d20: mdiDiceD20,
  };

  useEffect(() => {
    if (!showModal || !selectedDie) return;

    // Simulate dice roll
    const rollDice = () => {
      const dieSize = parseInt(selectedDie.replace('d', ''), 10);
      const result = Math.floor(Math.random() * dieSize) + 1;
      console.log(`Simulated roll for 1${selectedDie}: ${result}`);
      setRollResult(result);
      setRolled(true);
    };

    const timer = setTimeout(() => {
      rollDice();
    }, 500); // Simulate animation delay

    return () => {
      clearTimeout(timer);
      setRolled(false);
      setRollResult(null);
    };
  }, [showModal, selectedDie]);

  const handleRollAgain = () => {
    setRolled(false);
    setRollResult(null);
    const dieSize = parseInt(selectedDie.replace('d', ''), 10);
    const result = Math.floor(Math.random() * dieSize) + 1;
    console.log(`Simulated roll again for 1${selectedDie}: ${result}`);
    setTimeout(() => {
      setRollResult(result);
      setRolled(true);
    }, 1000);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setShowModal(false);
  };

  const handleBackdropClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      console.log('Backdrop clicked, closing modal');
      handleClose();
    }
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="p-4 rounded-lg border-1 w-1/2 h-1/3 max-w-4xl max-h-4xl relative flex flex-col"
      >
        <div className="w-full h-[90%] relative bg-black flex items-center justify-center">
          {rolled && rollResult ? (
            <div className="text-white text-4xl cinzel">{rollResult}</div>
          ) : (
            <div className="flex items-center justify-center text-white">
              <Icon
                path={dieIcons[selectedDie] || mdiDiceD20} // Fallback to d20 if undefined
                size={1.5}
                className="animate-spin"
              />
              <span className="mx-2 text-lg md:text-2xl cinzel">Lanzando {selectedDie}</span>
              <Icon
                path={dieIcons[selectedDie] || mdiDiceD20} // Fallback to d20 if undefined
                size={1.5}
                className="animate-spin"
              />
            </div>
          )}
        </div>
        {rolled && (
          <div className="flex flex-col items-center space-y-4 mt-4">
            <div className="flex justify-center space-x-4">
              <button onClick={handleRollAgain} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Lanzar Nuevamente
              </button>
              <button onClick={handleClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiceModal;