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
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Magia
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 text-center">
      <div className="garamond text-md md:text-xl mt-4 p-4">
        <p>
          La magia en Eldra'Kazhan es una fuerza poderosa y misteriosa, que puede ser utilizada para alterar la realidad, invocar criaturas y manipular el entorno. Existen diferentes tipos de magia, y los hechizos pueden variar en complejidad y efecto. Explora las distintas doctrinas de magia iniciales y descubre cómo pueden enriquecer tu experiencia de juego.
        </p>
      </div>      
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        <div onClick={handleClickAstral} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Astral</h2>
        </div>
        <div onClick={handleClickNatural} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Natural</h2>
        </div>
        <div onClick={handleClickVoiceForm} className="w-50 h-50 md:h-100 border-transparent hover:border-white border-1 rounded-xl m-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-gray-700">
          <h2 className="cinzel text-xl md:text-3xl">Voz & Forma</h2>
        </div>
      </div>
      <div className="p-4 italic font-thin text-sm">
        <p>
          Si deseas crear un nuevo hechizo o modificar uno existente, puedes hablar con el DM para discutir su inclusión. La magia puede ser una herramienta poderosa, pero también conlleva riesgos y consecuencias. Es importante considerar cómo cada hechizo se integra en la narrativa de tu personaje y la historia del juego.
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