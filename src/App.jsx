import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import { DiceBoxProvider } from './DiceBoxProvider';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

import Title from './pages/Title.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Landing from './pages/Landing.jsx';
import Tools from './pages/Tools.jsx';
import Rules from './pages/Rules.jsx';
import Attributes from './pages/RulesAttributes.jsx';
import Races from './pages/RulesRaces.jsx';
import ElfRace from './pages/RulesRacesElf.jsx';
import DwarfRace from './pages/RulesRacesDwarf.jsx';
import HumanRace from './pages/RulesRacesHuman.jsx';
import BeastmanRace from './pages/RulesRacesBeastman.jsx';
import HalflingRace from './pages/RulesRacesHalfling.jsx';
import VerdantRace from './pages/RulesRacesVerdant.jsx';
import Classes from './pages/RulesClasses.jsx';
import WarriorClass from './pages/RulesClassesWarrior.jsx';
import MagicUserClass from './pages/RulesClassesMagicUser.jsx';
import SpecialistClass from './pages/RulesClassesSpecialist.jsx';
import MulticlassClass from './pages/RulesClassesMulticlass.jsx';
import Gear from './pages/RulesGear.jsx';
import GearArmor from './pages/RulesGearArmor.jsx';
import GearWeapons from './pages/RulesGearWeapons.jsx';
import GearCompanions from './pages/RulesGearCompanions.jsx';
import GearMagic from './pages/RulesGearMagic.jsx';
import GearMachinery from './pages/RulesGearMachinery.jsx';
import GearApparel from './pages/RulesGearApparel.jsx';
import GearSupplies from './pages/RulesGearSupplies.jsx';
import Game from './pages/RulesGame.jsx';
import GameMechanics from './pages/RulesGameMechanics.jsx';
import GameCombat from './pages/RulesGameCombat.jsx';
import GameManeuvers from './pages/RulesGameManeuvers.jsx';
import GameWeaponProficiencies from './pages/RulesGameWeaponProf.jsx';
import GameNonWeaponProficiencies from './pages/RulesGameNonWeaponProf.jsx';
import GameXPLevel from './pages/RulesGameXPLevel.jsx';
import GameLifeDeath from './pages/RulesGameLifeDeath.jsx';
import GameExploration from './pages/RulesGameExploration.jsx';
import GameDowntime from './pages/RulesGameDowntime.jsx';
import Magic from './pages/RulesMagic.jsx';
import MagicAstral from './pages/RulesMagicAstral.jsx';
import MagicAstralSpells from './pages/RulesMagicAstralSpells.jsx';
import MagicNatural from './pages/RulesMagicNatural.jsx';
import MagicNaturalSpells from './pages/RulesMagicNaturalSpells.jsx';
import MagicVoiceForm from './pages/RulesMagicVoiceForm.jsx';
import MagicVoiceFormSpells from './pages/RulesMagicVoiceFormSpells.jsx';
import MagicArchive from './pages/RulesMagicArchive.jsx';
import Journals from './pages/Journals.jsx';
import Characters from './pages/Characters.jsx';
import CharacterSheet from './pages/CharacterSheet.jsx';
import NonWeaponProficiencies from './pages/NonWeaponProficiencies.jsx';
import Library from './pages/Library.jsx';
import LibraryLoreRoom from './pages/LibraryLoreRoom.jsx';
import DiceControls from './components/DiceControls.jsx';
import DiceModal from './components/DiceModal.jsx';
import LibraryLoreRoomMap from './pages/LibraryLoreRoomMap.jsx';
import LibraryLoreRoomWiki from './pages/LibraryLoreRoomWiki.jsx';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log("ProtectedRoute updated:", { user, loading });
  }, [user, loading]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center text-white text-center cinzel text-2xl animate-pulse"
      >
        Cargando...
      </motion.div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function ComponentErrorBoundary({ error, resetErrorBoundary }) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
      <p>Error: {error.message}</p>
      <button
        className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={resetErrorBoundary}
      >
        Reintentar
      </button>
    </div>
  );
}

function AppContent() {
  return (
    <div className="overflow-clip relative min-h-screen">
      <BrowserRouter>
        <DiceControls />
        <DiceModal />
        <AnimatePresence mode="wait">
          <ErrorBoundary
            FallbackComponent={ComponentErrorBoundary}
            onReset={() => window.location.reload()}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Title />
                  </motion.div>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/landing"
                element={
                  <ProtectedRoute>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Landing />
                    </motion.div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tools"
                element={
                  <ProtectedRoute>
                    <Tools />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules"
                element={
                  <ProtectedRoute>
                    <Rules />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/attributes"
                element={
                  <ProtectedRoute>
                    <Attributes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races"
                element={
                  <ProtectedRoute>
                    <Races />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races/elf"
                element={
                  <ProtectedRoute>
                    <ElfRace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races/dwarf"
                element={
                  <ProtectedRoute>
                    <DwarfRace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races/human"
                element={
                  <ProtectedRoute>
                    <HumanRace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races/beastman"
                element={
                  <ProtectedRoute>
                    <BeastmanRace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races/halfling"
                element={
                  <ProtectedRoute>
                    <HalflingRace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/races/verdant"
                element={
                  <ProtectedRoute>
                    <VerdantRace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/classes"
                element={
                  <ProtectedRoute>
                    <Classes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/classes/warrior"
                element={
                  <ProtectedRoute>
                    <WarriorClass />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/classes/magicuser"
                element={
                  <ProtectedRoute>
                    <MagicUserClass />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/classes/specialist"
                element={
                  <ProtectedRoute>
                    <SpecialistClass />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/classes/multiclass"
                element={
                  <ProtectedRoute>
                    <MulticlassClass />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear"
                element={
                  <ProtectedRoute>
                    <Gear />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/armor"
                element={
                  <ProtectedRoute>
                    <GearArmor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/weapons"
                element={
                  <ProtectedRoute>
                    <GearWeapons />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/companions"
                element={
                  <ProtectedRoute>
                    <GearCompanions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/magic"
                element={
                  <ProtectedRoute>
                    <GearMagic />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/machinery"
                element={
                  <ProtectedRoute>
                    <GearMachinery />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/apparel"
                element={
                  <ProtectedRoute>
                    <GearApparel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/gear/supplies"
                element={
                  <ProtectedRoute>
                    <GearSupplies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game"
                element={
                  <ProtectedRoute>
                    <Game />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/mechanics"
                element={
                  <ProtectedRoute>
                    <GameMechanics />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/combat"
                element={
                  <ProtectedRoute>
                    <GameCombat />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/maneuvers"
                element={
                  <ProtectedRoute>
                    <GameManeuvers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/weapon-proficiencies"
                element={
                  <ProtectedRoute>
                    <GameWeaponProficiencies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/non-weapon-proficiencies"
                element={
                  <ProtectedRoute>
                    <GameNonWeaponProficiencies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/xp-level"
                element={
                  <ProtectedRoute>
                    <GameXPLevel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/life-death"
                element={
                  <ProtectedRoute>
                    <GameLifeDeath />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/exploration"
                element={
                  <ProtectedRoute>
                    <GameExploration />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/game/downtime"
                element={
                  <ProtectedRoute>
                    <GameDowntime />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic"
                element={
                  <ProtectedRoute>
                    <Magic />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/astral"
                element={
                  <ProtectedRoute>
                    <MagicAstral />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/astral/spells"
                element={
                  <ProtectedRoute>
                    <MagicAstralSpells />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/natural"
                element={
                  <ProtectedRoute>
                    <MagicNatural />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/natural/spells"
                element={
                  <ProtectedRoute>
                    <MagicNaturalSpells />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/voice-form"
                element={
                  <ProtectedRoute>
                    <MagicVoiceForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/voice-form/spells"
                element={
                  <ProtectedRoute>
                    <MagicVoiceFormSpells />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules/magic/archive"
                element={
                  <ProtectedRoute>
                    <MagicArchive />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/journals"
                element={
                  <ProtectedRoute>
                    <Journals />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/characters"
                element={
                  <ProtectedRoute>
                    <Characters />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/characters/new"
                element={
                  <ProtectedRoute>
                    <Navigate to="/characters/new/pc" replace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/characters/new/pc"
                element={
                  <ProtectedRoute>
                    <CharacterSheet />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/characters/new/npc"
                element={
                  <ProtectedRoute>
                    <CharacterSheet />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/characters/edit/:id"
                element={
                  <ProtectedRoute>
                    <CharacterSheet />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/characters/edit/:id/non-weapon-proficiencies"
                element={
                  <ProtectedRoute>
                    <NonWeaponProficiencies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library"
                element={
                  <ProtectedRoute>
                    <Library />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library/lore-room/:id"
                element={
                  <ProtectedRoute>
                    <LibraryLoreRoom />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library/lore-room/:id/wiki"
                element={
                  <ProtectedRoute>
                    <LibraryLoreRoomWiki />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library/lore-room/:id/map"
                element={
                  <ProtectedRoute>
                    <LibraryLoreRoomMap />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ErrorBoundary>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <DiceBoxProvider>
        <AppContent />
      </DiceBoxProvider>
    </AuthProvider>
  );
}

export default App;