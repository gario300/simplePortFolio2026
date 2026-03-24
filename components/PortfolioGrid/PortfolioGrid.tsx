'use client'
import Image from "next/image"
import Link from "next/link"
import { portfolio } from "@/static/portfolio"
import { ArrowUpRight, Zap } from "lucide-react"

export default function PortfolioGrid({ language }: { language: 'es' | 'en' }) {
  const copy = {
    label: { es: "Portafolio", en: "Portfolio" },
    title: { es: "Proyectos con impacto real", en: "Projects with real impact" },
    subtitle: {
      es: "No solo escribo código. Construyo soluciones que resuelven problemas de negocio.",
      en: "I don't just write code. I build solutions that solve business problems."
    }
  };

  return (
    <section id="portfolio" className="scroll-mt-32 flex flex-col gap-12">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-bold text-cta uppercase tracking-widest mb-3">{copy.label[language]}</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
          {copy.title[language]}
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
          {copy.subtitle[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolio.map((item, idx) => (
          <Link 
            key={idx} 
            href={`/portfolio/${item.slug}`}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-cta/30 transition-all duration-500 flex flex-col h-[420px]"
          >
            {/* Image */}
            <div className="relative w-full h-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <Image
                src={item.image}
                alt={`Captura de pantalla de ${item.name} - ${item.description.es}`}
                fill
                className="object-cover sm:object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-heading font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.name}
                  </h3>
                  <ArrowUpRight size={20} className="text-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
                </div>
                
                <p className="text-slate-200 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-3">
                  {item.description[language]}
                </p>

                {/* Impact badge */}
                <div className="flex items-center gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <Zap size={14} className="text-cta" />
                  <span className="text-sm font-semibold text-cta">{item.impact[language]}</span>
                </div>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-bold bg-white/20 text-white rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs font-bold bg-white/10 text-white/60 rounded-full">
                      +{item.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
