import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Tools() {
  const navigate = useNavigate();

    const handleClickBack = () => {
    navigate('/landing');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Herramientas
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4 mt-8 monsterrat font-thin text-md md:text-xl text-center">
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Turnos de Iniciativa
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Turnos de Exploracion
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Check de Encuentro
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Check de Sorpresa
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Check de Reaccion
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Check de Morale
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Calculadora de Experiencia
            </p>
          </div>
          <div className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
            <p>
              Generador de Monstruos
            </p>
          </div>
        </div>
      </main>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}