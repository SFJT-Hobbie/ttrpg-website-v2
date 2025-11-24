import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiAccountGroup, mdiHandCoinOutline, mdiGrid, mdiAccountMultiple } from '@mdi/js';

export default function RulesGearCompanions() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Compañeros
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
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Compañero</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiAccountGroup} size={1} />
                    </div>
                  </th>
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
                {/* Mula */}
                <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mula (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">30p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">12 (3x4)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mula (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20 (5x4)</td>
                
              </tr>
              {/* Caballo */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Caballo (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">16 (4x4)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Caballo (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20 (5x4)</td>
                
              </tr>
              {/* Buey */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Buey (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20 (5x4)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Buey (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">70p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">30 (6x5)</td>
                
              </tr>
              {/* Perro de Caza */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Perro de Caza (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6 (3x2)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Perro de Caza (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8 (4x2)</td>
                
              </tr>
              {/* Paloma/Halcón/Cuervo Mensajero */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Paloma/Halcón/Cuervo (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1 (1x1)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Paloma/Halcón/Cuervo (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2 (2x1)</td>
                
              </tr>
              {/* Caballo de Guerra */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Caballo de Guerra (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">16 (4x4)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Caballo de Guerra (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">200p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">24 (6x4)</td>
                
              </tr>
              {/* Perro de Guerra */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Perro de Guerra (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6 (3x2)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Perro de Guerra (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8 (4x2)</td>
                
              </tr>
              {/* Lobo Feroz */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lobo Feroz (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">60p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">12 (4x3)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lobo Feroz (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">120p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20 (5x4)</td>
                
              </tr>
              {/* Lagarto Gigante */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lagarto Gigante (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20 (5x4)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lagarto Gigante (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">150p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">30 (6x5)</td>
                
              </tr>
              {/* Jabalí */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Jabalí (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3 (3x1)</td>
                
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Jabalí (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">18 (6x3)</td>
                
              </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/companions.png" alt="" />
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