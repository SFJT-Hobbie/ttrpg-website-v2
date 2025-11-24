import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { X, ChevronDown, ChevronUp, CheckSquare, Square } from 'lucide-react';
import PropTypes from 'prop-types';
import { supabase } from '../supabaseClient';

const difficultyLevels = {
  Simple: { successesNeeded: 2, trainingTime: '1 week', trainingCost: 10 },
  Moderate: { successesNeeded: 3, trainingTime: '2 weeks', trainingCost: 25 },
  Complex: { successesNeeded: 4, trainingTime: '1 month', trainingCost: 50 },
  Rare: { successesNeeded: 5, trainingTime: '2 months', trainingCost: 100 },
  Special: { successesNeeded: 5, trainingTime: 'Special', trainingCost: 0 },
};

const magicRestriction = 'Magic Users only; non-proficient: Attribute * 3, proficient: 0. Roll to learn spells, cast via slots.';
const naturalMagicRestriction = 'Non-proficient: Attribute * 2; proficient: roll Wis * 5%, 1d6 mana, 10 points to cast.';
const voiceAndFormRestriction = 'Non-proficient: Attribute * 2; proficient: roll Wis * 5%, takes minutes to hours.';

const nonWeaponProficiencyOptions = {
  'Wilderness Exploration Skills': {
    Strength: {
      Climbing: { slots: 1, description: 'Scale crumbling cliffs or gnarled husks, defying the yawning dark below.', difficulty: difficultyLevels.Simple },
    },
    Dexterity: {
      Firecraft: { slots: 1, description: 'Wrest fleeting flames from damp rot or sparse twigs in a forsaken wild.', difficulty: difficultyLevels.Simple },
    },
    Constitution: {
      SurvivalWilderness: { slots: 2, description: 'Endure the wild’s cruel embrace, clawing shelter from a land eager to kill.', difficulty: difficultyLevels.Complex },
      EndureElements: { slots: 1, description: 'Stand firm against howling gales or blistering heat in a world without mercy.', difficulty: difficultyLevels.Simple },
      AltitudeAdaptation: { slots: 1, description: 'Breathe thin, frigid air atop jagged peaks, where even hope thins.', difficulty: difficultyLevels.Moderate },
    },
    Intelligence: {
      Trailblazing: { slots: 1, description: 'Carve paths through tangled decay, leaving marks swallowed by time.', difficulty: difficultyLevels.Moderate },
      NavigationSurface: { slots: 1, description: 'Find bearings under a hollow sky, guided by faded stars or broken stone.', difficulty: difficultyLevels.Moderate },
      Herbalism: { slots: 2, description: 'Harvest twisted roots for salves or poisons from a blighted, uncaring earth.', difficulty: difficultyLevels.Complex },
    },
    Wisdom: {
      Foraging: { slots: 1, description: 'Scrounge bitter weeds or gaunt prey from a wild that starves its own.', difficulty: difficultyLevels.Simple },
      Tracking: { slots: 2, description: 'Follow faint scars of blood or tread, hunting through a cursed expanse.', difficulty: difficultyLevels.Complex },
      WeatherSense: { slots: 1, description: 'Read the sky’s grim portents—storms or frost—to brace for its wrath.', difficulty: difficultyLevels.Moderate },
    },
    Charisma: {
      AnimalHandling: { slots: 1, description: 'Tame feral beasts or weary mules, binding them to your doomed path.', difficulty: difficultyLevels.Moderate },
    },
  },
  'Dungeon Exploration Skills': {
    Dexterity: {
      TrapDetection: { slots: 1, description: 'Spot rusted snares or hidden blades lurking in the dungeon’s gloom.', difficulty: difficultyLevels.Moderate },
      Caving: { slots: 1, description: 'Wriggle through jagged chasms, where stone bites and darkness swallows.', difficulty: difficultyLevels.Moderate },
    },
    Constitution: {
      SurvivalUnderground: { slots: 2, description: 'Thrive in cramped, airless depths, scavenging life from rot and stone.', difficulty: difficultyLevels.Complex },
    },
    Intelligence: {
      NavigationUnderground: { slots: 1, description: 'Thread twisting crypts and caves, where landmarks crumble to dust.', difficulty: difficultyLevels.Moderate },
      Stonecraft: { slots: 1, description: 'Read the dungeon’s bones for secrets or collapse, a faint edge in the dark.', difficulty: difficultyLevels.Moderate },
      LightManagement: { slots: 1, description: 'Stretch guttering flames or dim sparks to pierce the dungeon’s night.', difficulty: difficultyLevels.Simple },
      Mapping: { slots: 1, description: 'Scrawl crude maps on tattered scraps, a frail shield against oblivion.', difficulty: difficultyLevels.Moderate },
    },
    Wisdom: {
      DungeonHearing: { slots: 1, description: 'Hear the dungeon’s whispers—distant claws or dripping doom—in silence.', difficulty: difficultyLevels.Moderate },
      HazardSense: { slots: 2, description: 'Sense the unseen—shifting walls or ambushes—in a world that betrays.', difficulty: difficultyLevels.Complex },
      DungeonHazards: { slots: 1, description: 'Know the crypt’s cruel gifts—gas or floods—and evade their grasp.', difficulty: difficultyLevels.Moderate },
    },
  },
  'Physical & Movement Skills': {
    Strength: {
      Swimming: { slots: 1, description: 'Battle murky tides or flooded tombs, where the drowned hunger.', difficulty: difficultyLevels.Simple },
      Athletics: { slots: 1, description: 'Leap rifts or heave debris, defying a land that craves your fall.', difficulty: difficultyLevels.Simple },
    },
    Dexterity: {
      Riding: { slots: 1, description: 'Master skeletal mounts or weary beasts across a realm of ash and ruin.', difficulty: difficultyLevels.Moderate },
      Stealth: { slots: 2, description: 'Fade into shadow or bracken, unseen by the hollow and the cursed.', difficulty: difficultyLevels.Moderate },
    },
    Constitution: {
      Endurance: { slots: 2, description: 'Outlast endless marches through mire and ruin, unbent by despair.', difficulty: difficultyLevels.Complex },
    },
  },
  'Crafting & Trade Skills': {
    Strength: {
      Metalworking: { slots: 2, description: 'Forge jagged steel from rust and fire, a bulwark against the dark.', difficulty: difficultyLevels.Complex },
      Boating: { slots: 1, description: 'Paddle frail craft through black waters, fleeing shores of despair.', difficulty: difficultyLevels.Moderate },
    },
    Dexterity: {
      Carpentry: { slots: 1, description: 'Hammer splintered wood into fleeting shelters amid a crumbling world.', difficulty: difficultyLevels.Moderate },
      Leatherworking: { slots: 1, description: 'Stitch ragged hides into gear, flayed from the silent dead.', difficulty: difficultyLevels.Moderate },
      RopeUse: { slots: 1, description: 'Knot frayed ropes into lifelines, a thread against the abyss.', difficulty: difficultyLevels.Simple },
    },
    Intelligence: {
      WeaponRepair: { slots: 1, description: 'Mend notched blades or bent hafts, delaying their final ruin.', difficulty: difficultyLevels.Moderate },
      Engineering: { slots: 2, description: 'Craft crude machines or mend relics, bending them to grim purpose.', difficulty: difficultyLevels.Rare },
    },
    Wisdom: {
      Cooking: { slots: 1, description: 'Turn foul scraps into meager meals, staving off the gnaw of hunger.', difficulty: difficultyLevels.Simple },
      Scavenging: { slots: 1, description: 'Pry rusted tools or scraps from bones, a scavenger’s grim harvest.', difficulty: difficultyLevels.Simple },
    },
  },
  'Social & Interaction Skills': {
    Intelligence: {
      Signaling: { slots: 1, description: 'Send faint cries or flickers through gloom, a call to the lost.', difficulty: difficultyLevels.Simple },
    },
    Charisma: {
      Persuasion: { slots: 1, description: 'Wring aid or secrets from hollowed souls with a silvered tongue.', difficulty: difficultyLevels.Moderate },
      Etiquette: { slots: 1, description: 'Appease mad cults or ruin-lords with rites from a forgotten age.', difficulty: difficultyLevels.Moderate },
      Intimidation: { slots: 1, description: 'Break wills with a voice forged in the fires of desolation.', difficulty: difficultyLevels.Moderate },
      Leadership: { slots: 2, description: 'Rally the broken into a grim host, marching through damnation.', difficulty: difficultyLevels.Complex },
      Barter: { slots: 1, description: 'Trade with gaunt wanderers or crypt-dwellers for scraps of survival.', difficulty: difficultyLevels.Moderate },
    },
  },
  'Knowledge & Scholarship Skills': {
    Intelligence: {
      History: { slots: 1, description: 'Recall tales of fallen realms, their bones buried in ash and time.', difficulty: difficultyLevels.Moderate },
      Languages: { slots: 1, description: 'Decipher the guttural chants or faded scripts of the long-dead.', difficulty: difficultyLevels.Moderate },
      DungeonLore: { slots: 1, description: 'Know the builders of crypts, their traps a whisper of doom.', difficulty: difficultyLevels.Moderate },
      Astronomy: { slots: 2, description: 'Map the cold stars for guidance or omens in a fractured sky.', difficulty: difficultyLevels.Complex },
      Astrology: { slots: 2, description: 'Read celestial wounds for portents in a world teetering on ruin.', difficulty: difficultyLevels.Complex },
      Alchemy: { slots: 2, description: 'Mix rot and rust into potions or flames, a desperate alchemy.', difficulty: difficultyLevels.Complex },
      Cryptography: { slots: 1, description: 'Unravel ciphers etched by mad hands in dust and despair.', difficulty: difficultyLevels.Moderate },
      Runology: { slots: 1, description: 'Trace runes of power or peril, scarred into stone and decay.', difficulty: difficultyLevels.Moderate },
      Runosophy: { slots: 2, description: 'Plumb the mystic depths of runes, their secrets a double-edged curse.', difficulty: difficultyLevels.Rare },
      Nomothetic: { slots: 2, description: 'Grasp the laws of a broken world, bending fate with grim insight.', difficulty: difficultyLevels.Rare },
      NaturalSciences: { slots: 2, description: 'Study the rot of stone and flesh for edges in a dying land.', difficulty: difficultyLevels.Complex },
    },
    Wisdom: {
      NaturalLore: { slots: 1, description: 'Know the twisted ways of beasts and thorns in a blighted wild.', difficulty: difficultyLevels.Moderate },
      Observation: { slots: 1, description: 'See the faint scars of doom in shadow or dust, unheeded by most.', difficulty: difficultyLevels.Moderate },
      VeiledLore: { slots: 2, description: 'Unearth forbidden truths and magics, a peril to the mind and soul.', difficulty: difficultyLevels.Special },
      MonsterLore: { slots: 1, description: 'Sense the weaknesses of horrors lurking in wilds and depths.', difficulty: difficultyLevels.Moderate },
      GrayMagic: { slots: 2, description: 'Master the veiled arts of balance and control, drawing from the grey mists of forgotten stars.', difficulty: difficultyLevels.Rare, restriction: magicRestriction },
      BlackMagic: { slots: 2, description: 'Wield the shadowed craft of ruin and decay, secrets plucked from the black void between constellations.', difficulty: difficultyLevels.Rare, restriction: magicRestriction },
      WhiteMagic: { slots: 2, description: 'Channel the faint light of salvation and warding, gleaned from the pale gleam of distant stars.', difficulty: difficultyLevels.Rare, restriction: magicRestriction },
    },
  },
  'Combat & Tactics Skills': {
    Dexterity: {
      ImprovisedWeapons: { slots: 1, description: 'Turn broken junk or bones into tools of grim slaughter.', difficulty: difficultyLevels.Simple },
    },
    Intelligence: {
      Tactics: { slots: 1, description: 'Weave plans of blood and retreat in the chaos of ruin and wood.', difficulty: difficultyLevels.Moderate },
      AmbushTactics: { slots: 1, description: 'Set traps or spot foes in shadowed passes and crumbling halls.', difficulty: difficultyLevels.Moderate },
    },
    Wisdom: {
      CombatAwareness: { slots: 2, description: 'Strike true in gloom or bracken, where death stalks unseen.', difficulty: difficultyLevels.Complex },
      FirstAid: { slots: 2, description: 'Stitch flesh or brace bones with rags, a fleeting stay of ruin.', difficulty: difficultyLevels.Complex },
    },
  },
  'Miscellaneous & Utility Skills': {
    Strength: {
      Mining: { slots: 2, description: 'Tear through stone or earth, seeking ore or a breach in the dark.', difficulty: difficultyLevels.Complex },
    },
    Dexterity: {
      Thievery: { slots: 1, description: 'Pick rusted locks or frail traps for loot in a world of greed.', difficulty: difficultyLevels.Moderate },
      Camouflage: { slots: 1, description: 'Blend with mud and ash, a ghost in a land that hunts.', difficulty: difficultyLevels.Moderate },
      Calligraphy: { slots: 1, description: 'Scribe maps or runes with precision, ink teetering on oblivion.', difficulty: difficultyLevels.Moderate },
      Forgery: { slots: 1, description: 'Craft false marks or scripts to deceive the desperate or dead.', difficulty: difficultyLevels.Moderate },
    },
    Intelligence: {
      ToolImprovisation: { slots: 1, description: 'Shape crude tools from debris, a defiance of shattered lands.', difficulty: difficultyLevels.Moderate },
      Appraisal: { slots: 1, description: 'Judge the worth of tarnished relics in a market of despair.', difficulty: difficultyLevels.Moderate },
    },
    Wisdom: {
      Scouting: { slots: 1, description: 'Peer through fog and dark, spying paths for the damned.', difficulty: difficultyLevels.Moderate },
      NaturalMagic: { slots: 2, description: 'Channel the raw pulse of earth, flame, or wind, bending the elements to your will in a world that resists.', difficulty: difficultyLevels.Complex, restriction: naturalMagicRestriction },
      VoiceAndForm: { slots: 2, description: 'Speak nouns and verbs through cuneal catalysts, twisting the mundane—ice to water, spark to flame—in a hollow echo of creation.', difficulty: difficultyLevels.Complex, restriction: voiceAndFormRestriction },
    },
  },
};

function SelectedProficiencies({ proficiencies, updateProficiencyValue, removeProficiency, toggleCheck }) {
  const formatProficiency = (prof) => prof.replace(/([A-Z])/g, ' $1').trim();

  const getSuccessesNeeded = (profName) => {
    for (const [, stats] of Object.entries(nonWeaponProficiencyOptions)) {
      for (const [, proficienciesList] of Object.entries(stats)) {
        if (proficienciesList[profName]) {
          return proficienciesList[profName].difficulty.successesNeeded;
        }
      }
    }
    return 0; // Fallback for unknown proficiencies
  };

  console.log('Rendering SelectedProficiencies with proficiencies:', proficiencies);

  return (
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-200 tracking-tight mb-6 montserrat">
        Proficiencias elegidas
      </h2>
      {proficiencies.length === 0 ? (
        <p className="text-gray-400 text-sm text-center montserrat">
          No hay proficiencias elegidas.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {proficiencies.map((prof) => {
            const successesNeeded = getSuccessesNeeded(prof.name);
            return (
              <div
                key={prof.name}
                className="flex flex-col bg-gray-800 border border-gray-600 rounded px-4 py-2 text-sm shadow-md"
              >
                <div className="flex items-center">
                  <span className="text-gray-200 montserrat">{formatProficiency(prof.name)}</span>
                  <input
                    type="number"
                    value={prof.value}
                    onChange={(e) => updateProficiencyValue(prof.name, e.target.value)}
                    min="0"
                    max="100"
                    className="w-16 mx-2 px-2 py-1 bg-gray-900 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm shadow-sm transition-all duration-300"
                    aria-label={`Valor de competencia para ${formatProficiency(prof.name)}`}
                  />
                  <span className="text-gray-200 montserrat">%</span>
                  <button
                    onClick={() => removeProficiency(prof.name)}
                    className="ml-2 text-red-500 hover:text-red-700 transition-all duration-200"
                    aria-label={`Eliminar competencia ${formatProficiency(prof.name)}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-2 mt-2">
                  {Array.from({ length: successesNeeded }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => toggleCheck(prof.name, index)}
                      className="text-gray-200 hover:text-teal-500 transition-all duration-200"
                      aria-label={`Marcar casilla ${index + 1} para ${formatProficiency(prof.name)}`}
                      aria-checked={prof.checks[index] || false}
                    >
                      {prof.checks[index] ? (
                        <CheckSquare className="w-4 h-4" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

SelectedProficiencies.propTypes = {
  proficiencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      checks: PropTypes.arrayOf(PropTypes.bool).isRequired,
    })
  ).isRequired,
  updateProficiencyValue: PropTypes.func.isRequired,
  removeProficiency: PropTypes.func.isRequired,
  toggleCheck: PropTypes.func.isRequired,
};

function ProficiencyItem({ profName, details, stat, addProficiency, isSelected }) {
  const formatProficiency = (prof) => prof.replace(/([A-Z])/g, ' $1').trim();

  console.log('Rendering ProficiencyItem:', profName, 'isSelected:', isSelected);

  return (
    <div className="flex justify-between items-center p-3 rounded border border-gray-600">
      <div>
        <p className="text-gray-200 font-medium montserrat">{formatProficiency(profName)}</p>
        <p className="text-sm text-gray-300 montserrat">{details.description}</p>
        <p className="text-xs text-gray-500 montserrat">
          Slots: {details.slots} | Stat: {stat} | Dificultad: {details.difficulty.successesNeeded} éxitos, {details.difficulty.trainingTime}, Costo: {details.difficulty.trainingCost}
          {details.restriction && ` | Restricción: ${details.restriction}`}
        </p>
      </div>
      <button
        onClick={() => addProficiency(profName)}
        disabled={isSelected}
        className="bg-gray-700 text-xs text-gray-200 py-1 px-3 rounded border border-gray-600 hover:bg-teal-600 hover:text-white hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed montserrat"
        aria-label={`Agregar competencia ${formatProficiency(profName)}`}
      >
        Agregar Proficiencia
      </button>
    </div>
  );
}

ProficiencyItem.propTypes = {
  profName: PropTypes.string.isRequired,
  details: PropTypes.shape({
    slots: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    difficulty: PropTypes.shape({
      successesNeeded: PropTypes.number.isRequired,
      trainingTime: PropTypes.string.isRequired,
      trainingCost: PropTypes.number.isRequired,
    }).isRequired,
    restriction: PropTypes.string,
  }).isRequired,
  stat: PropTypes.string.isRequired,
  addProficiency: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

function ProficiencyCategory({ category, stats, open, toggleCategory, addProficiency, proficiencies }) {
  console.log('Rendering ProficiencyCategory:', category, 'open:', open);

  return (
    <div className="border border-gray-600 border-dashed rounded shadow-md">
      <button
        onClick={() => toggleCategory(category)}
        className="w-full text-left px-4 py-3 text-gray-200 font-semibold flex justify-between items-center hover:bg-teal-600 hover:shadow-lg transition-all duration-300 montserrat"
        aria-expanded={open}
        aria-label={`Alternar categoría ${category}`}
      >
        <span className="text-lg">{category}</span>
        <span>{open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</span>
      </button>
      {open && (
        <div className="p-4 space-y-4">
          {Object.entries(stats).map(([stat, proficienciesList]) => (
            <div key={stat}>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 tracking-tight montserrat">
                {stat}
              </h3>
              <div className="space-y-3">
                {Object.entries(proficienciesList).map(([profName, details]) => (
                  <ProficiencyItem
                    key={profName}
                    profName={profName}
                    details={details}
                    stat={stat}
                    addProficiency={addProficiency}
                    isSelected={proficiencies.some((prof) => prof.name === profName)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ProficiencyCategory.propTypes = {
  category: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleCategory: PropTypes.func.isRequired,
  addProficiency: PropTypes.func.isRequired,
  proficiencies: PropTypes.array.isRequired,
};

function NonWeaponProficiencies() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const { state } = useLocation();

  // if state.character exists, we don’t need initial loading
  const [character, setCharacter] = useState(state?.character || null);
  const [proficiencies, setProficiencies] = useState([]);
  const [imagePreview, setImagePreview] = useState(state?.imagePreview || '');
  const [loading, setLoading] = useState(!state?.character); // <-- key fix
  const [error, setError] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null);
  const hasFetched = useRef(false);

  const getSuccessesNeeded = (profName) => {
    for (const [, stats] of Object.entries(nonWeaponProficiencyOptions)) {
      for (const [, proficienciesList] of Object.entries(stats)) {
        if (proficienciesList[profName]) {
          return proficienciesList[profName].difficulty.successesNeeded;
        }
      }
    }
    return 0;
  };

  const initializeProficiencies = (profs) =>
    (profs || []).map((prof) => {
      const successesNeeded = getSuccessesNeeded(prof.name);
      return {
        name: prof.name,
        value: Number(prof.value) || 0,
        checks: prof.checks || Array(successesNeeded).fill(false),
      };
    });

  useEffect(() => {
    if (hasFetched.current || authLoading) return;

    const fetchCharacter = async () => {
      if (character && character.id === id && character.data?.nonWeaponProficiencies) {
        setProficiencies(initializeProficiencies(character.data.nonWeaponProficiencies));
        setImagePreview(character.data.picture || state?.imagePreview || '');
        setLoading(false);
        hasFetched.current = true;
        return;
      }

      if (!id || !user) {
        setError('ID de personaje o usuario no válido');
        setLoading(false);
        hasFetched.current = true;
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('characters')
          .select('*')
          .eq('id', id)
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        if (!data) throw new Error('Personaje no encontrado');

        const charData = {
          id: data.id,
          type: data.type,
          name: data.name,
          data: {
            ...data.data,
            nonWeaponProficiencies: data.data.nonWeaponProficiencies || [],
          },
        };

        setCharacter(charData);
        setProficiencies(initializeProficiencies(charData.data.nonWeaponProficiencies));
        setImagePreview(data.data.picture || state?.imagePreview || '');
      } catch (err) {
        setError('No se pudo cargar el personaje: ' + err.message);
      } finally {
        setLoading(false);
        hasFetched.current = true;
      }
    };

    fetchCharacter();
  }, [id, user, authLoading, character, state]);

  const toggleCategory = (category) => {
    console.log('Toggling category:', category);
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const [openCategories, setOpenCategories] = useState({});

  const addProficiency = (profName) => {
    console.log('Adding proficiency:', profName);
    if (!proficiencies.some((prof) => prof.name === profName)) {
      const successesNeeded = getSuccessesNeeded(profName);
      setProficiencies((prev) => [
        ...prev,
        { name: profName, value: 0, checks: Array(successesNeeded).fill(false) },
      ]);
    }
  };

  const removeProficiency = (profName) => {
    console.log('Removing proficiency:', profName);
    setProficiencies((prev) => prev.filter((prof) => prof.name !== profName));
  };

  const updateProficiencyValue = (profName, value) => {
    console.log('Updating proficiency value:', profName, value);
    setProficiencies((prev) =>
      prev.map((prof) =>
        prof.name === profName ? { ...prof, value: Number(value) || 0 } : prof
      )
    );
  };

  const toggleCheck = (profName, index) => {
    console.log('Toggling check for:', profName, 'index:', index);
    setProficiencies((prev) =>
      prev.map((prof) =>
        prof.name === profName
          ? {
              ...prof,
              checks: prof.checks.map((check, i) => (i === index ? !check : check)),
            }
          : prof
      )
    );
  };

  const handleSave = async () => {
    if (!character || !user) {
      console.log('Cannot save: missing character or user');
      setError('No se puede guardar: personaje o usuario no válido');
      return;
    }

    setLoading(true);
    setError(null);
    setSaveStatus(null);

    try {
      const updatedData = {
        ...character.data,
        nonWeaponProficiencies: proficiencies,
      };

      console.log('Saving proficiencies:', updatedData.nonWeaponProficiencies);
      const { error } = await supabase
        .from('characters')
        .update({ data: updatedData })
        .eq('id', character.id)
        .eq('user_id', user.id);
      if (error) {
        console.error('Supabase save error:', error);
        throw error;
      }

      setCharacter((prev) => ({ ...prev, data: updatedData }));
      setSaveStatus('Competencias guardadas exitosamente');
      console.log('Save successful');
      setTimeout(() => setSaveStatus(null), 3000); // Clear status after 3 seconds
    } catch (err) {
      setError('No se pudo guardar las competencias: ' + err.message);
      console.error('Error saving proficiencies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    console.log('Navigating back to /characters/edit/', character?.id || 'no-id');
    navigate(character ? `/characters/edit/${character.id}` : '/characters', {
      state: { character, imagePreview },
    });
  };

  const handleRetry = () => {
    console.log('Retrying data fetch');
    setError(null);
    setLoading(true);
    setCharacter(null);
    setProficiencies([]);
    hasFetched.current = false; // Allow re-fetch
  };

  const memoizedCategories = useMemo(
    () => {
      console.log('Rendering memoized categories');
      return Object.entries(nonWeaponProficiencyOptions).map(([category, stats]) => (
        <ProficiencyCategory
          key={category}
          category={category}
          stats={stats}
          open={!!openCategories[category]}
          toggleCategory={toggleCategory}
          addProficiency={addProficiency}
          proficiencies={proficiencies}
        />
      ));
    },
    [openCategories, proficiencies]
  );

  console.log('NonWeaponProficiencies render: authLoading=', authLoading, 'loading=', loading, 'error=', error, 'character=', character);

  if (authLoading || loading) {
    return <SkeletonPage />;
  }

  if (error) {
    console.log('Rendering error state:', error);
    return (
      <div className="min-h-screen w-10/12 mx-auto p-8 relative overflow-hidden bg-black">
        <p className="text-red-600 text-sm text-center montserrat animate-pulse">
          {error}
        </p>
        <div className="text-center mt-4">
          <button
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white transition-all duration-300"
            aria-label="Reintentar carga de datos"
          >
            Reintentar
          </button>
          <button
            onClick={() => navigate('/characters')}
            className="ml-4 bg-gray-700 text-gray-200 py-2 px-4 rounded-lg border border-gray-600 hover:bg-teal-600 hover:text-white montserrat font-medium transition-all duration-300"
            aria-label="Volver a personajes"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  if (!character) {
    console.log('No character, rendering empty state');
    return (
      <div className="min-h-screen w-10/12 mx-auto p-8 relative overflow-hidden bg-black">
        <p className="text-red-600 text-sm text-center montserrat animate-pulse">
          No se encontró el personaje. Por favor, intenta de nuevo.
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/characters')}
            className="bg-gray-700 text-gray-200 py-2 px-4 rounded-lg border border-gray-600 hover:bg-teal-600 hover:text-white montserrat font-medium transition-all duration-300"
            aria-label="Volver a personajes"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  console.log('Rendering main component with character:', character);
  return (
    <div className="min-h-screen w-10/12 mx-auto p-8 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="rounded-lg shadow-lg p-8 max-w-5xl mx-auto border border-white">
        <h1 className="text-4xl font-semibold text-yellow-500 mb-8 text-center tracking-tight cinzel">
          Competencias
        </h1>

        {saveStatus && (
          <p className="text-green-500 text-sm text-center montserrat animate-pulse mb-4">
            {saveStatus}
          </p>
        )}

        <SelectedProficiencies
          proficiencies={proficiencies}
          updateProficiencyValue={updateProficiencyValue}
          removeProficiency={removeProficiency}
          toggleCheck={toggleCheck}
        />

        <div className="space-y-4">{memoizedCategories}</div>

        <div className="text-center mt-8 space-y-4">
          <div className="text-gray-400 text-sm montserrat">
            <p>Competencia Base = (Atributo × 2)%</p>
            <p>Competencia Proficiente = (Atributo × 5)%</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-emerald-800 hover:bg-emerald-600 text-white montserrat font-bold py-2 px-8 rounded-2xl border border-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Guardar competencias"
            >
              {loading ? 'Guardando...' : 'Guardar Competencias'}
            </button>
            <button
              onClick={handleBack}
              disabled={loading}
              className="bg-gray-700 text-gray-200 py-2 px-8 rounded-lg border border-gray-600 hover:bg-teal-600 hover:text-white hover:shadow-lg montserrat font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Volver a la hoja de personaje"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonWeaponProficiencies;