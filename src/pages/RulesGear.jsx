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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Equipo
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 text-center">
      <div className="garamond text-md md:text-xl mt-4 p-4">
        <p>
          El equipamiento es fundamental para la supervivencia y el éxito en Eldra'Kazhan. Desde armas y armaduras hasta suministros mágicos y maquinaria, cada elemento tiene un propósito específico. Explora las diferentes categorías de equipo disponibles y prepárate para enfrentar los desafíos que te esperan.
        </p>
      </div>      
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        <div onClick={handleClickArmor} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Armaduras</h2>
        </div>
        <div onClick={handleClickWeapons} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Armas</h2>
        </div>
        <div onClick={handleClickCompanions} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Compañeros</h2>
        </div>
        <div onClick={handleClickMagic} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Magia</h2>
        </div>
        <div onClick={handleClickMachinery} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Maquinaria</h2>
        </div>
        <div onClick={handleClickApparel} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Ropa</h2>
        </div>
        <div onClick={handleClickSupplies} className="w-50 h-50 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-2xl">Suministros</h2>
        </div>
      </div>
      <div className="p-4 italic font-thin text-sm space-y-4">
        <p>
          En caso de que quieras añadir una pieza de equipo que no esté listada, puedes hablar con el DM para discutir su inclusión. El equipo puede variar en rareza y poder, y es importante considerar cómo cada pieza se integra en la narrativa de tu personaje y la historia del juego.
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