'use client'
import Image from "next/image";
import { ArrowLeft, Code2, Smartphone, Server } from "lucide-react";
import Link from "next/link";
import resume_image from "../../public/profile_resume.jpeg";
import PageShell from "@/components/PageShell/PageShell";
import { Language } from "@/hooks/useLanguage";

const copy = {
  label: { es: "Sobre mí", en: "About me" },
  subtitle: { es: "Full Stack Developer · 5+ años de experiencia", en: "Full Stack Developer · 5+ years of experience" },
  back: { es: "Volver al inicio", en: "Back to home" },
  p1: {
    es: "Soy desarrollador Full Stack con más de 5 años de experiencia construyendo soluciones digitales reales: apps móviles que procesan miles de transacciones diarias, plataformas web que escalan, y APIs que soportan operaciones críticas de negocio.",
    en: "I am a Full Stack developer with 5+ years of experience building real digital solutions: mobile apps processing thousands of daily transactions, scalable web platforms, and APIs supporting critical business operations.",
  },
  p2: {
    es: "Mi stack principal incluye React Native para apps iOS y Android, React / Next.js para aplicaciones web, y Node.js (Adonis, Express) para backends. Trabajo con bases de datos SQL y NoSQL, despliego en AWS, Azure y Firebase, y me enfoco en código limpio, arquitectura escalable y resultados medibles.",
    en: "My main stack includes React Native for iOS and Android apps, React / Next.js for web applications, and Node.js (Adonis, Express) for backends. I work with SQL and NoSQL databases, deploy on AWS, Azure and Firebase, and focus on clean code, scalable architecture, and measurable results.",
  },
  p3: {
    es: "He trabajado con startups y empresas establecidas en sectores como logística, seguridad, delivery y enterprise. Cada proyecto que entrego incluye: documentación, pruebas, deployment y soporte post-lanzamiento.",
    en: "I have worked with startups and established companies in logistics, security, delivery, and enterprise sectors. Every project I deliver includes: documentation, testing, deployment, and post-launch support.",
  },
  mobile: { es: "Móvil", en: "Mobile" },
  web: { es: "Web", en: "Web" },
  backend: { es: "Backend", en: "Backend" },
  cta: { es: "Hablemos de tu proyecto", en: "Let's talk about your project" },
};

export default function SobreMiClient() {
  return (
    <PageShell>
      {(language: Language) => (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cta transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            {copy.back[language]}
          </Link>

          <div className="flex flex-col items-center text-center mb-16">
            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-cta/30 shadow-xl shadow-cta/10">
              <Image
                src={resume_image}
                alt="Antonio Celaya - Full Stack Developer con más de 5 años de experiencia"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <span className="text-sm font-bold text-cta uppercase tracking-widest mb-2">{copy.label[language]}</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              Antonio Celaya
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {copy.subtitle[language]}
            </p>
          </div>

          <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed mb-16">
            <p>{copy.p1[language]}</p>
            <p>{copy.p2[language]}</p>
            <p>{copy.p3[language]}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-cta/10 text-cta flex items-center justify-center mb-4">
                <Smartphone size={24} />
              </div>
              <h2 className="font-heading font-bold text-slate-900 dark:text-white mb-2">{copy.mobile[language]}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">React Native, Swift, Flutter</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-cta/10 text-cta flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h2 className="font-heading font-bold text-slate-900 dark:text-white mb-2">{copy.web[language]}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">React, Next.js, Vue, Tailwind</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-cta/10 text-cta flex items-center justify-center mb-4">
                <Server size={24} />
              </div>
              <h2 className="font-heading font-bold text-slate-900 dark:text-white mb-2">{copy.backend[language]}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Node.js, Adonis, Express, Laravel</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta hover:bg-cta-hover text-white font-bold rounded-2xl shadow-lg shadow-cta/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {copy.cta[language]}
            </Link>
          </div>
        </main>
      )}
    </PageShell>
  );
}
