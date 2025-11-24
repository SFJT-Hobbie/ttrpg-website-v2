import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext.jsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import { DiceBoxProvider } from './DiceBoxProvider';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Lazy load components - grouped by feature for better chunk organization
const Title = lazy(() => import('./pages/Title.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const Landing = lazy(() => import('./pages/Landing.jsx'));
const Tools = lazy(() => import('./pages/Tools.jsx'));

// Rules pages - grouped together
const Rules = lazy(() => import('./pages/Rules.jsx'));
const Attributes = lazy(() => import('./pages/RulesAttributes.jsx'));
const Races = lazy(() => import('./pages/RulesRaces.jsx'));
const ElfRace = lazy(() => import('./pages/RulesRacesElf.jsx'));
const DwarfRace = lazy(() => import('./pages/RulesRacesDwarf.jsx'));
const HumanRace = lazy(() => import('./pages/RulesRacesHuman.jsx'));
const BeastmanRace = lazy(() => import('./pages/RulesRacesBeastman.jsx'));
const HalflingRace = lazy(() => import('./pages/RulesRacesHalfling.jsx'));
const VerdantRace = lazy(() => import('./pages/RulesRacesVerdant.jsx'));
const Classes = lazy(() => import('./pages/RulesClasses.jsx'));
const WarriorClass = lazy(() => import('./pages/RulesClassesWarrior.jsx'));
const MagicUserClass = lazy(() => import('./pages/RulesClassesMagicUser.jsx'));
const SpecialistClass = lazy(() => import('./pages/RulesClassesSpecialist.jsx'));
const MulticlassClass = lazy(() => import('./pages/RulesClassesMulticlass.jsx'));

// Gear pages
const Gear = lazy(() => import('./pages/RulesGear.jsx'));
const GearArmor = lazy(() => import('./pages/RulesGearArmor.jsx'));
const GearWeapons = lazy(() => import('./pages/RulesGearWeapons.jsx'));
const GearCompanions = lazy(() => import('./pages/RulesGearCompanions.jsx'));
const GearMagic = lazy(() => import('./pages/RulesGearMagic.jsx'));
const GearMachinery = lazy(() => import('./pages/RulesGearMachinery.jsx'));
const GearApparel = lazy(() => import('./pages/RulesGearApparel.jsx'));
const GearSupplies = lazy(() => import('./pages/RulesGearSupplies.jsx'));

// Game mechanics pages
const Game = lazy(() => import('./pages/RulesGame.jsx'));
const GameMechanics = lazy(() => import('./pages/RulesGameMechanics.jsx'));
const GameCombat = lazy(() => import('./pages/RulesGameCombat.jsx'));
const GameManeuvers = lazy(() => import('./pages/RulesGameManeuvers.jsx'));
const GameWeaponProficiencies = lazy(() => import('./pages/RulesGameWeaponProf.jsx'));
const GameNonWeaponProficiencies = lazy(() => import('./pages/RulesGameNonWeaponProf.jsx'));
const GameXPLevel = lazy(() => import('./pages/RulesGameXPLevel.jsx'));
const GameLifeDeath = lazy(() => import('./pages/RulesGameLifeDeath.jsx'));
const GameExploration = lazy(() => import('./pages/RulesGameExploration.jsx'));
const GameDowntime = lazy(() => import('./pages/RulesGameDowntime.jsx'));

// Magic pages
const Magic = lazy(() => import('./pages/RulesMagic.jsx'));
const MagicAstral = lazy(() => import('./pages/RulesMagicAstral.jsx'));
const MagicAstralSpells = lazy(() => import('./pages/RulesMagicAstralSpells.jsx'));
const MagicNatural = lazy(() => import('./pages/RulesMagicNatural.jsx'));
const MagicNaturalSpells = lazy(() => import('./pages/RulesMagicNaturalSpells.jsx'));
const MagicVoiceForm = lazy(() => import('./pages/RulesMagicVoiceForm.jsx'));
const MagicVoiceFormSpells = lazy(() => import('./pages/RulesMagicVoiceFormSpells.jsx'));
const MagicArchive = lazy(() => import('./pages/RulesMagicArchive.jsx'));

// Character and journal pages
const Journals = lazy(() => import('./pages/Journals.jsx'));
const JournalView = lazy(() => import('./pages/JournalView.jsx'));
const Characters = lazy(() => import('./pages/Characters.jsx'));
const CharacterSheet = lazy(() => import('./pages/CharacterSheet.jsx'));
const NonWeaponProficiencies = lazy(() => import('./pages/NonWeaponProficiencies.jsx'));

// Library pages
const Library = lazy(() => import('./pages/Library.jsx'));
const LibraryLoreRoom = lazy(() => import('./pages/LibraryLoreRoom.jsx'));
const LibraryLoreRoomMap = lazy(() => import('./pages/LibraryLoreRoomMap.jsx'));
const LibraryLoreRoomWiki = lazy(() => import('./pages/LibraryLoreRoomWiki.jsx'));
const LibraryLoreRoomCharacters = lazy(() => import('./pages/LibraryLoreRoomCharacters.jsx'));
const LibraryLoreRoomJournals = lazy(() => import('./pages/LibraryLoreRoomJournals.jsx'));
const RoomJournalView = lazy(() => import('./pages/RoomJournalView.jsx'));

// Components that are always needed
import DiceFloatingButton from './components/DiceFloatingButton.jsx';
import DiceOverlay from './components/DiceOverlay.jsx';

// Loading fallback component
import SkeletonPage from './components/SkeletonLoader';
const LoadingFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <SkeletonPage />
  </motion.div>
);

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log("ProtectedRoute updated:", { user, loading });
  }, [user, loading]);

  if (loading) {
    return <SkeletonPage />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


function AppContent() {
  const { user } = useAuth();
  const location = useLocation();
  
  // Pages where dice should NOT be shown
  const noDicePages = ['/', '/login', '/register'];
  const shouldShowDice = user && !noDicePages.includes(location.pathname);

  return (
    <div className="overflow-clip relative min-h-screen">
      {shouldShowDice && (
        <>
          <DiceFloatingButton />
          <DiceOverlay />
        </>
      )}
      <AnimatePresence mode="wait">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
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
                path="/journals/:id"
                element={
                  <ProtectedRoute>
                    <JournalView />
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
              <Route
                path="/library/lore-room/:id/characters"
                element={
                  <ProtectedRoute>
                    <LibraryLoreRoomCharacters />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library/lore-room/:id/journals"
                element={
                  <ProtectedRoute>
                    <LibraryLoreRoomJournals />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library/lore-room/:id/journals/:journalId"
                element={
                  <ProtectedRoute>
                    <RoomJournalView />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <DiceBoxProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </DiceBoxProvider>
    </AuthProvider>
  );
}

export default App;