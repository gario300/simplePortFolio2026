'use client'
import Image from 'next/image';
import React from 'react';
import { MainCardProps } from './MainCard.model';
import resume_image from '../../public/profile_resume.jpeg'
import ecosistema from '../../public/ecosistema.png'
import { contactLinks } from '@/static/contact';
import { useMainCardController } from './MainCard.controller';
import { contactImageStyles, contactContainerStyles } from './MainCard.styles';

const MainCard: React.FC<MainCardProps> = ({ language }) => {
  const { hoveredContact, handleMouseEnter, handleMouseLeave } = useMainCardController();

  const mainDescription = {
    es: "Desarrollador Full Stack con 5+ años de experiencia en aplicaciones web modernas usando React, Next.js y Node.js. Especializado en arquitecturas cloud-native y serverless en Amazon Web Services y Microsoft Azure, con experiencia en integración de IA mediante OpenAI y uso de tecnologías open source.",
    en: "Full Stack Developer with 5+ years of experience in modern web applications using React, Next.js, and Node.js. Specialized in cloud-native and serverless architectures on Amazon Web Services and Microsoft Azure, with experience in AI integration through OpenAI and the use of open source technologies."
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by1">
          <Image
            src={ecosistema}
            alt="Placeholder image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <Image
                src={resume_image}
                alt="Placeholder image"
                width={48}
                height={48}
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Antonio C</p>
            <p className="subtitle is-6">Full Stack Dev</p>
          </div>
        </div>

        <div className="content">
          {mainDescription[language]}
          <br />
          <span style={contactContainerStyles}>
            {
              contactLinks.map(item => {
                const isHovered = hoveredContact === item.name;
                return (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    key={item.name}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <figure style={contactImageStyles(isHovered)}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      /> 
                    </figure>
                  </a>
                )
              })
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
