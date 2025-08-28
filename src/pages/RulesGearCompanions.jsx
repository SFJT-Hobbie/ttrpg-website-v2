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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Compañeros
        </h1>
        <main className="divide-y-1 w-full md:w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <table className="w-full table-auto md:table-fixed mx-auto border-collapse text-center text-xs md:text-sm">
            <caption className="caption-bottom text-center montserrat text-xs italic py-2">
              DE = Desgastado, BE = Buen Estado
            </caption>
            <thead>
              <tr>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Compañero</th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel p-1">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiAccountGroup} size={1} />
                  </div>
                </th>
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
              {/* Mula */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mula (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">12 (3x4)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Mula (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20 (5x4)</td>
                
              </tr>
              {/* Caballo */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Caballo (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">16 (4x4)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Caballo (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">80p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20 (5x4)</td>
                
              </tr>
              {/* Buey */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Buey (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20 (5x4)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Buey (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">70p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30 (6x5)</td>
                
              </tr>
              {/* Perro de Caza */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Perro de Caza (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">6 (3x2)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Perro de Caza (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8 (4x2)</td>
                
              </tr>
              {/* Paloma/Halcón/Cuervo Mensajero */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Paloma/Halcón/Cuervo (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1 (1x1)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Paloma/Halcón/Cuervo (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2 (2x1)</td>
                
              </tr>
              {/* Caballo de Guerra */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Caballo de Guerra (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">16 (4x4)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Caballo de Guerra (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">200p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">24 (6x4)</td>
                
              </tr>
              {/* Perro de Guerra */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Perro de Guerra (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">6 (3x2)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Perro de Guerra (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8 (4x2)</td>
                
              </tr>
              {/* Lobo Feroz */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Lobo Feroz (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">60p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">12 (4x3)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Lobo Feroz (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">120p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20 (5x4)</td>
                
              </tr>
              {/* Lagarto Gigante */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Lagarto Gigante (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">80p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20 (5x4)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Lagarto Gigante (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">150p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30 (6x5)</td>
                
              </tr>
              {/* Jabalí */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Jabalí (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3 (3x1)</td>
                
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Jabalí (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">18 (6x3)</td>
                
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/companions.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}