export interface Service {
  slug: string;
  icon: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  features: { es: string[]; en: string[] };
  highlighted?: boolean;
}

export const services: Service[] = [
  {
    slug: "apps-moviles",
    icon: "smartphone",
    title: {
      es: "Apps Móviles",
      en: "Mobile Apps"
    },
    description: {
      es: "Apps iOS y Android con React Native. Desde MVP hasta apps en producción con miles de usuarios.",
      en: "iOS and Android apps with React Native. From MVP to production apps with thousands of users."
    },
    longDescription: {
      es: "Desarrollo aplicaciones móviles nativas para iOS y Android usando React Native. Cubro todo el ciclo: desde la planeación y diseño UX, hasta el desarrollo, pruebas, publicación en App Store y Play Store, y mantenimiento post-lanzamiento. He entregado apps que procesan miles de transacciones diarias con notificaciones push, geolocalización en tiempo real, integración con pasarelas de pago y sincronización offline.",
      en: "I develop native mobile applications for iOS and Android using React Native. I cover the entire cycle: from planning and UX design, to development, testing, publishing on the App Store and Play Store, and post-launch maintenance. I have delivered apps that process thousands of daily transactions with push notifications, real-time geolocation, payment gateway integration, and offline sync."
    },
    features: {
      es: ["React Native (iOS + Android)", "Integración con APIs y backends", "Notificaciones push", "Publicación en App Store y Play Store"],
      en: ["React Native (iOS + Android)", "API & backend integration", "Push notifications", "App Store & Play Store publishing"]
    },
    highlighted: true
  },
  {
    slug: "aplicaciones-web",
    icon: "globe",
    title: {
      es: "Aplicaciones Web",
      en: "Web Applications"
    },
    description: {
      es: "PWAs y SPAs con React/Next.js. Interfaces rápidas, escalables y optimizadas para SEO.",
      en: "PWAs and SPAs with React/Next.js. Fast, scalable interfaces optimized for SEO."
    },
    longDescription: {
      es: "Construyo aplicaciones web progresivas (PWA) y single-page applications (SPA) con React, Next.js y Vue. Me especializo en dashboards administrativos, plataformas SaaS, e-commerce y sistemas internos. Cada proyecto incluye optimización de Core Web Vitals, SSR/SSG para SEO, responsive design, y arquitectura escalable. Trabajo con Tailwind CSS, TypeScript y mejores prácticas de accesibilidad (WCAG).",
      en: "I build progressive web apps (PWA) and single-page applications (SPA) with React, Next.js, and Vue. I specialize in admin dashboards, SaaS platforms, e-commerce, and internal systems. Each project includes Core Web Vitals optimization, SSR/SSG for SEO, responsive design, and scalable architecture. I work with Tailwind CSS, TypeScript, and accessibility best practices (WCAG)."
    },
    features: {
      es: ["React / Next.js / Vue", "PWAs con offline support", "SEO & Core Web Vitals", "Dashboards administrativos"],
      en: ["React / Next.js / Vue", "PWAs with offline support", "SEO & Core Web Vitals", "Admin dashboards"]
    }
  },
  {
    slug: "backend-apis",
    icon: "server",
    title: {
      es: "Backend & APIs",
      en: "Backend & APIs"
    },
    description: {
      es: "APIs REST y GraphQL robustas. Arquitecturas serverless y cloud-native en AWS, Azure o Firebase.",
      en: "Robust REST and GraphQL APIs. Serverless and cloud-native architectures on AWS, Azure, or Firebase."
    },
    longDescription: {
      es: "Diseño y desarrollo APIs REST y GraphQL con Node.js (Adonis, Express), Laravel, y arquitecturas serverless. Implemento autenticación JWT/OAuth, WebSockets en tiempo real, colas de procesos, integraciones con terceros, y bases de datos SQL y NoSQL. Despliego en AWS (EC2, S3, Lambda), Azure y Firebase. Cada API incluye documentación OpenAPI/Swagger, rate limiting, logging estructurado y monitoreo.",
      en: "I design and develop REST and GraphQL APIs with Node.js (Adonis, Express), Laravel, and serverless architectures. I implement JWT/OAuth authentication, real-time WebSockets, process queues, third-party integrations, and SQL/NoSQL databases. I deploy on AWS (EC2, S3, Lambda), Azure, and Firebase. Each API includes OpenAPI/Swagger documentation, rate limiting, structured logging, and monitoring."
    },
    features: {
      es: ["Node.js / Adonis / Express / Laravel", "Bases de datos SQL y NoSQL", "WebSockets en tiempo real", "Arquitectura serverless"],
      en: ["Node.js / Adonis / Express / Laravel", "SQL & NoSQL databases", "Real-time WebSockets", "Serverless architecture"]
    }
  }
];
