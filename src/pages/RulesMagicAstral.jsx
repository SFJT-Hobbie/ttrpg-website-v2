import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RulesMagicAstral() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic');
  };

  const handleClickAstralSpells = () => {
    navigate('/rules/magic/astral/spells');
  };


  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Magia Astral
          </h1>
        </div>
        <main className="space-y-6 md:space-y-8 w-full flex flex-col items-center justify-center text-left mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Introduccion
            </h2>
            <p className="text-body">
              La Magia Astral se origina en el poder oculto que reside entre las estrellas, un vasto y enigmático reservorio de energía cósmica que se manifiesta a través de las constelaciones. Estas formaciones celestiales emanan tres doctrinas fundamentales: la magia blanca, que canaliza fuerzas purificadoras y armónicas para la sanación y el equilibrio; la magia negra, que extrae energías destructivas y caóticas para invocar maldiciones o dominación; y la magia gris, que representa un equilibrio precario entre ambas, permitiendo manipulaciones sutiles de la realidad con consecuencias impredecibles. Para dominar esta disciplina, el practicante debe emprender un estudio meticuloso de los astros y cuerpos celestes, analizando sus trayectorias orbitales, comportamientos cíclicos, relaciones interplanetarias, y sus significados esotéricos, filosóficos y nomotéticos, que revelan leyes universales subyacentes a la existencia.
            </p>
            <p className="text-body">
              Además, la representación escrita de estos elementos  mediante diagramas astrológicos, grimorios estelares y símbolos rúnicos derivados de las alineaciones cósmica; constituye una escuela esencial de conocimiento, ya que sirve como puente para invocar y estabilizar el flujo de poder astral. Sin embargo, no basta con el erudición académica; el adepto debe poseer una inclinación innata hacia esta magia, ya sea por herencia de nacimiento, marcada por alineaciones estelares favorables en su horóscopo natal, o adquirida a través de caminos nefastos, como pactos con entidades interestelares o exposiciones a radiaciones cósmicas prohibidas, que a menudo conllevan riesgos de corrupción espiritual o desequilibrio mental.
            </p>
          </div>
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Practicantes
            </h2>
            <p className="text-body">
              La práctica de la magia astral está restringida exclusivamente a la clase de Usuario de Magia, una designación que confiere a sus miembros la capacidad única de canalizar las energías cósmicas derivadas de las estrellas y constelaciones. Un personaje puede acceder a esta clase desde su creación inicial, lo que implica una afinidad inherente con los misterios astrales, posiblemente determinada por factores astrológicos en su concepción o linaje natal. Alternativamente, es posible multiclasear hacia esta disciplina mediante métodos turbios y a menudo peligrosos, que alteran la esencia del individuo de manera irreversible; ejemplos incluyen el consumo ritual del corazón de un elfo o de un ser con Linaje Dracónico, la forja de pactos con entidades interestelares que exigen lealtades absolutas, la exposición deliberada a radiaciones cósmicas que provocan mutaciones impredecibles, o la imposición de maldiciones que vinculan el alma al vacío estelar. Estos caminos, aunque efectivos para desbloquear el potencial astral, conllevan riesgos significativos, tales como corrupción espiritual, inestabilidad mental o repercusiones kármicas, y deben manejarse con extrema precaución en el diseño narrativo del personaje.
            </p>
          </div>
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Caracteristicas
            </h2>
            <ul className="list-disc list-inside text-body space-y-2">
              <li>
                <span className="font-bold">Tipo de Canalizacion:</span> Espacios de hechizo (determinados por nivel en la clase).
              </li>
              <li>
                <span className="font-bold">Repertorio de Hechizos:</span> Variable. Depende de los Hechizos que el Usuario de Magia conozca y haya preparado/memorizado.
              </li>
              <li>
                <span className="font-bold">Fase de Liberacion:</span> Fase de Hechizos.
              </li>
              <li>
                <span className="font-bold">Salvada:</span> Solo PJs y PNJ importantes.
              </li>
              <li>
                <span className="font-bold">Sobrecarga:</span> Lanzar d20 adicional a la salvada de cada objetivo que se desee (incluso la propia si la lanzada es para mantener concentracion en el hechizo). Si el resultado obtenido se prefiere, puede ser elegido por el PJ. En caso de ser elegido, uno de los siguientes efectos sucede (d6):
                <ul className="ml-4 md:ml-8 mt-2 space-y-1">
                  <li>- (1-2) Voces Imposible : El Hechicero oye 1d6 voces por Espacio de Hechizo gastado en cacofonia ininteligible, provocandole una fuerte jaqueca. Notificar el resultado total de la lanzada de d6's al DJ.</li>
                  <li>- (3-4) Marca Corrupta : Poco a poco el cuerpo del Hechicero se ira degradando conforme mas se exponga a la Sobrecarga.</li>
                  <li>- (5-6) Aberracion Estelar: Existe una infima posibilidad (%5) de llamar la atencion de alguna Aberracion Estelar.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-8">
            <a onClick={handleClickAstralSpells} href="/rules/magic/astral/spells" className="bg-purple-700 hover:bg-purple-500 border border-white px-4 py-2 md:p-4 rounded-full cursor-pointer inline-block transition-all duration-300">
              <button className="cursor-pointer text-body">
                Ver Hechizos
              </button>
            </a>
          </div>
        </main>
        <div className="w-full sm:w-2/3 md:w-2/5 mt-4 flex justify-center items-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/astral-magic.png" alt="" />
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
