import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Races() {
  const navigate = useNavigate();

  const handleClickElf = () => {
    navigate('/rules/races/elf');
  };

  const handleClickHuman = () => {
    navigate('/rules/races/human');
  };

  const handleClickDwarf = () => {
    navigate('/rules/races/dwarf');
  };

  const handleClickBeastman = () => {
    navigate('/rules/races/beastman');
  };

  const handleClickHalfling = () => {
    navigate('/rules/races/halfling');
  };

  const handleClickVerdant = () => {
    navigate('/rules/races/verdant');
  }

  const handleClickBack = () => {
    navigate('/rules');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Razas
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-8 space-y-6 md:space-y-8 text-center p-4 md:p-6 lg:p-8">
          <div className="garamond text-body mt-4">
            <p>
              Las razas son una parte fundamental de la creación de personajes en Eldra'Kazhan. Cada raza ofrece habilidades únicas, bonificaciones a atributos y características especiales que enriquecen la experiencia de juego. Explora las distintas razas disponibles y elige la que mejor se adapte a tu estilo de juego.
            </p>
          </div>      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
            <div onClick={handleClickElf} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Elfos</h2>
            </div>
            <div onClick={handleClickDwarf} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Enanos</h2>
            </div>
            <div onClick={handleClickBeastman} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Hombres Bestia</h2>
            </div>
            <div onClick={handleClickHuman} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Humanos</h2>
            </div>
            <div onClick={handleClickHalfling} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Medianos</h2>
            </div>
            <div onClick={handleClickVerdant} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Verdantes</h2>
            </div>
          </div>
          <div className="p-4 italic font-thin text-small">
            <p>
              En caso de que quieras añadir una raza personalizada, puedes hablar con el DM para discutir las posibilidades y cómo integrarla en la narrativa del juego.
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