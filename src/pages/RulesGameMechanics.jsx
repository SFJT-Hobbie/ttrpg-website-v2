import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RulesGameMechanics() {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Mecanicas de Resolucion
        </h1>

      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Target20
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p className="text-center text-xl p-2 border-1 w-fit self-center mx-auto rounded-2xl">
            Tira 1d20 + Modificadores ≥ 20
          </p>
          <p>
            Si la lanzada <span className="text-yellow-600 text-bold underline underline-offset-4">iguala o supera "20"</span>  luego de agregar los modificadores (como modificador de atributo, bonificación de equipo o modificador situacional o AC del enemigo en un ataque), la acción tiene <span className="text-emerald-700 text-bold underline underline-offset-4">éxito</span>. El Maestro del Juego (MJ) puede aplicar penalizaciones/bonificaciones según las circunstancias (por ejemplo, -2 por usar una herramienta desgastada, +2 por un objeto bien mantenido).
          </p>
          <p>
            <span className="text-purple-500">Lanzadas Criticas:</span> Una lanzada de dado cuyo valor es 20, llamado 20 natural, siempre tiene <span className="text-emerald-700 text-bold underline underline-offset-4">éxito</span> (potencialmente con beneficios adicionales, a discreción del MJ). Mientras que una lanzada de dado cuyo valor es 1, conocido como 1 natural, siempre <span className="text-red-700 text-bold underline underline-offset-4">falla</span> (potencialmente con consecuencias graves)
          </p>
        </div>
        <h2 className="cinzel text-2xl md:text-4xl">
          D100 %
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p className="text-center text-xl p-2 border-1 w-fit self-center mx-auto rounded-2xl">
            d100 ≤ Skill
          </p>
          <p>
            Tira dados percentiles (d100) y compara con una puntuación de competencia (por ejemplo, 60% para una tarea especializada). Tirar <span className="text-yellow-600 text-bold underline underline-offset-4">igual o debajo</span> de la puntuación tiene <span className="text-emerald-700 text-bold underline underline-offset-4">éxito</span>; tirar por encima falla. Las puntuaciones de competencia se determinan por clase de personaje, entrenamiento o equipo (por ejemplo, un Grimorio Dorado puede otorgar +10% a tiradas arcanas).
          </p>
          <p>
            <span className="text-purple-500">Lanzadas Criticas:</span> Una lanzada de dado cuyo valor se encuentra en el rango de 1 a 5, siempre tiene <span className="text-emerald-700 text-bold underline underline-offset-4">éxito</span> (potencialmente con beneficios adicionales, a discreción del MJ). Mientras que una lanzada de dado cuyo valor se encuentra en el rango de 96 a 100, siempre <span className="text-red-700 text-bold underline underline-offset-4">falla</span> (potencialmente con consecuencias graves)
          </p>
        </div>
        <div className='w-full md:w-1/2 flex flex-col space-y-2 mx-auto border-1 p-2 rounded-2xl border-dashed'>
          <h3 className="text-lg">Ejemplo de Juego</h3>
          <p className="text-md text-center">
            Target20
          </p>
          <p className="text-sm">
            Un guerrero intenta golpear a un enemigo con una Espada de Acero.
          </p>
          <p className="text-sm">
            Tira 1d20 (7) + modificador de Fuerza (+2) + bonificación de ataque (+1) + Clase de Armadura del Enemigo (+8) = 18, fallando al no alcanzar el objetivo de 20.
          </p>
          <p className="text-md text-center">
            d100%
          </p>
          <p className="text-sm">
            Más tarde, intenta rastrear una bestia con un Perro de Caza (cuya competencia en rastreo es de 50%).
          </p>
          <p className="text-sm">
            Tira 42, teniendo éxito pues 42 ≤ 50%.
          </p>
        </div>
      </main>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}


