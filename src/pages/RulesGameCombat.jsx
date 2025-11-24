import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameCombat() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Combate
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col space-y-6 md:space-y-8 montserrat text-body">
            <h2 className="cinzel text-section-title">
              Reglas
            </h2>
            <div className="space-y-2">
              <p className="mb-4 md:mb-8">
                Antes de definir el combate, es necesario determinar si uno siquiera sucede en primer lugar. Para esto existen las mecanicas de Tirada de Sorpresa y Reaccion.
              </p>
              <p>
                <span className="text-purple-500">Tirada de Sorpresa:</span> Cuando un encuentro sucede, el MJ determina si algún bando está sorprendido. Cada bando tira 1d6: <span className="text-yellow-600 font-bold underline underline-offset-4">1-2 indica sorpresa</span>, lo que significa que el bando sorprendido <span className="text-yellow-600 font-bold underline underline-offset-4">pierde una o dos rondas de acciones</span> (aplicando respectivamente al valor de la lanzada).
              </p>
              <p>
                Una tirada exitosa de competencia de sigilo d100% puede otorgar sorpresa automática, y una lanzada exitosa de competencia para estar alerta puede anular la sorpresa.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="text-purple-500">Tirada de Reacción:</span> Cuando un encuentro entre los PJ y PNJ sucede (por ejemplo, al encontrar una bestia errante), el MJ tira 2d6 para la reacción del mismo: 2-5 (<span className="text-red-700">hostil, ataca de inmediato</span>), 6-8 (<span className="text-blue-700">neutral, puede parlamentar, duda</span>), 9-12 (<span className="text-emerald-700">poco cauteloso o amistoso</span>). 
              </p>
              <p>
                Algunos ejemplos de modificadores situacionales son: +1 por la presencia de un <span className="text-yellow-600 font-bold underline underline-offset-4">líder carismático</span>, -1 por blandir un arma <span className="text-yellow-600 font-bold underline underline-offset-4">Gastada</span> (intimidante pero tosca) o +2 por una lanzada de <span className="text-yellow-600 font-bold underline underline-offset-4">competencia de apropiada</span> exitosa.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="text-purple-500">Tirada de Iniciativa:</span> Al inicio del combate, y de cada ronda, cada bando (por ejemplo, el grupo de jugadores vs. enemigos) tira 1d6 para la iniciativa. El bando con la tirada más alta actúa primero en la ronda. Los empates resultan en acciones simultáneas, con todos los efectos resueltos después de que todos actúan.
              </p>
              <p>
                <span className="underline underline-offset-4">Modificadores de Iniciativa:</span> Las tiradas de iniciativa ganan una bonificación +1 por cada modificador positivo de Destreza del personaje con mayor Destreza del grupo. Adicionalmente, ganan +1 situacional por cada lanzada de competencia exitosa de las siguientes que sean aplicables: Tácticas, Tácticas de Emboscada y Conciencia de Combate. Para cada ocasión, siempre se prioriza el personaje con mayor cantidad de bonificaciones positivas para realizar la tirada de iniciativa.
              </p>
            </div>

            <h2 className="cinzel text-section-title">
              Fases de Combate
            </h2>
            <p>
              Descripcion general de la composicion de una ronda de combate.
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-2 text-body">
              <li><span className="text-yellow-500">Resolver Iniciativa:</span> Tira 1d6 por bando para determinar el orden. El bando ganador resuelve todas las acciones primero (ataques, hechizos, etc.), seguido por el bando perdedor.</li>
              <li><span className="text-yellow-500">Declarar Acciones:</span> Los jugadores y el MJ declaran las acciones de su bando (por ejemplo, atacar, lanzar un hechizo, huir). Los objetivos específicos o hechizos deben declararse, pero el movimiento es flexible.</li>
              <li><span className="text-yellow-500">Resolver Acciones:</span> Las acciones se resuelven en fases: <span className="underline underline-offset-4">Fase de Movimiento</span> (utilizando movimiento en Espacios Cerrados o Espacios Abiertos según indique el MJ), <span className="underline underline-offset-4">Fase de Proyectiles</span>, <span className="underline underline-offset-4">Fase Cuerpo a Cuerpo</span> y <span className="underline underline-offset-4">Fase de Hechizos</span>.</li>
              <li><span className="text-yellow-500">Comprobación de Moral:</span> Si los enemigos sufren grandes pérdidas (por ejemplo, la mitad de su número), el MJ tira 2d6 contra una puntuación de moral (por ejemplo, 7 para bandidos): 2-7 (<span className="text-emerald-700 font-bold underline underline-offset-4">siguen luchando</span>), 8-12 (<span className="text-red-700 font-bold underline underline-offset-4">huyen o se rinden</span>). Los jugadores pueden forzar una comprobación con una competencia relevante d100% para intimidarlos.</li>
            </ul>
            <div className="border-t border-white space-y-6 md:space-y-8 pt-4">
              <div className="space-y-2">
                <h3 className="montserrat text-lg sm:text-xl md:text-2xl mt-4 text-yellow-500">
                  Determinar Iniciativa
                </h3>
                <p className="text-body">
                  En esta fase inicial del procedimiento de combate, cada bando (jugadores versus enemigos controlados por el MJ) lanza un dado de seis caras (1d6). El bando con el resultado más alto gana la iniciativa y <span className="underline underline-offset-4">resuelve todas sus acciones declaradas en primer lugar</span>, incluyendo ataques, lanzamientos de hechizos, movimientos y otras interacciones. Posteriormente, el bando perdedor procede con sus acciones. En caso de empate, se recomienda relanzar los dados o resolver simultáneamente, dependiendo de las preferencias del grupo para mantener el flujo del juego. Esta mecánica grupal simplifica el combate en comparación con iniciativas individuales, enfatizando la coordinación de equipo y reduciendo el tiempo de resolución.
                </p>
                <p className="text-body">
                  El bando que pierde la iniciativa declara primero, seguido por el bando ganador, lo que otorga a este último una ventaja estratégica y reactiva al permitirle responder a las acciones anunciadas por el enemigo. Si una acción depende de condiciones variables (por ejemplo, "atacar si el enemigo se acerca"), debe clarificarse para evitar ambigüedades durante la resolución.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="montserrat text-lg sm:text-xl md:text-2xl mt-4 text-yellow-500">
                  Declarar Acciones
                </h3>
                <p className="text-body">
                  Esta del procedimiento de combate es clave, tanto los jugadores como el Maestro del Juego (MJ) deben anunciar las intenciones de sus respectivos bandos de manera explícita y oportuna. Esto incluye especificar acciones como atacar a un objetivo concreto, lanzar un hechizo particular (indicando el tipo de hechizo y su objetivo, si aplica), huir del combate, o realizar otras maniobras como usar un objeto o asistir a un aliado. El movimiento, sin embargo, se mantiene flexible y no requiere una declaración detallada en este momento, permitiendo ajustes basados en el desarrollo del turno. Esta declaración asegura que todas las partes involucradas estén al tanto de las intenciones, promoviendo una resolución justa y estratégica.
                </p>
                <p className="text-body">
                  <span className="underline underline-offset-4">El bando que pierde la iniciativa declara primero, seguido por el bando ganador</span>, lo que otorga a este último una <span className="text-emerald-700">ventaja estratégica y reactiva</span> al permitirle responder a las acciones anunciadas por el enemigo. Si una acción depende de condiciones variables (por ejemplo, "atacar si el enemigo se acerca"), debe clarificarse para evitar ambigüedades durante la resolución.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="montserrat text-lg sm:text-xl md:text-2xl mt-4 text-yellow-500">
                  Resolucion de Acciones
                </h3>
                <p className="text-body">
                  Las acciones declaradas se ejecutan en un orden estructurado dividido en fases secuenciales, lo que permite una resolución ordenada y predecible. Las fases son las siguientes:
                </p>
                <ul className="text-body space-y-2">
                  <li>
                    <span className="font-bold">Fase de Movimiento:</span> Los personajes y criaturas utilizan su capacidad de movimiento según el entorno definido por el MJ (Espacios Cerrados o Abiertos).
                  </li>
                  <li>
                    <span className="font-bold">Fase de Proyectiles:</span> Se resuelven todos los ataques a distancia, como disparos con arcos, hondas o lanzamientos de objetos. Los tiradores declaran objetivos y realizan tiradas de ataque (típicamente 1d20 + modificadores contra la Clase de Armadura del objetivo). Daños se aplican inmediatamente, y se consideran factores como cobertura o rango.
                  </li>
                  <li>
                    <span className="font-bold">Fase Cuerpo a Cuerpo:</span> Aquí se ejecutan los ataques melee, como golpes con espadas, garras o puños. Similar a la fase de proyectiles, se usan tiradas de 1d20 + bonificadores contra la Clase de Armadura, aplicando daños en caso de éxito. Los combatientes deben estar adyacentes.
                  </li>
                  <li>
                    <span className="font-bold">Fase de Hechizos:</span> Finalmente, se lanzan y resuelven los hechizos declarados, incluyendo efectos mágicos como bolas de fuego o curaciones. El lanzador debe verificar si el hechizo se interrumpe (por ejemplo, si recibe daño antes de su turno). Los efectos se aplican según las reglas del hechizo, con tiradas de salvación para objetivos si aplica.
                  </li>
                </ul>
                <p className="text-body">
                  Todas las fases se completan para el bando ganador antes de pasar al perdedor, asegurando que las acciones de un lado puedan influir en las del otro (por ejemplo, eliminando objetivos antes de que actúen).
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-2 mx-auto border border-white border-dashed p-4 md:p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl">Ejemplo de Juego</h3>
            <div className="text-small sm:text-base divide-y divide-white divide-dashed">
              <div className="p-2">
                <span className="text-base sm:text-lg">Sorpresa</span>: 
                <div className="text-small sm:text-base">
                  Un grupo de tres (guerrero, mago, ladrón) encuentra bandidos en una cripta en ruinas. El ladrón tira 1d6 (4) para sorpresa, definiendo que no han sido sorprendidos. La tirada de sorpresa de los bandidos fue de 3, por lo que tampoco estan sorprendidos.
                </div>
              </div>
              <div className="p-2">
                <span className="text-base sm:text-lg">Reaccion</span>:
                <div className="text-small sm:text-base">
                  La tirada de reacción de los bandidos es 2d6 (4, <span className="text-red-700 font-bold underline underline-offset-4">hostil</span>).
                </div>
              </div>
              <div className="p-2">
                <span className="text-base sm:text-lg">Iniciativa</span>: 
                <div className="text-small sm:text-base">
                  El grupo tira 1d6 (6), los bandidos tiran 1d6 (3). El grupo actúa primero.
                </div>
              </div>
              <div className="p-2">
                <span className="text-base sm:text-lg">Declaracion</span>: 
                <div className="text-small sm:text-base">
                  Tras escuchar la declaracion del MJ y conocer como actuaran los bandidos. El mago declara que utilizara magia. El guerrero declara que correra hasta el bandido mas cercano y atacara, y el ladron aclara que se movera para luego  disparar su arco.
                </div>
              </div>
              <div className="p-2">
                <span className="text-base sm:text-lg">Combate</span>: 
                <div className="text-small sm:text-base">
                  En la Fase de Movimiento, el ladron y el guerrero se mueven como habian declarado. Luego, el ladrón dispara un Arco Corto (1d20 + 2 Destreza + CA Bandido = 18, falla) en la Fase de Proyectiles. El guerrero ataca con una Espada de Acero (1d20 + 1 Fuerza + 2 Bonus para Golpear + CA del enemigo = 21, acierta) en la Fase de Cuerpo a Cuerpo. Finalmente, en la Fase de Hechizos, el mago lanza el hechizo que estaba conjurando.
                </div>
              </div> 
              <div className="p-2">
                <span className="text-base sm:text-lg">Moral</span>: 
                <div className="text-small sm:text-base">
                  Los bandidos luego atacan, pero al finalizar su turno, uno huye y los otros se rinden tras fallar una comprobación de moral (2d6 = 9 vs. moral 7).
                </div>
              </div>
            </div>
          </div>
        </main>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}