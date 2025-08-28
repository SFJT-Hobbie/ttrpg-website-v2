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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Reglas
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 text-center">
      <div className="garamond text-md md:text-xl mt-4 p-4">
        <p>
          Aqui encontraras las reglas para jugar en Eldra'Kazhan. Estas reglas están diseñadas para proporcionar una experiencia de juego fluida y equilibrada, permitiendo a los jugadores sumergirse en la narrativa y el mundo del juego. Desde las mecánicas de resolución hasta el combate, cada aspecto está pensado para enriquecer la experiencia de juego.
        </p>
      </div>      
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        <div onClick={handleClickMechanics} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Mecánicas de Resolución</h2>
        </div>
        <div onClick={handleClickCombat} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Combate</h2>
        </div>
        <div onClick={handleClickManeuvers} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Maniobras</h2>
        </div>
        <div onClick={handleClickWeaponProficiencies} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Competencias de Armas</h2>
        </div>
        <div onClick={handleClickWeaponNonProficiencies} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Competencias en No-Armas</h2>
        </div>
        <div onClick={handleClickXPLevel} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Experiencia y Nivel</h2>
        </div>
        <div onClick={handleClickLifeDeath} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Vida & Muerte</h2>
        </div>
        <div onClick={handleClickExploration} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Exploracion</h2>
        </div>
        <div onClick={handleClickDowntime} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Downtime</h2>
        </div>
      </div>
      <div className="p-4 italic font-thin text-sm space-y-4">
        <p>
          En caso de que quieras consultar, revisar, simplificar o cambiar una regla puedes hablar con el DM para discutir la posibilidad de hacerlo. 
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