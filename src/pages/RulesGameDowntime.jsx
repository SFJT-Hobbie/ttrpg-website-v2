import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameDowntime() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Downtime
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Introducción
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            En Eldra'Khazan, el tiempo de inactividad (Downtime), es un respiro donde los personajes se enfrentan a sus propios límites y ambiciones. Lejos de las mazmorras y los salvajes, este período permite a los jugadores forjar su legado, arriesgarlo todo en juegos de azar, desentrañar secretos arcanos, construir refugios contra la decadencia, entrenar para superar sus debilidades o tejer alianzas con facciones y NPCs. Cada acción es una apuesta contra el vacío, resuelta en colaboración con el Maestro del Juego (MJ), quien arbitra los resultados con un equilibrio de justicia y crueldad.
          </p>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Actividades de Downtime
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Juego de Azar:</strong> Los jugadores pueden probar su suerte en tabernas ruinosas o mercados clandestinos, apostando piezas de plata en dados cargados o cartas marcadas. El MJ determina el riesgo y la recompensa. El éxito duplica las apuestas, pero un fallo crítico (96-100) puede llevar a deudas o enemistades.</li>
            <li><strong>Investigación de Magia:</strong> Los magos pueden sumergirse en grimorios polvorientos o consultar a sabios olvidados, buscando hechizos perdidos.</li>
            <li><strong>Construcción:</strong> Edificar un refugio, fortaleza o taller demanda materiales y mano de obra.</li>
            <li><strong>Entrenamiento:</strong> Para subir de nivel o aprender nuevas competencias, los personajes buscan mentores en gremios, en ruinas o santuarios olvidados.</li>
            <li><strong>Interacción con Facciones y NPCs:</strong> Alianzas o rivalidades se forjan mediante trueques, intimidación o diplomacia. El éxito fortalece lazos, pero un fallo puede desencadenar traiciones o emboscadas.</li>
          </ul>
          <p className="text-center text-xs italic">
            Estas son algunos ejemplos de actividades, a manera ilustrativa.
          </p>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Resolución con el Maestro del Juego
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="list-disc pl-6 space-y-2">
            <li>Los jugadores presentan sus intenciones al MJ, detallando recursos, tiempo y riesgos asumidos. El MJ establece las tiradas necesarias (generalmente <span className="text-yellow-600 text-bold underline underline-offset-4">d100%</span> para competencias o <span className="text-yellow-600 text-bold underline underline-offset-4">Target20</span> para desafíos físicos), ajustando las dificultades según el contexto—por ejemplo, +10% por equipo bien mantenido o -15% por condiciones adversas.</li>
            <li>Cada actividad requiere un número de éxitos (definido por la dificultad) en un período de tiempo acordado, con fallos parciales que pueden retrasar el progreso o atraer complicaciones.</li>
            <li>El MJ narra los resultados, integrando el azar y la narrativa: un éxito en investigación podría revelar un hechizo pero alertar a un rival, mientras que un fallo en construcción podría debilitar la estructura, invitando a enemigos.</li>
          </ul>
        </div>
      </main>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/downtime.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}