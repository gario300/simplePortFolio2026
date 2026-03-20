import React from 'react';

export interface NavBarProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-[#18181B]/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-heading font-bold text-xl text-primary dark:text-white hover:opacity-80 transition-opacity cursor-pointer">
          {language === 'es' ? 'Portafolio' : 'Portfolio'}
        </a>

        <div className="flex bg-gray-100 p-1 rounded-lg dark:bg-gray-800">
          <button 
            className={`px-4 py-1 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 ${language === 'es' ? 'bg-white shadow-sm text-primary dark:bg-gray-700 dark:text-white' : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white'}`}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
          <button 
            className={`px-4 py-1 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 ${language === 'en' ? 'bg-white shadow-sm text-primary dark:bg-gray-700 dark:text-white' : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white'}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
