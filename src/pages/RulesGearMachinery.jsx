import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiHammerWrench, mdiHandCoinOutline, mdiGrid, mdiSwordCross } from '@mdi/js';

export default function RulesGearEquipment() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Maquinaria
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
                      <Icon path={mdiHammerWrench} size={1} />
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
                {/* Trampa */}
                <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trampa (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trampa (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              {/* Trampa de Ballesta */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trampa de Ballesta (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trampa de Ballesta (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              {/* Trampa de Púas */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trampa de Púas (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trampa de Púas (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">30p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              {/* Cabrestante */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cabrestante (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cabrestante (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              {/* Polea */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Polea (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Polea (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              {/* Linterna */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Linterna (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Linterna (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">30p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/machinery.png" alt="" />
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