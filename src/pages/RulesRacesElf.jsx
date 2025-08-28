import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ElfRace() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/races');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Elfos
        </h1>
        <main className="divide-y-1 w-2/3 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Bonificadores de Atributos:
            </p>
            <ul className="flex flex-row border p-2 rounded-2xl divide-x-1 text-center center justify-center">
              <li className="px-2">+1 INT</li>
              <li className="px-2" >+1 WIS</li>
              <li className="px-2">-1 STR</li>
              <li className="px-2">-1 CON</li>
            </ul>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Bonificadores de HP:
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              -
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Bonificadores de Salvada:
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              +2
            </p>
            <p className="text-xs">
              vs. <span className="font-bold underline underline-offset-2">Encanto, miedo y sueño</span>
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Idiomas:
            </p>
            <ul className="flex flex-row border p-2 rounded-2xl divide-x-1 text-center items-center justify-center">
              <li className="px-2">Común</li>
              <li className="px-2" >Élfico</li>
              <li className="px-2">+1 Adicional</li>
            </ul>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Competencias:
            </p>
            <ul className="flex flex-row border p-2 rounded-2xl divide-x-1 text-center items-center justify-center">
              <li className="px-2">+1 Adicional</li>
            </ul>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Vision Elfica:
            </p>
            <p className="text-md">
              Pueden ver en los bosques, claros y planicies mas oscuras mejor que cualquier otro; como si fuera de dia. Adicionalmente, en entornos naturales, pueden concentrarse para conocer las propiedades de la flora que los rodea.
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Longevidad:
            </p>
            <ul className="text-left list-inside space-y-2">
              <li className="list-disc">Joven (30–100 años). Sin modificadores.</li>
              <li className="list-disc">Adulto (101–400 años). +1 Inteligencia, +1 Sabiduría.</li>
              <li className="list-disc">Anciano (+400 años). +1 Inteligencia, +2 Sabiduría.</li>
            </ul>
          </div>
        </main>
      </div>
      <div className="w-2/3 md:w-1/3 mt-4">
        <img className="rounded-2xl opacity-25" src="/assets/image/elf.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
