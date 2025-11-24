import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@mdi/react';
import {
  mdiViewDashboardOutline,
  mdiDiceD20Outline,
  mdiDiceD12Outline,
  mdiDiceD10Outline,
  mdiDiceD8Outline,
  mdiDiceD6Outline,
  mdiDiceD4Outline,
  mdiPalette,
} from '@mdi/js';
import { DiceBoxContext } from '../DiceBoxContext';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const DiceControls = () => {
  const { setSelectedDie, disableThreeJS } = useContext(DiceBoxContext);
  const navigate = useNavigate();

  const handleRollDice = useCallback((die) => {
    console.log('DiceControls: handleRollDice called with die:', die);
    setSelectedDie(die);
    // If 3D dice is disabled, fall back to modal
    if (disableThreeJS) {
      console.log('3D dice disabled, will use modal fallback');
      // Modal will be handled by DiceModal component
    }
  }, [setSelectedDie, disableThreeJS]);

  const handleClearDice = useCallback(() => {
    console.log('Clear functionality (adapt for color selection if needed)');
  }, []);

  const handleClickTools = useCallback(() => {
    navigate('/tools');
  }, [navigate]);

  return (
    <motion.div
      variants={itemVariants}
      className="hidden md:flex rounded-full mx-4 fixed h-screen items-center my-auto"
      initial="hidden"
      animate="visible"
    >
      <ul className="space-y-6">
        <motion.li variants={itemVariants} onClick={handleClickTools} className="hidden rounded-full p-1 hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="/tools">
            <Icon path={mdiViewDashboardOutline} size={1.2} />
          </a>
        </motion.li>
        <motion.li variants={itemVariants} onClick={() => handleRollDice('d20')} className="rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiDiceD20Outline} size={1.2} />
        </motion.li>
        <motion.li variants={itemVariants} onClick={() => handleRollDice('d12')} className="rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiDiceD12Outline} size={1.2} />
        </motion.li>
        <motion.li variants={itemVariants} onClick={() => handleRollDice('d10')} className="rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiDiceD10Outline} size={1.2} />
        </motion.li>
        <motion.li variants={itemVariants} onClick={() => handleRollDice('d8')} className="rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiDiceD8Outline} size={1.2} />
        </motion.li>
        <motion.li variants={itemVariants} onClick={() => handleRollDice('d6')} className="rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiDiceD6Outline} size={1.2} />
        </motion.li>
        <motion.li variants={itemVariants} onClick={() => handleRollDice('d4')} className="rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiDiceD4Outline} size={1.2} />
        </motion.li>
        <motion.li variants={itemVariants} onClick={handleClearDice} className="hidden rounded-full p-1 border-1 border-transparent hover:border-white hover:shadow-gray-700 hover:shadow-md cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon path={mdiPalette} size={1.2} />
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default DiceControls;