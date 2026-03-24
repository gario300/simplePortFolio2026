'use client'
import { services } from "@/static/services";
import { Smartphone, Globe, Server, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/PageShell/PageShell";
import { Language } from "@/hooks/useLanguage";

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={32} />,
  globe: <Globe size={32} />,
  server: <Server size={32} />,
};

const labels = {
  back: { es: "Volver al inicio", en: "Back to home" },
  service: { es: "Servicio", en: "Service" },
  includes: { es: "Qué incluye", en: "What's included" },
  cta: { es: "Hablemos de tu proyecto", en: "Let's talk about your project" },
};

export default function ServiceClient({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

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

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-cta/10 text-cta flex items-center justify-center">
              {iconMap[service.icon]}
            </div>
            <div>
              <span className="text-sm font-bold text-cta uppercase tracking-widest">{labels.service[language]}</span>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white">
                {service.title[language]}
              </h1>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            {service.longDescription[language]}
          </p>

          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              {labels.includes[language]}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features[language].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Check size={20} className="text-cta mt-0.5 shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
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
