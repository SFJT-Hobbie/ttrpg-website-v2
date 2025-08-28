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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Maquinaria
        </h1>
        <main className="divide-y-1 w-full md:w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <table className="w-full table-auto md:table-fixed mx-auto border-collapse text-center text-xs md:text-sm">
            <caption className="caption-bottom text-center montserrat text-xs italic py-2">
              DE = Desgastado, BE = Buen Estado
            </caption>
            <thead>
              <tr>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Objeto</th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel p-1">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiHammerWrench} size={1} />
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
              {/* Trampa */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Trampa (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1d6</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Trampa (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1d8</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              {/* Trampa de Ballesta */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Trampa de Ballesta (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1d6</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Trampa de Ballesta (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1d8</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              {/* Trampa de Púas */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Trampa de Púas (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1d4</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Trampa de Púas (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1d6</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              {/* Cabrestante */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cabrestante (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cabrestante (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              {/* Polea */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Polea (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Polea (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              {/* Linterna */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Linterna (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Linterna (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/machinery.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}