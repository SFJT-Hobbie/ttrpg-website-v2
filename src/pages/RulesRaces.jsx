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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Razas
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 text-center">
      <div className="garamond text-md md:text-xl mt-4 p-4">
        <p>
          Las razas son una parte fundamental de la creación de personajes en Eldra'Kazhan. Cada raza ofrece habilidades únicas, bonificaciones a atributos y características especiales que enriquecen la experiencia de juego. Explora las distintas razas disponibles y elige la que mejor se adapte a tu estilo de juego.
        </p>
      </div>      
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        <div onClick={handleClickElf} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Elfos</h2>
        </div>
        <div onClick={handleClickDwarf} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Enanos</h2>
        </div>
        <div onClick={handleClickBeastman} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Hombres Bestia</h2>
        </div>
        <div onClick={handleClickHuman} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Humanos</h2>
        </div>
        <div onClick={handleClickHalfling} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Medianos</h2>
        </div>
        <div onClick={handleClickVerdant} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Verdantes</h2>
        </div>
      </div>
      <div className="p-4 italic font-thin text-sm">
        <p>
          En caso de que quieras añadir una raza personalizada, puedes hablar con el DM para discutir las posibilidades y cómo integrarla en la narrativa del juego.
        </p>
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