import React from 'react';

export default function Footer({ language }: { language: 'es' | 'en' }) {
  const currentDate = new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="mt-32 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
          © {new Date().getFullYear()} Antonio C. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500 capitalize">
          {currentDate}
        </p>
      </div>
    </footer>
  );
}
