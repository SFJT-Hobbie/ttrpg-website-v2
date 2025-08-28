import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameHealingAndDeath() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Sanación y Muerte
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Introducción
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            En el Ojo Aristilia, donde las heridas supuran y la esperanza brilla como una tenue llama, la supervivencia es una lucha diaria contra el vacío que se cierne. La sanación y la muerte son partes inseparables de esta existencia cruel, moldeadas por la resistencia del cuerpo y las decisiones de los vivos.
          </p>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Sanación Natural
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="list-disc pl-6 space-y-2">
            <li>La recuperación natural es un proceso lento y doloroso: un personaje recupera <span className="text-yellow-600 text-bold underline underline-offset-4">1 punto de golpe por día</span> más su modificador de Constitución (mínimo 1).</li>
            <li>En un <span className="text-yellow-600 text-bold underline underline-offset-4">refugio seguro</span>—un raro bastión libre de horrores errantes, donde se permite trabajo ligero, abundan los suministros y se ofrece cuidado—, la sanación se duplica a <span className="text-yellow-600 text-bold underline underline-offset-4">2 puntos de golpe por día</span> más el modificador de Constitución (mínimo 2), ofreciendo un frágil respiro en una tierra que reclama a los débiles.</li>
          </ul>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Muerte y Desangrado
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="list-disc pl-6 space-y-2">
            <li>La muerte acecha de cerca, y su umbral está definido por la resistencia del cuerpo: un personaje muere cuando sus puntos de golpe caen a un número negativo igual a su puntuación de Constitución.</li>
            <li>Por debajo de <span className="text-yellow-600 text-bold underline underline-offset-4">0 puntos de golpe</span>, el personaje comienza a desangrarse, perdiendo <span className="text-yellow-600 text-bold underline underline-offset-4">1 punto de golpe por ronda de combate</span>. Debe realizar una <span className="text-yellow-600 text-bold underline underline-offset-4">Tirada de Salvación</span> para mantenerse consciente.</li>
            <li>Un compañero (o el propio personaje, si aún está consciente) puede atender las heridas para detener el sangrado, pausando la pérdida de puntos de golpe. Sin embargo, solo sanar y llevar al personaje por encima de <span className="text-yellow-600 text-bold underline underline-offset-4">0 puntos de golpe</span> lo libera de la necesidad de cuidados constantes.</li>
            <li>Si un personaje cae inconsciente durante esta prueba, permanece en un estado de vulnerabilidad durante <span className="text-yellow-600 text-bold underline underline-offset-4">1d20 Turnos de Mazmorra menos su nivel y modificador de Constitución</span> (mínimo 1), un sueño peligroso en un reino que no ofrece tregua.</li>
          </ul>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Entierro y Consecuencias
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="list-disc pl-6 space-y-2">
            <li>Cuando un personaje cae, sus camaradas pueden honrarlo con un <span className="text-yellow-600 text-bold underline underline-offset-4">entierro ceremonial</span>, permitiendo que su alma descanse en la desolación. La XP total del caído se divide equitativamente entre los miembros sobrevivientes, como un amargo legado de su lucha compartida.</li>
            <li>Sin embargo, el Ojo Aristilia castiga la profanación de la muerte. Si la <span className="text-yellow-600 text-bold underline underline-offset-4">nigromancia</span> u otras artes prohibidas reviven a un personaje tras un entierro ceremonial, se impone una penalización severa: se resta el <span className="text-yellow-600 text-bold underline underline-offset-4">doble de la XP previamente dividida</span> de la XP individual de cada sobreviviente.</li>
            <li>Poderes superiores—sean dioses o entidades innombrables—no toleran tales transgresiones, y su ira se manifiesta como una maldición duradera sobre quienes desafían las leyes de la muerte.</li>
          </ul>
        </div>
      </main>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/rip.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}