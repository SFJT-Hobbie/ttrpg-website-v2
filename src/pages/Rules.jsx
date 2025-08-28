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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Reglas
        </h1>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-3 border-white border-1 rounded-xl place-items-center gap-8 w-10/12 mt-8">
        <div onClick={handleClickAttributes} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-3xl">Atributos</h2>
        </div>
        <div onClick={handleClickRaces} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-3xl">Razas</h2>
        </div>
        <div onClick={handleClickClasses} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-3xl">Clases</h2>
        </div>
        <div onClick={handleClickGear} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-3xl">Equipo</h2>
        </div>
        <div onClick={handleClickGame} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-3xl">Juego</h2>
        </div>
        <div onClick={handleClickMagic} className="w-50 h-50 flex-col border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-3xl">Magia</h2>
{/*           <p>
            Proximamente
          </p> */}
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
