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
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Ropa
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
                {/* Togas */}
                <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Togas (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Togas (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Manto con Capucha */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Manto con Capucha (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Manto con Capucha (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Túnica */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Túnica (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Túnica (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Capa */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Capa (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Capa (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">12p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pantalones */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pantalones (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pantalones (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Cinturón */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cinturón (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cinturón (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Botas */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Botas (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Botas (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Sandalias */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Sandalias (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Sandalias (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Guantes */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Guantes (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Guantes (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Envolturas de Brazo */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Envolturas de Brazo (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Envolturas de Brazo (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Gorra */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gorra (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gorra (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Pañuelo de Cabeza */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pañuelo de Cabeza (DE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pañuelo de Cabeza (BE)</td>
                 
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/apparel.png" alt="" />
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