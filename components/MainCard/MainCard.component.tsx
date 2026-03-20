'use client'
import Image from 'next/image';
import React from 'react';
import { MainCardProps } from './MainCard.model';
import { contactLinks } from '@/static/contact';
import { useMainCardController } from './MainCard.controller';

const MainCard: React.FC<MainCardProps> = ({ language }) => {
  const { hoveredContact, handleMouseEnter, handleMouseLeave } = useMainCardController();

  const mainDescription = {
    es: "Desarrollador Full Stack con 5+ años de experiencia en aplicaciones web modernas usando React, Next.js y Node.js. Especializado en arquitecturas cloud-native y serverless en Amazon Web Services y Microsoft Azure, con experiencia en integración de IA mediante OpenAI y uso de tecnologías open source.",
    en: "Full Stack Developer with 5+ years of experience in modern web applications using React, Next.js, and Node.js. Specialized in cloud-native and serverless architectures on Amazon Web Services and Microsoft Azure, with experience in AI integration through OpenAI and the use of open source technologies."
  }

  return (
    <div className="bg-white dark:bg-[#18181B] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 sm:h-64 w-full">
        <Image
          src="/ecosistema.png"
          alt="Ecosystem Cover"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-6 -mt-12 sm:-mt-16 relative">
          <div className="h-20 w-20 sm:h-24 sm:w-24 relative rounded-full border-4 border-white dark:border-[#18181B] overflow-hidden bg-gray-100">
            <Image
              src="/profile_resume.jpeg"
              alt="Antonio C"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="mt-8 sm:mt-12">
            <h1 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">Antonio C</h1>
            <p className="text-cta font-medium">Full Stack Dev</p>
          </div>
        </div>

        <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {mainDescription[language]}
        </div>

        <div className="flex gap-4">
          {contactLinks.map(item => {
            const isHovered = hoveredContact === item.name;
            return (
              <a 
                href={item.url} 
                target="_blank"
                rel="noreferrer"
                key={item.name}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                className={`relative h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer border ${isHovered ? 'bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600' : 'bg-transparent border-gray-200 dark:border-gray-800'} hover:-translate-y-1`}
              >
                <div className="relative h-6 w-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
