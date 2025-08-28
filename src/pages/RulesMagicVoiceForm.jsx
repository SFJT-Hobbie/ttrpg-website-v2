import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicVoiceForm() {
  const navigate = useNavigate();

  const handleClickVoiceFormSpells = () => {
    navigate('/rules/magic/voice-form/spells');
  };

  const handleClickBack = () => {
    navigate('/rules/magic');
  };


  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Magia de Voz & Forma
        </h1>
        <main className="space-y-8 w-10/12 flex flex-col items-center justify-center text-left mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="space-y-2 p-2 w-full">
            <h2 className="text-xl md:text-3xl">
              Introduccion
            </h2>
            <p>
              La Magia de Voz & Forma representa una disciplina arcana accesible y pragmática, centrada en la manipulación de la realidad mediante la combinación precisa de inscripciones rúnicas denominadas "Formas" y comandos verbales conocidos como "Voz". A diferencia de la Magia Natural, que se basa en la comunión con espíritus elementales, o la Magia Astral, que extrae poder de constelaciones cósmicas, esta magia es inherentemente limitada por principios químicos y físicos, requiriendo que todos los efectos sean factibles dentro de las leyes naturales del mundo y dependan de catalizadores disponibles en el entorno inmediato del practicante.
            </p>
            <p>
              El proceso implica inscribir una o más Formas —símbolos rúnicos que representan conceptos como 'Fuego', 'Flecha' o 'Recibir'— en objetos o superficies, seguidas de la activación mediante una o más Voz —palabras de comando como 'Iniciar' o 'Transferir'— para generar resultados versátiles, tales como encender una flecha con Forma 'Fuego' y Voz 'Iniciar', siempre que exista un material inflamable accesible; en ausencia de ello, se podría transferir fuego desde un objeto ignífugo inscripto con Formas 'Flecha' y 'Fuego', y Voz 'Transferir' e 'Iniciar', mientras la flecha porta Forma 'Recibir' y Voz 'Fuego'. Esta restricción asegura que la magia no trascienda lo posible, fomentando la creatividad estratégica y la preparación ambiental, aunque su versatilidad en aplicaciones cotidianas la hace ideal para escenarios de resolución de problemas o combates tácticos.
            </p>
          </div>
          <div className="space-y-2 p-2 w-full">
            <h2 className="text-xl md:text-3xl">
              Practicantes
            </h2>
            <p>
              Los practicantes de la Magia de Voz & Forma no están confinados a una clase específica, ya que esta disciplina puede ser aprendida por cualquier personaje mediante dedicación sistemática, similar a la Magia Natural, sin prohibiciones inherentes o requisitos innatos que limiten su accesibilidad. El aprendizaje implica el dominio de competencias relacionadas, como el conocimiento de runas y verbos, adquirido a través de estudio teórico, práctica repetida en entornos controlados o tutoría bajo un maestro versado, permitiendo la integración en clases existentes. Una vez competentes, los individuos pueden inscribir Formas y activar Voz para efectos limitados a lo químicamente o físicamente viable, utilizando catalizadores al alcance —por ejemplo, requerir proximidad a una fuente de ignición para un efecto de fuego— lo que enfatiza la importancia de la observación ambiental y la improvisación. Aunque su limitación inherente reduce el potencial para hazañas sobrenaturales, esta magia recompensa la precisión y la preparación.
            </p>
          </div>
          <div className="space-y-2 p-2 w-full">
            <h2 className="text-xl md:text-3xl">
              Caracteristicas
            </h2>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Tipo de Canalizacion:</span> Escritura y enunciacion
              </li>
              <li>
                <span className="font-bold">Repertorio de Hechizos:</span> Restringido a fenomenos posibles fisica y/o quimicamente.
              </li>
              <li>
                <span className="font-bold">Fase de Liberacion:</span> Cualquier inscripcion de Forma puede liberarse con enunciar la palabra de Voz que se le asigno. La Voz pueden ser una o mas palabras clave, y la Forma uno o mas efectos posibles fisica y/o quimicamente.
              </li>
              <li>
                <span className="font-bold">Salvada:</span> Solo PJs y PNJ importantes.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <a onClick={handleClickVoiceFormSpells} href="/rules/magic/voice-form/spells" className="bg-emerald-700 hover:bg-emerald-500 border-white border-1 p-4 rounded-full cursor-pointer">
              <button className="cursor-pointer">
                Ver Hechizos
              </button>
            </a>
          </div>     
        </main>
      </div>
      <div className="w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
        <img className="rounded-2xl opacity-25" src="/assets/image/voice-form.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
