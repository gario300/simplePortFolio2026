import Image from "next/image"
import { PortFolioItemCardProps } from "./PortFolioItemCard.model"

function PortFolioItemCard({ image, name, description, technologies }: PortFolioItemCardProps) {
  return(
    <div className="bg-white dark:bg-[#18181B] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="flex flex-col sm:flex-row p-6 gap-6 h-full">
        <div className="relative w-full sm:w-1/3 aspect-square sm:aspect-auto sm:h-auto rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 flex-shrink-0">
          <Image
            src={image}
            alt={'image_for_' + name}
            fill
            sizes="(max-width: 768px) 100vw, 256px"
            className="group-hover:scale-105 transition-transform duration-500"
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech: string, index: number) => {
              return (
                <span 
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-cta dark:text-blue-300 text-xs font-medium rounded-full" 
                  key={index}
                >
                  {tech}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortFolioItemCard
