import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiTshirtCrew, mdiHandCoinOutline, mdiGrid } from '@mdi/js';

export default function RulesGearClothing() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Ropa
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
              {/* Togas */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Togas (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Togas (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Manto con Capucha */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Manto con Capucha (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Manto con Capucha (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Túnica */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Túnica (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Túnica (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">8p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Capa */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Capa (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">4p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Capa (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">12p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pantalones */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pantalones (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pantalones (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Cinturón */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cinturón (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cinturón (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Botas */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Botas (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Botas (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Sandalias */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Sandalias (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Sandalias (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Guantes */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Guantes (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Guantes (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Envolturas de Brazo */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Envolturas de Brazo (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Envolturas de Brazo (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">4p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Gorra */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Gorra (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">1p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Gorra (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Pañuelo de Cabeza */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pañuelo de Cabeza (DE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">2p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pañuelo de Cabeza (BE)</td>
                 
                <td className="border-b-slate-700 border border-x-0 montserrat">6p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/apparel.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}