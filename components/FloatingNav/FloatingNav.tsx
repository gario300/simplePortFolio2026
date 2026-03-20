import React from 'react';

export interface FloatingNavProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

export default function FloatingNav({ language, setLanguage }: FloatingNavProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center gap-8">
        <a href="/" className="font-heading font-bold text-lg text-slate-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
          AC.
        </a>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
          <button 
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${language === 'es' ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
          <button 
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${language === 'en' ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
