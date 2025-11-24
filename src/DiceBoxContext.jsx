import { createContext } from 'react';

export const DiceBoxContext = createContext({
  diceColor: '',
  setDiceColor: () => {},
  disableThreeJS: false,
  setDisableThreeJS: () => {},
  diceBox: null,
  rollDice: () => {},
  isRolling: false,
  lastRoll: null,
});
