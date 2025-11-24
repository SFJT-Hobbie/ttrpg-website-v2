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

export const nonWeaponProficiencyOptions = {
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