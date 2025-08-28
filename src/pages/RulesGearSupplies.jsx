import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiTent, mdiHandCoinOutline, mdiGrid } from '@mdi/js';

export default function RulesGearSupplies() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Suministros
        </h1>
        <main className="divide-y-1 w-full md:w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <table className="w-full table-auto md:table-fixed mx-auto border-collapse text-center text-xs md:text-sm">
            <caption className="caption-bottom text-center montserrat text-xs italic py-2">
              DE = Desgastado, BE = Buen Estado
            </caption>
            <thead>
              <tr>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Objeto</th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiHandCoinOutline} size={1} />
                  </div>
                </th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiGrid} size={1} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              {/* Tienda (Individual) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tienda (Individual) (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tienda (Individual) (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              {/* Tienda (Mediana) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tienda (Mediana) (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tienda (Mediana) (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              {/* Tienda (Grande) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tienda (Grande) (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tienda (Grande) (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              {/* Saco de Dormir */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Saco de Dormir (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Saco de Dormir (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              {/* Raciones */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Raciones (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">0.5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Raciones (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Raciones de Hierro */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Raciones de Hierro (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Raciones de Hierro (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Odre */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Odre (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Odre (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Antorcha */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Antorcha (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">0.1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Antorcha (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">0.5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Linterna */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Linterna (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Linterna (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Frasco de Aceite */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Frasco de Aceite (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Frasco de Aceite (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Mochila */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mochila (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mochila (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Cuerda (50 pies) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuerda (50 pies) (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuerda (50 pies) (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Gancho de Agarre */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Gancho de Agarre (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Gancho de Agarre (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Ganzúas */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Ganzúas (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Ganzúas (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Palanca */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Palanca (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Palanca (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Rodamientos de Bolas */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Rodamientos de Bolas (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Rodamientos de Bolas (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Campanas */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Campanas (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Campanas (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Catalejo */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Catalejo (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Catalejo (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Hachuela */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Hachuela (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Hachuela (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">6p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Cuchillo de Desollar */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuchillo de Desollar (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuchillo de Desollar (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Martillo */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Martillo (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Martillo (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">4p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Mazo */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mazo (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mazo (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">6p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pala */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pala (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pala (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pala Pequeña */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pala Pequeña (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pala Pequeña (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">6p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Clavos */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Clavos (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Clavos (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Cincel */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cincel (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cincel (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">4p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pico */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pico (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pico (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Espejo de Mano */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Espejo de Mano (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Espejo de Mano (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Kit de Cirujano */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Kit de Cirujano (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Kit de Cirujano (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Vial de Vidrio */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Vial de Vidrio (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">0.5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Vial de Vidrio (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Red de Pesca */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Red de Pesca (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Red de Pesca (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">6p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Mapa */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mapa (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mapa (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pergamino */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pergamino (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pergamino (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Carbón */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Carbón (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">0.5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Carbón (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Papiro */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Papiro (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Papiro (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pluma e Tinta */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pluma e Tinta (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pluma e Tinta (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Silbato */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Silbato (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Silbato (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Cuerda (10 pies) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuerda (10 pies) (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuerda (10 pies) (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/supplies.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}