'use client'
import { portfolio } from "@/static/portfolio";
import { ArrowLeft, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell/PageShell";
import { Language } from "@/hooks/useLanguage";

const labels = {
  back: { es: "Volver al inicio", en: "Back to home" },
  techTitle: { es: "Tecnologías utilizadas", en: "Technologies used" },
  cta: { es: "Hablemos de tu proyecto", en: "Let's talk about your project" },
  mobile: { es: "App Móvil", en: "Mobile App" },
  web: { es: "Web App", en: "Web App" },
  fullstack: { es: "Full Stack", en: "Full Stack" },
};

export default function PortfolioClient({ slug }: { slug: string }) {
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <PageShell>
      {(language: Language) => (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cta transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            {labels.back[language]}
          </Link>

          <div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden mb-10 bg-slate-100 dark:bg-slate-900">
            <Image
              src={project.image}
              alt={`Captura de pantalla de ${project.name} - ${project.description[language]}`}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <span className="text-sm font-bold text-cta uppercase tracking-widest">
            {labels[project.category][language]}
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mt-2 mb-4">
            {project.name}
          </h1>

          <div className="flex items-center gap-2 mb-8">
            <Zap size={16} className="text-cta" />
            <span className="text-sm font-semibold text-cta">{project.impact[language]}</span>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription[language]}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              {labels.techTitle[language]}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-bold bg-cta/10 text-cta rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta hover:bg-cta-hover text-white font-bold rounded-2xl shadow-lg shadow-cta/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {labels.cta[language]}
            </Link>
          </div>
        </main>
      )}
    </PageShell>
  );
}
