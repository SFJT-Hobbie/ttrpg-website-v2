import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicNaturalSpells() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic/natural');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Magia Natural: Hechizos
          </h1>
        </div>
        <main className="space-y-6 md:space-y-8 w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="text-left w-full p-2 md:p-4 space-y-4">
            <h2 className="cinzel text-section-title">
              Estructura de los Hechizos
            </h2>
            <ul className="list-decimal list-inside space-y-6 md:space-y-8 text-body">
              <li className="montserrat">
                Nombre del Hechizo
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Entangle
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Identifica el hechizo con su nombre canónico, derivado de las fuentes de Advanced Dungeons & Dragons (AD&D) 1ª o 2ª Edición (por ejemplo, Player’s Handbook, Tome of Magic). El nombre proporciona una etiqueta clara y reconocible que refleja la función principal o el tema del hechizo (por ejemplo, control de plantas, invocación de animales, manipulación elemental). Sirve como referencia principal para que los jugadores y el MJ seleccionen o discutan hechizos.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Nivel
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Nivel: 1
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Indica el nivel de poder del hechizo, determinando el nivel mínimo que un lanzador debe tener para aprenderlo o lanzarlo, así como su complejidad y costo de recursos. En AD&D y sistemas OSR, los niveles de hechizo suelen variar de 1 a 9, siendo los niveles bajos accesibles para lanzadores novatos y los altos reservados para practicantes avanzados. Para Entangle, el Nivel 1 indica que es un hechizo básico adecuado para lanzadores principiantes.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Escuela
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Escuela: Alteración
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Especifica la categoría mágica del hechizo, basada en las escuelas de magia de AD&D (por ejemplo, Abjuración, Evocación, Ilusión, Nigromancia, Alteración, Conjuración, Encantamiento, Adivinación). La escuela indica el enfoque mecánico y temático del hechizo: Alteración para Entangle denota efectos que transforman o manipulan el entorno natural. Esto ayuda a los jugadores a comprender el rol del hechizo dentro del marco mágico y su interacción con otras mecánicas del juego (por ejemplo, resistencia a hechizos, contrahechizos).
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Duración
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Duración: 1 turno
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Define cuánto tiempo persiste el efecto del hechizo una vez lanzado. Las duraciones pueden ser instantáneas (efecto inmediato sin persistencia), de tiempo fijo (por ejemplo, 1 hora), o escalables según el nivel del lanzador (por ejemplo, 1 turno por nivel). En AD&D/OSR, una "ronda" equivale a 1 minuto y un “turno” equivale típicamente a 10 minutos, por lo que Entangle dura 10 minutos. Este componente es crucial para la planificación táctica y la gestión de recursos.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Rango
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Rango: 80 yardas
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Especifica la distancia a la que se puede lanzar el hechizo o aplicar su efecto. Los rangos comunes incluyen “Toque” (requiere contacto físico), una distancia fija (por ejemplo, 80 yardas, como en Entangle), o una distancia escalable (por ejemplo, 10 yardas/nivel). Para Entangle, “80 yardas” indica que el lanzador puede afectar un área a distancia considerable. Este componente define el uso táctico del hechizo y los requisitos de posicionamiento.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Requisito
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Requisito: Vegetación presente
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Introduce una condición específica del sistema para lanzar el hechizo, exclusiva del marco de Magia Natural. Refleja la necesidad de un catalizador natural, como la presencia de vegetación, un cuerpo de agua, o un entorno específico (por ejemplo, un bosque o río). Para Entangle, el requisito de vegetación presente vincula el hechizo al tema de comunión con los espíritus de la naturaleza, destacando la dependencia del lanzador de elementos naturales.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Descripción
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Enreda a criaturas en un área con vegetación
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Proporciona un resumen conciso del efecto del hechizo, detallando su impacto mecánico y su rol narrativo. Para Entangle, la descripción indica que la vegetación en un área se anima para atrapar criaturas, restringiendo su movimiento. Este componente asegura que los jugadores y el MJ comprendan la aplicación práctica y las limitaciones del hechizo.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="w-full md:w-1/2 border border-dashed border-white p-4 md:p-6 rounded-2xl mx-auto mt-8">
              <div className="p-2">
                <h3 className="cinzel text-lg sm:text-xl md:text-2xl text-left mb-4">
                  Resumen de Composición de Hechizos:
                </h3>
                <p className="text-small sm:text-base">
                  Nombre del Hechizo (Nivel: X, Escuela: Y, Duración: Z, Rango: W, Requisito: V)
                </p>
                <p className="text-small">
                  Descripción del hechizo y sus efectos.
                </p>
              </div>
            </div>
          </div>
          <iframe
            src="/assets/pdfs/natural_magic_spells.pdf"
            className="w-full h-[80vh] md:h-[90vh] border-2 border-gray-300 rounded-2xl p-2"
            title="Natural Magic Spells PDF"
          ></iframe>
        </main>
        <div className="w-full sm:w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/natural-magic.png" alt="Natural Magic Illustration" />
        </div>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  )
}