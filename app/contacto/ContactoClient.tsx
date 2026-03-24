'use client'
import { MessageCircle, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/PageShell/PageShell";
import { Language } from "@/hooks/useLanguage";

const copy = {
  back: { es: "Volver al inicio", en: "Back to home" },
  label: { es: "Contacto", en: "Contact" },
  title: { es: "¿Tienes un proyecto en mente?", en: "Have a project in mind?" },
  subtitle: {
    es: "Cuéntame qué necesitas. Sin compromisos, sin llamadas de 2 horas. Te respondo en menos de 24h.",
    en: "Tell me what you need. No commitments, no 2-hour calls. I respond within 24h.",
  },
  whatsappTitle: { es: "WhatsApp", en: "WhatsApp" },
  whatsappDesc: { es: "Respuesta inmediata. Ideal para consultas rápidas.", en: "Immediate response. Ideal for quick inquiries." },
  emailTitle: { es: "Email", en: "Email" },
  emailDesc: { es: "Para proyectos con más detalle o documentación adjunta.", en: "For projects with more detail or attached documentation." },
  note: { es: "Respuesta típica en menos de 24 horas", en: "Typical response within 24 hours" },
};

export default function ContactoClient() {
  const whatsappNumber = "5215512345678";

  return (
    <PageShell>
      {(language: Language) => {
        const whatsappMessage = encodeURIComponent(
          language === 'es'
            ? "Hola Antonio, vi tu portafolio y me gustaría hablar sobre un proyecto."
            : "Hi Antonio, I saw your portfolio and would like to discuss a project."
        );

        return (
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cta transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              {copy.back[language]}
            </Link>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mt-2 mb-4">
              {copy.title[language]}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
              {copy.subtitle[language]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-cta/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-cta/10 text-cta flex items-center justify-center mb-6">
                  <MessageCircle size={28} />
                </div>
                <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {copy.whatsappTitle[language]}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {copy.whatsappDesc[language]}
                </p>
              </a>

              <a
                href="mailto:antoniocelayag@gmail.com"
                className="group flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-cta/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-cta/10 text-cta flex items-center justify-center mb-6">
                  <Mail size={28} />
                </div>
                <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {copy.emailTitle[language]}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {copy.emailDesc[language]}
                </p>
              </a>
            </div>

            <p className="text-sm text-slate-400 text-center mt-8">
              {copy.note[language]}
            </p>
          </main>
        );
      }}
    </PageShell>
  );
}
