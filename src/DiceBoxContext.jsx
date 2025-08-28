import { createContext } from 'react';

export const DiceBoxContext = createContext({
  diceColor: '',
  setDiceColor: () => {},
  showModal: false,
  setShowModal: () => {},
  selectedDie: null,
  setSelectedDie: () => {},
  disableThreeJS: false,
  setDisableThreeJS: () => {},
});