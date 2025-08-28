import { useState } from 'react';
import { DiceBoxContext } from './DiceBoxContext';

export const DiceBoxProvider = ({ children }) => {
  const [diceColor, setDiceColor] = useState(
    localStorage.getItem('diceColor') || '#fb2c36'
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedDie, setSelectedDie] = useState(null);
  const [disableThreeJS, setDisableThreeJS] = useState(false);

  return (
    <DiceBoxContext.Provider value={{ diceColor, setDiceColor, showModal, setShowModal, selectedDie, setSelectedDie, disableThreeJS, setDisableThreeJS }}>
      <div id="app-content" className="relative min-h-screen top-0 left-0 w-full">
        {children}
      </div>
    </DiceBoxContext.Provider>
  );
};