import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RulesMagicArchive() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/rules/magic');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-clip">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mt-4 text-center">
          <h1 className="cinzel text-page-title landing-title">
            Archivo de Magia
          </h1>
        </div>
        <main className="space-y-6 md:space-y-8 w-full flex flex-col items-center justify-center text-left mx-auto border border-white rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
          <div className="space-y-2 p-2 md:p-4 w-full">
            <h2 className="cinzel text-section-title">
              Introducción
            </h2>
            <p className="text-body">
              El Archivo de Magia contiene hechizos personalizados, modificaciones y variantes que han sido creados o adaptados para el mundo de Eldra'Kazhan. Este archivo está en constante evolución y puede incluir hechizos de diferentes escuelas mágicas.
            </p>
          </div>
          <div className="space-y-2 p-2 md:p-4 w-full">
            <p className="text-body italic">
              Este archivo está actualmente en desarrollo. Si deseas contribuir con hechizos personalizados o modificaciones, por favor contacta al DM.
            </p>
          </div>
        </main>
        <div onClick={handleClickBack} className="mt-8 mb-4 text-center cursor-pointer">
          <p className="garamond text-body cursor-pointer hover:underline hover:underline-offset-8 border border-transparent hover:border-white px-4 py-2 rounded-2xl inline-block transition-all duration-300">
            Volver
          </p>
        </div>
      </div>
    </section>
  );
}
