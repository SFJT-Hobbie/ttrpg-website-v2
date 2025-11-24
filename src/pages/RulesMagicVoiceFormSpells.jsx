import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicVoiceFormSpells() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic/voice-form');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Magia de Voz y Forma: Tablas y Ejemplos
          </h1>
        </div>
        <main className="space-y-6 md:space-y-8 w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="text-left w-full p-2 md:p-4 space-y-4">
            <h2 className="cinzel text-section-title">
              Estructura de las Tablas de Voz y Forma
            </h2>
            <ul className="list-decimal list-inside space-y-6 md:space-y-8 text-body">
              <li className="montserrat">
                Voz
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Ignite
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Representa un verbo que define la acción mágica a realizar, como encender, mover, transformar o apagar. Cada Voz especifica un proceso físico o químico (por ejemplo, combustión, desplazamiento) que se activa al pronunciarla, siempre limitado a lo posible dentro de las leyes naturales. La tabla de Voz enumera el término, su descripción (qué acción realiza) y el catalizador requerido (por ejemplo, material inflamable para Ignite), asegurando que los jugadores comprendan cómo iniciar un efecto mágico.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Forma
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Fire
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Representa un sustantivo o adjetivo que define el objetivo o la naturaleza del efecto, como un material (fuego, agua, metal) o una cualidad (rápido, duro). La Forma se inscribe como una runa en un objeto o superficie, determinando qué se afecta o manipula. La tabla de Formas detalla el término, su descripción (qué representa) y el catalizador requerido (por ejemplo, material inflamable para Fire), proporcionando claridad sobre los elementos necesarios para el efecto.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Catalizador Requerido
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Material inflamable (madera, aceite)
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Especifica el componente ambiental o material necesario para que la combinación de Voz y Forma funcione, asegurando que el efecto sea físicamente o químicamente posible. Por ejemplo, para Ignite + Fire, se requiere un material inflamable como madera o aceite. Este componente refuerza la dependencia de la Magia de Voz y Forma en el entorno, fomentando la preparación estratégica y la interacción con el escenario.
                  </li>
                </ul>
              </li>
              <li className="montserrat">
                Combinación de Voz y Forma
                <ul className="text-small sm:text-base list-disc space-y-2 list-inside ml-4 md:ml-8">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Ignite + Fire
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Describe cómo la Voz y la Forma se combinan para producir un efecto específico. La Voz determina la acción (por ejemplo, encender), mientras que la Forma especifica el objetivo o cualidad (por ejemplo, fuego). Juntas, crean efectos como encender una flecha (Ignite + Fire) o mover una piedra (Move + Stone), siempre limitados por las leyes físicas/químicas y la presencia de catalizadores. Los ejemplos ilustran aplicaciones prácticas, incluyendo mecánicas como daño, duración o tiradas de salvación.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="w-full md:w-1/2 border border-dashed border-white p-4 md:p-6 rounded-2xl mx-auto mt-8">
              <div className="p-2">
                <h3 className="cinzel text-lg sm:text-xl md:text-2xl text-left mb-4">
                  Resumen de Composición de Efectos:
                </h3>
                <p className="text-small sm:text-base">
                  Voz + Forma (Catalizador Requerido: X)
                </p>
                <p className="text-small">
                  Descripción del efecto y sus mecánicas.
                </p>
              </div>
            </div>
          </div>
          <iframe
            src="/assets/pdfs/voice_form_magic.pdf"
            className="w-full h-[80vh] md:h-[90vh] border-2 border-gray-300 rounded-2xl p-2"
            title="Voice and Form Magic PDF"
          ></iframe>
        </main>
        <div className="w-full sm:w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/voice-form.png" alt="Voice and Form Magic Illustration" />
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