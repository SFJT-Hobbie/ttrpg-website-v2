import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { MapContainer, ImageOverlay, Marker, Tooltip, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from '@mdi/react';
import { mdiPlus, mdiRefresh, mdiUpload, mdiMapMarker, mdiClose, mdiDelete, mdiCheck, mdiMap, mdiCog, mdiMagnify } from '@mdi/js';
import { getMapImageUrl } from '../utils/imageUtils';
import SkeletonPage, { SkeletonBase } from '../components/SkeletonLoader';

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

// Function to create a colored pin icon
function createPinIcon(color) {
  // Create SVG for a pin marker
  const svgIcon = `
    <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 24 16 24s16-15.163 16-24C32 7.163 24.837 0 16 0z" fill="${color}"/>
      <circle cx="16" cy="16" r="6" fill="white" opacity="0.8"/>
    </svg>
  `;
  
  return L.divIcon({
    html: svgIcon,
    className: 'custom-pin-icon',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });
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
  const [pinColor, setPinColor] = useState('#000000');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [pinSearchQuery, setPinSearchQuery] = useState('');
  const [filePreview, setFilePreview] = useState(null);

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
          .select('id, name, image_url, start_lat, start_lng, start_zoom')
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

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    if (type === 'error') {
      setError(message);
    } else {
      setSuccessMessage(message);
    }
    setTimeout(() => {
      if (type === 'error') {
        setError(null);
      } else {
        setSuccessMessage(null);
      }
    }, 4000);
  };

  // Load image dimensions when currentMap changes
  useEffect(() => {
    if (currentMap) {
      setIsLoading(true);
      const img = new Image();
      img.src = currentMap.image_url;
      img.onload = () => {
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        setIsLoading(false);
        showToast('Mapa cargado exitosamente');
      };
      img.onerror = () => {
        setIsLoading(false);
        showToast('Error al cargar la imagen del mapa.', 'error');
      };
    }
  }, [currentMap]);

  // Fetch pins and associated creator usernames (no real-time subscription)
  useEffect(() => {
    const fetchPins = async () => {
      if (!currentMap) return;

      try {
        const { data: pinsData, error: pinsError } = await supabase
          .from('pins')
          .select('id, position_x, position_y, title, description, created_by, color')
          .eq('map_id', currentMap.id);
        if (pinsError) throw pinsError;

        // Fetch usernames for creators
        const uniqueCreators = [...new Set(pinsData.map((p) => p.created_by))];
        const { data: profilesData, error: profilesError } = await supabase
          .from('user_profiles')
          .select('user_id, username')
          .in('user_id', uniqueCreators);
        if (profilesError) throw profilesError;

        const usernameMap = new Map(profilesData.map((p) => [p.user_id, p.username]));
        const enrichedPins = pinsData.map((p) => ({
          ...p,
          creator_username: usernameMap.get(p.created_by) || 'Unknown',
        }));

        setPins(enrichedPins);
      } catch (err) {
        console.error('Fetch pins error:', err);
        setError('Error al cargar pins.');
      }
    };

    fetchPins();
  }, [currentMap]);

  // Handle manual refresh of pins
  const handleRefreshMap = async () => {
    if (!currentMap) return;

    setIsLoading(true);
    try {
      const { data: pinsData, error: pinsError } = await supabase
        .from('pins')
        .select('id, position_x, position_y, title, description, created_by, color')
        .eq('map_id', currentMap.id);
      if (pinsError) throw pinsError;

      // Fetch usernames for creators
      const uniqueCreators = [...new Set(pinsData.map((p) => p.created_by))];
      const { data: profilesData, error: profilesError } = await supabase
        .from('user_profiles')
        .select('user_id, username')
        .in('user_id', uniqueCreators);
      if (profilesError) throw profilesError;

      const usernameMap = new Map(profilesData.map((p) => [p.user_id, p.username]));
      const enrichedPins = pinsData.map((p) => ({
        ...p,
        creator_username: usernameMap.get(p.created_by) || 'Unknown',
      }));

      setPins(enrichedPins);
      setIsLoading(false);
      showToast('Mapa actualizado');
    } catch (err) {
      console.error('Refresh map error:', err);
      setIsLoading(false);
      showToast('Error al actualizar el mapa.', 'error');
    }
  };

  // Handle switching maps from dropdown
  const handleSwitchMap = (mapId) => {
    const selectedMap = maps.find((m) => m.id === mapId);
    if (selectedMap) {
      setCurrentMap(selectedMap);
      setImageDimensions({ width: 0, height: 0 }); // Reset dimensions for new map
    }
  };

  // Handle file selection with preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Handle map upload (owners only)
  const handleUploadMap = async (e) => {
    e.preventDefault();
    if (!isOwner) return;
    if (!file || !mapName.trim()) {
      showToast('Proporcione nombre de mapa y seleccione un archivo.', 'error');
      return;
    }

    setIsUploading(true);
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
          name: mapName.trim(),
          uploaded_by: user.id,
          start_lat: 50, // Default to center percentage y
          start_lng: 50, // Default to center percentage x
          start_zoom: 2, // Default zoom
        })
        .select('id, name, image_url, start_lat, start_lng, start_zoom')
        .single();
      if (mapError) throw mapError;

      setMaps([...maps, newMap]);
      setCurrentMap(newMap);
      setFile(null);
      setMapName('');
      setFilePreview(null);
      setShowUploadModal(false);
      setIsUploading(false);
      showToast('Mapa subido exitosamente');
    } catch (err) {
      console.error('Upload map error:', err);
      setIsUploading(false);
      showToast('Error al subir el mapa.', 'error');
    }
  };

  // Handle setting starter-zone (owners only)
  const handleSetStarterZone = async () => {
    if (!isOwner || !mapRef.current || !currentMap || imageDimensions.width === 0) {
      showToast('Asegúrate de que el mapa esté completamente cargado.', 'error');
      return;
    }

    setIsLoading(true);
    try {
      const map = mapRef.current;
      const center = map.getCenter();
      const percentY = (center.lat / imageDimensions.height) * 100;
      const percentX = (center.lng / imageDimensions.width) * 100;
      const zoom = map.getZoom();
      const { error: updateError } = await supabase
        .from('maps')
        .update({ start_lat: percentY, start_lng: percentX, start_zoom: zoom })
        .eq('id', currentMap.id);
      if (updateError) throw updateError;

      setCurrentMap({ ...currentMap, start_lat: percentY, start_lng: percentX, start_zoom: zoom });
      setMaps(maps.map((m) => (m.id === currentMap.id ? { ...m, start_lat: percentY, start_lng: percentX, start_zoom: zoom } : m)));
      setIsLoading(false);
      showToast('Zona inicial y zoom establecidos');
    } catch (err) {
      console.error('Set starter zone error:', err);
      setIsLoading(false);
      showToast('Error al establecer zona inicial y zoom.', 'error');
    }
  };

  // Handle map click for pin placement
  const handleMapClick = (latlng) => {
    if (!isAddingPin || imageDimensions.width === 0) return;
    const position_x = (latlng.lng / imageDimensions.width) * 100;
    const position_y = (latlng.lat / imageDimensions.height) * 100;
    setNewPinCoords({ position_x, position_y });
    setIsAddingPin(false);
    setShowModal(true);
  };

  // Handle pin creation initiation
  const handleStartAddPin = () => {
    setIsAddingPin(true);
    setPinTitle('');
    setPinDescription('');
    setPinColor(userProfile.color || '#000000');
  };

  // Handle pin click for editing
  const handlePinClick = (pin) => {
    if (!isOwner && pin.created_by !== user.id) return;
    setEditPin(pin);
    setPinTitle(pin.title || '');
    setPinDescription(pin.description || '');
    setPinColor(pin.color || '#000000');
    setShowModal(true);
  };

  // Handle pin creation/editing
  const handleSavePin = async () => {
    if (!pinTitle.trim()) {
      showToast('El título del pin es obligatorio.', 'error');
      return;
    }

    setIsLoading(true);
    try {
      if (editPin) {
        const { error: updateError } = await supabase
          .from('pins')
          .update({ title: pinTitle.trim(), description: pinDescription.trim(), color: pinColor })
          .eq('id', editPin.id);
        if (updateError) throw updateError;

        setPins(pins.map((p) => (p.id === editPin.id ? { ...p, title: pinTitle.trim(), description: pinDescription.trim(), color: pinColor } : p)));
        showToast('Pin actualizado exitosamente');
      } else if (newPinCoords && currentMap) {
        const { position_x, position_y } = newPinCoords;
        const { data: newPinData, error: pinError } = await supabase
          .from('pins')
          .insert({
            id: uuidv4(),
            map_id: currentMap.id,
            position_x,
            position_y,
            title: pinTitle.trim(),
            description: pinDescription.trim(),
            created_by: user.id,
            color: pinColor,
          })
          .select('id, position_x, position_y, title, description, created_by, color')
          .single();
        if (pinError) throw pinError;

        // Enrich new pin with creator username
        const newPinWithUsername = {
          ...newPinData,
          creator_username: userProfile.username || 'Unknown',
        };

        setPins([...pins, newPinWithUsername]);
        showToast('Pin creado exitosamente');
      }

      setIsLoading(false);
      setShowModal(false);
      setIsAddingPin(false);
      setNewPinCoords(null);
      setEditPin(null);
      setPinTitle('');
      setPinDescription('');
      setPinColor('#000000');
    } catch (err) {
      console.error('Save pin error:', err);
      setIsLoading(false);
      showToast('Error al guardar el pin.', 'error');
    }
  };

  // Handle pin deletion
  const handleDeletePin = async () => {
    if (!editPin || (!isOwner && editPin.created_by !== user.id)) return;

    setIsLoading(true);
    try {
      const { error: deleteError } = await supabase
        .from('pins')
        .delete()
        .eq('id', editPin.id);
      if (deleteError) throw deleteError;

      setPins(pins.filter((p) => p.id !== editPin.id));
      setIsLoading(false);
      showToast('Pin eliminado exitosamente');
      setShowModal(false);
      setEditPin(null);
      setPinTitle('');
      setPinDescription('');
      setPinColor('#000000');
    } catch (err) {
      console.error('Delete pin error:', err);
      setIsLoading(false);
      showToast('Error al eliminar pin.', 'error');
    }
  };

  // Handle zoom to pin
  const handleZoomToPin = (pin) => {
    if (!mapRef.current || imageDimensions.width === 0) return;
    const map = mapRef.current;
    const lat = (pin.position_y / 100) * imageDimensions.height;
    const lng = (pin.position_x / 100) * imageDimensions.width;
    map.setView([lat, lng], Math.max(map.getZoom(), 4), { animate: true, duration: 0.5 });
  };

  // Filter pins based on search query
  const filteredPins = pins.filter((pin) => {
    if (!pinSearchQuery.trim()) return true;
    const query = pinSearchQuery.toLowerCase();
    return (
      pin.title?.toLowerCase().includes(query) ||
      pin.description?.toLowerCase().includes(query) ||
      pin.creator_username?.toLowerCase().includes(query)
    );
  });

  if (!room) return <SkeletonPage />;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-x-clip relative">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            {room.name}
          </h1>
          <h2 className="cinzel text-section-title mt-4">
            Mapas
          </h2>
        </div>

        <main className="w-full mx-auto rounded-2xl mt-6 md:mt-8 space-y-6 md:space-y-8 border border-white p-4 md:p-6 lg:p-8">
          {/* Unified Control Panel */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 p-4 border-b border-white/30">
            {/* Map Selector - Always Visible */}
            <div className="flex-1 w-full sm:w-auto">
              <label className="block cinzel text-small mb-2 text-gray-400">Mapa Actual</label>
              <div className="flex items-center gap-2">
                <Icon path={mdiMap} size={1} className="text-gray-400" />
                <select
                  className="flex-1 rounded-2xl border border-white bg-black/90 text-white px-4 py-2 cinzel text-body focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 h-[42px]"
                  value={currentMap?.id || ''}
                  onChange={(e) => handleSwitchMap(e.target.value)}
                  disabled={maps.length === 0}
                >
                  {maps.length === 0 ? (
                    <option value="">No hay mapas disponibles</option>
                  ) : (
                    maps.map((map) => (
                      <option key={map.id} value={map.id}>
                        {map.name || 'Mapa sin nombre'}
                      </option>
                    ))
                  )}
                </select>
                {maps.length > 0 && (
                  <span className="cinzel text-small text-gray-400 whitespace-nowrap">
                    ({maps.length} {maps.length === 1 ? 'mapa' : 'mapas'})
                  </span>
                )}
              </div>
            </div>

            {/* General Controls - Aligned with dropdown */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefreshMap}
                disabled={isLoading || !currentMap}
                className="bg-slate-800 hover:bg-slate-600 disabled:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-4 py-2 rounded-2xl cursor-pointer cinzel text-body flex items-center gap-2 transition-all duration-300 h-[42px]"
                title="Actualizar mapa"
              >
                <Icon path={mdiRefresh} size={1} />
                <span className="hidden sm:inline">Actualizar</span>
              </button>
            </div>

            {/* Owner Controls - Aligned with dropdown */}
            {isOwner && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="bg-slate-800 hover:bg-slate-600 text-white font-bold px-4 py-2 rounded-2xl cursor-pointer cinzel text-body flex items-center gap-2 transition-all duration-300 h-[42px]"
                  title="Subir nuevo mapa"
                >
                  <Icon path={mdiUpload} size={1} />
                  <span className="hidden sm:inline">Subir Mapa</span>
                </button>
                <button
                  onClick={handleSetStarterZone}
                  disabled={!currentMap || imageDimensions.width === 0}
                  className="bg-blue-800 hover:bg-blue-600 disabled:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-4 py-2 rounded-2xl cursor-pointer cinzel text-body flex items-center gap-2 transition-all duration-300 h-[42px]"
                  title="Establecer zona inicial"
                >
                  <Icon path={mdiCog} size={1} />
                  <span className="hidden sm:inline">Zona Inicial</span>
                </button>
              </div>
            )}
          </div>

          {/* Toast Notifications */}
          {error && (
            <div className="fixed top-4 right-4 z-[2000] bg-red-900/90 border border-red-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-slide-in">
              <Icon path={mdiClose} size={1.2} />
              <p className="montserrat text-body">{error}</p>
            </div>
          )}
          {successMessage && (
            <div className="fixed top-4 right-4 z-[2000] bg-green-900/90 border border-green-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-slide-in">
              <Icon path={mdiCheck} size={1.2} />
              <p className="montserrat text-body">{successMessage}</p>
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[2000] bg-black/90 border border-white text-white px-6 py-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <p className="montserrat text-body">Cargando...</p>
              </div>
            </div>
          )}

          {/* Map Display */}
          {currentMap ? (
            imageDimensions.width > 0 ? (
              <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/30">
                <MapContainer
                  center={[
                    (currentMap.start_lat / 100 * imageDimensions.height) || (imageDimensions.height / 2),
                    (currentMap.start_lng / 100 * imageDimensions.width) || (imageDimensions.width / 2),
                  ]}
                  zoom={currentMap.start_zoom || 2}
                  style={{ height: '100%', width: '100%' }}
                  ref={mapRef}
                  crs={L.CRS.Simple}
                  zoomControl={true}
                  minZoom={-3}
                  maxZoom={10}
                  zoomSnap={0}
                  zoomDelta={0.5}
                  className={isAddingPin ? 'leaflet-container adding-pin' : 'leaflet-container'}
                >
                  <ImageOverlay
                    url={getMapImageUrl(currentMap.image_url)}
                    bounds={[[0, 0], [imageDimensions.height, imageDimensions.width]]}
                  />
                  <MapClickHandler onMapClick={handleMapClick} />
                  {pins.map((pin) => (
                    <Marker
                      key={pin.id}
                      position={[
                        (pin.position_y / 100) * imageDimensions.height,
                        (pin.position_x / 100) * imageDimensions.width,
                      ]}
                      icon={createPinIcon(pin.color)}
                      eventHandlers={{ click: () => handlePinClick(pin) }}
                    >
                      <Tooltip direction="top" className="custom-tooltip">
                        <div className="max-w-[200px]">
                          <strong className="cinzel text-base block mb-1" style={{ color: pin.color }}>
                            {pin.title || 'Sin título'}
                          </strong>
                          {pin.description && (
                            <p className="text-xs garamond text-gray-300 mb-1">
                              {pin.description}
                            </p>
                          )}
                          <p className="text-xs garamond text-gray-400">
                            Por: {pin.creator_username}
                          </p>
                        </div>
                      </Tooltip>
                    </Marker>
                  ))}
                </MapContainer>
                {/* Add Pin Button */}
                <button
                  onClick={handleStartAddPin}
                  className="absolute bottom-4 right-4 bg-green-700 hover:bg-green-500 text-white rounded-full p-4 cursor-pointer z-[1000] shadow-lg transition-all duration-300 hover:scale-110"
                  title="Agregar pin"
                >
                  <Icon path={mdiPlus} size={1.2} />
                </button>
                {/* Add Pin Helper Text */}
                {isAddingPin && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/90 border border-green-500 text-green-400 px-6 py-3 rounded-2xl z-[1000] shadow-lg">
                    <p className="cinzel text-body flex items-center gap-2">
                      <Icon path={mdiMapMarker} size={1} />
                      Haz clic en el mapa para colocar el pin
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full max-w-4xl mx-auto">
                <SkeletonBase width="100%" height="500px" className="rounded-2xl" />
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <p className="cinzel text-section-title text-gray-400 mb-4">No hay mapas disponibles.</p>
              {isOwner && (
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="bg-slate-800 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-2xl cursor-pointer cinzel text-body flex items-center gap-2 mx-auto transition-all duration-300"
                >
                  <Icon path={mdiUpload} size={1} />
                  Subir Primer Mapa
                </button>
              )}
            </div>
          )}

          {/* Pin Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-[2000] bg-black/80 backdrop-blur-sm" onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowModal(false);
                setIsAddingPin(false);
                setNewPinCoords(null);
                setEditPin(null);
                setPinTitle('');
                setPinDescription('');
                setPinColor('#000000');
              }
            }}>
              <div className="bg-black border-2 border-white rounded-2xl p-6 md:p-8 w-11/12 md:w-2/3 lg:w-1/2 max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="cinzel text-section-title">
                    {editPin ? 'Editar Pin' : 'Agregar Pin'}
                  </h2>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setIsAddingPin(false);
                      setNewPinCoords(null);
                      setEditPin(null);
                      setPinTitle('');
                      setPinDescription('');
                      setPinColor('#000000');
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon path={mdiClose} size={1.5} />
                  </button>
                </div>
                <form className="flex flex-col space-y-6" onSubmit={(e) => { e.preventDefault(); handleSavePin(); }}>
                  <div>
                    <label className="block cinzel text-body mb-2 text-gray-300">
                      Título <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="w-full rounded-2xl border border-white bg-black/90 text-white px-4 py-3 cinzel text-body focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                      type="text"
                      value={pinTitle}
                      onChange={(e) => setPinTitle(e.target.value)}
                      placeholder="Nombre del pin"
                      maxLength={100}
                      required
                    />
                    <p className="text-small text-gray-500 mt-1 montserrat">
                      {pinTitle.length}/100 caracteres
                    </p>
                  </div>
                  <div>
                    <label className="block cinzel text-body mb-2 text-gray-300">
                      Descripción
                    </label>
                    <textarea
                      className="w-full rounded-2xl border border-white bg-black/90 text-white px-4 py-3 cinzel text-body focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 resize-none"
                      value={pinDescription}
                      onChange={(e) => setPinDescription(e.target.value)}
                      placeholder="Descripción del pin (opcional)"
                      rows={5}
                      maxLength={500}
                    />
                    <p className="text-small text-gray-500 mt-1 montserrat">
                      {pinDescription.length}/500 caracteres
                    </p>
                  </div>
                  <div>
                    <label className="block cinzel text-body mb-2 text-gray-300">
                      Color del Pin
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={pinColor}
                        onChange={(e) => setPinColor(e.target.value)}
                        className="w-16 h-16 rounded-lg cursor-pointer border border-white"
                      />
                      <div className="flex-1 rounded-2xl border border-white bg-black/90 px-4 py-3">
                        <span className="cinzel text-body text-gray-300">{pinColor.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4 border-t border-white/30">
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={isLoading || !pinTitle.trim()}
                        className="flex-1 bg-slate-800 hover:bg-slate-600 disabled:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-2xl cinzel text-body flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <Icon path={mdiCheck} size={1} />
                        Guardar
                      </button>
                      {editPin && (isOwner || editPin.created_by === user.id) && (
                        <button
                          type="button"
                          onClick={handleDeletePin}
                          disabled={isLoading}
                          className="bg-red-800 hover:bg-red-600 disabled:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-2xl cinzel text-body flex items-center justify-center gap-2 transition-all duration-300"
                        >
                          <Icon path={mdiDelete} size={1} />
                          Eliminar
                        </button>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setIsAddingPin(false);
                        setNewPinCoords(null);
                        setEditPin(null);
                        setPinTitle('');
                        setPinDescription('');
                        setPinColor('#000000');
                      }}
                      className="bg-gray-800 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-2xl cinzel text-body transition-all duration-300"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Upload Map Modal */}
          {showUploadModal && isOwner && (
            <div className="fixed inset-0 flex items-center justify-center z-[2000] bg-black/80 backdrop-blur-sm" onClick={(e) => {
              if (e.target === e.currentTarget && !isUploading) {
                setShowUploadModal(false);
                setFile(null);
                setMapName('');
                setFilePreview(null);
              }
            }}>
              <div className="bg-black border-2 border-white rounded-2xl p-6 md:p-8 w-11/12 md:w-2/3 lg:w-1/2 max-w-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="cinzel text-section-title">Subir Nuevo Mapa</h2>
                  <button
                    onClick={() => {
                      if (!isUploading) {
                        setShowUploadModal(false);
                        setFile(null);
                        setMapName('');
                        setFilePreview(null);
                      }
                    }}
                    disabled={isUploading}
                    className="text-gray-400 hover:text-white transition-colors duration-300 disabled:opacity-50"
                  >
                    <Icon path={mdiClose} size={1.5} />
                  </button>
                </div>
                <form onSubmit={handleUploadMap} className="flex flex-col space-y-6">
                  <div>
                    <label className="block cinzel text-body mb-2 text-gray-300">
                      Nombre del Mapa <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="w-full rounded-2xl border border-white bg-black/90 text-white px-4 py-3 cinzel text-body focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                      type="text"
                      value={mapName}
                      onChange={(e) => setMapName(e.target.value)}
                      placeholder="Ej: Mapa del Mundo, Dungeon Nivel 1..."
                      required
                      disabled={isUploading}
                    />
                  </div>
                  <div>
                    <label className="block cinzel text-body mb-2 text-gray-300">
                      Archivo de Imagen <span className="text-red-400">*</span>
                    </label>
                    <div className="border-2 border-dashed border-white/50 rounded-2xl p-6 text-center hover:border-white transition-colors duration-300">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="map-file-input"
                        disabled={isUploading}
                      />
                      <label
                        htmlFor="map-file-input"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        <Icon path={mdiUpload} size={2} className="text-gray-400" />
                        <p className="cinzel text-body text-gray-400">
                          {file ? file.name : 'Haz clic para seleccionar una imagen'}
                        </p>
                        <p className="text-small text-gray-500 montserrat">
                          PNG, JPG, WEBP (máx. 10MB)
                        </p>
                      </label>
                    </div>
                    {filePreview && (
                      <div className="mt-4 rounded-2xl overflow-hidden border border-white/30">
                        <img
                          src={filePreview}
                          alt="Preview"
                          className="w-full h-48 object-contain bg-black/50"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-white/30">
                    <button
                      type="button"
                      onClick={() => {
                        if (!isUploading) {
                          setShowUploadModal(false);
                          setFile(null);
                          setMapName('');
                          setFilePreview(null);
                        }
                      }}
                      disabled={isUploading}
                      className="bg-gray-800 hover:bg-gray-600 disabled:bg-gray-900 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-2xl cinzel text-body transition-all duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isUploading || !file || !mapName.trim()}
                      className="bg-slate-800 hover:bg-slate-600 disabled:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-2xl cinzel text-body flex items-center gap-2 transition-all duration-300"
                    >
                      {isUploading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Subiendo...
                        </>
                      ) : (
                        <>
                          <Icon path={mdiUpload} size={1} />
                          Subir Mapa
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Pins List */}
          {pins.length > 0 && (
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h3 className="cinzel text-section-title">
                  Pins ({filteredPins.length}{filteredPins.length !== pins.length && ` de ${pins.length}`})
                </h3>
                <div className="relative w-full sm:w-auto flex-1 sm:flex-initial max-w-md">
                  <Icon
                    path={mdiMagnify}
                    size={1}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    value={pinSearchQuery}
                    onChange={(e) => setPinSearchQuery(e.target.value)}
                    placeholder="Buscar pins..."
                    className="w-full rounded-2xl border border-white bg-black/90 text-white pl-10 pr-4 py-2 cinzel text-body focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                  />
                </div>
              </div>
              {filteredPins.length === 0 ? (
                <div className="text-center py-8 border border-white/30 rounded-2xl">
                  <p className="cinzel text-body text-gray-400">
                    No se encontraron pins que coincidan con la búsqueda.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPins.map((pin) => (
                    <div
                      key={pin.id}
                      className="border border-white/30 rounded-2xl p-4 md:p-6 hover:border-white transition-all duration-300 bg-black/50"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3 flex-1">
                          <div
                            className="w-4 h-4 rounded-full flex-shrink-0"
                            style={{ backgroundColor: pin.color }}
                          />
                          <h4
                            className="cinzel text-section-title flex-1"
                            style={{ color: pin.color }}
                          >
                            {pin.title || 'Sin título'}
                          </h4>
                        </div>
                        <button
                          onClick={() => handleZoomToPin(pin)}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                          title="Centrar en este pin"
                        >
                          <Icon path={mdiMapMarker} size={1.2} />
                        </button>
                      </div>
                      {pin.description && (
                        <p className="text-body garamond text-gray-300 mb-3 line-clamp-3">
                          {pin.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between pt-3 border-t border-white/20">
                        <div className="flex flex-col gap-1">
                          <p className="text-small text-gray-400 garamond">
                            Por: <span className="text-gray-300">{pin.creator_username}</span>
                          </p>
                          <p className="text-small text-gray-500 montserrat">
                            Posición: {pin.position_x.toFixed(1)}%, {pin.position_y.toFixed(1)}%
                          </p>
                        </div>
                        {(isOwner || pin.created_by === user.id) && (
                          <button
                            onClick={() => handlePinClick(pin)}
                            className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-2xl text-body montserrat transition-all duration-300"
                          >
                            Editar
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>

        <div
          onClick={() => navigate(`/library/lore-room/${roomId}`)}
          className="mt-8 mb-4 text-center cursor-pointer"
        >
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}