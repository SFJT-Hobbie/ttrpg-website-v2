import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RulesGameMechanics() {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Mecanicas de Resolucion
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <h2 className="cinzel text-section-title">
            Target20
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p className="text-center text-lg sm:text-xl p-2 md:p-3 border border-white w-fit self-center mx-auto rounded-2xl">
              Tira 1d20 + Modificadores ≥ 20
            </p>
            <p>
              Si la lanzada <span className="text-yellow-600 font-bold underline underline-offset-4">iguala o supera "20"</span>  luego de agregar los modificadores (como modificador de atributo, bonificación de equipo o modificador situacional o AC del enemigo en un ataque), la acción tiene <span className="text-emerald-700 font-bold underline underline-offset-4">éxito</span>. El Maestro del Juego (MJ) puede aplicar penalizaciones/bonificaciones según las circunstancias (por ejemplo, -2 por usar una herramienta desgastada, +2 por un objeto bien mantenido).
            </p>
            <p>
              <span className="text-purple-500">Lanzadas Criticas:</span> Una lanzada de dado cuyo valor es 20, llamado 20 natural, siempre tiene <span className="text-emerald-700 font-bold underline underline-offset-4">éxito</span> (potencialmente con beneficios adicionales, a discreción del MJ). Mientras que una lanzada de dado cuyo valor es 1, conocido como 1 natural, siempre <span className="text-red-700 font-bold underline underline-offset-4">falla</span> (potencialmente con consecuencias graves)
            </p>
          </div>
          <h2 className="cinzel text-section-title">
            D100 %
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p className="text-center text-lg sm:text-xl p-2 md:p-3 border border-white w-fit self-center mx-auto rounded-2xl">
              d100 ≤ Skill
            </p>
            <p>
              Tira dados percentiles (d100) y compara con una puntuación de competencia (por ejemplo, 60% para una tarea especializada). Tirar <span className="text-yellow-600 font-bold underline underline-offset-4">igual o debajo</span> de la puntuación tiene <span className="text-emerald-700 font-bold underline underline-offset-4">éxito</span>; tirar por encima falla. Las puntuaciones de competencia se determinan por clase de personaje, entrenamiento o equipo (por ejemplo, un Grimorio Dorado puede otorgar +10% a tiradas arcanas).
            </p>
            <p>
              <span className="text-purple-500">Lanzadas Criticas:</span> Una lanzada de dado cuyo valor se encuentra en el rango de 1 a 5, siempre tiene <span className="text-emerald-700 font-bold underline underline-offset-4">éxito</span> (potencialmente con beneficios adicionales, a discreción del MJ). Mientras que una lanzada de dado cuyo valor se encuentra en el rango de 96 a 100, siempre <span className="text-red-700 font-bold underline underline-offset-4">falla</span> (potencialmente con consecuencias graves)
            </p>
          </div>
          <div className='w-full md:w-1/2 flex flex-col space-y-2 mx-auto border border-white border-dashed p-4 md:p-6 rounded-2xl'>
            <h3 className="text-lg sm:text-xl">Ejemplo de Juego</h3>
            <p className="text-base sm:text-lg text-center">
              Target20
            </p>
            <p className="text-small sm:text-base">
              Un guerrero intenta golpear a un enemigo con una Espada de Acero.
            </p>
            <p className="text-small sm:text-base">
              Tira 1d20 (7) + modificador de Fuerza (+2) + bonificación de ataque (+1) + Clase de Armadura del Enemigo (+8) = 18, fallando al no alcanzar el objetivo de 20.
            </p>
            <p className="text-base sm:text-lg text-center">
              d100%
            </p>
            <p className="text-small sm:text-base">
              Más tarde, intenta rastrear una bestia con un Perro de Caza (cuya competencia en rastreo es de 50%).
            </p>
            <p className="text-small sm:text-base">
              Tira 42, teniendo éxito pues 42 ≤ 50%.
            </p>
          </div>
        </main>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  )
}


