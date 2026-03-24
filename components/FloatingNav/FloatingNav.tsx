'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Mail } from 'lucide-react';

export interface FloatingNavProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

export default function FloatingNav({ language, setLanguage }: FloatingNavProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const links = [
    { label: { es: "Servicios", en: "Services" }, href: "/#services" },
    { label: { es: "Portafolio", en: "Portfolio" }, href: "/#portfolio" },
    { label: { es: "Proceso", en: "Process" }, href: "/#process" },
    { label: { es: "Sobre mí", en: "About me" }, href: "/sobre-mi" },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/gario300', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/antonio-g-a0885b19a/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:antoniocelayag@gmail.com', label: 'Email' }
  ];

  return (
    <nav aria-label="Navegación principal" className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full px-5 sm:px-8 py-2.5 shadow-lg">
      <div className="flex items-center gap-2 sm:gap-5">
        <Link href="/" className="font-heading font-bold text-lg text-slate-900 dark:text-white cursor-pointer hover:text-cta transition-colors shrink-0">
          AC.
        </Link>

        {/* Section links - hidden on small screens */}
        {isHome && (
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cta dark:hover:text-cta transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap"
              >
                {link.label[language]}
              </a>
            ))}
          </div>
        )}

        {/* Social icons - hidden below lg */}
        {isHome && (
          <div className="hidden lg:flex items-center gap-0.5">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-cta dark:hover:text-cta transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        )}

        {/* CTA button */}
        {isHome && (
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-cta hover:bg-cta-hover text-white text-sm font-bold rounded-full transition-all duration-300"
          >
            {language === 'es' ? 'Contactar' : 'Contact'}
          </Link>
        )}

        {/* Language toggle */}
        <div role="group" aria-label="Idioma" className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-full">
          <button 
            aria-label="Español"
            aria-pressed={language === 'es'}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${language === 'es' ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
          <button 
            aria-label="English"
            aria-pressed={language === 'en'}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${language === 'en' ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
