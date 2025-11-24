import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameManeuvers() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Maniobras
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <h2 className="cinzel text-section-title">
            Introducción
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              Las maniobras de combate son las tácticas fugaces, que van mas alla del combate convencional. Ya sea cargando con furia temeraria, fingiendo para exponer la debilidad de un enemigo o canalizando energías prohibidas a costa de la movilidad. Estas maniobras exigen precisión y sacrificio, pues incluso el mejor acero o el hechizo más potente pueden fallar. Desde el astillarse de escudos hasta la lenta acumulación de poder arcano, cada acción es una apuesta.
            </p>
            <p>
              Las maniobras de combate se declaran durante la fase de Declarar Acciones de la <span className="text-yellow-600 font-bold underline underline-offset-4">Iniciativa Clásica</span>. Modifican o reemplazan acciones estándar (como ataques, movimiento, lanzamiento de hechizos) e interactúan con el sistema <span className="text-yellow-600 font-bold underline underline-offset-4">Target20</span> para ataques y salvaciones, o <span className="text-yellow-600 font-bold underline underline-offset-4">d100%</span> para tareas basadas en habilidades o arcanas.
            </p>
          </div>
          <h2 className="cinzel text-section-title">
            Reglas
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              Cada maniobra tiene requisitos específicos (como equipo, posicionamiento, inmovilidad) y efectos mecánicos, a menudo involucrando tiradas <span className="text-yellow-600 font-bold underline underline-offset-4">Target20</span> para ataques o salvaciones, o tiradas de competencia <span className="text-yellow-600 font-bold underline underline-offset-4">d100%</span> para habilidades.
            </p>
            <p>
              Las maniobras de lanzamiento de hechizos (<span className="text-yellow-600 font-bold underline underline-offset-4">Lanzar Hechizo</span>, <span className="text-yellow-600 font-bold underline underline-offset-4">Canalizar Magia Natural</span>) inmovilizan al lanzador, reflejando la intensa concentración requerida para manejar magia en un mundo en decadencia.
            </p>
          </div>
          <h2 className="cinzel text-section-title">
            Maniobras
          </h2>
          <div className="flex flex-col space-y-2 divide-y divide-dashed divide-slate-700 montserrat text-body">
          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Carga</h3>
            <p>Te lanzas hacia un enemigo con abandono temerario, tu impulso alimentando un golpe aplastante pero dejándote expuesto a represalias.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Mover al menos 20 pies en línea recta hacia el objetivo, sin obstáculos por terreno pesado.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Realiza un ataque cuerpo a cuerpo con +2 a la tirada. En caso de acertar, duplica los dados de daño del arma al acertar o los triplica si es una carga con montura. Por una ronda luego de la carga, ataques contra ti tienen una bonificación de +2.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Resuelta durante la Fase de Movimiento de tu bando.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un guerrero carga contra un esqueleto con su espada (Fuerza +1, Bonus para Golpear +1, 9 CA enemigo). Tira 1d20 (9) + 1 + 1 + 9 = 20, acertando por 1d6 (daño de arma) + 1d6 (bonus de daño por carga) = (9). Por una ronda completa luego de esta carga, ataques contra el guerrero tendras +2 para acertar.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Preparar contra Carga</h3>
            <p>Preparas un arma de asta para enfrentar a un enemigo que carga, convirtiendo su velocidad en su perdición. Tu postura es resuelta pero inmóvil.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un arma de asta y permanecer inmóvil. No puede usarse si te moviste esta ronda.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Si un enemigo que carga te ataca, realiza un ataque cuerpo a cuerpo antes de que su ataque se resuelva. Al acertar, inflige el doble de dados de daño o el triple si el enemigo atacó montado. Un ataque exitoso impone una penalidad de -2 al ataque del que Carga.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Resuelta cuando el enemigo carga, antes de que realice su ataque.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un luchador prepara una Lanza (Fuerza +1, Bonus para Golpear +1, 9 CA enemigo) contra un lobo que carga. Tira 1d20 (10) + 1 + 1 + 9 = 21, acertando por 1d6  (daño de arma) + 1d6 (bonus de daño contra carga) = 10, e imponiendo una penalidad de -2 al ataque del lobo cuando resuelva la Carga.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Destrozar Escudo</h3>
            <p>Sacrificas tu escudo para absorber un golpe aplastante, sus fragmentos un baluarte fugaz contra el abrazo de la muerte.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un escudo. No puede usarse si el escudo está destruido.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Cuando eres golpeado por un ataque, declara <span className="text-yellow-600 text-bold underline underline-offset-4">Destrozar Escudo</span> antes de que se tire el daño. El escudo absorbe todo el daño pero se destruye (se elimina del inventario). Haz una Lanzada de Salvación para evitar quedar aturdido (-2 a los ataques hasta tu próximo turno). Los escudos en <span className="text-yellow-600 text-bold underline underline-offset-4">Buen Estado</span> otorgan +2 a esta salvada, y en lugar de destruirse, se convierten en su versión desgastada.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span>  Resuelta inmediatamente al ser golpeado.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un caballero con un escudo pesado desgastado es golpeado por un ogro. Declara Destrozar Escudo, negando el daño pero perdiendo el escudo. Lanzada de Salvación: 1d20 (9) + 6 (Salvada) + 2 (Bonus de Clase) = 17, fallando. Queda aturdido (-2 a los ataques) por una ronda.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Preparar Proyectiles</h3>
            <p>Estabilizas tu puntería, esperando que un enemigo entre en tu mira. La paciencia es un costo amargo, pero un disparo bien colocado puede acabar con una amenaza.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un arma a distancia. No puedes moverte esta ronda antes de disparar.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Realiza un ataque a distancia con +2 a la tirada y +2 al daño al acertar. No puedes atacar hasta que un objetivo esté a rango y a la vista, perdiendo la acción si no aparece un objetivo al final de la ronda. Una lanzada de competencia de <span className="text-yellow-600 text-bold underline underline-offset-4">Tácticas de Emboscada</span> d100% (por ejemplo, 50%) otorga +1 a la tirada de ataque y daño si tiene éxito.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span>  Resuelta durante la Fase de Proyectiles de tu bando, retrasada hasta que aparezca un objetivo.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un ladrón se prepara con su arco largo (Destreza +1, Bonus para Golpear +4, 7 CA enemigo). Tira d100% de <span className="text-yellow-600 text-bold underline underline-offset-4">Tácticas de Emboscada</span> (50%, tira 40, +1). Dispara: 1d20 (9) + 4 + 2 + 1 + 7 = 23, acertando por 1d6 + 3 (7).</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Retirada</h3>
            <p>Te deslizas fuera del alcance de un enemigo, priorizando la supervivencia sobre el valor. Cada paso es una retirada calculada en un mundo que castiga a los incautos.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Estar en combate cuerpo a cuerpo (adyacente a un enemigo).</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Desplazate hasta tu movimiento completo sin provocar un ataque de un enemigo en combate. Haz una Lanzada de Salvación para evitar ataques de oportunidad de otros enemigos adyacentes. El éxito permite una retirada segura; el fallo otorga a los enemigos un ataque con una bonificacion de +2.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Resuelta durante la Fase de Movimiento de tu bando.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base"> Un ladrón se retira de un ghoul (+5 Bonus de Salvada, +2 Bonus de Clase). Mueve 30 pies y tira 1d20 (15) + 5 + 2 = 22, teniendo éxito y evitando ataques de otros dos ghouls cercanos.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Finta</h3>
            <p className="text-body"><span className="text-purple-500">Descripción:</span> Engañas a un enemigo con un golpe falso, exponiendo su guardia.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un arma cuerpo a cuerpo. Requiere una competencia de intimidación d100% (por ejemplo, 40%).</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Tira d100% de intimidación. El éxito otorga +4 a tu próximo ataque cuerpo a cuerpo contra el objetivo esta ronda o la siguiente. El fallo desperdicia la acción, y el objetivo gana +2 a su próximo ataque contra ti.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Resuelta durante la Fase Cuerpo a Cuerpo de tu bando.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un ladrón realiza una finta con su daga (intimidación 50%, tira 45, éxito). Su próximo ataque gana +4: 1d20 (10) + 4 (Bonus de Finta) + 1 (Bonus para Golpear) + 7 (CA enemigo) = 22, acertando por 1d4 (3).</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Guardia</h3>
            <p className="text-body"><span className="text-purple-500">Descripción:</span> Adoptas una postura defensiva, protegiendo a ti mismo o a un aliado del daño. En un mundo de traición, tal protección es un regalo fugaz.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un arma o escudo. No puedes moverte esta ronda tras declarar <span className="text-yellow-600 text-bold underline underline-offset-4">Guardia</span>. En rondas consiguientes, si la postura ha sido mantenida, se puede avanzar (de manera individual o en formacion) hasta la mitad del movimiento sin perder la Guardia.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Otorga una penalidad contra ataques de -2. Si estás adyacente a un aliado, puedes reducir en -1 a la CA a ellos, pero sufres +1 a tu CA (neto -1 para ti). Tira una Lanzada de Salvación para mantener la postura si eres golpeado; el fallo termina el bono de CA antes. Una lanzada d100% de <span className="text-yellow-600 text-bold underline underline-offset-4">Tácticas</span> exitosa permite agregar una bonificación de +1 para esta Salvación (hasta un máximo de +5) por aliado adyacente que haya tomado esta maniobra.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Resuelta durante la Fase de Movimiento de tu bando, el efecto dura hasta el próximo turno.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un luchador guarda con su escudo robusto, otorgando penalidad -2 contra ataques contra él y -1 a un mago adyacente. Tras ser golpeado, tira 1d20 (12) + 6 (Salvada) + 2 (Bonus de Clase) = 20, manteniendo la postura.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Aplastar</h3>
            <p className="text-body"><span className="text-purple-500">Descripción:</span> Desatas un golpe brutal, sacrificando precisión por fuerza cruda.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un arma cuerpo a cuerpo. No puede usarse con armas ligeras.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Realiza un ataque cuerpo a cuerpo con -2 a la tirada pero +2 al daño al acertar. Si fallas, quedas desequilibrado (+2 para ataques contra ti hasta tu próximo turno).</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Resuelta durante la Fase Cuerpo a Cuerpo de tu bando.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base"> Un bárbaro aplasta con una hacha de dos manos (Fuerza +2, Bonus para Golpear +2, +4 CA enemigo). Tira 1d20 (13) + 3 - 2 + 4 = 18, fallando. Ataques contra él ganan una bonificación de +2.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Lanzar Hechizo</h3>
            <p className="text-body"><span className="text-purple-500">Descripción:</span> Tejes energías arcanas, anclando tu cuerpo al suelo mientras invocas un poder prohibido. En el Ojo Aristilia, la magia es un acto peligroso de voluntad.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un foco de lanzamiento de hechizos (por ejemplo, <span className="text-yellow-600 text-bold underline underline-offset-4">Talismán Agrietado</span>, <span className="text-yellow-600 text-bold underline underline-offset-4">Varita de Ébano</span>). No puedes moverte esta ronda tras declarar el hechizo. Debes conocer el hechizo, tenerlo preparado y tener un Espacio de Hechizo disponible.</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Empieza a realizar los complejos encantamientos de un hechizo (por ejemplo, nivel 1), sacrificando tu movimiento. Si eres golpeado mientras canalizas, tira una Salvación para mantener el encantamiento.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span> Declarada en la Fase de Declaracion. Resuelta durante la Fase de Hechizos de tu bando.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un mago lanza un hechizo de nivel 1 con una varita tras declarar que esa era su intención, sacrificando su movimiento. Si no recibe daño, y el objetivo del hechizo aún se encuentra disponible, el hechizo es resuelto.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl text-yellow-600 cinzel">Canalizar Magia Natural</h3>
            <p className="text-body"><span className="text-purple-500">Descripción:</span> Viertes tu esencia en un hechizo durante varios momentos, acumulando maná hasta completar la invocación. Cada pulso de poder te ancla a la tierra, vulnerable pero resuelto.</p>
            <p className="text-body"><span className="text-purple-500">Requisitos:</span> Empuñar un foco de lanzamiento de hechizos. No puedes moverte mientras canalizas o tras declarar. Debes conocer el hechizo. El hechizo tiene un costo de maná (por ejemplo, nivel 1 = 15, nivel 2 = 30, etc).</p>
            <p className="text-body"><span className="text-purple-500">Efecto:</span> Cada fase de combate, en cada ronda; tira un dado de maná (d6) y suma el resultado a tu reserva de maná para el hechizo. Continúa hasta que la reserva iguale o supere el costo de maná del hechizo, luego tira d100% de competencia <span className="text-yellow-600 text-bold underline underline-offset-4">Magia Natural</span>. El éxito activa el hechizo; el fallo, mantiene la reserva pero no libera el hechizo. En caso de fallo crítico, se pierde la reserva. Por cada 1d6 Puntos de Golpe propios sacrificados o de un sacrificio vivo, gana un bonus de +10% para esta tirada de competencia. No puedes moverte hasta que el hechizo se lance o falle. Si eres golpeado mientras canalizas, tira una Salvación para mantener el enfoque; el fallo reinicia la reserva de maná a 0.</p>
            <p className="text-body"><span className="text-purple-500">Iniciativa:</span>  Tira el dado de maná en cada Fase, resuelve el lanzamiento cuando se alcance el maná.</p>
            <p className="w-full md:w-1/2 border border-white border-dashed p-2 md:p-4 rounded-2xl mx-auto mt-4 text-small sm:text-base">Un aventurero declara un hechizo de nivel 1 (costo de maná 15). Durante la declaración, calcula en qué ronda este surtirá efecto. Fase de Movimiento: d6 (4). Fase de Proyectiles: d6 (3, total 7). Fase Cuerpo a Cuerpo: d6 (3, total 10), Fase de Hechizos: d6 (5, total 15). Tira d100 (65), teniendo éxito, y definiendo que el hechizo tendrá lugar en la Fase de Hechizos. Luego, en la Fase de Proyectiles, es golpeado por una flecha, tira 1d20 (13) + 2 (Sabiduría) + 5 (Salvada) = 20, teniendo exito la salvación, y manteniendo su reserva de mana. Finalmente, realiza la lanzada de competencia d100% y tiene exito, liberando el hechizo en la Fase de Hechizos.</p>
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
)
}