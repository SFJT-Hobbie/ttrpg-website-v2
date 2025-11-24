import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MagicUserClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Usuario de Magia
          </h1>
        </div>
        <main className="divide-y divide-white w-full flex flex-col items-center justify-center mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <p>
              Hit-Die
            </p>
            <ul className="flex flex-row flex-wrap border border-white p-2 rounded-2xl divide-x divide-white text-center justify-center gap-2 min-w-20">
              <li className="px-2">d4</li>
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
              1
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
              +4
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
              vs. <span className="font-bold underline underline-offset-2">Magia.</span>
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
              Por <span className="underline underline-offset-2">cada 3 niveles</span> en la clase
            </p>
          </div>
          <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
            <div className="w-full overflow-x-auto">
              <table className="w-full table-auto mx-auto border-collapse text-center text-sm sm:text-base">
                <thead>
                  <tr>
                    <th className="border-b border-slate-700 px-2 py-2 montserrat">Nivel</th>
                    <th className="border-b border-slate-700 px-2 py-2 montserrat">Experiencia para Ascenso</th>
                    <th className="border-b border-slate-700 px-2 py-2 montserrat">Espacios de Hechizo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2.5k</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">1</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">5k</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">2</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">3</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">10k</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">3 | 1</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">4</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">20k</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">3 | 2</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">5</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">40k</td>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">3 | 3 | 1</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-700 px-2 py-2 montserrat">[...]</td>
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
                Afinidad Arcana
              </p>
              <p className="text-body text-left">
                Las habilidades no competentes en Astronomía, Astrología, Alquimia, Criptografía, Runología, Runosofía, Nomotética, Magia Gris, Magia Negra y Magia Blanca comienzan en Sabiduría/Intelecto × 3 (a eleccion del jugador). En caso de tomar una proficiencia en una de ellas, comiezan en Sabiduría/Intelecto × 6 (a eleccion del jugador); un destello de perspicacia en las artes veladas que acechan sus sueños.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                Lanzamiento de Hechizos
              </p>
              <p className="text-body text-left">
                En el nivel 1, ganan 1 espacio de hechizo del primer circulo, aumentando a medida que progresan. Los hechizos se clasifican como magia negra, gris o blanca. Para aprender nuevos hechizos, el Usuario de Magia debera hacer una lanzada de la Competencia relevante al mismo.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold text-section-title">
                Perspicacia de lo Oculto
              </p>
              <p className="text-body text-left">
                En el nivel 4, ganan +10% a las tiradas para descifrar textos o artefactos arcanos, desvelando los secretos oscuros del mundo con una claridad peligrosa.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold text-section-title">
                Conocimiento Maldito
              </p>
              <p className="text-body text-left">
                En el nivel 9, añaden +20% a las tiradas de Saber Velado, mientras las verdades prohibidas se filtran en el alma. La entropía se ralentiza a un paso de tortuga: el envejecimiento toma diez veces más, una maldición persistente que los ata al mundo y a sus secretos.
              </p>
            </div>
            <div className="garamond space-y-2 flex flex-col items-center justify-center py-4 w-full text-body">
              <p>
                Modificadores por Edad:
              </p>
              <ul className="text-left list-inside space-y-2 text-body">
                <li className="list-disc">Joven. Sin modificadores.</li>
                <li className="list-disc">Adulto. +1 Inteligencia, +1 Sabiduría.</li>
                <li className="list-disc">Anciano. +1 Inteligencia, +2 Sabiduría, -1 Constitución.</li>
              </ul>
            </div>
          </div>
        </main>
        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 flex items-center justify-center">
          <img className="rounded-2xl opacity-25 w-full max-w-full h-auto" src="/assets/image/magicuser.png" alt="" />
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
