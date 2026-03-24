'use client'
import { Smartphone, Globe, Server, Check, ArrowRight } from 'lucide-react';
import { services } from '@/static/services';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={28} />,
  globe: <Globe size={28} />,
  server: <Server size={28} />,
};

export default function ServicesSection({ language }: { language: 'es' | 'en' }) {
  const copy = {
    label: { es: "Servicios", en: "Services" },
    title: { es: "Lo que puedo construir para ti", en: "What I can build for you" },
    subtitle: {
      es: "Soluciones completas de desarrollo, desde la idea hasta el lanzamiento.",
      en: "Complete development solutions, from idea to launch."
    }
  };

  return (
    <section id="services" className="scroll-mt-32 flex flex-col gap-12">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-bold text-cta uppercase tracking-widest mb-3">{copy.label[language]}</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
          {copy.title[language]}
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
          {copy.subtitle[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
              service.highlighted
                ? 'bg-cta/5 border-cta/30 shadow-lg shadow-cta/10 hover:shadow-xl hover:shadow-cta/20'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-cta/30'
            }`}
          >
            {service.highlighted && (
              <div className="absolute -top-3 left-6 px-3 py-1 bg-cta text-white text-xs font-bold rounded-full">
                {language === 'es' ? 'Más solicitado' : 'Most requested'}
              </div>
            )}

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
              service.highlighted
                ? 'bg-cta text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-cta/10 group-hover:text-cta'
            } transition-colors duration-300`}>
              {iconMap[service.icon]}
            </div>

            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
              {service.title[language]}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {service.description[language]}
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {service.features[language].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Check size={16} className="text-cta mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`/servicios/${service.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline mt-auto"
            >
              {language === 'es' ? 'Ver detalles' : 'View details'}
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
