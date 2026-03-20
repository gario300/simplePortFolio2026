'use client'
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import resume_image from '../../public/profile_resume.jpeg';

export default function Hero({ language }: { language: 'es' | 'en' }) {
  const translations = {
    greeting: {
      es: "Hola, soy Antonio C.",
      en: "Hi, I'm Antonio C."
    },
    role: {
      es: "Software Engineer / Full Stack Developer",
      en: "Software Engineer / Full Stack Developer"
    },
    description: {
      es: "Desarrollador Full Stack con 5+ años de experiencia en aplicaciones web modernas usando React, Next.js y Node.js. Especializado en arquitecturas cloud-native y serverless en Amazon Web Services y Microsoft Azure, con experiencia en integración de IA mediante OpenAI y uso de tecnologías open source.",
      en: "Full Stack Developer with 5+ years of experience in modern web applications using React, Next.js, and Node.js. Specialized in cloud-native and serverless architectures on Amazon Web Services and Microsoft Azure, with experience in AI integration through OpenAI and the use of open source technologies."
    }
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/gario300', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/antonio-g-a0885b19a/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:antoniocelayag@gmail.com', label: 'Email' }
  ];

  return (
    <div className="flex flex-col items-center text-center mt-24 sm:mt-32 max-w-3xl mx-auto">
      <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-xl">
        <Image
          src={resume_image}
          alt="Antonio C"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        {translations.greeting[language]}
      </h1>
      
      <p className="text-xl font-medium text-cta mb-8">
        {translations.role[language]}
      </p>
      
      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
        {translations.description[language]}
      </p>

      <div className="flex gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-cta dark:hover:text-cta hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
              aria-label={link.label}
            >
              <Icon size={24} strokeWidth={2} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
