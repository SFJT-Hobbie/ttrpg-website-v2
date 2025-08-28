import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function WarriorClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Guerrero
        </h1>
        <main className="divide-y-1 w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Hit-Die
            </p>
            <ul className="flex flex-row border p-2 rounded-2xl divide-x-1 text-center center justify-center w-20">
              <li className="px-2">d10</li>
            </ul>
            <p className="text-xs">
              Dado de HP por Nivel
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Competencias en Armas
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              4
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Competencias en No-Armas
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              3
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Salvada Base
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              +6
            </p>
            <p className="text-xs">
              +1 por <span className="underline underline-offset-2">cada 2 niveles</span> en la clase.
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Bonus de Salvadas:
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              +2
            </p>
            <p className="text-xs">
              vs. <span className="font-bold underline underline-offset-2">Veneno, Enfermedades, Desplazamiento y Agotamiento.</span>
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Bonus al Golpear
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              +1
            </p>
            <p className="text-xs">
              Por <span className="underline underline-offset-2">cada nivel</span> en la clase
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <table class="w-full md:w-1/2 mx-auto border-collapse text-center">
              <thead>
                <tr>
                  <th className="border-b-slate-700 border border-x-0 border-t-0 montserrat">Nivel</th>
                  <th className="border-b-slate-700 border border-x-0 border-t-0 montserrat">Experiencia para Ascenso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">4k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">8k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">16k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">32k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">[...]</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">[...]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="garamond space-y-4 divide-y divide-slate-700 divide-dashed flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <div className="pb-2">              
              <p className="font-bold">
                Segunda Piel
              </p>
              <p className="text-md text-left">
                Vestir una armadura no tiene penalización de espacio o peso, pues los Luchadores llevan acero y cadenas como si fueran carne.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Rompe-Hordas
              </p>
              <p className="text-md text-left">
                Cuando no está enfrentado por un enemigo con Dados de Golpe iguales o superiores a su nivel, el Luchador puede realizar múltiples ataques en una ronda, apuntando a cualquier número de enemigos cuyos Dados de Golpe combinados no excedan su nivel. Cada golpe es un testimonio de su dominio sobre los frágiles, abatiendo a los débiles con brutal eficiencia.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Maestría con Armas
              </p>
              <p className="text-md text-left">
                En el nivel 1, elige un arma competente para dominarla, ganando +1 al acertar y +1 al daño. En cada nivel impar posterior (3, 5, 7, 9), domina una arma competente adicional, acumulando bonificaciones donde el acero encuentra el hueso, convirtiendo el metal en una extensión de su voluntad.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Golpe Implacable
              </p>
              <p className="text-md text-left">
                En el nivel 5, al blandir un arma competente, tira el daño dos veces y suma el total. Para un arma dominada, tira tres veces y conserva los dos resultados más altos, tallando la ruina con una precisión inquebrantable que quiebra incluso a los enemigos más robustos.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Ataque Preciso
              </p>
              <p className="text-md text-left">
                En el nivel 7, una vez por combate, el Luchador puede convertir un ataque fallido en un impacto automático, atravesando el velo del destino, o añadir su nivel al daño de un golpe, destrozando enemigos con un solo impacto deliberado que resuena en las ruinas.
              </p>
            </div>
            <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
              <p>
                Modificadores por Edad:
              </p>
              <ul className="text-left list-inside space-y-2">
                <li className="list-disc">Joven. Sin modificadores.</li>
                <li className="list-disc">Adulto. +1 Fuerza, +1 Constitución.</li>
                <li className="list-disc">Anciano. +1 Fuerza, +1 Constitución, +1 Sabiduría, -1 Destreza.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <div className="w-1/2 md:w-1/5 mt-4">
        <img className="rounded-2xl opacity-25" src="/assets/image/warrior.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
