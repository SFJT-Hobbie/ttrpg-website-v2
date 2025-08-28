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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Competencias en No-Armas
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Introducción
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            Las Competencias en No-Armas o no armamentísticas son las artes arduamente ganadas por quienes se ganan la vida en el Ojo Aristilia—habilidades para arrancar fuego de podredumbre húmeda, trazar senderos por salvajes malditos o desenterrar secretos de piedra desmoronada. Cada competencia fue forjada con práctica agotadora y pagado con tiempo, plata y determinación. Dominar estas habilidades es robar una ventaja fugaz en una tierra que no perdona, donde cada éxito es una victoria.
          </p>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Exploración Exterior
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={.75} />
                </div>
              </th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">
                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div>
              </th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Escalada</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">STR</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Encender Fuego</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Supervivencia (Salvaje)</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CON</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Resistir Elementos</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CON</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Adaptación a Altura</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CON</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Abrir Caminos</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Navegación (Superficie)</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Herboristería</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Forrajeo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Rastreo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Sentido del Clima</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Manejo de Animales</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CHA</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Exploración de Mazmorras
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Detección de Trampas</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Espeleología</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Supervivencia (Subterránea)</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CON</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Navegación (Subterránea)</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Mampostería</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Gestión de Luz</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Cartografía</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Audición de Mazmorra</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Sentido de Peligro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Peligros de Mazmorra</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades Físicas y de Movimiento
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Nado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">STR</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Atletismo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">STR</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Montar</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Sigilo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Resistencia</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CON</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Artesanía
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Metalurgia</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">STR</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Navegación Fluvial</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">STR</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Carpintería</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Curtiduría</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Uso de Cuerdas</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Reparación de Armas</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Ingeniería</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">8s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Cocina</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Carroñero</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades Sociales y de Interacción
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Señalización</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Persuasión</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CHA</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Etiqueta</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CHA</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Intimidación</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CHA</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Liderazgo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CHA</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Trueque</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">CHA</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Conocimiento y Erudición
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Historia</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Lenguajes</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Saber de Mazmorras</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Astronomía</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Astrología</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Alquimia</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Criptografía</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Runología</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Runosofía</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">8s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Conocimiento Nomotético</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">8s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Ciencias Naturales</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Saber Natural</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Observación</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 mont Montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Saber Oculta</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Especial</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">0p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Saber de Monstruos</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Magia Gris</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">8s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Magia Negra</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">8s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Magia Blanca</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Raro</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">8s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">100p</td>
            </tr>
          </tbody>
        </table>

        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades de Combate y Táctica
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Armas Improvisadas</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Simple</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">10p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Tácticas</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Tácticas de Emboscada</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Conciencia de Combate</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Primeros Auxilios</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
          </tbody>
        </table>
        <h2 className="cinzel text-2xl md:text-4xl">
          Habilidades Misceláneas y Utilitarias
        </h2>
        <table className="w-full table-auto mx-auto border-collapse text-center text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">Habilidad</th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiAccountArrowUpOutline} size={1} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiGrid} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiStairsUp} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiCheckAll} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiTimerSand} size={.75} />
                </div></th>
              <th className="border-b-slate-700 border border-x-0 border-t-0 cinzel">                <div className="flex flex-col items-center justify-center mx-auto">
                  <Icon path={mdiHandCoinOutline} size={.75} />
                </div></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Minería</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">STR</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Latrocinio</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Camuflaje</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Caligrafía</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Falsificación</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">DEX</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Improvisación de Herramientas</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Tasación</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">INT</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Exploración</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Moderado</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">25p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Magia Naturalista</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
            <tr>
              <td className="border-b-slate-700 border border-x-0 montserrat">Voz y Forma</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">WIS</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">Complejo</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">4s</td>
              <td className="border-b-slate-700 border border-x-0 montserrat">50p</td>
            </tr>
          </tbody>
        </table>
      </main>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/skills.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}