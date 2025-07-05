import React from 'react';
import { Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-semibold text-gray-900">Esteval</span>
            </div>
            <p className="text-gray-600 mb-4">
              Oferim servicii de evaluare imobiliară precise și de încredere.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contactați-ne</h3>
            <div className="space-y-2 text-gray-600">
              <p>Strada I.C. Brătianu</p>
              <p>Email: esteval@gmail.com</p>
              <p>Telefon: 0786503098</p>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <div className="mb-4">
              <img 
                src="https://simpixel.ro/wp-content/uploads/2022/09/SAL.svg" 
                alt="Soluționarea Alternativă a Litigiilor"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">Fondat în 2003</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Esteval. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
