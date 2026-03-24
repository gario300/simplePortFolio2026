'use client'
import Image from 'next/image';
import { MessageCircle, ArrowRight } from 'lucide-react';
import resume_image from '../../public/profile_resume.jpeg';

export default function Hero({ language }: { language: 'es' | 'en' }) {
  const copy = {
    badge: {
      es: "Disponible para nuevos proyectos",
      en: "Available for new projects"
    },
    headline1: {
      es: "Convierto tu idea en una",
      en: "I turn your idea into a"
    },
    headline2: {
      es: "app que funciona",
      en: "a working app"
    },
    subtitle: {
      es: "Full Stack Developer con 5+ años de experiencia construyendo apps móviles, web y APIs para empresas que necesitan resultados reales — no solo código.",
      en: "Full Stack Developer with 5+ years of experience building mobile, web, and API solutions for companies that need real results — not just code."
    },
    ctaPrimary: {
      es: "Hablemos de tu proyecto",
      en: "Let's talk about your project"
    },
    ctaSecondary: {
      es: "Ver proyectos",
      en: "See projects"
    },
    stat1Label: { es: "Años de experiencia", en: "Years of experience" },
    stat2Label: { es: "Proyectos entregados", en: "Projects delivered" },
    stat3Label: { es: "En tecnologías modernas", en: "In modern tech" }
  };

  const whatsappNumber = "5215512345678";
  const whatsappMessage = encodeURIComponent(
    language === 'es'
      ? "Hola Antonio, vi tu portafolio y me gustaría hablar sobre un proyecto."
      : "Hi Antonio, I saw your portfolio and would like to discuss a project."
  );

  return (
    <div className="flex flex-col items-center text-center mt-20 sm:mt-28 max-w-4xl mx-auto">
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/20 rounded-full mb-8">
        <span className="w-2 h-2 bg-cta rounded-full animate-pulse"></span>
        <span className="text-sm font-semibold text-cta">{copy.badge[language]}</span>
      </div>

      {/* Photo */}
      <div className="relative w-28 h-28 mb-8 rounded-full overflow-hidden border-4 border-cta/30 shadow-xl shadow-cta/10">
        <Image
          src={resume_image}
          alt="Antonio Celaya - Full Stack Developer"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-2 tracking-tight leading-tight">
        {copy.headline1[language]}
        <br />
        <span className="text-cta">{copy.headline2[language]}</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl">
        {copy.subtitle[language]}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-cta hover:bg-cta-hover text-white font-bold rounded-2xl shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={20} />
          {copy.ctaPrimary[language]}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cta/50 hover:text-cta transition-all duration-300 hover:-translate-y-0.5"
        >
          {copy.ctaSecondary[language]}
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 sm:gap-16">
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-heading font-bold text-cta">5+</span>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{copy.stat1Label[language]}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-heading font-bold text-cta">20+</span>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{copy.stat2Label[language]}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-heading font-bold text-cta">9</span>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{copy.stat3Label[language]}</span>
        </div>
      </div>
    </div>
  );
}
