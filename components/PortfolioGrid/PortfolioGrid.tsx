import Image from "next/image"
import { portfolio } from "@/static/portfolio"

export default function PortfolioGrid({ language }: { language: 'es' | 'en' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolio.map((item, idx) => (
        <div 
          key={idx} 
          className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[400px]"
        >
          {/* Image Section */}
          <div className="relative w-full h-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover sm:object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay for hover */}
            <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.name}
              </h3>
              <p className="text-slate-200 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-3">
                {item.description[language]}
              </p>
              
              <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                {item.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-bold bg-white/20 text-white rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
