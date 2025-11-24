import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Game() {
  const navigate = useNavigate();

  const handleClickMechanics = () => {
    navigate('/rules/game/mechanics')
  }

  const handleClickCombat = () => {
    navigate('/rules/game/combat')
  }

  const handleClickManeuvers = () => {
    navigate('/rules/game/maneuvers')
  }

  const handleClickWeaponProficiencies = () => {
    navigate('/rules/game/weapon-proficiencies')
  }

  const handleClickWeaponNonProficiencies = () => {
    navigate('/rules/game/non-weapon-proficiencies')
  }

  const handleClickXPLevel = () => {
    navigate('/rules/game/xp-level')
  }

  const handleClickLifeDeath = () => {
    navigate('/rules/game/life-death')
  }

  const handleClickExploration = () => {
    navigate('/rules/game/exploration')
  }

  const handleClickDowntime = () => {
    navigate('/rules/game/downtime')
  }

    const handleClickBack = () => {
    navigate('/rules');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Reglas
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-8 space-y-6 md:space-y-8 text-center p-4 md:p-6 lg:p-8">
          <div className="garamond text-body mt-4">
            <p>
              Aqui encontraras las reglas para jugar en Eldra'Kazhan. Estas reglas están diseñadas para proporcionar una experiencia de juego fluida y equilibrada, permitiendo a los jugadores sumergirse en la narrativa y el mundo del juego. Desde las mecánicas de resolución hasta el combate, cada aspecto está pensado para enriquecer la experiencia de juego.
            </p>
          </div>      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
            <div onClick={handleClickMechanics} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-lg sm:text-xl md:text-2xl text-center px-2">Mecánicas de Resolución</h2>
            </div>
            <div onClick={handleClickCombat} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Combate</h2>
            </div>
            <div onClick={handleClickManeuvers} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Maniobras</h2>
            </div>
            <div onClick={handleClickWeaponProficiencies} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-lg sm:text-xl md:text-2xl text-center px-2">Competencias de Armas</h2>
            </div>
            <div onClick={handleClickWeaponNonProficiencies} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-lg sm:text-xl md:text-2xl text-center px-2">Competencias en No-Armas</h2>
            </div>
            <div onClick={handleClickXPLevel} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-lg sm:text-xl md:text-2xl text-center px-2">Experiencia y Nivel</h2>
            </div>
            <div onClick={handleClickLifeDeath} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Vida & Muerte</h2>
            </div>
            <div onClick={handleClickExploration} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Exploracion</h2>
            </div>
            <div onClick={handleClickDowntime} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Downtime</h2>
            </div>
          </div>
          <div className="p-4 italic font-thin text-small space-y-4">
            <p>
              En caso de que quieras consultar, revisar, simplificar o cambiar una regla puedes hablar con el DM para discutir la posibilidad de hacerlo. 
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