import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer({ language }: { language: 'es' | 'en' }) {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/gario300', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/antonio-g-a0885b19a/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:antoniocelayag@gmail.com', label: 'Email' },
    { icon: MessageCircle, url: 'https://wa.me/5215512345678', label: 'WhatsApp' }
  ];

  return (
    <footer className="mt-32 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="font-heading font-bold text-xl text-slate-900 dark:text-white hover:text-cta transition-colors">
            AC.
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/sobre-mi" className="hover:text-cta transition-colors">
              {language === 'es' ? 'Sobre mí' : 'About me'}
            </Link>
            <Link href="/contacto" className="hover:text-cta transition-colors">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </Link>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Antonio C. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-cta dark:hover:text-cta hover:bg-cta/10 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
