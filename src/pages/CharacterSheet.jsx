import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import { User, X } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';

const ItemTypes = { ITEM: 'item' };
const CELL_SIZE = 100;
const GAP = 5;
const GRID_COLS = 5;
const GRID_ROWS = 5;

const CharacterSheet = ({ initialCellSize = CELL_SIZE }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [cellSize, setCellSize] = useState(calculateCellSize(initialCellSize));
  const isEdit = !!id;
  const isPC = type === 'pc' || (isEdit && !type);

  function calculateCellSize(defaultSize) {
    const width = window.innerWidth;
    let size = Math.floor(width * 0.1); // Example: 10% of width; customize as needed
    size = Math.max(50, Math.min(200, size)); // Enforce bounds
    return size || defaultSize; // Fallback to prop or module default
  }

  useEffect(() => {
    const handleResize = () => {
      const newSize = calculateCellSize(initialCellSize);
      setCellSize(newSize);

    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array for mount/unmount behavior

  const handleManualResize = () => {
    const newSize = calculateCellSize(initialCellSize);
    setCellSize(newSize);
  };

  const [character, setCharacter] = useState({
    id: null,
    type: isPC ? 'PC' : 'NPC',
    name: '',
    data: {
      picture: '',
      race: 'Human',
      class: isPC ? 'Fighter' : '',
      level: isPC ? 1 : null,
      xp: isPC ? 0 : null,
      alignment: 'Neutral',
      ageStage: 'adult',
      abilityScores: isPC ? {
        strength: 3,
        dexterity: 3,
        constitution: 3,
        intelligence: 3,
        wisdom: 3,
        charisma: 3,
      } : null,
      npcType: isPC ? null : 'Monster',
      hd: isPC ? null : 1,
      hp: isPC ? null : 0,
      save: isPC ? null : 0,
      bonusToHit: isPC ? null : 0,
      ac: isPC ? null : 0,
      closeQuarterMovement: isPC ? null : 0,
      openFieldMovement: isPC ? null : 0,
      weaponProficiencies: [],
      nonWeaponProficiencies: [],
      status: 'alive',
      deathDate: null,
      deathDescription: '',
      restingSite: '',
      description: '',
    },
  });
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [reviveDialogOpen, setReviveDialogOpen] = useState(false);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const races = ['Beastmen', 'Dwarf', 'Elf', 'Halfling', 'Human', 'Verdant'];
  const classes = ['Fighter', 'Magic User', 'Specialist'];
  const alignments = ['Lawful', 'Neutral', 'Chaotic'];
  const ageStages = ['young', 'adult', 'elder'];
  const npcTypes = ['Monster', 'Humanoid', 'Beast', 'Vehicle'];
  const weaponProficiencyOptions = [
    'Sword', 'Axe', 'Mace', 'Staff', 'Spear', 'Dagger', 'Flail', 'Warhammer',
    'Two-Handed Sword', 'Morning Star', 'Glaive', 'Halberd', 'Quarterstaff',
    'Bow', 'Shortbow', 'Crossbow', 'Hand Crossbow', 'Light Crossbow', 'Sling',
  ];

  // Fetch character and inventory data for editing
  useEffect(() => {
    if (isEdit && user) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const { data: charData, error: charError } = await supabase
            .from('characters')
            .select('*')
            .eq('id', id)
            .eq('user_id', user.id)
            .single();
          if (charError) throw charError;
          if (!charData) throw new Error('Personaje no encontrado');
          setCharacter({
            id: charData.id,
            type: charData.type,
            name: charData.name,
            data: {
              ...charData.data,
              abilityScores: charData.type === 'PC' ? (charData.data.abilityScores || {
                strength: 3,
                dexterity: 3,
                constitution: 3,
                intelligence: 3,
                wisdom: 3,
                charisma: 3,
              }) : null,
              class: charData.type === 'PC' ? (charData.data.class || 'Fighter') : '',
              level: charData.type === 'PC' ? (charData.data.level || 1) : null,
              xp: charData.type === 'PC' ? (charData.data.xp || 0) : null,
              xpBonus: charData.type === 'PC' ? (charData.data.xpBonus || 0) : null,
              npcType: charData.type === 'NPC' ? (charData.data.npcType || 'Monster') : null,
              hd: charData.data.hitPoints || 1,
              hp: charData.data.currentHP || 0,
              save: charData.data.bonusToSave || 0,
              bonusToHit: charData.data.bonusToHit || 0,
              ac: charData.data.equippedArmor || '',
              acs: charData.data.equippedShield || '',
              closeQuarterMovement: charData.data.closeQuarterMovement || 0,
              openFieldMovement: charData.data.openFieldMovement || 0,
              weaponProficiencies: charData.data.weaponProficiencies || [],
              nonWeaponProficiencies: charData.data.nonWeaponProficiencies || [],
            },
          });
          setImagePreview(charData.data.picture || '');

          // Fetch inventory items from inventory_items table
          const { data: itemsData, error: itemsError } = await supabase
            .from('inventory_items')
            .select('*')
            .eq('character_id', id);
          if (itemsError) throw itemsError;
          setInventoryItems(itemsData.map(item => ({
            id: item.id,
            name: item.name || '',
            gridX: item.slot_position?.gridX || 1,
            gridY: item.slot_position?.gridY || 1,
            w: item.slot_position?.w || 1,
            h: item.slot_position?.h || 1,
          })));
        } catch (err) {
          setError('No se pudo cargar el personaje: ' + err.message);
          console.error('Error fetching data:', err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [isEdit, id, user]);

  // Handle image preview
  useEffect(() => {
    if (imageFile) {
      setImagePreview(URL.createObjectURL(imageFile));
    }
    return () => {
      if (imageFile && imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imageFile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setImageError('La imagen debe ser menor a 2MB');
        return;
      }
      if (!['image/png', 'image/jpeg'].includes(file.type)) {
        setImageError('Solo se permiten imágenes PNG y JPEG');
        return;
      }
      setImageError(null);
      setImageFile(file);
    } else {
      setImageFile(null);
      setImagePreview(character.data.picture || '');
      setImageError(null);
    }
  };

  const handleChange = (e, nestedField, subField) => {
    const { name, value } = e.target;
    const numericFields = ['level', 'xp', 'hd', 'hp', 'save', 'bonusToHit', 'ac', 'closeQuarterMovement', 'openFieldMovement'];
    if (nestedField) {
      setCharacter((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [nestedField]: {
            ...prev.data[nestedField],
            [subField]: Number(value) || value,
          },
        },
      }));
    } else {
      setCharacter((prev) => ({
        ...prev,
        [name === 'name' ? name : 'data']: name === 'name' ? value : {
          ...prev.data,
          [name]: numericFields.includes(name) ? Number(value) || 0 : value,
        },
      }));
    }
  };

  const handleWeaponProficiencyChange = (e) => {
    const selectedProf = e.target.value;
    if (selectedProf && !character.data.weaponProficiencies.includes(selectedProf)) {
      setCharacter((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          weaponProficiencies: [...prev.data.weaponProficiencies, selectedProf],
        },
      }));
    }
  };

  const removeWeaponProficiency = (prof) => {
    setCharacter((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        weaponProficiencies: prev.data.weaponProficiencies.filter((p) => p !== prof),
      },
    }));
  };

  const removeNonWeaponProficiency = (profName) => {
    setCharacter((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        nonWeaponProficiencies: prev.data.nonWeaponProficiencies.filter((p) => p.name !== profName),
      },
    }));
  };

  const handleDeathFieldChange = async (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
    if (character.id) {
      try {
        await supabase
          .from('characters')
          .update({ data: { ...character.data, [name]: value } })
          .eq('id', character.id);
      } catch (err) {
        setError('No se pudo actualizar detalles de muerte: ' + err.message);
        console.error('Error updating death details:', err);
      }
    }
  };

  const uploadImage = async (file) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage
        .from('character-images')
        .upload(fileName, file);
      if (error) throw error;
      const { data } = supabase.storage
        .from('character-images')
        .getPublicUrl(fileName);
      return data.publicUrl;
    } catch (error) {
      throw new Error('Error al subir la imagen: ' + error.message);
    }
  };

  const handleRevive = async () => {
    try {
      const updatedData = {
        ...character.data,
        status: 'alive',
        deathDate: null,
        deathDescription: '',
        restingSite: '',
      };
      await supabase
        .from('characters')
        .update({ data: updatedData })
        .eq('id', character.id);
      setCharacter((prev) => ({
        ...prev,
        data: updatedData,
      }));
      setReviveDialogOpen(false);
    } catch (err) {
      setError('No se pudo revivir el personaje: ' + err.message);
      console.error('Error reviving character:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('Debes estar conectado para crear/editar un personaje.');
      return;
    }
    if (!character.name) {
      setError('El nombre del personaje es requerido.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let pictureUrl = character.data.picture || '';
      if (imageFile) {
        pictureUrl = await uploadImage(imageFile);
      }

      const characterData = {
        user_id: user.id,
        type: character.type,
        name: character.name,
        data: {
          ...character.data,
          picture: pictureUrl,
        },
      };

      let characterId = character.id;
      if (isEdit) {
        const { error } = await supabase
          .from('characters')
          .update(characterData)
          .eq('id', characterId);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('characters')
          .insert(characterData)
          .select('id')
          .single();
        if (error) throw error;
        characterId = data.id;
      }

      // Sync inventory items
      const currentIds = inventoryItems.map(item => item.id);
      // Delete removed items
      const { error: deleteError } = await supabase
        .from('inventory_items')
        .delete()
        .eq('character_id', characterId)
        .not('id', 'in', `(${currentIds.join(',')})`);
      if (deleteError) throw deleteError;

      // Upsert current items
      const itemsToUpsert = inventoryItems.map(item => ({
        id: item.id,
        character_id: characterId,
        name: item.name,
        slot_position: {
          gridX: item.gridX,
          gridY: item.gridY,
          w: item.w,
          h: item.h,
        },
      }));
      const { error: upsertError } = await supabase
        .from('inventory_items')
        .upsert(itemsToUpsert, { onConflict: 'id' });
      if (upsertError) throw upsertError;

      navigate('/characters');
    } catch (err) {
      setError('No se pudo guardar el personaje: ' + err.message);
      console.error('Error saving character:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditNonWeaponProficiencies = () => {
    if (!isEdit) return; // Prevent navigation during creation
  };

  // Inventory Management
  const addItem = () => {
    if (!itemName.trim()) {
      setError('Por favor, ingrese un nombre para el ítem.');
      return;
    }

    const position = findFreeCell();
    if (!position) {
      setError(`No hay espacio en la grilla de ${GRID_COLS}x${GRID_ROWS}`);
      return;
    }

    const newItem = {
      id: uuidv4(),
      name: itemName.trim(),
      gridX: position.x,
      gridY: position.y,
      w: 1,
      h: 1,
    };

    setInventoryItems(prev => [...prev, newItem]);
    setItemName('');
    setError(null);
  };

  const removeItem = () => {
    if (!selectedItemId) {
      setError('Por favor, seleccione un ítem para eliminar.');
      return;
    }

    setInventoryItems(prev => prev.filter(item => item.id !== selectedItemId));
    setSelectedItemId(null);
    setError(null);
  };

  const findFreeCell = () => {
    for (let y = 1; y <= GRID_ROWS; y++) {
      for (let x = 1; x <= GRID_COLS; x++) {
        const taken = inventoryItems.some(item => {
          return x >= item.gridX && x < item.gridX + item.w && y >= item.gridY && y < item.gridY + item.h;
        });
        if (!taken) return { x, y };
      }
    }
    return null;
  };

  const handleDrop = (itemId, x, y) => {
    const item = inventoryItems.find(i => i.id === itemId);
    if (!item) return;

    if (x < 1 || x + item.w - 1 > GRID_COLS || y < 1 || y + item.h - 1 > GRID_ROWS) return;

    const taken = inventoryItems.some(other => {
      if (other.id === itemId) return false;
      return !(x + item.w - 1 < other.gridX || x > other.gridX + other.w - 1 || y + item.h - 1 < other.gridY || y > other.gridY + other.h - 1);
    });
    if (taken) return;

    setInventoryItems(prev =>
      prev.map(i => i.id === itemId ? { ...i, gridX: x, gridY: y } : i)
    );
  };

  const resizeItem = (id, dw, dh) => {
    setInventoryItems(prev => {
      const item = prev.find(i => i.id === id);
      if (!item) return prev;

      const newW = Math.max(1, Math.min(item.w + dw, GRID_COLS - item.gridX + 1));
      const newH = Math.max(1, Math.min(item.h + dh, GRID_ROWS - item.gridY + 1));

      const taken = prev.some(other => {
        if (other.id === id) return false;
        return !(item.gridX + newW - 1 < other.gridX || item.gridX > other.gridX + other.w - 1 || item.gridY + newH - 1 < other.gridY || item.gridY > other.gridY + other.h - 1);
      });
      if (taken) return prev;

      return prev.map(i => i.id === id ? { ...i, w: newW, h: newH } : i);
    });
  };

  const handleClickBack = () => {
    navigate('/characters');
  };

  const InventoryCell = ({ x, y }) => {
    const [, drop] = useDrop({
      accept: ItemTypes.ITEM,
      drop: (draggedItem) => handleDrop(draggedItem.id, x, y),
    });

    return (
      <div
        ref={drop}
        className="bg-gray-800 border border-gray-600"
        style={{ width: cellSize, height: cellSize }}
      />
    );
  };

  const InventoryItem = ({ item, isSelected, onSelect }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.ITEM,
      item: { id: item.id },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: !loading,
    });

    const x = (item.gridX - 1) * (cellSize + GAP);
    const y = (item.gridY - 1) * (cellSize + GAP);
    const width = item.w * cellSize + (item.w - 1) * GAP;
    const height = item.h * cellSize + (item.h - 1) * GAP;

    return (
      <div
        ref={drag}
        style={{
          transform: `translate(${x}px, ${y}px)`,
          width,
          height,
          opacity: isDragging ? 0.5 : 1,
          zIndex: isDragging ? 10 : 1,
        }}
        onClick={() => onSelect(item.id)}
        className={`absolute bg-yellow-500 text-black montserrat text-xs flex items-center justify-center cursor-move border ${isSelected ? 'border-white' : 'border-gray-600'}`}
      >
        <span className="text-center px-2 truncate">{item.name}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resizeItem(item.id, 1, 0);
          }}
          className="absolute bottom-1 right-1 text-xs bg-gray-800 hover:bg-gray-600 text-white px-1 rounded"
        >
          ➔
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resizeItem(item.id, 0, 1);
          }}
          className="absolute bottom-1 left-1 text-xs bg-gray-800 hover:bg-gray-600 text-white px-1 rounded"
        >
          ↓
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resizeItem(item.id, -1, 0);
          }}
          className="absolute top-1 left-1 text-xs bg-gray-800 hover:bg-gray-600 text-white px-1 rounded"
        >
          ←
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resizeItem(item.id, 0, -1);
          }}
          className="absolute top-1 right-1 text-xs bg-gray-800 hover:bg-gray-600 text-white px-1 rounded"
        >
          ↑
        </button>
      </div>
    );
  };

  const formatProficiency = (prof) => prof.replace(/([A-Z])/g, ' $1').trim();

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="min-h-screen min-w-screen flex flex-col items-center text-white bg-black overflow-clip">
        <div className="top-0 mx-auto mt-4 text-center">
          <h1 className="cinzel text-5xl md:text-7xl landing-title">
            {isEdit ? 'Editar Personaje' : `Crear ${isPC ? 'PC' : 'NPC'}`}
          </h1>
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-4 text-center montserrat animate-pulse">
            {error}
          </p>
        )}
        {loading && (
          <p className="text-yellow-500 text-sm mt-4 text-center montserrat animate-pulse">
            Cargando...
          </p>
        )}
        <form onSubmit={handleSubmit} className="w-10/12 max-w-4xl mx-auto mt-8 p-4 border border-white rounded-xl space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Personaje</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4">
              <div>
                <label className="block text-white montserrat text-sm mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={character.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                  required
                  disabled={loading}
                  aria-label="Nombre del personaje"
                />
              </div>
              {isPC ? (
                <>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">Raza</label>
                    <select
                      name="race"
                      value={character.data.race}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                      disabled={loading}
                      aria-label="Raza del personaje"
                    >
                      {races.map((race) => (
                        <option key={race} value={race}>{race}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">Clase</label>
                    <select
                      name="class"
                      value={character.data.class}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                      disabled={loading}
                      aria-label="Clase del personaje"
                    >
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">Nivel</label>
                    <input
                      type="number"
                      name="level"
                      value={character.data.level}
                      onChange={handleChange}
                      min="1"
                      className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      disabled={loading}
                      aria-label="Nivel del personaje"
                    />
                  </div>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">Bonus XP</label>
                    <input
                      type="number"
                      name="xp"
                      value={character.data.xpBonus}
                      onChange={handleChange}
                      min="0"
                      className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      disabled={loading}
                      aria-label="XP del personaje"
                    />
                  </div>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">XP Total</label>
                    <input
                      type="number"
                      name="xp"
                      value={character.data.xp}
                      onChange={handleChange}
                      min="0"
                      className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                      disabled={loading}
                      aria-label="XP del personaje"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-white montserrat text-sm mb-1">Tipo</label>
                  <select
                    name="npcType"
                    value={character.data.npcType}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                    disabled={loading}
                    aria-label="Tipo de NPC"
                  >
                    {npcTypes.map((npcType) => (
                      <option key={npcType} value={npcType}>{npcType}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="block text-white montserrat text-sm mb-1">Alineamiento</label>
                <select
                  name="alignment"
                  value={character.data.alignment}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                  disabled={loading}
                  aria-label="Alineamiento del personaje"
                >
                  {alignments.map((align) => (
                    <option key={align} value={align}>{align}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Etapa de Edad</label>
                <select
                  name="ageStage"
                  value={character.data.ageStage}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                  disabled={loading}
                  aria-label="Etapa de edad del personaje"
                >
                  {ageStages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage.charAt(0).toUpperCase() + stage.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              {!isPC && character.data.npcType === 'Humanoid' && (
                <>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">Clase</label>
                    <input
                      type="text"
                      name="class"
                      value={character.data.class}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                      disabled={loading}
                      aria-label="Clase del NPC"
                    />
                  </div>
                  <div>
                    <label className="block text-white montserrat text-sm mb-1">XP</label>
                    <input
                      type="number"
                      name="xp"
                      value={character.data.xp}
                      onChange={handleChange}
                      min="0"
                      className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                      disabled={loading}
                      aria-label="XP del NPC"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Ability Scores (PC only) */}
          {isPC && (
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Atributos</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-row text-center w-full">
                {['strength', 'dexterity', 'constitution'].map((score) => (
                  <div key={score} className="flex-1">
                    <label className="block text-white montserrat text-sm mb-1">
                      {score.charAt(0).toUpperCase() + score.slice(1)}
                    </label>
                    <input
                      type="number"
                      name={score}
                      value={character.data.abilityScores[score]}
                      onChange={(e) => handleChange(e, 'abilityScores', score)}
                      min="3"
                      max="18"
                      className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      disabled={loading}
                      aria-label={`Atributo ${score}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-row text-center w-full md:text-md">
                {['intelligence', 'wisdom', 'charisma'].map((score) => (
                  <div key={score} className="flex-1 text-center">
                    <label className="block text-white montserrat text-sm mb-1">
                      {score.charAt(0).toUpperCase() + score.slice(1)}
                    </label>
                    <input
                      type="number"
                      name={score}
                      value={character.data.abilityScores[score]}
                      onChange={(e) => handleChange(e, 'abilityScores', score)}
                      min="3"
                      max="18"
                      className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      disabled={loading}
                      aria-label={`Atributo ${score}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}

          {/* Combat Stats */}
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Estadísticas de Combate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center gap-4">
              <div>
                <label className="block text-white montserrat text-sm mb-1">HP Total</label>
                <input
                  type="number"
                  name="hd"
                  value={character.data.hd}
                  onChange={handleChange}
                  min="1"
                  className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  aria-label="Dados de golpe"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">HP Actual</label>
                <input
                  type="number"
                  name="hp"
                  value={character.data.hp}
                  onChange={handleChange}
                  min="0"
                  className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  aria-label="Puntos de vida"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Salvación</label>
                <input
                  type="number"
                  name="save"
                  value={character.data.save}
                  onChange={handleChange}
                  className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  aria-label="Salvación"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Bono al Golpe</label>
                <input
                  type="number"
                  name="bonusToHit"
                  value={character.data.bonusToHit}
                  onChange={handleChange}
                  className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  aria-label="Bono al golpe"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Clase de Armadura (AC)</label>
                <input
                  name="ac"
                  value={character.data.ac}
                  onChange={handleChange}
                  className="w-36 p-2 bg-gray-800 text-white border border-gray-300 rounded"
                  disabled={loading}
                  aria-label="Clase de armadura"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Clase de Armadura (AC) + Escudo</label>
                <input
                  name="ac"
                  value={character.data.acs}
                  onChange={handleChange}
                  className="w-36 p-2 bg-gray-800 text-white border border-gray-300 rounded"
                  disabled={loading}
                  aria-label="Clase de armadura"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Movimiento en Espacios Cerrados</label>
                <input
                  type="number"
                  name="closeQuarterMovement"
                  value={character.data.closeQuarterMovement}
                  onChange={handleChange}
                  min="0"
                  className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  aria-label="Movimiento en espacios cerrados"
                />
              </div>
              <div>
                <label className="block text-white montserrat text-sm mb-1">Movimiento en Campo Abierto</label>
                <input
                  type="number"
                  name="openFieldMovement"
                  value={character.data.openFieldMovement}
                  onChange={handleChange}
                  min="0"
                  className="w-15 h-15 text-center bg-gray-800 text-white border border-gray-300 rounded-full [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  aria-label="Movimiento en campo abierto"
                />
              </div>
            </div>
          </div>

          {/* Weapon Proficiencies */}
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Habilidades con Armas</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {character.data.weaponProficiencies.map((prof) => (
                <span
                  key={prof}
                  className="inline-flex items-center px-3 py-1 bg-gray-800 text-white border border-gray-300 rounded montserrat text-sm"
                  onClick={() => removeWeaponProficiency(prof)}
                >
                  {prof}
                  <X className="ml-2 w-4 h-4 text-red-600" />
                </span>
              ))}
            </div>
            <select
              onChange={handleWeaponProficiencyChange}
              className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
              disabled={loading}
              aria-label="Añadir habilidad con arma"
            >
              <option value="">Añadir Habilidad con Arma</option>
              {weaponProficiencyOptions
                .filter((prof) => !character.data.weaponProficiencies.includes(prof))
                .map((prof) => (
                  <option key={prof} value={prof}>{prof}</option>
                ))}
            </select>
          </div>

          {/* Non-Weapon Proficiencies */}
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Competencias</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {character.data.nonWeaponProficiencies.length === 0 ? (
                <p className="text-gray-400 text-sm montserrat">
                  No hay competencias seleccionadas
                </p>
              ) : (
                character.data.nonWeaponProficiencies.map((prof) => (
                  <span
                    key={prof.name}
                    className="inline-flex items-center px-3 py-1 mb-4 bg-gray-800 text-white border border-gray-300 rounded montserrat text-sm"
                    onClick={() => removeNonWeaponProficiency(prof.name)}
                  >
                    {formatProficiency(prof.name)} ({prof.value}%)
                    <X className="ml-2 w-4 h-4 text-red-600" />
                  </span>
                ))
              )}
            </div>
            {isEdit ? (
              <Link
                to={`/characters/edit/${character.id}/non-weapon-proficiencies`}
                state={{ character, imagePreview }}
                className={`bg-emerald-800 hover:bg-emerald-600 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Editar habilidades sin armas"
                onClick={(e) => { if (loading) e.preventDefault(); }} // Prevent navigation if loading
              >
                Editar Competencias
              </Link>
            ) : (
              <p className="text-gray-400 text-sm montserrat">
                Las competencias pueden editarse después de guardar el personaje.
              </p>
            )}
          </div>

          {/* Inventory Grid */}
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Inventario</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-white montserrat text-sm mb-1">Nombre del Ítem</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addItem()}
                  className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                  disabled={loading}
                  placeholder="Ingrese el nombre del ítem"
                  aria-label="Nombre del ítem"
                />
              </div>
              <div className="flex space-x-4 space-y-4 md:space-y-0">
                <button
                  type='button'
                  onClick={addItem}
                  disabled={loading || !itemName.trim()}
                  className="bg-emerald-800 hover:bg-emerald-600 h-full text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
                  aria-label="Añadir ítem"
                >
                  Agregar Ítem
                </button>
                <button
                  type='button'
                  onClick={removeItem}
                  disabled={loading || !selectedItemId}
                  className="bg-red-800 hover:bg-red-600 h-full text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
                  aria-label="Eliminar ítem seleccionado"
                >
                  Borrar Ítem
                </button>
              </div>
            </div>
            <div
              className="grid gap-[5px] bg-gray-900 relative"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_COLS}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${GRID_ROWS}, ${cellSize}px)`,
                gap: `${GAP}px`,
                width: `${GRID_COLS * cellSize + (GRID_COLS - 1) * GAP}px`,
                height: `${GRID_ROWS * cellSize + (GRID_ROWS - 1) * GAP}px`,
              }}
            >
              {[...Array(GRID_ROWS)].map((_, y) =>
                [...Array(GRID_COLS)].map((_, x) => (
                  <InventoryCell key={`cell-${x}-${y}`} x={x + 1} y={y + 1} />
                ))
              )}
              {inventoryItems.map((item) => (
                <InventoryItem
                  key={item.id}
                  item={item}
                  isSelected={selectedItemId === item.id}
                  onSelect={setSelectedItemId}
                />
              ))}
            </div>
            <div>
              <button
                type='button'
                onClick={handleManualResize}
                className="hover:bg-blue-700 text-white border text-xs font-bold py-1 px-2 rounded"
                aria-label="Refresh Grid Size"
              >
              Refrescar Grid
              </button>
              <p className="text-xs text-slate-700 mt-1">
                En caso de bug en el tamaño
              </p>
            </div>
          </div>

          {/* Description and Image */}
          <div className="space-y-4">
            <h2 className="cinzel text-2xl text-yellow-500">Apariencia y Lore</h2>
            <div className="flex flex-col items-center space-y-4">
              <div>
                <label htmlFor="profile-image" className="cursor-pointer">
                  <div className="w-40 h-40 rounded-full bg-gray-800 border border-white flex items-center justify-center overflow-hidden">
                    {imagePreview || character.data.picture ? (
                      <img
                        src={imagePreview || character.data.picture}
                        alt="Vista previa del personaje"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-white" />
                    )}
                  </div>
                </label>
                <input
                  id="profile-image"
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={loading}
                  aria-label="Subir imagen del personaje"
                />
                {imageError && (
                  <p className="text-red-600 text-sm mt-2 text-center montserrat">
                    {imageError}
                  </p>
                )}
              </div>
              <textarea
                name="description"
                value={character.data.description}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded h-32"
                placeholder="Describe la leyenda de tu personaje..."
                disabled={loading}
                aria-label="Descripción del personaje"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-800 hover:bg-emerald-600 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
              aria-label="Guardar personaje"
            >
              {loading ? 'Guardando...' : 'Guardar Personaje'}
            </button>
          </div>
        </form>

        {/* Deceased Overlay */}
        {character.data.status === 'deceased' && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-4 rounded-lg border border-white max-w-md w-full text-center">
              <h1 className="cinzel text-4xl text-yellow-500 mb-4">FALLECIDO</h1>
              <div className="space-y-4">
                <div>
                  <label className="block text-white montserrat text-sm mb-1">Historia de la Muerte</label>
                  <textarea
                    name="deathDescription"
                    value={character.data.deathDescription}
                    onChange={handleDeathFieldChange}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded h-24"
                    placeholder="Relata el trágico destino que les sobrevivió..."
                    aria-label="Descripción de la muerte"
                  />
                </div>
                <div>
                  <label className="block text-white montserrat text-sm mb-1">Lugar de Descanso</label>
                  <input
                    type="text"
                    name="restingSite"
                    value={character.data.restingSite}
                    onChange={handleDeathFieldChange}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
                    placeholder="Donde reposan sus cenizas..."
                    aria-label="Lugar de descanso"
                  />
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={handleClickBack}
                  className="bg-slate-600 hover:bg-slate-500 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
                  aria-label="Volver a personajes"
                >
                  Volver
                </button>
                <button
                  onClick={() => setReviveDialogOpen(true)}
                  className="bg-purple-800 hover:bg-purple-600 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
                  aria-label="Revivir personaje"
                >
                  Desafiar la Muerte
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Revive Confirmation Dialog */}
        {reviveDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-4 rounded-lg border border-white max-w-sm w-full text-center">
              <h2 className="cinzel text-2xl text-yellow-500 mb-4">Desafiar el Velo</h2>
              <p className="text-white montserrat mb-4">
                ¿Osas arrancar a {character.name} del abismo? Tal desafío a la muerte podría alterar los hilos del destino.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setReviveDialogOpen(false)}
                  className="bg-slate-600 hover:bg-slate-500 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
                  aria-label="Cancelar resurrección"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleRevive}
                  className="bg-purple-800 hover:bg-purple-600 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white"
                  aria-label="Confirmar resurrección"
                >
                  Resucitar
                </button>
              </div>
            </div>
          </div>
        )}

        <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto w-fit cursor-pointer">
          <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
            Volver
          </p>
        </div>
      </section>
    </DndProvider>
  );
};

export default CharacterSheet;