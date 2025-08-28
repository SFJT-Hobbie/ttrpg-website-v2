import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SpecialistClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Especialista
        </h1>
        <main className="divide-y-1 w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Hit-Die
            </p>
            <ul className="flex flex-row border p-2 rounded-2xl divide-x-1 text-center center justify-center w-20">
              <li className="px-2">d6</li>
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
              2
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Competencias en No-Armas
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              5
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Salvada Base
            </p>
            <p className="flex flex-row border p-2 rounded-2xl justify-center w-20">
              +5
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
              vs. <span className="font-bold underline underline-offset-2">Trampas y Peligros Naturales.</span>
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
              Por <span className="underline underline-offset-2">cada 2 niveles</span> en la clase
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
                  <td className="border-b-slate-700 border border-x-0 montserrat">1.25k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2.5k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">5k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">10k</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">20k</td>
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
                Siempre Listo
              </p>
              <p className="text-md text-left">
                Pueden cargar en los bultos de herramientas o equipamiento de utilidad el doble que el resto de las clases. Demostrando su habilidad para adaptarse y optimizar los recursos con los que cuentan.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold">
                Adaptación de Habilidades
              </p>
              <p className="text-md text-left">
                Tira 2d6 y conserva el mayor para la progresión de competencias no relacionadas con armas. En el nivel 8, esto se convierte en 2d8, mientras el Especialista afina su oficio entre las ruinas, transformando fragmentos de conocimiento en supervivencia.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold">
                Adaptación de Habilidades
              </p>
              <p className="text-md text-left">
                Tira 2d6 y conserva el mayor para la progresión de competencias no relacionadas con armas. En el nivel 8, esto se convierte en 2d8, mientras el Especialista afina su oficio entre las ruinas, transformando fragmentos de conocimiento en supervivencia.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Maestro de Todo
              </p>
              <p className="text-md text-left">
                Ganan +10% a todas las competencias no relacionadas con armas no competentes. El tiempo y el costo de entrenamiento se reducen a la mitad, una habilidad de saqueador para doblar fragmentos de conocimiento a su voluntad.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Oportunista
              </p>
              <p className="text-md text-left">
                En el nivel 6, una vez por combate, añaden +1d6 de daño a un golpe contra un enemigo distraído o flanqueado. En un golpe crítico, infligen el daño máximo del arma tres veces, una maestría fugaz en la matanza que cambia la marea en la oscuridad.
              </p>
            </div>
            <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
              <p>
                Modificadores por Edad:
              </p>
              <ul className="text-left list-inside space-y-2">
                <li className="list-disc">Joven. Sin modificadores.</li>
                <li className="list-disc">Adulto. +1 Destreza, +1 Sabiduría.</li>
                <li className="list-disc">Anciano. +1 Destreza, +1 Sabiduría, -1 Fuerza.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <div className="w-1/2 md:w-1/5 mt-4">
        <img className="rounded-2xl opacity-25" src="/assets/image/specialist.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
