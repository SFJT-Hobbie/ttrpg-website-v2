import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MagicUserClass() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/classes');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Usuario de Magia
        </h1>
        <main className="divide-y-1 w-10/12 flex flex-col items-center justify-center mx-auto border-1 rounded-2xl p-2 mt-4">
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <p>
              Hit-Die
            </p>
            <ul className="flex flex-row border p-2 rounded-2xl divide-x-1 text-center center justify-center w-20">
              <li className="px-2">d4</li>
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
              1
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
              +4
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
              vs. <span className="font-bold underline underline-offset-2">Magia.</span>
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
              Por <span className="underline underline-offset-2">cada 3 niveles</span> en la clase
            </p>
          </div>
          <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <table class="w-full table-auto mx-auto border-collapse text-center text-sm">
              <thead>
                <tr>
                  <th className="border-b-slate-700 border border-x-0 border-t-0 montserrat">Nivel</th>
                  <th className="border-b-slate-700 border border-x-0 border-t-0 montserrat">Experiencia para Ascenso</th>
                  <th className="border-b-slate-700 border border-x-0 border-t-0 montserrat">Espacios de Hechizo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2.5k</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">1</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">5k</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">2</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">3</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">10k</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">3 | 1</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">4</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">20k</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">3 | 2</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">5</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">40k</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">3 | 3 | 1</td>
                </tr>
                <tr>
                  <td className="border-b-slate-700 border border-x-0 montserrat">[...]</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">[...]</td>
                  <td className="border-b-slate-700 border border-x-0 montserrat">[...]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="garamond space-y-4 divide-y divide-slate-700 divide-dashed flex flex-col items-center justify-center py-2 w-full md:w-2/3">
            <div className="pb-2">              
              <p className="font-bold">
                Afinidad Arcana
              </p>
              <p className="text-md text-left">
                Las habilidades no competentes en Astronomía, Astrología, Alquimia, Criptografía, Runología, Runosofía, Nomotética, Magia Gris, Magia Negra y Magia Blanca comienzan en Sabiduría/Intelecto × 3 (a eleccion del jugador). En caso de tomar una proficiencia en una de ellas, comiezan en Sabiduría/Intelecto × 6 (a eleccion del jugador); un destello de perspicacia en las artes veladas que acechan sus sueños.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold">
                Lanzamiento de Hechizos
              </p>
              <p className="text-md text-left">
                En el nivel 1, ganan 1 espacio de hechizo del primer circulo, aumentando a medida que progresan. Los hechizos se clasifican como magia negra, gris o blanca. Para aprender nuevos hechizos, el Usuario de Magia debera hacer una lanzada de la Competencia relevante al mismo.
              </p>
            </div>
            <div className="pb-2">              
              <p className="font-bold">
                Perspicacia de lo Oculto
              </p>
              <p className="text-md text-left">
                En el nivel 4, ganan +10% a las tiradas para descifrar textos o artefactos arcanos, desvelando los secretos oscuros del mundo con una claridad peligrosa.
              </p>
            </div>
            <div className="pb-2">
              <p className="font-bold">
                Conocimiento Maldito
              </p>
              <p className="text-md text-left">
                En el nivel 9, añaden +20% a las tiradas de Saber Velado, mientras las verdades prohibidas se filtran en el alma. La entropía se ralentiza a un paso de tortuga: el envejecimiento toma diez veces más, una maldición persistente que los ata al mundo y a sus secretos.
              </p>
            </div>
            <div className="garamond space-y-1 flex flex-col items-center justify-center py-2 w-full md:w-2/3">
              <p>
                Modificadores por Edad:
              </p>
              <ul className="text-left list-inside space-y-2">
                <li className="list-disc">Joven. Sin modificadores.</li>
                <li className="list-disc">Adulto. +1 Inteligencia, +1 Sabiduría.</li>
                <li className="list-disc">Anciano. +1 Inteligencia, +2 Sabiduría, -1 Constitución.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <div className="w-1/2 md:w-1/5 mt-4">
        <img className="rounded-2xl opacity-25" src="/assets/image/magicuser.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  )
}
