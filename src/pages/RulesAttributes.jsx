import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Attributes() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Atributos
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <h2 className="cinzel text-section-title">
            Lanzadas Heroicas & Mortales
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
          <p>
            Todo personaje comienza por el mismo lugar, sus Atributos. Los Atributos definen las estadisticas fisicas y mentales de un personaje, y son la forma mas basica de definir los cimientos fundamentales sobre los cuales este se desarrollara; no solo durante el proceso de creacion, si no a lo largo de su vida en la campaña
          </p>
            <h3 className="text-xl sm:text-2xl">
              Lanzada Heroica
            </h3>
            <p>
              Aquellos que decidan definir sus atributos iniciales con una Lanzada Heroica, usaran 4d6 y apuntaran en el Atributo <span className="underline font-bold">deseado</span> el resultado luego de descartar la <span className="underline font-bold">lanzada de valor mas baja</span>. Aquellos que utilicen este metodo gozaran de un valor promedio por Atributo mas alto, priorizando los Atributos que deseen destacar. Esto permite comenzar con personajes mas balanceados y fuertes desde el inicio.
            </p>
            <h3 className="text-xl sm:text-2xl">
              Lanzada Mortal
            </h3>
            <p>
              Aquellos que decidan definir sus atributos iniciales con una Lanzada Mortal, usaran 3d6 y apuntaran los valores en <span className="underline font-bold">orden de lanzada</span> para cada Atributo. Aquellos que utilicen este metodo gozaran de un incremento de +10% a la experiencia recibida, permitiendo una progresion de nivel mas rapida. A largo plazo, los bajos atributos son compensados por items magicos, bendiciones, etc.; por lo que esta opcion es ideal para aquellos que creen poder perdurar y apuntan a los altos niveles del juego donde la experiencia necesaria para progresar es inmensa.
            </p>
          </div>
          <div className="w-full py-4 md:py-8 mx-auto flex flex-col justify-center items-center">
            <img className="rounded-2xl w-full max-w-full h-auto" src="/assets/image/Anatomy.png" alt="" />
          </div>
          <h2 className="cinzel text-section-title mt-4">
            Modificadores de Atributo
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
          <p>
            El valor de cada Atributo define un modificador, es decir un valor que es utilizado para definir bonificaciones y/o penalidades relacionadas a dicho Atributo. La siguiente guia indica la relacion entre los valores de Atributo y modificador:
          </p>
            <div className="w-full overflow-x-auto">
              <table className="w-full md:w-1/2 mx-auto border-collapse text-center text-sm sm:text-base">
                <thead>
                  <tr>
                    <th className="border-b border-slate-700 px-2 py-2">Atributo</th>
                    <th className="border-b border-slate-700 px-2 py-2">Modificador</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2">3</td>
                    <td className="border-b border-slate-700 px-2 py-2">-2</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2">4 a 6</td>
                    <td className="border-b border-slate-700 px-2 py-2">-1</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2">7 a 13</td>
                    <td className="border-b border-slate-700 px-2 py-2">0</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2">14 a 17</td>
                    <td className="border-b border-slate-700 px-2 py-2">+1</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2">18</td>
                    <td className="border-b border-slate-700 px-2 py-2">+2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-xl sm:text-2xl">
              Fuerza
            </h3>
          <p>
            La Fuerza es un atributo que representa la potencia física bruta de un personaje. Afecta directamente la capacidad para realizar hazañas de poder, como levantar o romper objetos pesados, así como el daño que puede infligir en combate cuerpo a cuerpo. Un personaje con alta Fuerza podrá cargar más peso, superar pruebas físicas exigentes y destacar en actividades que requieran vigor muscular.
          </p>
          <ul className="ml-4 list-inside space-y-2 whitespace-pre-line">
            <li className="list-disc">El modificador es agregado a las lanzadas de ataque y daño de todo ataque cuerpo a cuerpo.</li>
            <li className="list-disc">El modificador es agregado a la cantidad de filas de inventario base (5x5) disponibles, si es positivo, o es reducido de estas si es negativo.</li>
            <li className="list-disc">El modificador es multiplicado por “5” para calcular el % Bonus de Experiencia de la clase “Guerrero”</li>
          </ul>
            <div className="w-full mt-4 mx-auto flex items-center justify-center">
              <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/strength.png" alt="" />
            </div>
            <h3 className="text-xl sm:text-2xl">
              Destreza
            </h3>
          <p>
            La Destreza es un atributo que representa la agilidad, reflejos y coordinación de un personaje. Influye en la capacidad para esquivar ataques, moverse sigilosamente, manipular objetos delicados y utilizar armas a distancia con precisión. Un personaje con alta Destreza será más difícil de golpear, podrá reaccionar rápidamente ante peligros y destacará en tareas que requieran movimientos precisos o veloces.
          </p>
          <ul className="ml-4 list-inside space-y-2 whitespace-pre-line">
            <li className="list-disc">El modificador es agregado a las lanzadas de ataque y daño de todo ataque con un arma de proyectil.</li>
            <li className="list-disc">El modificador es utilizado como penalización contra las lanzadas de ataque del enemigo en caso de que sea positivo, o como bonus en caso de que sea negativo.</li>
            <li className="list-disc">El modificador es multiplicado por “5” para calcular la cantidad de pies a substraer o agregar, según corresponda, de movimiento en espacios cerrados (base = 30) y por “20” para calcular el movimiento en espacios abiertos (base = 120).</li>
          </ul>
            <div className="w-full mt-4 mx-auto flex items-center justify-center">
              <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/dexterity.png" alt="" />
            </div>
            <h3 className="text-xl sm:text-2xl">
              Constitucion
            </h3>
          <p>
            La Constitución es un atributo que representa la resistencia física, salud y capacidad de recuperación de un personaje. Afecta directamente la cantidad de daño que puede soportar, su resistencia a enfermedades, venenos y fatiga, así como su capacidad para recuperarse de heridas o condiciones adversas. Un personaje con alta Constitución podrá sobrevivir en situaciones extremas, resistir efectos debilitantes y mantener su rendimiento durante largos periodos de esfuerzo físico.
          </p>
          <ul className="ml-4 list-inside space-y-2 whitespace-pre-line">
            <li className="list-disc">El modificador es agregado a las lanzadas de Puntos de Golpe por nivel del personaje.</li>
            <li className="list-disc">El modificador es agregado a la cantidad de Puntos de Golpe recuperados por día de descanso.</li>
          </ul>
            <div className="w-full mt-4 mx-auto flex items-center justify-center">
              <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/constitution.png" alt="" />
            </div>
            <h3 className="text-xl sm:text-2xl">
              Inteligencia
            </h3>
          <p>
            La Inteligencia es un atributo que representa la capacidad de razonamiento, aprendizaje, memoria y análisis lógico de un personaje. Influye en la habilidad para resolver acertijos, recordar información importante, aprender nuevos conocimientos y lanzar conjuros en el caso de clases mágicas. Un personaje con alta Inteligencia podrá descifrar lenguajes, identificar objetos mágicos y destacar en tareas que requieran pensamiento crítico o erudición.
          </p>
          <ul className="ml-4 list-inside space-y-2 whitespace-pre-line">
            <li className="list-disc">El modificador indica la cantidad de Ranuras de Competencias adicionales en caso de ser positivo, o penalizadas en caso de ser negativo.</li>
            <li className="list-disc">El modificador indica la cantidad de Ranuras de Lenguaje adicionales, en caso de ser positivo. En caso de ser negativo, indica incapacidad para leer o escribir.</li>
            <li className="list-disc">El modificador indica la cantidad de hechizos adicionales de un Usuario de Magia en caso de ser positivo.</li>
            <li className="list-disc">El modificador es multiplicado por “5” para calcular el % Bonus de Experiencia de la clase “Usuario de Magia”.</li>
          </ul>
            <div className="w-full mt-4 mx-auto flex items-center justify-center">
              <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/intelligence.png" alt="" />
            </div>
            <h3 className="text-xl sm:text-2xl">
              Sabiduria
            </h3>
          <p>
            La Sabiduría es un atributo que representa la percepción, intuición, sentido común y fuerza de voluntad de un personaje. Influye en la capacidad para notar detalles importantes, resistir efectos mentales o mágicos, tomar decisiones acertadas bajo presión y comprender el entorno espiritual o sobrenatural. Un personaje con alta Sabiduría será más difícil de engañar, podrá anticipar peligros y destacará en tareas que requieran juicio, empatía o conexión con fuerzas superiores.
          </p>
          <ul className="ml-4 list-inside space-y-2 whitespace-pre-line">
            <li className="list-disc">El modificador, en caso de ser positivo, es multiplicado por “5” e indica un % de resistencia a la magia.</li>
            <li className="list-disc">El modificador es multiplicado por “5” para calcular el % Bonus de Experiencia de cualquier clase.</li>
          </ul>
            <div className="w-full mt-4 mx-auto flex items-center justify-center">
              <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/wisdom.png" alt="" />
            </div>
            <h3 className="text-xl sm:text-2xl">
              Carisma
            </h3>
          <p>
            El Carisma es un atributo que representa la capacidad de un personaje para influir, persuadir y liderar a otros, así como su presencia personal y magnetismo social. Afecta directamente las interacciones con NPCs, la habilidad para negociar, comandar seguidores y causar una impresión positiva o negativa en quienes lo rodean. Un personaje con alto Carisma podrá ganarse la confianza de aliados, manipular situaciones sociales a su favor y destacarse en tareas que requieran diplomacia, liderazgo o encanto personal.
          </p>
          <ul className="ml-4 list-inside space-y-2 whitespace-pre-line">
            <li className="list-disc">El modificador es agregado a las lanzadas de reacción de los PNJ.</li>
            <li className="list-disc">El modificador es agregado a las lanzadas de lealtad de los secuaces y mercenarios al servicio del PJ.</li>
            <li className="list-disc">El modificador indica la cantidad maxima de secuaces y mercenarios al servicio del PJ. Si el modificador es negativo, puede tener hasta un máximo de 3 PNJ a su servicio; si es “0” hasta un máximo de 5; si es “1” puede tener hasta 6; y si es “2” puede tener hasta 12.</li>
          </ul>
            <div className="w-full mt-4 mx-auto flex items-center justify-center">
              <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/charisma.png" alt="" />
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
