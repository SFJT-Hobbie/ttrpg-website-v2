import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MulticlassClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };


  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Multiclase
          </h1>
        </div>
        <main className="divide-y divide-white w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="garamond space-y-4 divide-y divide-slate-700 divide-dashed flex flex-col items-center justify-center py-4 w-full text-body">
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                Clases Iniciales Múltiples
              </p>
              <p className="text-body text-left">
                Un personaje puede elegir dos o más clases al crearse, encarnando la ambición desesperada de empuñar poderes diversos.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                Espacios de Competencia
              </p>
              <p className="text-body text-left">
                Al momento de crear el personaje, usa solo los espacios de competencia de la clase con la mayor cantidad inicial de estos.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                División de Experiencia
              </p>
              <p className="text-body text-left">
                Divide todos los puntos de experiencia (PE) ganados equitativamente entre todas las clases antes de aplicar los modificadores de % de PE específicos de cada clase (por ejemplo, +10% por atributos altos). Esta división equitativa persiste incluso si una clase alcanza el umbral de subida de nivel. Por ejemplo, 300 PE divididos entre dos clases otorgan 150 PE a cada una, luego modificados por el % de bonificación de cada clase.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Requisitos para Subir de Nivel
              </p>
              <p className="text-body text-left">
                Al alcanzar el umbral de PE para un nivel en todas las clase, el personaje debe gastar el tiempo y el dinero requerido por el entrenamiento de cada clase.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Tiradas de HD
              </p>
              <p className="text-body text-left">
                Al subir de nivel, tira los HD de cada clase (por ejemplo, d10 para Guerrero, d4 para Mago) y toma el valor más alto para aumentar los puntos de golpe. Por ejemplo, un Guerrero/Mago tira 1d10 (8) y 1d4 (3), ganando 8 HP.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Bonificaciones de Salvación
              </p>
              <p className="text-body text-left">
                Usa la bonificación de salvación más alta (y modificadores situacionales, por ejemplo, +2 contra veneno para Guerreros) entre todas las clases para las lanzadas de salvación.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Bonificaciones al Acertar
              </p>
              <p className="text-body text-left">
                Usa la bonificación al acertar más alta (para tiradas de ataque Target20) entre todas las clases. 
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Habilidades de Clase
              </p>
              <p className="text-body text-left">
                Obtén acceso a todas las habilidades de cada clase (por ejemplo, las proficiencias de armas del Guerrero, el lanzamiento de hechizos del Mago, el ataque furtivo del Ladrón), sujetas a restricciones de nivel. Esta versatilidad es una de las ventajas mas grandes de aquellos personajes que deseen caminar por la senda de la multiclase.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Modificadores por Edad
              </p>
              <p className="text-body text-left">
                Aplica todos los modificadores relacionados con la edad de cada clase
              </p>
            </div>
          </div>
        </main>
        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 flex justify-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/multiclass.png" alt="" />
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
