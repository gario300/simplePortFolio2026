'use client'
import { useState } from "react";
import FloatingNav from "@/components/FloatingNav/FloatingNav";
import Hero from "@/components/Hero/Hero";
import PortfolioGrid from "@/components/PortfolioGrid/PortfolioGrid";
import StackGrid from "@/components/StackGrid/StackGrid";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen flex flex-col selection:bg-cta selection:text-white">
      <FloatingNav language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-32">
        <section id="hero">
          <Hero language={language} />
        </section>
        
        <section id="portfolio" className="scroll-mt-32 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </h2>
            <div className="w-16 h-1 bg-cta rounded-full"></div>
          </div>
          <PortfolioGrid language={language} />
        </section>

        <section id="stack" className="scroll-mt-32 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Tecnologías' : 'Tech Stack'}
            </h2>
            <div className="w-16 h-1 bg-cta rounded-full"></div>
          </div>
          <StackGrid language={language} />
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
