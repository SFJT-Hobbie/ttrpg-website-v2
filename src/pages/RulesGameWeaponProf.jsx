import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesGameWeaponProficiency() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/game');
  };

  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center text-white overflow-clip">
      <div className="top-0 mx-auto mt-4 text-center">
        <h1 className="cinzel text-5xl md:text-7xl landing-title">
          Competencia con Armas
        </h1>
      </div>
      <main className="flex flex-col border-white border-1 rounded-xl w-10/12 mt-8 space-y-8 p-4">
        <h2 className="cinzel text-2xl md:text-4xl">
          Introducción
        </h2>
        <div className="flex flex-col space-y-6 montserrat">
          <p>
            Donde la muerte acecha en cada sombra, un arma es más que acero—es un desafío fugaz contra la oscuridad que avanza. La competencia con un arma implica blandirla sin la torpeza que invita al desastre, evitándote la penalización de -4 al golpear que aflige a los no entrenados. Cada arma porta su propio propósito sombrío, moldeado por las necesidades de un mundo que no perdona.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Espada:</span> Una hoja de elegancia deslustrada, forjada para la precisión. Las espadas cortan carne con la gracia de un duelista, su filo un susurro de control efímero en un reino caótico.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Hacha:</span> Brutal e implacable, las hachas despedazan hueso y tendón. Son herramientas de carniceros y saqueadores, ansiosas por destruir en una tierra que lo exige.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Maza:</span> Un instrumento romo de fuerza aplastante, las mazas destrozan armaduras y huesos por igual. Su peso imparte juicio a los inflexibles, sean hombres o monstruos.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Bastón:</span> Una simple vara de madera nudosa, el bastón es el compañero de los errantes. Repele golpes y canaliza voluntad mística, un aliado humilde en un mundo maldito.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Lanza:</span> Larga y perforante, las lanzas mantienen a raya a los enemigos. Son la elección de quienes golpean desde lejos, cautelosos de los horrores que se acercan demasiado.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Daga:</span> Pequeña y traicionera, las dagas prosperan en las sombras. Se deslizan entre costillas o cortan gargantas, perfectas para los desesperados y los engañosos.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Mangual:</span> Una amenaza encadenada, los manguales azotan el aire con furia impredecible. Aplastan con fuerza errática, un arma para quienes se deleitan en el caos.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Martillo de Guerra:</span> Un martillo colosal de poder despiadado, los martillos de guerra pulverizan enemigos con golpes implacables. Son blandidos por quienes buscan quebrar lo inquebrantable.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Espada a Dos Manos:</span> Una gran hoja de poder ruinoso, las espadas a dos manos cercenan múltiples enemigos. Sus arcos amplios son una danza mortal, exigiendo fuerza y resolución.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Estrella Matutina:</span> Un terror erizado, las estrellas matutinas mutilan con precisión cruel. Sus cabezas brutales desgarran carne y rompen defensas, una promesa sombría de dolor.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Guja:</span> Un arma de asta con una hoja cortante, las gujas golpean desde lejos. Tejen arcos letales, aptas para quienes defienden su terreno contra la marea de ruina.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Alabarda:</span> Un arma de asta versátil, las alabardas combinan hacha y lanza. Cortan, empujan y enganchan, ofreciendo adaptabilidad sombría frente a enemigos implacables.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Vara:</span> Un palo robusto de madera curtida, las varas son engañosamente simples. Bloquean, golpean y hacen tropezar, blandidas por quienes encuentran fuerza en la humildad.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Arco:</span> Un arma de muerte lejana, los arcos disparan flechas para perforar a los desprevenidos. Exigen paciencia y precisión, una herramienta de cazador en una tierra predatoria.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Arco Corto:</span> Compacto y veloz, los arcos cortos disparan con agilidad mortal. Convienen a los veloces, atacando desde las sombras antes de que el enemigo se acerque.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Ballesta:</span> Un heraldo mecánico, las ballestas lanzan virotes con fuerza inmisericorde. Son favorecidas por quienes valoran la fiabilidad sobre la finura en un mundo traicionero.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Ballesta de Mano:</span> Pequeña pero letal, las ballestas de mano escupen virotes con un movimiento de muñeca. Son la elección del asesino, ocultas hasta el momento de la traición.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Ballesta Ligera:</span> Un equilibrio entre poder y portabilidad, las ballestas ligeras golpean con precisión. Arman a quienes pisan ligero pero matan con intención.
          </p>
          <p>
            <span className="text-yellow-600 text-bold underline underline-offset-4">Honda:</span> Una herramienta primitiva de cuerda trenzada, las hondas lanzan piedras con sorprendente fuerza. Son el arma de los carroñeros, convirtiendo escombros en ruina.
          </p>
        </div>
      </main>
      <div className="w-10/12 flex items-center justify-center mt-4">
        <img className="rounded-2xl opacity-25 p-4" src="/assets/image/weaponry.png" alt="" />
      </div>
      <div onClick={handleClickBack} className="bottom-0 relative my-8 mx-auto left-0 right-0 cursor-pointer">
        <p className="garamond text-center text-lg cursor-pointer hover:underline hover:underline-offset-8 border-1 border-transparent hover:border-white p-4 rounded-2xl">
          Volver
        </p>
      </div>
    </section>
  );
}