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
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <div className="container p-4">
        <div className="columns is-centered">
          <div className="column is-12">
            <MainCard language={language}/>
          </div>
        </div>
       
        <div className="columns">
          <div className="column">
            <h3 className="title is-3">
              {language == 'es' ? 'Portafolio' : 'Portfolio'} 
            </h3>
          </div>
        </div>

        <div className="columns is-multiline">
          {
            portfolio.map(item => {
              return (
                <div key={item.name} className="column is-6">
                  <PortFolioItemCard
                  name={item.name}
                  image={item.image}
                  description={item.description[language]}
                  technologies={item.technologies}
                />  
              </div>
            )
          })
        }
      </div>

      <div className="columns">
        <div className="column">
          <h3 className="title is-3">
            Stack
          </h3>
        </div>
      </div>

      <div className="columns is-multiline">
        {
          technologies.map(item => {
            return (
              <div key={item.name} className="column is-4">
                <TechnologieCard
                  image={item.image}
                  name={item.name}
                  url={item.url}
                  experience={item.level_experience}
                  description={item.description[language]}
                /> 
              </div>
            )
          })
        }
      </div>
      <Footer language={language} />
    </div>
    </>
  );
}
