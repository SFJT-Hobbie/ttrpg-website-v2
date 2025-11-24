import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function WarriorClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Guerrero
          </h1>
        </div>
        <main className="divide-y divide-white w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Hit-Die
            </p>
            <ul className="flex flex-row flex-wrap border border-white p-2 rounded-2xl divide-x divide-white text-center justify-center gap-2 min-w-20">
              <li className="px-2">d10</li>
            </ul>
            <p className="text-small">
              Dado de HP por Nivel
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Competencias en Armas
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              4
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Competencias en No-Armas
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              3
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Salvada Base
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              +6
            </p>
            <p className="text-small">
              +1 por <span className="underline underline-offset-2">cada 2 niveles</span> en la clase.
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Bonus de Salvadas:
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              +2
            </p>
            <p className="text-small">
              vs. <span className="font-bold underline underline-offset-2">Veneno, Enfermedades, Desplazamiento y Agotamiento.</span>
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Bonus al Golpear
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              +1
            </p>
            <p className="text-small">
              Por <span className="underline underline-offset-2">cada nivel</span> en la clase
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <div className="w-full overflow-x-auto">
              <table className="w-full md:w-1/2 mx-auto border-collapse text-center text-sm sm:text-base">
                <thead>
                  <tr>
                    <th className="border-b border-slate-700 px-2 py-2 montserrat">Nivel</th>
                    <th className="border-b border-slate-700 px-2 py-2 montserrat">Experiencia para Ascenso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">4k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">8k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">16k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">32k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">[...]</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">[...]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="garamond space-y-4 divide-y divide-slate-700 divide-dashed flex flex-col items-center justify-center py-4 w-full text-body">
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                Segunda Piel
              </p>
              <p className="text-body text-left">
                Vestir una armadura no tiene penalización de espacio o peso, pues los Luchadores llevan acero y cadenas como si fueran carne.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Rompe-Hordas
              </p>
              <p className="text-body text-left">
                Cuando no está enfrentado por un enemigo con Dados de Golpe iguales o superiores a su nivel, el Luchador puede realizar múltiples ataques en una ronda, apuntando a cualquier número de enemigos cuyos Dados de Golpe combinados no excedan su nivel. Cada golpe es un testimonio de su dominio sobre los frágiles, abatiendo a los débiles con brutal eficiencia.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Maestría con Armas
              </p>
              <p className="text-body text-left">
                En el nivel 1, elige un arma competente para dominarla, ganando +1 al acertar y +1 al daño. En cada nivel impar posterior (3, 5, 7, 9), domina una arma competente adicional, acumulando bonificaciones donde el acero encuentra el hueso, convirtiendo el metal en una extensión de su voluntad.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Golpe Implacable
              </p>
              <p className="text-body text-left">
                En el nivel 5, al blandir un arma competente, tira el daño dos veces y suma el total. Para un arma dominada, tira tres veces y conserva los dos resultados más altos, tallando la ruina con una precisión inquebrantable que quiebra incluso a los enemigos más robustos.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Ataque Preciso
              </p>
              <p className="text-body text-left">
                En el nivel 7, una vez por combate, el Luchador puede convertir un ataque fallido en un impacto automático, atravesando el velo del destino, o añadir su nivel al daño de un golpe, destrozando enemigos con un solo impacto deliberado que resuena en las ruinas.
              </p>
            </div>
            <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
              <p>
                Modificadores por Edad:
              </p>
              <ul className="text-left list-inside space-y-2 text-body">
                <li className="list-disc">Joven. Sin modificadores.</li>
                <li className="list-disc">Adulto. +1 Fuerza, +1 Constitución.</li>
                <li className="list-disc">Anciano. +1 Fuerza, +1 Constitución, +1 Sabiduría, -1 Destreza.</li>
              </ul>
            </div>
          </div>
        </main>
        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 flex justify-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/warrior.png" alt="" />
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
