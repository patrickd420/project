import React from 'react';
import { Home, RefreshCw, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-pink-500" />
          <span className="text-xl font-semibold text-gray-900">Esteval</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Acasă</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Despre Noi</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Servicii</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Recenzii Clienți</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Programări vs Evaluare</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <LogIn className="w-5 h-5" />
            <span className="hidden sm:inline">Log In</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;