import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { MapContainer, ImageOverlay, CircleMarker, Tooltip, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from '@mdi/react';
import { mdiPlus } from '@mdi/js';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Component to handle map click events
function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
}

export default function LibraryLoreRoomMap() {
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const { user } = useAuth();
  const mapRef = useRef(null);

  const [room, setRoom] = useState(null);
  const [maps, setMaps] = useState([]);
  const [currentMap, setCurrentMap] = useState(null);
  const [pins, setPins] = useState([]);
  const [userProfile, setUserProfile] = useState({ username: '', color: '#000000' });
  const [isOwner, setIsOwner] = useState(false);
  const [file, setFile] = useState(null);
  const [mapName, setMapName] = useState('');
  const [isAddingPin, setIsAddingPin] = useState(false);
  const [newPinCoords, setNewPinCoords] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editPin, setEditPin] = useState(null);
  const [pinTitle, setPinTitle] = useState('');
  const [pinDescription, setPinDescription] = useState('');
  const [error, setError] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showMapDropdown, setShowMapDropdown] = useState(false);

  // Fetch room, maps, and user profile
  useEffect(() => {
    const fetchData = async () => {
      if (!user || !roomId) return;

      try {
        const { data: roomData, error: roomError } = await supabase
          .from('rooms')
          .select('id, name, owner_id, current_map_id')
          .eq('id', roomId)
          .single();
        if (roomError) throw roomError;
        setRoom(roomData);
        setIsOwner(user.id === roomData.owner_id);

        const { data: mapsData, error: mapsError } = await supabase
          .from('maps')
          .select('id, name, image_url, start_lat, start_lng')
          .eq('room_id', roomId);
        if (mapsError) throw mapsError;
        setMaps(mapsData);
        if (mapsData.length > 0) {
          const current = mapsData.find((m) => m.id === roomData.current_map_id) || mapsData[0];
          setCurrentMap(current);
        }

        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('username, color')
          .eq('user_id', user.id)
          .single();
        if (profileError && profileError.code !== 'PGRST116') throw profileError;
        setUserProfile(profileData || { username: 'Sin nombre', color: '#000000' });
      } catch (err) {
        console.error('Fetch data error:', err);
        setError('Error al cargar datos del mapa.');
      }
    };

    fetchData();
  }, [user, roomId]);

  // Fetch pins and set up real-time subscription
  useEffect(() => {
    const fetchPins = async () => {
      if (!currentMap) return;

      try {
        const { data: pinsData, error: pinsError } = await supabase
          .from('pins')
          .select('id, position_x, position_y, title, description, created_by, color')
          .eq('map_id', currentMap.id);
        if (pinsError) throw pinsError;
        setPins(pinsData);
      } catch (err) {
        console.error('Fetch pins error:', err);
        setError('Error al cargar pins.');
      }
    };

    fetchPins();

    if (currentMap) {
      const subscription = supabase
        .channel('pins')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'pins',
            filter: `map_id=eq.${currentMap.id}`,
          },
          (payload) => {
            if (payload.eventType === 'INSERT') {
              setPins((prev) => [...prev, payload.new]);
            }
            if (payload.eventType === 'UPDATE') {
              setPins((prev) => prev.map((p) => (p.id === payload.new.id ? payload.new : p)));
            }
            if (payload.eventType === 'DELETE') {
              setPins((prev) => prev.filter((p) => p.id !== payload.old.id));
            }
          }
        )
        .subscribe();
      return () => supabase.removeChannel(subscription);
    }
  }, [currentMap]);

  // Handle switching maps from dropdown
  const handleSwitchMap = (mapId) => {
    const selectedMap = maps.find((m) => m.id === mapId);
    if (selectedMap) {
      setCurrentMap(selectedMap);
    }
  };

  // Handle map upload (owners only)
  const handleUploadMap = async (e) => {
    e.preventDefault();
    if (!isOwner) return;
    if (!file || !mapName) {
      setError('Proporcione nombre de mapa y seleccione un archivo.');
      return;
    }

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${roomId}/${uuidv4()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('room-maps')
        .upload(fileName, file);
      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from('room-maps').getPublicUrl(fileName);
      const imageUrl = urlData.publicUrl;

      const { data: newMap, error: mapError } = await supabase
        .from('maps')
        .insert({
          id: uuidv4(),
          room_id: roomId,
          image_url: imageUrl,
          name: mapName,
          uploaded_by: user.id,
          start_lat: 0,
          start_lng: 0,
        })
        .select('id, name, image_url, start_lat, start_lng')
        .single();
      if (mapError) throw mapError;

      setMaps([...maps, newMap]);
      setCurrentMap(newMap);
      setFile(null);
      setMapName('');
      setShowUploadForm(false); // Hide form after upload
    } catch (err) {
      console.error('Upload map error:', err);
      setError('Error al subir el mapa.');
    }
  };

  // Handle setting starter-zone (owners only)
  const handleSetStarterZone = async () => {
    if (!isOwner || !mapRef.current || !currentMap) return;

    try {
      const map = mapRef.current;
      const center = map.getCenter();
      const { error: updateError } = await supabase
        .from('maps')
        .update({ start_lat: center.lat, start_lng: center.lng })
        .eq('id', currentMap.id);
      if (updateError) throw updateError;

      setCurrentMap({ ...currentMap, start_lat: center.lat, start_lng: center.lng });
      setMaps(maps.map((m) => (m.id === currentMap.id ? { ...m, start_lat: center.lat, start_lng: center.lng } : m)));
    } catch (err) {
      console.error('Set starter zone error:', err);
      setError('Error al establecer zona inicial.');
    }
  };

  // Handle map click for pin placement
  const handleMapClick = (latlng) => {
    if (!isAddingPin) return;
    const position_x = ((latlng.lng + 180) / 360) * 100;
    const position_y = ((90 - latlng.lat) / 180) * 100;
    setNewPinCoords({ position_x, position_y });
    setIsAddingPin(false);
    setShowModal(true);
  };

  // Handle pin creation initiation
  const handleStartAddPin = () => {
    setIsAddingPin(true);
    setPinTitle('');
    setPinDescription('');
  };

  // Handle pin click for editing
  const handlePinClick = (pin) => {
    if (!isOwner && pin.created_by !== user.id) return;
    setEditPin(pin);
    setPinTitle(pin.title || '');
    setPinDescription(pin.description || '');
    setShowModal(true);
  };

  // Handle pin creation/editing
  const handleSavePin = async () => {
    if (!pinTitle) {
      setError('El título del pin es obligatorio.');
      return;
    }

    try {
      if (editPin) {
        const { error: updateError } = await supabase
          .from('pins')
          .update({ title: pinTitle, description: pinDescription })
          .eq('id', editPin.id);
        if (updateError) throw updateError;

        setPins(pins.map((p) => (p.id === editPin.id ? { ...p, title: pinTitle, description: pinDescription } : p)));
      } else if (newPinCoords && currentMap) {
        const { position_x, position_y } = newPinCoords;
        const { data: newPinData, error: pinError } = await supabase
          .from('pins')
          .insert({
            id: uuidv4(),
            map_id: currentMap.id,
            position_x,
            position_y,
            title: pinTitle,
            description: pinDescription,
            created_by: user.id,
            color: userProfile.color,
          })
          .select('id, position_x, position_y, title, description, created_by, color')
          .single();
        if (pinError) throw pinError;

        setPins([...pins, newPinData]);
      }

      setShowModal(false);
      setIsAddingPin(false);
      setNewPinCoords(null);
      setEditPin(null);
      setPinTitle('');
      setPinDescription('');
    } catch (err) {
      console.error('Save pin error:', err);
      setError('Error al guardar el pin.');
    }
  };

  // Handle pin deletion
  const handleDeletePin = async () => {
    if (!editPin || (!isOwner && editPin.created_by !== user.id)) return;

    try {
      const { error: deleteError } = await supabase
        .from('pins')
        .delete()
        .eq('id', editPin.id);
      if (deleteError) throw deleteError;

      setPins(pins.filter((p) => p.id !== editPin.id));
      setShowModal(false);
      setEditPin(null);
      setPinTitle('');
      setPinDescription('');
    } catch (err) {
      console.error('Delete pin error:', err);
      setError('Error al eliminar pin.');
    }
  };

  if (!room) return <p className="text-white text-center mt-10">Cargando sala...</p>;

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-x-clip relative">
      <h1 className="cinzel text-5xl md:text-7xl mt-4 text-center">
        Mapas - "{room.name}"
      </h1>

      <main className="w-10/12 mx-auto rounded-2xl my-8 space-y-8 border border-white p-4">
        {/* Owner Controls */}
        {isOwner && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="bg-gray-700 hover:bg-gray-500 text-white font-bold p-2 rounded-2xl cursor-pointer cinzel text-sm"
            >
              Add New Map
            </button>
            <button
              onClick={() => setShowMapDropdown(!showMapDropdown)}
              className="bg-gray-700 hover:bg-gray-500 text-white font-bold p-2 rounded-2xl cursor-pointer cinzel text-sm"
            >
              Choose Map
            </button>
            <button
              onClick={handleSetStarterZone}
              className="bg-blue-700 hover:bg-blue-500 text-white font-bold p-2 rounded-2xl cursor-pointer cinzel text-sm"
            >
              Set Starter Zone
            </button>
          </div>
        )}

        {/* Map Upload Form (Toggled by Button) */}
        {showUploadForm && isOwner && (
          <form
            onSubmit={handleUploadMap}
            className="flex flex-col md:flex-row justify-center items-center text-center w-fit mx-auto border-dashed border rounded-2xl p-4"
          >
            <div className="flex flex-col w-auto md:w-150 mx-4 md:mx-0">
              <p className="text-center text-xs text-gray-500 my-2">
                Subir un nuevo mapa
              </p>
              <input
                className="rounded-2xl border w-full md:w-1/2 mx-auto my-2 py-2 bg-black/90 text-center text-lg md:text-xl cinzel focus:outline-none"
                type="text"
                value={mapName}
                onChange={(e) => setMapName(e.target.value)}
                placeholder="Nombre del mapa"
              />
              <input
                className="my-2"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-500 text-white font-bold p-2 rounded-2xl cursor-pointer cinzel w-fit h-fit mx-auto md:m-4 my-2 text-sm"
            >
              Subir Mapa
            </button>
          </form>
        )}

        {/* Map Selection Dropdown (Toggled by Button, Owner Only) */}
        {showMapDropdown && isOwner && maps.length > 0 && (
          <div className="flex flex-col items-center">
            <label className="cinzel text-lg mb-2">Seleccionar Mapa</label>
            <select
              className="rounded-2xl border bg-black/90 text-white p-2 cinzel"
              value={currentMap?.id || ''}
              onChange={(e) => handleSwitchMap(e.target.value)}
            >
              {maps.map((map) => (
                <option key={map.id} value={map.id}>
                  {map.name || 'Mapa sin nombre'}
                </option>
              ))}
            </select>
          </div>
        )}

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

        {/* Map Display */}
        {currentMap ? (
          <div className="relative w-full max-w-4xl mx-auto h-[600px]">
            <MapContainer
              center={[currentMap.start_lat || 0, currentMap.start_lng || 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
              crs={L.CRS.Simple}
              zoomControl={true} // Add zoom buttons
              minZoom={-5}
              maxZoom={18} // Increased for better zooming
              className={isAddingPin ? 'leaflet-container adding-pin' : 'leaflet-container'}
            >
              <ImageOverlay
                url={currentMap.image_url}
                bounds={[[-90, -180], [90, 180]]}
              />
              <MapClickHandler onMapClick={handleMapClick} isAddingPin={isAddingPin} />
              {pins.map((pin) => (
                <CircleMarker
                  key={pin.id}
                  center={[(pin.position_y / 100) * 180 - 90, (pin.position_x / 100) * 360 - 180]}
                  radius={8}
                  fillColor={pin.color}
                  color={pin.color}
                  fillOpacity={0.8}
                  interactive={true}
                  eventHandlers={{ click: () => handlePinClick(pin) }}
                >
                  <Tooltip direction="top">
                    <div className="max-w-150 overflow-clip">
                      <strong className="cinzel text-lg">{pin.title || 'Sin título'}</strong>
                      <br />
                      <p className="w-fit text-xs garamond">
                        {pin.description || 'Sin descripción'}
                      </p>
                    </div>
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>
            <button
              onClick={handleStartAddPin}
              className="absolute bottom-4 right-4 bg-green-700 hover:bg-green-500 text-white rounded-full p-3 cursor-pointer z-[1000]"
            >
              <Icon path={mdiPlus} size={1} />
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay mapas disponibles.</p>
        )}

        {/* Pin Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-[1000]">
            <div className="bg-black border border-white rounded-2xl p-6 w-11/12 md:w-1/3">
              <h2 className="cinzel text-xl mb-4">{editPin ? 'Editar Pin' : 'Agregar Pin'}</h2>
              <form className="flex flex-col space-y-4">
                <input
                  className="rounded-2xl border bg-black/90 text-white p-2 cinzel"
                  type="text"
                  value={pinTitle}
                  onChange={(e) => setPinTitle(e.target.value)}
                  placeholder="Título del pin"
                />
                <textarea
                  className="rounded-2xl border bg-black/90 text-white p-2 cinzel"
                  value={pinDescription}
                  onChange={(e) => setPinDescription(e.target.value)}
                  placeholder="Descripción del pin"
                  rows={4}
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleSavePin}
                    className="bg-gray-700 hover:bg-gray-500 text-white font-bold p-2 rounded-2xl cinzel text-sm"
                  >
                    Guardar
                  </button>
                  {editPin && (isOwner || editPin.created_by === user.id) && (
                    <button
                      type="button"
                      onClick={handleDeletePin}
                      className="bg-red-700 hover:bg-red-500 text-white font-bold p-2 rounded-2xl cinzel text-sm"
                    >
                      Eliminar
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setIsAddingPin(false);
                      setNewPinCoords(null);
                      setEditPin(null);
                      setPinTitle('');
                      setPinDescription('');
                    }}
                    className="bg-gray-700 hover:bg-gray-500 text-white font-bold p-2 rounded-2xl cinzel text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Pins List */}
        {pins.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl cinzel mb-2">Pins</h3>
            <ul className="space-y-2">
              {pins.map((pin) => (
                <li key={pin.id} className="flex justify-between items-center border rounded-2xl p-2 ">
                  <div className="flex flex-row items-center space-x-2 w-2/3">
                    <div>
                      <span className='cinzel text-2xl' style={{ color: pin.color }}>
                        {pin.title || 'Sin título'} 
                      </span>
                      <p className="text-xs text-slate-700 garamond">
                        (X: {pin.position_x.toFixed(2)}%, Y: {pin.position_y.toFixed(2)}%)
                      </p>
                      <p className="text-xl garamond indent-5">
                        {pin.description}
                      </p>
                    </div>
                  </div>
                  {(isOwner || pin.created_by === user.id) && (
                    <button
                      onClick={() => handlePinClick(pin)}
                      className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded-2xl text-sm"
                    >
                      Editar
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

      </main>

      <div
        onClick={() => navigate(`/library/lore-room/${roomId}`)}
        className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer"
      >
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}