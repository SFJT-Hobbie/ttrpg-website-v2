import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Rules() {
  const navigate = useNavigate();

    const handleClickAttributes = () => {
    navigate('/rules/attributes');
  };

  const handleClickRaces = () => {
    navigate('/rules/races');
  };

  const handleClickClasses = () => {
    navigate('/rules/classes');
  };

  const handleClickGear = () => {
    navigate('/rules/gear');
  };

  const handleClickGame = () => {
    navigate('/rules/game');
  };

  const handleClickMagic = () => {
    navigate('/rules/magic');
  };

  const handleClickBack = () => {
    navigate('/landing');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Reglas
          </h1>
        </div>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center mt-8">
          <div onClick={handleClickAttributes} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
            <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Atributos</h2>
          </div>
          <div onClick={handleClickRaces} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
            <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Razas</h2>
          </div>
          <div onClick={handleClickClasses} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
            <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Clases</h2>
          </div>
          <div onClick={handleClickGear} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
            <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Equipo</h2>
          </div>
          <div onClick={handleClickGame} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
            <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Juego</h2>
          </div>
          <div onClick={handleClickMagic} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex flex-col justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
            <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Magia</h2>
{/*           <p>
            Proximamente
          </p> */}
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
