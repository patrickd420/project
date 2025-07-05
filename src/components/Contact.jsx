import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Luați Legătura
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ai întrebări, sugestii sau vrei să colaborezi cu noi? Suntem aici pentru 
          tine! Completează formularul de mai jos sau trimite-ne un mesaj direct 
          — îți vom răspunde în cel mai scurt timp posibil.
        </p>
        
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
          Trimite Mesaj
        </button>
      </div>
    </section>
  );
};

export default Contact;
