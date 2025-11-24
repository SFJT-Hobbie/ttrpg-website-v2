import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiSwordCross, mdiHandCoinOutline, mdiWeight, mdiCrosshairsGps } from '@mdi/js';

export default function RulesGearWeapons() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/gear');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Armas
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
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Arma</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                    <div className="flex items-center mx-auto justify-center">
                      <Icon path={mdiSwordCross} size={1} />
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
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                  <div className="flex items-center mx-auto justify-center">
                    <Icon path={mdiCrosshairsGps} size={1} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              {/* Espada */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espada (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espada (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Hacha */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Hacha (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Hacha (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Maza */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Maza (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Maza (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Bastón */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Bastón (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Bastón (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Lanza */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lanza (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lanza (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Daga */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Daga (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Daga (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Mayal */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mayal (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">12p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mayal (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Martillo de Guerra */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Martillo de Guerra (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Martillo de Guerra (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Espada a Dos Manos */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espada a Dos Manos (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espada a Dos Manos (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Estrella Matutina */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Estrella Matutina (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Estrella Matutina (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">30p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Guja */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Guja (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Guja (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d10</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Alabarda */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Alabarda (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Alabarda (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d10</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">35p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Bastón de Combate */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Bastón de Combate (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Bastón de Combate (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Arco */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Arco (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Arco (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">150 pies</td>
              </tr>
              {/* Ballesta */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ballesta (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ballesta (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">120 pies</td>
              </tr>
              {/* Honda */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Honda (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Honda (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80 pies</td>
              </tr>
              {/* Arco Corto */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Arco Corto (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">15p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">60 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Arco Corto (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100 pies</td>
              </tr>
              {/* Ballesta de Mano */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ballesta de Mano (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">20p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ballesta de Mano (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">40p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">60 pies</td>
              </tr>
              {/* Ballesta Ligera */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ballesta Ligera (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">22p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ballesta Ligera (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">35p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100 pies</td>
              </tr>
              {/* Flechas */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Flechas (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Flechas (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Virotes */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Virotes (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d6</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Virotes (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d8</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">-</td>
              </tr>
              {/* Piedras */}
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Piedras (DE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4-1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.1p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50 pies</td>
              </tr>
              <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Piedras (BE)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1d4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0.5p</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">80 pies</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/weaponry.png" alt="" />
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