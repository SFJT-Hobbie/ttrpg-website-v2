import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicNatural() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic/');
  };

  const handleClickNaturalSpells = () => {
    navigate('/rules/magic/natural/spells');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Magia Natural
          </h1>
        </div>
        <main className="space-y-6 md:space-y-8 w-full flex flex-col items-center justify-center text-left mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Introduccion
            </h2>
            <p className="text-body">
              La Magia Natural se deriva de la comunión profunda con los espíritus inherentes a la naturaleza, un vasto entramado de energías vitales que permea el mundo físico y sus elementos fundamentales. A diferencia de la Magia Astral, que se ancla en los misterios cósmicos y requiere una afinidad innata o transformaciones extremas, esta disciplina es accesible mediante el estudio dedicado y la armonización personal con el entorno natural, sin barreras arbitrarias o prohibiciones inherentes. Los practicantes aprenden a sintonizar con espíritus elementales (como los guardianes de ríos, bosques o vientos) a través de rituales, meditaciones y observaciones prolongadas, lo que les permite canalizar mana, la esencia vital del mundo, para manipular elementos como el fuego, el agua, la tierra y el aire, o conceptos afines tales como el crecimiento vegetal, la curación orgánica o el equilibrio ecológico. Este enfoque enfatiza la reciprocidad: el mago no solo extrae poder, sino que debe nutrir y respetar los espíritus para evitar repercusiones como desequilibrios ambientales o rechazos espirituales, promoviendo un camino de integración armónica con el ciclo natural de la existencia.
            </p>
          </div>
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Practicantes
            </h2>
            <p className="text-body">
              Los practicantes de la Magia Natural no están limitados a una clase específica, ya que esta disciplina puede ser adoptada por cualquier personaje que invierta tiempo y esfuerzo en su aprendizaje, independientemente de su origen, linaje o alineación previa. El proceso comienza con el desarrollo de la competencia en Magia Natural, adquirida mediante entrenamiento estructurado (como el estudio de herbología, la realización de rituales estacionales o la guia bajo un druida o chaman experimentado) que fomenta una comunión genuina con los espíritus sin restricciones arbitrarias o prohibiciones inherentes. Una vez versados en esta escuela, pueden utilizar su afinidad para canalizar mana y manipular elementos o conceptos relacionados, tales como invocar lluvias para fertilizar tierras o calmar bestias salvajes. Esta accesibilidad universal resalta el énfasis en la dedicación personal y el respeto mutuo, aunque conlleva riesgos como la fatiga espiritual por sobreexplotación o conflictos con espíritus guardianes si se viola el equilibrio natural, lo que exige una práctica ética y sostenible para mantener la efectividad a largo plazo.
            </p>
          </div>
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Caracteristicas
            </h2>
            <ul className="list-disc list-inside text-body space-y-2">
              <li>
                <span className="font-bold">Tipo de Canalizacion:</span> Concentracion de Mana
              </li>
              <li>
                <span className="font-bold">Repertorio de Hechizos:</span> Total (se declara un efecto que se desee, el PJ o DJ busca un hechizo natural que se adecue y resuelve). Con bonificaciones adicionales si se tiene la bendicion con los espiritus afines.
              </li>
              <li>
                <span className="font-bold">Fase de Liberacion:</span> Fase en la que se haya completado la junta de mana y se haya tenido exito en la lanzada de competencia.
              </li>
              <li>
                <span className="font-bold">Salvada:</span> Solo PJs y PNJ importantes.
              </li>
              <li>
                <span className="font-bold">Sobrecarga:</span> Lanzar d6's adicionales para la Concentracion de Mana, o inventir el resultado de la lanzada de competencia (91 se convierte en 19). Si el resultado obtenido se prefiere, puede ser elegido por el PJ. En caso de ser elegido, uno de los siguientes efectos sucede:
                <ul className="ml-4 md:ml-8 mt-2 space-y-1">
                  <li>- (1-2) Profanacion Anti-Natural: El Hechicero corrompe la naturaleza que lo rodea, 1 pie por cada punto de mana requerido para el hechizo lanzado. Esta tierra queda infertil e inerte de manera permanente e incorregible; el agua contaminada; los seres vivos enferman, etc.</li>
                  <li>- (3-4) Profanacion Espiritual: El Hechicero no podra canalizar nuevamente ese encantamiento, o ninguno similar pues ha enojado a los espiritus y debe hacer penitencia antes de que se le permita aprovecharse de su mana nuevamente.</li>
                  <li>- (5-6) Monstruosidad Elemental: Existe una infima posibilidad (%5) de llamar la atencion de alguna Monstruosidad Elemental.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-8">
            <a onClick={handleClickNaturalSpells} href="/rules/magic/natural/spells" className="bg-emerald-700 hover:bg-emerald-500 border border-white px-4 py-2 md:p-4 rounded-full cursor-pointer inline-block transition-all duration-300">
              <button className="cursor-pointer text-body">
                Ver Hechizos
              </button>
            </a>
          </div>
        </main>
        <div className="w-full sm:w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/natural-magic.png" alt="" />
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
