'use client'
import Image from "next/image"
import { TechnologieCardProps } from "./TechnologieCard.model"
import { useTechnologieCardController } from "./TechnologieCard.controller"

function TechnologieCard({ image, name, url, experience, description }: TechnologieCardProps) {
  const { currentExperience, elementRef } = useTechnologieCardController(experience);

  return (
    <div 
      ref={elementRef}
      className="bg-white dark:bg-[#18181B] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative h-16 w-16 flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-2 rounded-xl">
          <Image
            src={image}
            alt={'image_for_' + name}
            fill
            className="p-2"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div>
          <a
            className="text-lg font-heading font-bold text-gray-900 dark:text-white hover:text-cta transition-colors cursor-pointer"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex justify-between text-xs font-medium mb-1">
          <span className="text-gray-600 dark:text-gray-300">Experience</span>
          <span className="text-cta">{currentExperience}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-cta h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${currentExperience}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default TechnologieCard
