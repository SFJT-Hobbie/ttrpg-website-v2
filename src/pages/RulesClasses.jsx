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
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Clases
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-8 space-y-6 md:space-y-8 text-center p-4 md:p-6 lg:p-8">
          <div className="garamond text-body mt-4">
            <p>
              Las clases son una parte esencial de la creación de personajes en Eldra'Kazhan. Cada clase ofrece habilidades únicas, estilos de combate y roles específicos dentro del grupo. Explora las distintas clases disponibles y elige la que mejor se adapte a tu estilo de juego.
            </p>
          </div>      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
            <div onClick={handleClickWarrior} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Guerrero</h2>
            </div>
            <div onClick={handleClickSpecialist} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Especialista</h2>
            </div>
            <div onClick={handleClickMagicUser} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Usuario de Magia</h2>
            </div>
            <div onClick={handleClickMulticlass} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Multiclase</h2>
            </div>
          </div>
          <div className="p-4 italic font-thin text-small">
            <p>
              La cantidad limitada de clases disponibles en Eldra'Kazhan permite una experiencia de juego más enfocada y equilibrada. Priorizando roleplay sobre y libertad de creación, cada clase está diseñada para ofrecer una experiencia única y enriquecedora.
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