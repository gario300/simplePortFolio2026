'use client'
import { MessageSquare, FileText, Code2, Rocket } from 'lucide-react';

export default function Process({ language }: { language: 'es' | 'en' }) {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: { es: "1. Descubrimiento", en: "1. Discovery" },
      description: {
        es: "Entendemos tu idea, objetivos y alcance. Definimos qué construir y por qué.",
        en: "We understand your idea, goals, and scope. We define what to build and why."
      }
    },
    {
      icon: <FileText size={24} />,
      title: { es: "2. Propuesta", en: "2. Proposal" },
      description: {
        es: "Te envío una propuesta clara: alcance, timeline, inversión y entregables.",
        en: "I send you a clear proposal: scope, timeline, investment, and deliverables."
      }
    },
    {
      icon: <Code2 size={24} />,
      title: { es: "3. Desarrollo", en: "3. Development" },
      description: {
        es: "Construyo con actualizaciones semanales. Ves el progreso real, no promesas.",
        en: "I build with weekly updates. You see real progress, not promises."
      }
    },
    {
      icon: <Rocket size={24} />,
      title: { es: "4. Lanzamiento", en: "4. Launch" },
      description: {
        es: "Deploy, pruebas, handoff de código y soporte post-lanzamiento incluido.",
        en: "Deploy, testing, code handoff, and post-launch support included."
      }
    }
  ];

  const copy = {
    label: { es: "Proceso", en: "Process" },
    title: { es: "Así trabajo contigo", en: "How I work with you" },
    subtitle: {
      es: "Sin sorpresas. Un proceso claro del primer contacto hasta el lanzamiento.",
      en: "No surprises. A clear process from first contact to launch."
    }
  };

  return (
    <section id="process" className="scroll-mt-32 flex flex-col gap-12">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-bold text-cta uppercase tracking-widest mb-3">{copy.label[language]}</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
          {copy.title[language]}
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
          {copy.subtitle[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-cta/30 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Connector line (hidden on last item) */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200 dark:bg-slate-700"></div>
            )}

            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-cta/10 group-hover:text-cta transition-colors duration-300 mb-6">
              {step.icon}
            </div>

            <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
              {step.title[language]}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {step.description[language]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
