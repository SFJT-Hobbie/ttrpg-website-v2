import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicAstralSpells() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic/astral');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Magia Astral: Hechizos
        </h1>
        <main className="space-y-8 w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="text-left w-full p-2 space-y-4">
            <h2 className="montserrat text-xl md:text-4xl">
              Estructura de los Hechizos
            </h2>
            <ul className="list-decimal list-inside space-y-8">
              <li className="montserrat">
                Nombre del Hechizo
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Protection from Evil
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span>  Identifica el hechizo con su nombre canónico, derivado de las fuentes de Advanced Dungeons & Dragons (AD&D) 1ª o 2ª Edición (por ejemplo, Player’s Handbook, Tome of Magic). El nombre proporciona una etiqueta clara y reconocible que refleja la función principal o el tema del hechizo (por ejemplo, protección, daño, ilusión). Sirve como referencia principal para que los jugadores y el MJ seleccionen o discutan hechizos.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Nivel
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10 ">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Nivel: 1
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span> Indica el nivel de poder del hechizo, determinando el nivel mínimo que un lanzador debe tener para aprenderlo o lanzarlo, así como su complejidad y costo de recursos. En AD&D y sistemas OSR, los niveles de hechizo suelen variar de 1 a 9, siendo los niveles bajos accesibles para lanzadores novatos y los altos reservados para practicantes avanzados. Para Protection from Evil, el Nivel 1 indica que es un hechizo básico adecuado para lanzadores principiantes.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Escuela
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10 ">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Escuela: Abjuración
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span> Especifica la categoría mágica del hechizo, basada en las escuelas de magia de AD&D (por ejemplo, Abjuración, Evocación, Ilusión, Nigromancia, Alteración, Conjuración, Encantamiento, Adivinación). La escuela indica el enfoque mecánico y temático del hechizo: Abjuración para Protection from Evil denota efectos protectores o de rechazo. Esto ayuda a los jugadores a comprender el rol del hechizo dentro del marco mágico y su interacción con otras mecánicas del juego (por ejemplo, resistencia a hechizos, contrahechizos).
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Duración
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10 ">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Duración: 2 turnos/nivel
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span> Define cuánto tiempo persiste el efecto del hechizo una vez lanzado. Las duraciones pueden ser instantáneas (efecto inmediato sin persistencia), de tiempo fijo (por ejemplo, 1 hora), o escalables según el nivel del lanzador (por ejemplo, 2 turnos por nivel, como en Protection from Evil). En AD&D/OSR, una "ronda" equivale a 1 minuto y un “turno” equivale típicamente a 10 minutos, por lo que este hechizo dura 20 minutos en el Nivel 1, aumentando con el nivel del lanzador. Este componente es crucial para la planificación táctica y la gestión de recursos.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Rango
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10 ">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Rango: Toque
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span> Especifica la distancia a la que se puede lanzar el hechizo o aplicar su efecto. Los rangos comunes incluyen “Toque” (requiere contacto físico), una distancia fija (por ejemplo, 60 yardas), o una distancia escalable (por ejemplo, 10 yardas/nivel). Para Protection from Evil, “Toque” indica que el lanzador debe tocar al objetivo (aliado o a sí mismo) para aplicar el efecto. Este componente define el uso táctico del hechizo y los requisitos de posicionamiento.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Requisito
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10 ">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Requisito: Cielo nocturno
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span> Introduce una condición específica del sistema para lanzar el hechizo potenciado, exclusiva del marco de Magia Astral. Refleja la necesidad de un catalizador celeste o ambiental, como un cielo nocturno despejado, una constelación específica o una alineación planetaria. Para Protection from Evil, el requisito de un cielo nocturno despejado vincula el hechizo al tema cósmico de la Magia Astral, destacando la dependencia del lanzador de las energías estelares.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Descripción
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10 ">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Crea una barrera que otorga +2 a CA y salvaciones contra criaturas malignas
                  </li>
                  <li>
                    <span className="font-bold">Proposito:</span> Proporciona un resumen conciso del efecto del hechizo, detallando su impacto mecánico y su rol narrativo. Para Protection from Evil, la descripción indica una barrera protectora que mejora la Clase de Armadura (CA) en +2 y otorga un bono de +2 a las tiradas de salvación contra ataques o efectos de criaturas de alineación maligna. Este componente asegura que los jugadores y el MJ comprendan la aplicación práctica y las limitaciones del hechizo.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="w-1/2 border-1 border-dashed border-white p-2 rounded-2xl mx-auto mt-8">
            <div className="p-2">
              <h3 className="text-md text-left mb-4">
                Resumen de Composicion de Hechizos:
              </h3>
              <p className="text-sm">
                Nombre del Hechizo (Nivel: X, Escuela: Y, Duración: Z, Rango: W, Requisito: V)
              </p>
              <p className="text-xs">
                Descripción del hechizo y sus efecto.
              </p>
            </div>
            </div>
          </div>
          <iframe
            src="/assets/pdfs/astral_magic_spells.pdf"
            className="w-full h-[80vh] md:h-[90vh] border-2 border-gray-300 rounded-2xl p-2"
            title="Astral Magic Spells PDF"
          ></iframe>
        </main>
      </div>
      <div className="w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
        <img className="rounded-2xl opacity-25" src="/assets/image/astral-magic.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
