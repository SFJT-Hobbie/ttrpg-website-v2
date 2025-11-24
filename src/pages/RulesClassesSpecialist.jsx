import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SpecialistClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Especialista
          </h1>
        </div>
        <main className="divide-y divide-white w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Hit-Die
            </p>
            <ul className="flex flex-row flex-wrap border border-white p-2 rounded-2xl divide-x divide-white text-center justify-center gap-2 min-w-20">
              <li className="px-2">d6</li>
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
              2
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Competencias en No-Armas
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              5
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Salvada Base
            </p>
            <p className="flex flex-row border border-white p-2 rounded-2xl justify-center min-w-20">
              +5
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
              vs. <span className="font-bold underline underline-offset-2">Trampas y Peligros Naturales.</span>
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
              Por <span className="underline underline-offset-2">cada 2 niveles</span> en la clase
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
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">1.25k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2.5k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">5k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">10k</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">20k</td>
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
                Siempre Listo
              </p>
              <p className="text-body text-left">
                Pueden cargar en los bultos de herramientas o equipamiento de utilidad el doble que el resto de las clases. Demostrando su habilidad para adaptarse y optimizar los recursos con los que cuentan.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                Adaptación de Habilidades
              </p>
              <p className="text-body text-left">
                Tira 2d6 y conserva el mayor para la progresión de competencias no relacionadas con armas. En el nivel 8, esto se convierte en 2d8, mientras el Especialista afina su oficio entre las ruinas, transformando fragmentos de conocimiento en supervivencia.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Maestro de Todo
              </p>
              <p className="text-body text-left">
                Ganan +10% a todas las competencias no relacionadas con armas no competentes. El tiempo y el costo de entrenamiento se reducen a la mitad, una habilidad de saqueador para doblar fragmentos de conocimiento a su voluntad.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Oportunista
              </p>
              <p className="text-body text-left">
                En el nivel 6, una vez por combate, añaden +1d6 de daño a un golpe contra un enemigo distraído o flanqueado. En un golpe crítico, infligen el daño máximo del arma tres veces, una maestría fugaz en la matanza que cambia la marea en la oscuridad.
              </p>
            </div>
            <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
              <p>
                Modificadores por Edad:
              </p>
              <ul className="text-left list-inside space-y-2 text-body">
                <li className="list-disc">Joven. Sin modificadores.</li>
                <li className="list-disc">Adulto. +1 Destreza, +1 Sabiduría.</li>
                <li className="list-disc">Anciano. +1 Destreza, +1 Sabiduría, -1 Fuerza.</li>
              </ul>
            </div>
          </div>
        </main>
        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 flex justify-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/specialist.png" alt="" />
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
