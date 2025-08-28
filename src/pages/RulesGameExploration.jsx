
import React from 'react';import { useNavigate } from 'react-router-dom';

export default function RulesGameExploration() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Exploración
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Introducción
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            En Eldra'Khazan, explorar es adentrarse en el peligro, donde cada paso tienta a la muerte y cada sombra encierra una maldición. Ya sea navegando las profundidades asfixiantes de criptas antiguas o atravesando los salvajes olvidados, la supervivencia exige vigilancia, astucia y un espíritu templado contra la desesperanza. Cada expedición es una apuesta arriesgada, enfrentando a los agotados contra la malicia incesante de la tierra.
          </p>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Exploración de Mazmorras
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="pl-6 space-y-2">
            <li>Bajo la tierra, en bóvedas derrumbadas y túneles envueltos en tinieblas, el tiempo se mide en <span className="text-yellow-600 text-bold underline underline-offset-4">Turnos de Mazmorra</span>—breves intervalos de acción donde un grupo busca, combate o huye. Cada turno equivale a <span className="text-yellow-600 text-bold underline underline-offset-4">10 minutos dentro del juego</span> y conlleva el riesgo de atraer a <span className="text-yellow-600 text-bold underline underline-offset-4">monstruos errantes</span>. Estos tienen una posibilidad de "x en 6" de aparecer, donde "x" representa el rango de valores en un d6 en los que puede aparecer. Mientras mas peligrosa es un lugar, mas posibilidades de aparecer hay. Estos horrores que se deslizan desde la oscuridad, su presencia determinada por el capricho del destino.</li>
            <li>Al encontrarlos, una <span className="text-yellow-600 text-bold underline underline-offset-4">tirada de reacción</span> define su intención: algunos podrían negociar, otros anhelan sangre, y unos pocos huyen, temerosos del acero de los intrusos.</li>
            <li>La <span className="text-yellow-600 text-bold underline underline-offset-4">sorpresa</span> es un enemigo mortal; los desprevenidos pueden ser emboscados por trampas o bestias al acecho, mientras que los atentos podrían invertir la ventaja, atacando primero.</li>
            <li>Cada decisión—forcejear con una puerta oxidada o escuchar el roce de garras—tiene consecuencias, pues la mazmorra es una entidad viva, hambrienta por devorar a los imprudentes.</li>
          </ul>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Exploración Salvaje (Hexcrawl)
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <ul className="pl-6 space-y-2">
            <li>En la superficie, la tierra cicatrizada de Eldra'Khazan se extiende bajo un cielo vacío, dividida en <span className="text-yellow-600 text-bold underline underline-offset-4">hexágonos</span> que delimitan los confines de la supervivencia. En condiciones ideales—senderos despejados, clima apacible y sin persecución—un grupo puede atravesar un hexágono por día con pasos seguros.</li>
            <li>Sin embargo, los salvajes rara vez son misericordiosos. Picos afilados, ciénagas enmarañadas o tormentas cargadas de furia sobrenatural pueden reducir el avance a un lento arrastrarse, extendiendo el viaje hasta un hexágono por semana en los peores escenarios.</li>
            <li><span className="text-yellow-600 text-bold underline underline-offset-4">Monstruos errantes</span> o colosales horrores acechan en estos yermos, su aparición dictada por el azar y su disposición influida por <span className="text-yellow-600 text-bold underline underline-offset-4">tiradas de reacción</span>—algunos negocian, otros atacan, y algunos huyen.</li>
            <li>La <span className="text-yellow-600 text-bold underline underline-offset-4">sorpresa</span> persiste como amenaza constante; un grupo distraído por las trampas de la tierra puede ser sorprendido, mientras que aquellos que interpretan el viento o las huellas podrían ganar la iniciativa.</li>
            <li>Lo salvaje no es solo un terreno—es un crisol que pone a prueba la resolución de quienes osan enfrentarlo.</li>
          </ul>
        </div>
      </main>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/explore.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}