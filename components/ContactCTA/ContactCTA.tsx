'use client'
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function ContactCTA({ language }: { language: 'es' | 'en' }) {
  const copy = {
    label: { es: "Contacto", en: "Contact" },
    title: {
      es: "¿Tienes un proyecto en mente?",
      en: "Have a project in mind?"
    },
    subtitle: {
      es: "Cuéntame qué necesitas. Sin compromisos, sin llamadas de 2 horas. Te respondo en menos de 24h.",
      en: "Tell me what you need. No commitments, no 2-hour calls. I respond within 24h."
    },
    whatsapp: { es: "Escribir por WhatsApp", en: "Message on WhatsApp" },
    email: { es: "Enviar un email", en: "Send an email" },
    note: {
      es: "Respuesta típica en menos de 24 horas",
      en: "Typical response within 24 hours"
    }
  };

  const whatsappNumber = "5215512345678";
  const whatsappMessage = encodeURIComponent(
    language === 'es'
      ? "Hola Antonio, vi tu portafolio y me gustaría hablar sobre un proyecto."
      : "Hi Antonio, I saw your portfolio and would like to discuss a project."
  );

  return (
    <section id="contact" className="scroll-mt-32">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-sm font-bold text-cta uppercase tracking-widest">{copy.label[language]}</span>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            {copy.title[language]}
          </h2>

          <p className="text-lg text-slate-300 max-w-xl">
            {copy.subtitle[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cta hover:bg-cta-hover text-white font-bold rounded-2xl shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              {copy.whatsapp[language]}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:antoniocelayag@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={20} />
              {copy.email[language]}
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-2">{copy.note[language]}</p>
        </div>
      </div>
    </section>
  );
}
