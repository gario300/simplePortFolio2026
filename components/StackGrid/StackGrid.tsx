import Image from "next/image"
import { technologies } from "@/static/technologies"

export default function StackGrid({ language }: { language: 'es' | 'en' }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {technologies.map((item) => (
        <a 
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-cta/50 transition-all duration-300 cursor-pointer"
        >
          <div className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
          <span className="font-heading font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cta transition-colors text-center">
            {item.name}
          </span>
          {/* Tooltip-like description on hover could go here, but keeping it minimal is cleaner */}
        </a>
      ))}
    </div>
  )
}
