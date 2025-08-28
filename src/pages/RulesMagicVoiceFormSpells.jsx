import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicVoiceForm() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic/voice-form');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Magia de Voz y Forma: Tablas y Ejemplos
        </h1>
        <main className="space-y-8 w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="text-left w-full p-2 space-y-4">
            <h2 className="montserrat text-xl md:text-4xl">
              Estructura de las Tablas de Voz y Forma
            </h2>
            <ul className="list-decimal list-inside space-y-8">
              <li className="montserrat">
                Voz
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10">
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
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10">
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
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10">
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
                <ul className="text-sm list-disc space-y-2 list-inside ml:5 md:ml-10">
                  <li>
                    <span className="font-bold">Ejemplo:</span> Ignite + Fire
                  </li>
                  <li>
                    <span className="font-bold">Propósito:</span> Describe cómo la Voz y la Forma se combinan para producir un efecto específico. La Voz determina la acción (por ejemplo, encender), mientras que la Forma especifica el objetivo o cualidad (por ejemplo, fuego). Juntas, crean efectos como encender una flecha (Ignite + Fire) o mover una piedra (Move + Stone), siempre limitados por las leyes físicas/químicas y la presencia de catalizadores. Los ejemplos ilustran aplicaciones prácticas, incluyendo mecánicas como daño, duración o tiradas de salvación.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="w-1/2 border-1 border-dashed border-white p-2 rounded-2xl mx-auto mt-8">
              <div className="p-2">
                <h3 className="text-md text-left mb-4">
                  Resumen de Composición de Efectos:
                </h3>
                <p className="text-sm">
                  Voz + Forma (Catalizador Requerido: X)
                </p>
                <p className="text-xs">
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
      </div>
      <div className="w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
        <img className="rounded-2xl opacity-25" src="/assets/image/voice-form.png" alt="Voice and Form Magic Illustration" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}