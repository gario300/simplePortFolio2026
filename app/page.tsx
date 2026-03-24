'use client'
import { useState } from "react";
import FloatingNav from "@/components/FloatingNav/FloatingNav";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/Services/ServicesSection";
import PortfolioGrid from "@/components/PortfolioGrid/PortfolioGrid";
import StackGrid from "@/components/StackGrid/StackGrid";
import Process from "@/components/Process/Process";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen flex flex-col selection:bg-cta selection:text-white">
      <FloatingNav language={language} setLanguage={setLanguage} />
      
      <main id="main-content" className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-28 sm:gap-32">
        <section id="hero">
          <Hero language={language} />
        </section>

        <ServicesSection language={language} />
        
        <PortfolioGrid language={language} />

        <section id="stack" className="scroll-mt-32 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-bold text-cta uppercase tracking-widest mb-3">
              {language === 'es' ? 'Stack' : 'Stack'}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Tecnologías que domino' : 'Technologies I master'}
            </h2>
          </div>
          <StackGrid language={language} />
        </section>

        <Process language={language} />

        <ContactCTA language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
