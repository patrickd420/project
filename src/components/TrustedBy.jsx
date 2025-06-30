import React from 'react';

const TrustedBy = () => {
  // Using placeholder logos since we can't see the actual company logos clearly
  const companies = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Company ${index + 1}`,
    placeholder: '150 x 60'
  }));

  // Duplicate the companies array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          De Încredere pentru Companii de Top
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Suntem mândri că am lucrat cu o gamă variată de clienți care au încredere în 
          expertiza și angajamentul nostru față de calitate.
        </p>
        
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={`${company.id}-${index}`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center h-16 min-w-[150px] flex-shrink-0"
              >
                <div className="text-gray-400 text-sm font-medium">
                  {company.placeholder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;