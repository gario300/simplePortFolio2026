import React from 'react';

export interface NavBarProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
  return (
    <nav 
      className="navbar is-fixed-top" 
      role="navigation" 
      aria-label="main navigation"
      style={{ borderBottom: '1px solid #eee' }}
    >
      <div className="container">
        <div className="navbar-brand" style={{ width: '100%' }}>
          <a className="navbar-item title is-5 mb-0" href="/">
            {language == 'es' ? 'Portafolio' : 'Portfolio'}
          </a>

          <div className="navbar-item ml-auto">
            <div className="buttons has-addons mb-0">
              <button 
                className={`button is-success ${language === 'es' ? 'is-selected' : 'is-light'}`}
                onClick={() => setLanguage('es')}
              >
                ES
              </button>
              <button 
                className={`button is-success ${language === 'en' ? 'is-selected' : 'is-light'}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
