import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiAccountArrowUpOutline, mdiGrid, mdiStairsUp, mdiCheckAll, mdiTimerSand, mdiHandCoinOutline } from '@mdi/js'

export default function RulesGameNonWeaponSkills() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Competencias en No-Armas
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <h2 className="cinzel text-section-title">
            Introducción
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              Las Competencias en No-Armas o no armamentísticas son las artes arduamente ganadas por quienes se ganan la vida en el Ojo Aristilia—habilidades para arrancar fuego de podredumbre húmeda, trazar senderos por salvajes malditos o desenterrar secretos de piedra desmoronada. Cada competencia fue forjada con práctica agotadora y pagado con tiempo, plata y determinación. Dominar estas habilidades es robar una ventaja fugaz en una tierra que no perdona, donde cada éxito es una victoria.
            </p>
          </div>

          <h2 className="cinzel text-section-title">
            Habilidades de Exploración Exterior
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto mx-auto border-collapse text-center text-xs sm:text-sm md:text-base">
              <thead>
                <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={.75} />
                </div>
              </th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">
                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div>
              </th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
              <tbody className="text-xs sm:text-sm md:text-base">
                <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Escalada</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">STR</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Encender Fuego</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Supervivencia (Salvaje)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CON</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Resistir Elementos</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CON</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Adaptación a Altura</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CON</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Abrir Caminos</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Navegación (Superficie)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Herboristería</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Forrajeo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Rastreo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Sentido del Clima</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Manejo de Animales</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CHA</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
          </tbody>
        </table>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Exploración de Mazmorras
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Detección de Trampas</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Espeleología</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Supervivencia (Subterránea)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CON</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Navegación (Subterránea)</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Mampostería</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Gestión de Luz</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cartografía</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Audición de Mazmorra</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Sentido de Peligro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Peligros de Mazmorra</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades Físicas y de Movimiento
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Nado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">STR</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Atletismo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">STR</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Montar</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Sigilo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Resistencia</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CON</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Artesanía
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Metalurgia</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">STR</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Navegación Fluvial</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">STR</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Carpintería</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Curtiduría</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Uso de Cuerdas</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Reparación de Armas</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ingeniería</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Cocina</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Carroñero</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades Sociales y de Interacción
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Señalización</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Persuasión</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CHA</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Etiqueta</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CHA</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Intimidación</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CHA</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Liderazgo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CHA</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Trueque</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">CHA</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Conocimiento y Erudición
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Historia</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Lenguajes</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Saber de Mazmorras</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Astronomía</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Astrología</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Alquimia</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Criptografía</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Runología</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Runosofía</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Conocimiento Nomotético</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Ciencias Naturales</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Saber Natural</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Observación</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 mont Montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Saber Oculta</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Especial</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">0p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Saber de Monstruos</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Magia Gris</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Magia Negra</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Magia Blanca</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Raro</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">8s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">100p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Combate y Táctica
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Armas Improvisadas</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Simple</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">10p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tácticas</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tácticas de Emboscada</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Conciencia de Combate</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Primeros Auxilios</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
          </tbody>
        </table>
        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades Misceláneas y Utilitarias
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">Habilidad</th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
                  <th className="border-b border-slate-700 px-2 py-2 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Minería</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">STR</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Latrocinio</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Camuflaje</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Caligrafía</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Falsificación</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">DEX</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Improvisación de Herramientas</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Tasación</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">INT</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Exploración</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Moderado</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">25p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Magia Naturalista</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
            <tr>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Voz y Forma</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">WIS</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">Complejo</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">4s</td>
                  <td className="border-b border-slate-700 px-2 py-2 montserrat">50p</td>
            </tr>
          </tbody>
        </table>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/skills.png" alt="" />
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