import React from 'react'
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiShieldSunOutline, mdiHandCoinOutline, mdiWeight } from '@mdi/js';

export default function RulesGearArmor() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Armaduras
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
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Armadura</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiShieldSunOutline} size={1} />
                    </div>
                  </th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiHandCoinOutline} size={1} />
                    </div>
                  </th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiWeight} size={1} />
                    </div>      
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-base">
                {/* Objetos Desgastados */}
                <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuero (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">9</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cuero (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gambesón (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">9</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gambesón (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pieles (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Pieles (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">7</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cota de Malla (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">7</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cota de Malla (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cota de Escamas (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cota de Escamas (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Brigandina (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">60p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Brigandina (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">120p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Placa (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">200p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Placa (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">400p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Peto de Acero (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">150p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Peto de Acero (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">300p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Placa Completa (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">300p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Placa Completa (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">600p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Escudo (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Escudo (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Escudo Pesado (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Escudo Pesado (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Rodela (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Rodela (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/armory.png" alt="" />
        </div>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  )
}
