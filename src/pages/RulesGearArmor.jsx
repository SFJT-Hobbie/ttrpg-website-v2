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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Armaduras
        </h1>
        <main className="divide-y-1 w-full md:w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <table className="w-full table-auto md:table-fixed mx-auto border-collapse text-center text-xs md:text-sm">
            <caption className="caption-bottom text-center montserrat text-xs italic py-2">
              DE = Desgastado, BE = Buen Estado
            </caption>
            <thead>
              <tr>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Armadura</th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel p-1">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiShieldSunOutline} size={1} />
                  </div>
                </th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiHandCoinOutline} size={1} />
                  </div>
                </th>
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiWeight} size={1} />
                  </div>      
                </th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              {/* Objetos Desgastados */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuero (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">9</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cuero (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Gambesón (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">9</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Gambesón (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pieles (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">8p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pieles (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">7</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cota de Malla (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">7</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cota de Malla (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">6</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cota de Escamas (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">6</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Cota de Escamas (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">80p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Brigandina (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">6</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">60p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Brigandina (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">120p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Placa (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">200p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Placa (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">400p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Peto de Acero (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">150p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Peto de Acero (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">300p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Placa Completa (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">300p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Placa Completa (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">600p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Escudo (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Escudo (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Escudo Pesado (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Escudo Pesado (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Rodela (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Rodela (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/armory.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
