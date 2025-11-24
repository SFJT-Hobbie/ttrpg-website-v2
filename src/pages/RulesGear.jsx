import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Gear() {
  const navigate = useNavigate();

  const handleClickArmor = () => {
    navigate('/rules/gear/armor');
  };

  const handleClickWeapons = () => {
    navigate('/rules/gear/weapons');
  };

  const handleClickCompanions = () => {
    navigate('/rules/gear/companions');
  };

  const handleClickMagic = () => {
    navigate('/rules/gear/magic');
  };

  const handleClickMachinery = () => {
    navigate('/rules/gear/machinery');
  };

  const handleClickApparel = () => {
    navigate('/rules/gear/apparel');
  };

  const handleClickSupplies = () => {
    navigate('/rules/gear/supplies');
  };

  const handleClickBack = () => {
    navigate('/rules');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Equipo
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-8 space-y-6 md:space-y-8 text-center p-4 md:p-6 lg:p-8">
          <div className="garamond text-body mt-4">
            <p>
              El equipamiento es fundamental para la supervivencia y el éxito en Eldra'Kazhan. Desde armas y armaduras hasta suministros mágicos y maquinaria, cada elemento tiene un propósito específico. Explora las diferentes categorías de equipo disponibles y prepárate para enfrentar los desafíos que te esperan.
            </p>
          </div>      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
            <div onClick={handleClickArmor} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Armaduras</h2>
            </div>
            <div onClick={handleClickWeapons} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Armas</h2>
            </div>
            <div onClick={handleClickCompanions} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Compañeros</h2>
            </div>
            <div onClick={handleClickMagic} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Magia</h2>
            </div>
            <div onClick={handleClickMachinery} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Maquinaria</h2>
            </div>
            <div onClick={handleClickApparel} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Ropa</h2>
            </div>
            <div onClick={handleClickSupplies} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Suministros</h2>
            </div>
          </div>
          <div className="p-4 italic font-thin text-small space-y-4">
            <p>
              En caso de que quieras añadir una pieza de equipo que no esté listada, puedes hablar con el DM para discutir su inclusión. El equipo puede variar en rareza y poder, y es importante considerar cómo cada pieza se integra en la narrativa de tu personaje y la historia del juego.
            </p>
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