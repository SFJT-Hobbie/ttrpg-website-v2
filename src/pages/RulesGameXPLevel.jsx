import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameExperience() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Puntos de Experiencia
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-6 md:mt-8 space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
          <h2 className="cinzel text-section-title">
            Introducción
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              En un mundo donde la muerte acecha en cada sombra, los puntos de experiencia (XP) miden el crecimiento de un personaje, ganados al superar los horrores que habitan criptas sombrías y tierras salvajes olvidadas. La XP se calcula evaluando los despojos de la supervivencia frente a los peligros enfrentados, ajustada por la fortaleza del personaje y la compañía que lo acompaña.
            </p>
          </div>

          <h2 className="cinzel text-section-title">
            Cálculo de la Experiencia
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              La experiencia se determina en varios pasos:
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-2">
              <li><strong>XP Base:</strong> Comienza sumando los siguientes elementos:
              <div>
                <ul className="ml-4 md:ml-8 space-y-1">
                  <li className="list-inside">- Las piezas de plata (sp) obtenidas de enemigos derrotados o sus guaridas, reflejo del valor sombrío del botín.  </li>
                  <li className="list-inside">- 100 XP por cada dado de golpe (HD) del enemigo más formidable vencido, como testimonio de su amenaza.  </li>
                  <li className="list-inside">- XP adicional por monstruos menores abatidos, un triunfo pasajero frente a la oscuridad.  </li>
                  <li className="list-inside">- Bonificaciones de XP misceláneas, otorgadas por actos ingeniosos o descubrimientos que desafían la malicia del mundo.</li>
                </ul>
              </div></li>
              <li><strong>Ajuste por Relación de Desafío:</strong> La XP base se modifica según la relación entre el dado de golpe del enemigo más fuerte y el nivel del personaje. Si el dado de golpe iguala o supera el nivel del personaje, la XP base se mantiene intacta. Si es inferior, se reduce proporcionalmente, ya que los desafíos menores ofrecen poca enseñanza a los endurecidos.</li>
              <li><strong>División entre el Grupo:</strong> La XP ajustada se reparte entre los miembros del grupo, reconociendo que la supervivencia es un esfuerzo colectivo en este reino desolado.</li>
              <li><strong>Bonificación Individual:</strong> Se aplica un porcentaje de bonificación de XP por proezas excepcionales o favores divinos, aumentando la porción de cada miembro. El resultado final se redondea a dos decimales, representando una chispa de progreso en un mundo que busca extinguirla.</li>
            </ul>
            <p className="text-left text-lg sm:text-xl montserrat">
              Fórmulas Clave
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-2">
              <li><span className="text-yellow-600 font-bold underline underline-offset-4">XP Base</span> = (Tesoro en Piezas de Plata) + (Dado de Golpe Más Alto del Enemigo × 100) + (XP Adicional por Monstruos) + (Bonificaciones de XP Misceláneas)</li>
              <li><span className="text-yellow-600 font-bold underline underline-offset-4">Relación de Desafío</span> = Mínimo [(Dado de Golpe Más Alto / Nivel del Personaje), 1]</li>
              <li><span className="text-yellow-600 font-bold underline underline-offset-4">XP de Grupo Ajustada</span> = XP Base × Relación de Desafío</li>
              <li><span className="text-yellow-600 font-bold underline underline-offset-4">XP Individual</span> = (XP de Grupo Ajustada / Número de Miembros del Grupo) × (1 + Porcentaje de Bonificación de XP / 100)  
                (Resultado redondeado a dos decimales para obtener la <span className="text-yellow-600 font-bold underline underline-offset-4">XP Individual Final</span>)</li>
            </ul>
          </div>

          <h2 className="cinzel text-section-title">
            Subir de Nivel
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-6 montserrat text-body">
            <p>
              Al acumular suficiente XP, un personaje debe perfeccionar su conocimiento mediante un entrenamiento riguroso que fortalezca cuerpo y alma contra la decadencia del mundo. Este proceso requiere encontrar un mentor o refugio—un dojo en ruinas, la cueva de un ermitaño o un santuario olvidado—y dedicarse a un camino agotador.
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-2">
              <li><strong>Costo del Entrenamiento:</strong> El costo base es el nivel actual del personaje multiplicado por 1,500 piezas de plata por semana.</li>
              <li><strong>Variación por Clase:</strong> Para personajes de niveles avanzados, el costo puede variar entre 1,000 y 4,000 piezas de plata por nivel por semana, dependiendo de la clase, debido a la rareza de recursos y la peligrosidad de la instrucción requerida para sus artes especializadas.</li>
            </ul>
          </div>
        </main>
        <div className="w-full flex items-center justify-center mt-4">
          <img className="rounded-2xl opacity-25 p-4 w-full max-w-full h-auto" src="/assets/image/level-up.png" alt="" />
        </div>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}