import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameDowntime() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Downtime
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <h2 className="cinzel text-section-title">
            Introducción
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              En Eldra'Khazan, el tiempo de inactividad (Downtime), es un respiro donde los personajes se enfrentan a sus propios límites y ambiciones. Lejos de las mazmorras y los salvajes, este período permite a los jugadores forjar su legado, arriesgarlo todo en juegos de azar, desentrañar secretos arcanos, construir refugios contra la decadencia, entrenar para superar sus debilidades o tejer alianzas con facciones y NPCs. Cada acción es una apuesta contra el vacío, resuelta en colaboración con el Maestro del Juego (MJ), quien arbitra los resultados con un equilibrio de justicia y crueldad.
            </p>
          </div>

          <h2 className="cinzel text-section-title">
            Actividades de Downtime
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <ul className="list-disc pl-4 md:pl-6 space-y-2">
              <li><strong>Juego de Azar:</strong> Los jugadores pueden probar su suerte en tabernas ruinosas o mercados clandestinos, apostando piezas de plata en dados cargados o cartas marcadas. El MJ determina el riesgo y la recompensa. El éxito duplica las apuestas, pero un fallo crítico (96-100) puede llevar a deudas o enemistades.</li>
              <li><strong>Investigación de Magia:</strong> Los magos pueden sumergirse en grimorios polvorientos o consultar a sabios olvidados, buscando hechizos perdidos.</li>
              <li><strong>Construcción:</strong> Edificar un refugio, fortaleza o taller demanda materiales y mano de obra.</li>
              <li><strong>Entrenamiento:</strong> Para subir de nivel o aprender nuevas competencias, los personajes buscan mentores en gremios, en ruinas o santuarios olvidados.</li>
              <li><strong>Interacción con Facciones y NPCs:</strong> Alianzas o rivalidades se forjan mediante trueques, intimidación o diplomacia. El éxito fortalece lazos, pero un fallo puede desencadenar traiciones o emboscadas.</li>
            </ul>
            <p className="text-center text-small italic">
              Estas son algunos ejemplos de actividades, a manera ilustrativa.
            </p>
          </div>

          <h2 className="cinzel text-section-title">
            Resolución con el Maestro del Juego
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <ul className="list-disc pl-4 md:pl-6 space-y-2">
              <li>Los jugadores presentan sus intenciones al MJ, detallando recursos, tiempo y riesgos asumidos. El MJ establece las tiradas necesarias (generalmente <span className="text-yellow-600 font-bold underline underline-offset-4">d100%</span> para competencias o <span className="text-yellow-600 font-bold underline underline-offset-4">Target20</span> para desafíos físicos), ajustando las dificultades según el contexto—por ejemplo, +10% por equipo bien mantenido o -15% por condiciones adversas.</li>
              <li>Cada actividad requiere un número de éxitos (definido por la dificultad) en un período de tiempo acordado, con fallos parciales que pueden retrasar el progreso o atraer complicaciones.</li>
              <li>El MJ narra los resultados, integrando el azar y la narrativa: un éxito en investigación podría revelar un hechizo pero alertar a un rival, mientras que un fallo en construcción podría debilitar la estructura, invitando a enemigos.</li>
            </ul>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/downtime.png" alt="" />
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