import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Classes() {
  const navigate = useNavigate();

  const handleClickWarrior = () => {
    navigate('/rules/classes/warrior')
  }

  const handleClickSpecialist = () => {
    navigate('/rules/classes/specialist')
  }

  const handleClickMagicUser = () => {
    navigate('/rules/classes/magicuser')
  }

  const handleClickMulticlass = () => {
    navigate('/rules/classes/multiclass')
  }

  const handleClickBack = () => {
    navigate('/rules');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Clases
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 text-center">
      <div className="garamond text-md md:text-xl mt-4 p-4">
        <p>
          Las clases son una parte esencial de la creación de personajes en Eldra'Kazhan. Cada clase ofrece habilidades únicas, estilos de combate y roles específicos dentro del grupo. Explora las distintas clases disponibles y elige la que mejor se adapte a tu estilo de juego.
        </p>
      </div>      
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-8">
        <div onClick={handleClickWarrior} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Guerrero</h2>
        </div>
        <div onClick={handleClickSpecialist} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Especialista</h2>
        </div>
        <div onClick={handleClickMagicUser} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Usuario de Magia</h2>
        </div>
        <div onClick={handleClickMulticlass} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Multiclase</h2>
        </div>
      </div>
      <div className="p-4 italic font-thin text-sm">
        <p>
          La cantidad limitada de clases disponibles en Eldra'Kazhan permite una experiencia de juego más enfocada y equilibrada. Priorizando roleplay sobre y libertad de creación, cada clase está diseñada para ofrecer una experiencia única y enriquecedora.
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