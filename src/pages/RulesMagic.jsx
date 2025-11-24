import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Magic() {
  const navigate = useNavigate();

  const handleClickAstral = () => {
    navigate('/rules/magic/astral')
  }

  const handleClickNatural = () => {
    navigate('/rules/magic/natural')
  }

  const handleClickVoiceForm = () => {
    navigate('/rules/magic/voice-form')
  }

  const handleClickArchive = () => {
    navigate('/rules/magic/archive')
  }

  const handleClickBack = () => {
    navigate('/rules');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Magia
          </h1>
        </div>
        <main className="flex flex-col border border-white rounded-xl mt-8 space-y-6 md:space-y-8 text-center p-4 md:p-6 lg:p-8">
          <div className="garamond text-body mt-4">
            <p>
              La magia en Eldra'Kazhan es una fuerza poderosa y misteriosa, que puede ser utilizada para alterar la realidad, invocar criaturas y manipular el entorno. Existen diferentes tipos de magia, y los hechizos pueden variar en complejidad y efecto. Explora las distintas doctrinas de magia iniciales y descubre cómo pueden enriquecer tu experiencia de juego.
            </p>
          </div>      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
            <div onClick={handleClickAstral} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Astral</h2>
            </div>
            <div onClick={handleClickNatural} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Natural</h2>
            </div>
            <div onClick={handleClickVoiceForm} className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-48 border border-transparent hover:border-white rounded-xl flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-all duration-300">
              <h2 className="cinzel text-xl sm:text-2xl md:text-3xl">Voz & Forma</h2>
            </div>
          </div>
          <div className="p-4 italic font-thin text-small">
            <p>
              Si deseas crear un nuevo hechizo o modificar uno existente, puedes hablar con el DM para discutir su inclusión. La magia puede ser una herramienta poderosa, pero también conlleva riesgos y consecuencias. Es importante considerar cómo cada hechizo se integra en la narrativa de tu personaje y la historia del juego.
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