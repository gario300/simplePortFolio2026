'use client'
import { useState } from "react";
import MainCard from "@/components/MainCard/MainCard.component";
import TechnologieCard from "@/components/TechnologieCard/TechnologieCard.component";
import PortFolioItemCard from "@/components/PortFolio/PortFolioItemCard.component";
import NavBar from "@/components/NavBar/NavBar.component";
import Footer from "@/components/Footer/Footer.component";

import { technologies } from "@/static/technologies";
import { portfolio } from "@/static/portfolio";

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 flex flex-col gap-16">
        {/* Main Profile Section */}
        <section>
          <MainCard language={language}/>
        </section>
        
        {/* Portfolio Section */}
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
            {language == 'es' ? 'Portafolio' : 'Portfolio'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {portfolio.map(item => (
              <PortFolioItemCard
                key={item.name}
                name={item.name}
                image={item.image}
                description={item.description[language]}
                technologies={item.technologies}
              />  
            ))}
          </div>
        </section>

        {/* Stack Section */}
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
            Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map(item => (
              <TechnologieCard
                key={item.name}
                image={item.image}
                name={item.name}
                url={item.url}
                experience={item.level_experience}
                description={item.description[language]}
              /> 
            ))}
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
