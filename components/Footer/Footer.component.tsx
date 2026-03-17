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
    <footer className="footer mt-6">
      <div className="content has-text-centered">
        <p>
          <strong>{language === 'es' ? 'Hecho con' : 'Made on'} Next.js</strong> {language === 'es' ? 'por' : 'by'} Antonio
        </p>
        <p className="is-size-7 is-capitalized">
          {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
