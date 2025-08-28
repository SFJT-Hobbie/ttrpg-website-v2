import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameExperience() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Puntos de Experiencia
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Introducción
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            En un mundo donde la muerte acecha en cada sombra, los puntos de experiencia (XP) miden el crecimiento de un personaje, ganados al superar los horrores que habitan criptas sombrías y tierras salvajes olvidadas. La XP se calcula evaluando los despojos de la supervivencia frente a los peligros enfrentados, ajustada por la fortaleza del personaje y la compañía que lo acompaña.
          </p>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Cálculo de la Experiencia
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            La experiencia se determina en varios pasos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>XP Base:</strong> Comienza sumando los siguientes elementos:
            <div>
              <ul>
                <li className="ml-4 list-inside">- Las piezas de plata (sp) obtenidas de enemigos derrotados o sus guaridas, reflejo del valor sombrío del botín.  </li>
                <li className="ml-4 list-inside">- 100 XP por cada dado de golpe (HD) del enemigo más formidable vencido, como testimonio de su amenaza.  </li>
                <li className="ml-4 list-inside">- XP adicional por monstruos menores abatidos, un triunfo pasajero frente a la oscuridad.  </li>
                <li className="ml-4 list-inside">- Bonificaciones de XP misceláneas, otorgadas por actos ingeniosos o descubrimientos que desafían la malicia del mundo.</li>
              </ul>
            </div></li>
            <li><strong>Ajuste por Relación de Desafío:</strong> La XP base se modifica según la relación entre el dado de golpe del enemigo más fuerte y el nivel del personaje. Si el dado de golpe iguala o supera el nivel del personaje, la XP base se mantiene intacta. Si es inferior, se reduce proporcionalmente, ya que los desafíos menores ofrecen poca enseñanza a los endurecidos.</li>
            <li><strong>División entre el Grupo:</strong> La XP ajustada se reparte entre los miembros del grupo, reconociendo que la supervivencia es un esfuerzo colectivo en este reino desolado.</li>
            <li><strong>Bonificación Individual:</strong> Se aplica un porcentaje de bonificación de XP por proezas excepcionales o favores divinos, aumentando la porción de cada miembro. El resultado final se redondea a dos decimales, representando una chispa de progreso en un mundo que busca extinguirla.</li>
          </ul>
          <p className="text-left text-xl montserrat">
            Fórmulas Clave
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="text-yellow-600 text-bold underline underline-offset-4">XP Base</span> = (Tesoro en Piezas de Plata) + (Dado de Golpe Más Alto del Enemigo × 100) + (XP Adicional por Monstruos) + (Bonificaciones de XP Misceláneas)</li>
            <li><span className="text-yellow-600 text-bold underline underline-offset-4">Relación de Desafío</span> = Mínimo [(Dado de Golpe Más Alto / Nivel del Personaje), 1]</li>
            <li><span className="text-yellow-600 text-bold underline underline-offset-4">XP de Grupo Ajustada</span> = XP Base × Relación de Desafío</li>
            <li><span className="text-yellow-600 text-bold underline underline-offset-4">XP Individual</span> = (XP de Grupo Ajustada / Número de Miembros del Grupo) × (1 + Porcentaje de Bonificación de XP / 100)  
              (Resultado redondeado a dos decimales para obtener la <span className="text-yellow-600 text-bold underline underline-offset-4">XP Individual Final</span>)</li>
          </ul>
        </div>

        <h2 className="cinzel text-2xl md:text-4xl">
          Subir de Nivel
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            Al acumular suficiente XP, un personaje debe perfeccionar su conocimiento mediante un entrenamiento riguroso que fortalezca cuerpo y alma contra la decadencia del mundo. Este proceso requiere encontrar un mentor o refugio—un dojo en ruinas, la cueva de un ermitaño o un santuario olvidado—y dedicarse a un camino agotador.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Costo del Entrenamiento:</strong> El costo base es el nivel actual del personaje multiplicado por 1,500 piezas de plata por semana.</li>
            <li><strong>Variación por Clase:</strong> Para personajes de niveles avanzados, el costo puede variar entre 1,000 y 4,000 piezas de plata por nivel por semana, dependiendo de la clase, debido a la rareza de recursos y la peligrosidad de la instrucción requerida para sus artes especializadas.</li>
          </ul>
        </div>
      </main>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/level-up.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}