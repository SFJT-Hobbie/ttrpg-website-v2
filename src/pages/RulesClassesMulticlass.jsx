import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MulticlassClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };


  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Multiclase
        </h1>
        <main className="divide-y-1 w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="garamond space-y-4 divide-y divide-slate-700 divide-dashed flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <div className="pb-2">              
              <p className="font-bold">
                Clases Iniciales Múltiples
              </p>
              <p className="text-md text-left">
                Un personaje puede elegir dos o más clases al crearse, encarnando la ambición desesperada de empuñar poderes diversos.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold">
                Espacios de Competencia
              </p>
              <p className="text-md text-left">
                Al momento de crear el personaje, usa solo los espacios de competencia de la clase con la mayor cantidad inicial de estos.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold">
                División de Experiencia
              </p>
              <p className="text-md text-left">
                Divide todos los puntos de experiencia (PE) ganados equitativamente entre todas las clases antes de aplicar los modificadores de % de PE específicos de cada clase (por ejemplo, +10% por atributos altos). Esta división equitativa persiste incluso si una clase alcanza el umbral de subida de nivel. Por ejemplo, 300 PE divididos entre dos clases otorgan 150 PE a cada una, luego modificados por el % de bonificación de cada clase.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Requisitos para Subir de Nivel
              </p>
              <p className="text-md text-left">
                Al alcanzar el umbral de PE para un nivel en todas las clase, el personaje debe gastar el tiempo y el dinero requerido por el entrenamiento de cada clase.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Tiradas de HD
              </p>
              <p className="text-md text-left">
                Al subir de nivel, tira los HD de cada clase (por ejemplo, d10 para Guerrero, d4 para Mago) y toma el valor más alto para aumentar los puntos de golpe. Por ejemplo, un Guerrero/Mago tira 1d10 (8) y 1d4 (3), ganando 8 HP.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Bonificaciones de Salvación
              </p>
              <p className="text-md text-left">
                Usa la bonificación de salvación más alta (y modificadores situacionales, por ejemplo, +2 contra veneno para Guerreros) entre todas las clases para las lanzadas de salvación.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Bonificaciones al Acertar
              </p>
              <p className="text-md text-left">
                Usa la bonificación al acertar más alta (para tiradas de ataque Target20) entre todas las clases. 
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Bonificaciones al Acertar
              </p>
              <p className="text-md text-left">
                Usa la bonificación al acertar más alta (para tiradas de ataque Target20) entre todas las clases. 
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Habilidades de Clase
              </p>
              <p className="text-md text-left">
                Obtén acceso a todas las habilidades de cada clase (por ejemplo, las proficiencias de armas del Guerrero, el lanzamiento de hechizos del Mago, el ataque furtivo del Ladrón), sujetas a restricciones de nivel. Esta versatilidad es una de las ventajas mas grandes de aquellos personajes que deseen caminar por la senda de la multiclase.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Modificadores por Edad
              </p>
              <p className="text-md text-left">
                Aplica todos los modificadores relacionados con la edad de cada clase
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className="w-1/2 md:w-1/5 mt-4">
        <img className="rounded-2xl opacity-25" src="/assets/image/multiclass.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
