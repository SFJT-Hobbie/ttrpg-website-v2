import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HalflingRace() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/races');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Medianos
          </h1>
        </div>
        <main className="divide-y divide-white w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Bonificadores de Atributos:
            </p>
            <ul className="flex flex-row flex-wrap border border-white p-2 rounded-2xl divide-x divide-white text-center justify-center gap-2">
              <li className="px-2">+1 DEX</li>
              <li className="px-2">+1 CHA</li>
              <li className="px-2">-1 STR</li>
              <li className="px-2">-1 CON</li>
            </ul>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Bonificadores de HP:
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              -
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Bonificadores de Salvada:
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              -
            </p>
            <p className="text-small">
              vs. <span className="font-bold">-</span>
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Idiomas:
            </p>
            <ul className="flex flex-row flex-wrap border border-white p-2 rounded-2xl divide-x divide-white text-center items-center justify-center gap-2">
              <li className="px-2">Común</li>
              <li className="px-2">Mediano</li>
            </ul>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Competencias:
            </p>
            <ul className="flex flex-row flex-wrap border border-white p-2 rounded-2xl divide-x divide-white text-center items-center justify-center gap-2">
              <li className="px-2">+1 Adicional</li>
            </ul>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Pies Ligeros
            </p>
            <p className="text-body text-center">
              Los medianos gozan de +10 pies de movimiento adicional en combate cercano, y +40 pies de movimiento adicional en combate abierto. 
            </p>
            <p className="text-body text-center">
              Cuentan con un bonus permanente de CA +1 debido a su agilidad innata.
            </p>
            <p className="text-body text-center">
              Adicionalmente, pueden montar animales como perros o chanchos.
            </p>
            <p className="mt-2">
              Mente Pura
            </p>
            <p className="text-body text-center">
              Los Medianos que no sean malvados, y sean ancianos, tienen la posibilidad de elegir la competencia de Saber Velado.
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Longevidad:
            </p>
            <ul className="text-left list-inside space-y-2 text-body">
              <li className="list-disc">Joven (8-20 años). Sin modificadores.</li>
              <li className="list-disc">Adulto (21-51 años). +1 Destreza, +1 Carisma.</li>
              <li className="list-disc">Anciano (51-80 años). +1 Destreza, +1 Sabiduría, -1 Fuerza, -1 Constitución.</li>
            </ul>
          </div>
        </main>
        <div className="w-full sm:w-2/3 md:w-1/3 mt-4 flex justify-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/halfling.png" alt="" />
        </div>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  )
}
