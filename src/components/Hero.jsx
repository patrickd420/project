import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Evaluări <span className="text-pink-500">Precise</span> de Încredere
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Esteval oferă evaluări imobiliare precise și de încredere pentru toate nevoile 
          dumneavoastră. Echipa noastră de experți se angajează să furnizeze servicii de înaltă 
          calitate, cu integritate și profesionalism.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
            Programează Evaluarea
          </button>
          <button className="text-gray-700 hover:text-gray-900 px-8 py-4 font-semibold transition-colors">
            Află Mai Multe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
