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
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Suministros
          </h1>
        </div>
        <main className="divide-y divide-white w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto md:table-fixed mx-auto border-collapse text-center text-xs sm:text-sm md:text-base">
              <caption className="caption-bottom text-center montserrat text-small italic py-2">
                DE = Desgastado, BE = Buen Estado
              </caption>
              <thead>
                <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Objeto</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiHandCoinOutline} size={1} />
                    </div>
                  </th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiGrid} size={1} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-base">
                {/* Tienda (Individual) */}
                <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tienda (Individual) (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tienda (Individual) (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              {/* Tienda (Mediana) */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tienda (Mediana) (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tienda (Mediana) (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              {/* Tienda (Grande) */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tienda (Grande) (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tienda (Grande) (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              {/* Saco de Dormir */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Saco de Dormir (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Saco de Dormir (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              {/* Raciones */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raciones (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raciones (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Raciones de Hierro */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raciones de Hierro (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raciones de Hierro (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Odre */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Odre (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Odre (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Antorcha */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Antorcha (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Antorcha (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Linterna */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Linterna (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Linterna (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Frasco de Aceite */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Frasco de Aceite (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Frasco de Aceite (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Mochila */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mochila (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mochila (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Cuerda (50 pies) */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuerda (50 pies) (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuerda (50 pies) (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Gancho de Agarre */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gancho de Agarre (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gancho de Agarre (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Ganzúas */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ganzúas (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ganzúas (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Palanca */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Palanca (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Palanca (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Rodamientos de Bolas */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Rodamientos de Bolas (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Rodamientos de Bolas (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Campanas */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Campanas (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Campanas (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Catalejo */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Catalejo (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Catalejo (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Hachuela */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Hachuela (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Hachuela (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Cuchillo de Desollar */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuchillo de Desollar (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuchillo de Desollar (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Martillo */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Martillo (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Martillo (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Mazo */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mazo (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mazo (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pala */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pala (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pala (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pala Pequeña */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pala Pequeña (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pala Pequeña (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Clavos */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Clavos (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Clavos (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Cincel */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cincel (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cincel (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pico */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pico (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pico (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Espejo de Mano */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espejo de Mano (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espejo de Mano (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Kit de Cirujano */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Kit de Cirujano (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Kit de Cirujano (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Vial de Vidrio */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Vial de Vidrio (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Vial de Vidrio (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Red de Pesca */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Red de Pesca (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Red de Pesca (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Mapa */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mapa (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mapa (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pergamino */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pergamino (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pergamino (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Carbón */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Carbón (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Carbón (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Papiro */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Papiro (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Papiro (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pluma e Tinta */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pluma e Tinta (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pluma e Tinta (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Silbato */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Silbato (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Silbato (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Cuerda (10 pies) */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuerda (10 pies) (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuerda (10 pies) (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/supplies.png" alt="" />
        </div>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}