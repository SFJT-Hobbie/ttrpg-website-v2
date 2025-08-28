import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiMagicStaff, mdiHandCoinOutline, mdiGrid, mdiBookOpenPageVariant } from '@mdi/js';

export default function RulesGearMagic() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Objetos Mágicos
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
                    <Icon path={mdiMagicStaff} size={1} />
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
                <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiBookOpenPageVariant} size={1} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              {/* Talismán */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Talismán (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Talismán (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Varita */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Varita (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Varita (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Astrolabio */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Astrolabio (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Astrolabio (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">75p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Horologium */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Horologium (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Horologium (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Esfera Armilar */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Esfera Armilar (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Esfera Armilar (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">80p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Telescopio Refractor (Portátil) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Telescopio Refractor (Portátil) (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Telescopio Refractor (Portátil) (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">150p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Telescopio Refractor (Estudio) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Telescopio Refractor (Estudio) (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Telescopio Refractor (Estudio) (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">300p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Telescopio Refractor (Observatorio) */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Telescopio Refractor (Observatorio) (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">200p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Telescopio Refractor (Observatorio) (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">500p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">40</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Códice Estelar */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Códice Estelar (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">0</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">300</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Códice Estelar (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">0</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">500</td>
              </tr>
              {/* Grimorio */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Grimorio (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">0</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">150</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Grimorio (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">0</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">200</td>
              </tr>
              {/* Escriptograma */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Escriptograma (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">0</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">20p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">50</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Escriptograma (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">0</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">60p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">100</td>
              </tr>
              {/* Tinta Alquímica */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tinta de Oro (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Tinta de Oro (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Pergamino */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pergamino (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Pergamino (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">30p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Hilo */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Hilo de Oro (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">3p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Hilo de Oro (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/5</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              {/* Papiro */}
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Papiro (DE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">5p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1/10</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
              <tr>
                <td className="border-b-slate-700 border border-x-0 montserrat">Papiro (BE)</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">15p</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                <td className="border-b-slate-700 border border-x-0 montserrat">-</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/magicitems.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}
