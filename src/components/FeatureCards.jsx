import React from 'react';
import { Home, TrendingUp, Award } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: Home,
      title: "Analiză Completă a Proprietății",
      description: "Evaluări aprofundate care acoperă toate aspectele proprietății dumneavoastră pentru a asigura o valoare justă de piață.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Perspective Asupra Tendințelor Pieței",
      description: "Utilizăm cele mai recente date și tendințe ale pieței pentru evaluări precise și actuale.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: Award,
      title: "Evaluatori Certificați și Experimentați",
      description: "Echipa noastră este formată din profesioniști cu înaltă calificare, dedicați excelenței.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${feature.iconColor} mb-6`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;