import React from 'react';

interface FooterProps {
  language: 'es' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentDate = new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="mt-24 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          <strong>{language === 'es' ? 'Hecho con' : 'Made on'} Next.js</strong> {language === 'es' ? 'por' : 'by'} Antonio
        </p>
        <p className="text-xs text-gray-500 mt-2 capitalize">
          {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
