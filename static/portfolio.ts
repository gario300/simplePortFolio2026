export interface PortfolioItem {
  slug: string;
  name: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  longDescription: {
    es: string;
    en: string;
  };
  impact: {
    es: string;
    en: string;
  };
  technologies: string[];
  category: 'mobile' | 'web' | 'fullstack';
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "video-seo-platform",
    name: "Video SEO Platform",
    image: "https://res.cloudinary.com/scute/image/upload/v1774940854/Captura_de_pantalla_2026-03-31_a_la_s_1.00.59_a.m._mhimvz.png",
    description: {
      es: "Plataforma completa de análisis de video/audio con generación automática de títulos, descripciones y tags SEO para YouTube, TikTok e Instagram usando IA.",
      en: "Complete video/audio analysis platform with automatic SEO title, description, and tag generation for YouTube, TikTok, and Instagram using AI."
    },
    longDescription: {
      es: "Video SEO Platform es un ecosistema completo de backend y frontend para optimización de contenido en video. El backend (AdonisJS v6 + TypeScript) integra Groq Whisper para transcripción de audio y Google Gemini AI para análisis multi-modelo con fallback. Genera títulos, descripciones y tags optimizados para YouTube con scoring automático. El frontend (Next.js 14 App Router + Tailwind CSS) ofrece un dashboard interactivo donde los usuarios analizan videos, gestionan shorts extraídos automáticamente, exportan resultados en PDF, y acceden a historial de análisis. Incluye autenticación por tokens y gestión de perfiles. La API procesa más de 10k solicitudes diarias.",
      en: "Video SEO Platform is a complete backend and frontend ecosystem for video content optimization. The backend (AdonisJS v6 + TypeScript) integrates Groq Whisper for audio transcription and Google Gemini AI for multi-model analysis with fallback. It generates optimized titles, descriptions, and tags for YouTube with automatic scoring. The frontend (Next.js 14 App Router + Tailwind CSS) offers an interactive dashboard where users analyze videos, manage automatically extracted shorts, export results as PDF, and access analysis history. Includes token-based authentication and profile management. The API processes over 10k daily requests."
    },
    impact: {
      es: "Generación automática de SEO optimizado para contenido de video en 3 plataformas",
      en: "Automatic optimized SEO generation for video content across 3 platforms"
    },
    technologies: ["Next.js", "Adonis", "TypeScript", "AI", "Node", "Tailwind CSS"],
    category: 'fullstack'
  },
  {
    slug: "petra-landing",
    name: "Petra Landing Page",
    image: "https://res.cloudinary.com/scute/image/upload/v1774940854/Captura_de_pantalla_2026-03-31_a_la_s_1.01.13_a.m._t6t3k2.png",
    description: {
      es: "Landing page corporativa para PETRA, ecosistema de respuesta a emergencias ciudadanas con diseño moderno y alta conversión.",
      en: "Corporate landing page for PETRA, citizen emergency response ecosystem with modern design and high conversion."
    },
    longDescription: {
      es: "Landing page corporativa desarrollada con Next.js y Tailwind CSS para presentar el ecosistema PETRA de respuesta a emergencias. El diseño enfocado en conversión incluye secciones de hero impactante, features del producto con animaciones, testimonios, pricing, y CTAs optimizados. La página está completamente optimizada para SEO con meta tags dinámicos, Open Graph, sitemap automático, y robots.txt. Implementa las mejores prácticas de Core Web Vitals con carga progresiva de imágenes y lazy loading. El diseño responsive garantiza una experiencia óptima en desktop, tablet y móvil.",
      en: "Corporate landing page built with Next.js and Tailwind CSS to present the PETRA emergency response ecosystem. The conversion-focused design includes impactful hero sections, product features with animations, testimonials, pricing, and optimized CTAs. The page is fully SEO optimized with dynamic meta tags, Open Graph, automatic sitemap, and robots.txt. Implements Core Web Vitals best practices with progressive image loading and lazy loading. Responsive design guarantees optimal experience on desktop, tablet, and mobile."
    },
    impact: {
      es: "Página de alta conversión para ecosistema de emergencias con SEO optimizado",
      en: "High conversion page for emergency ecosystem with optimized SEO"
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: 'web'
  },
  {
    slug: "petra-ecosystem",
    name: "PETRA ECOSISTEM",
    image: "https://res.cloudinary.com/scute/image/upload/v1774300007/petra_app_az3i61.png",
    description: {
      es: "Ecosistema completo: API, dashboard de gestión y apps iOS/Android para reporte ciudadano de emergencias en tiempo real con geolocalización y notificaciones push.",
      en: "Complete ecosystem: API, management dashboard, and iOS/Android apps for real-time citizen emergency reporting with geolocation and push notifications."
    },
    longDescription: {
      es: "PETRA es un ecosistema completo de respuesta a emergencias que incluye: una API construida con AdonisJS que procesa reportes ciudadanos en tiempo real, un dashboard de gestión con Next.js para operadores de emergencia, y apps móviles con React Native para iOS y Android. El sistema integra geolocalización precisa, notificaciones push vía Firebase, WebSockets para comunicación en tiempo real, y conexiones con Google Maps API. La arquitectura serverless permite escalar ante eventos de emergencia masivos sin degradación del servicio.",
      en: "PETRA is a complete emergency response ecosystem that includes: an API built with AdonisJS that processes citizen reports in real time, a management dashboard with Next.js for emergency operators, and mobile apps with React Native for iOS and Android. The system integrates precise geolocation, push notifications via Firebase, WebSockets for real-time communication, and Google Maps API connections. The serverless architecture allows scaling during massive emergency events without service degradation."
    },
    impact: {
      es: "Reducción del 60% en tiempo de respuesta a emergencias",
      en: "60% reduction in emergency response time"
    },
    technologies: ["ADONIS", "Firebase", "Socket.io", "SQL", "Google APIs", "Next.js", "React Native", "Node"],
    category: 'fullstack'
  },
  {
    slug: "stream-app",
    name: "Stream App",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773778967/473444735_595757333071719_4162_unjamk.webp",
    description: {
      es: "App de monitoreo de seguridad con streaming de cámaras en vivo, detección de incidentes y gestión centralizada de emergencias.",
      en: "Security monitoring app with live camera streaming, incident detection, and centralized emergency management."
    },
    longDescription: {
      es: "Stream App es una plataforma de monitoreo de seguridad que permite visualizar streaming de cámaras en vivo, detectar incidentes automáticamente y gestionar emergencias desde una interfaz centralizada. Desarrollada con React Native para iOS y Android, la app se conecta a más de 500 cámaras simultáneamente mediante WebSockets y una API GraphQL. Incluye alertas en tiempo real, gestión de usuarios con roles, y sincronización con Firebase para autenticación y base de datos en tiempo real.",
      en: "Stream App is a security monitoring platform that enables live camera streaming visualization, automatic incident detection, and centralized emergency management. Built with React Native for iOS and Android, the app connects to 500+ cameras simultaneously via WebSockets and a GraphQL API. It includes real-time alerts, user role management, and Firebase sync for authentication and real-time database."
    },
    impact: {
      es: "Monitoreo de 500+ cámaras en tiempo real",
      en: "Real-time monitoring of 500+ cameras"
    },
    technologies: ["React Native", "Firebase", "GraphQL", "Node", "Google APIs"],
    category: 'mobile'
  },
  {
    slug: "amx-2",
    name: "AMX 2.0",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773778967/unnamed_1_veuzpc.webp",
    description: {
      es: "App móvil con gestión de perfiles, reservaciones, programa de recompensas y múltiples métodos de pago integrados.",
      en: "Mobile app with profile management, reservations, rewards program, and integrated payment methods."
    },
    longDescription: {
      es: "AMX 2.0 es una aplicación móvil completa que combina gestión de perfiles de usuario, sistema de reservaciones, programa de recompensas y múltiples métodos de pago integrados. Desarrollada con React Native y Swift nativo para funcionalidades específicas de iOS, la app utiliza Firebase para backend en tiempo real. El sistema de recompensas implementa reglas de negocio complejas que aumentaron la retención de usuarios en un 40%. La integración con pasarelas de pago permite transacciones seguras en múltiples monedas.",
      en: "AMX 2.0 is a complete mobile application combining user profile management, reservation system, rewards program, and integrated payment methods. Built with React Native and native Swift for iOS-specific features, the app uses Firebase for real-time backend. The rewards system implements complex business rules that increased user retention by 40%. Payment gateway integration enables secure transactions in multiple currencies."
    },
    impact: {
      es: "Incremento del 40% en retención de usuarios",
      en: "40% increase in user retention"
    },
    technologies: ["React Native", "Firebase", "Swift"],
    category: 'mobile'
  },
  {
    slug: "torre-de-control",
    name: "Torre de Control",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773778967/unnamed_am9suk.webp",
    description: {
      es: "Plataforma de logística de transporte con escaneo de códigos de barras, tracking geolocalizado en tiempo real y gestión de eventos.",
      en: "Transport logistics platform with barcode scanning, real-time geolocation tracking, and event management."
    },
    longDescription: {
      es: "Torre de Control es una plataforma de logística de transporte que integra escaneo de códigos de barras mediante cámara del dispositivo, tracking geolocalizado en tiempo real, y gestión completa del ciclo de vida de envíos. Desarrollada con React Native y Redux para manejo de estado complejo, la app se conecta a hardware externo para escaneo industrial. Cada envío se rastrea desde origen hasta destino con actualizaciones de ubicación en tiempo real, generando una trazabilidad del 100% de las operaciones.",
      en: "Torre de Control is a transport logistics platform integrating barcode scanning via device camera, real-time geolocation tracking, and complete shipment lifecycle management. Built with React Native and Redux for complex state handling, the app connects to external hardware for industrial scanning. Each shipment is tracked from origin to destination with real-time location updates, generating 100% traceability of operations."
    },
    impact: {
      es: "Trazabilidad del 100% de envíos en tiempo real",
      en: "100% real-time shipment traceability"
    },
    technologies: ["React Native", "Geolocation", "Hardware", "Redux"],
    category: 'mobile'
  },
  {
    slug: "kometa",
    name: "Kometa",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773778967/473524359_595758226404963_4864_ylmvlv.webp",
    description: {
      es: "PWA de deliveries con registro de tiendas vía WhatsApp, flujo de pedidos en tiempo real y app de repartidores.",
      en: "Delivery PWA with WhatsApp store registration, real-time order flow, and driver app."
    },
    longDescription: {
      es: "Kometa es una plataforma de deliveries que permite a tiendas registrarse vía WhatsApp y comenzar a recibir pedidos de inmediato. El sistema incluye una PWA para clientes donde pueden ver menús y hacer pedidos, una app de repartidores en Flutter con tracking GPS, y un panel de administración con dashboard en tiempo real. La arquitectura serverless en AWS (Lambda, DynamoDB, S3) permite escalar automáticamente. La integración con WhatsApp API automatizó el 80% del proceso de registro y pedidos.",
      en: "Kometa is a delivery platform that allows stores to register via WhatsApp and start receiving orders immediately. The system includes a PWA for customers to view menus and place orders, a driver app in Flutter with GPS tracking, and an admin panel with real-time dashboard. The serverless architecture on AWS (Lambda, DynamoDB, S3) scales automatically. WhatsApp API integration automated 80% of the registration and ordering process."
    },
    impact: {
      es: "Automatización del 80% del proceso de pedidos",
      en: "80% automation of the order process"
    },
    technologies: ["React", "Node", "Flutter", "WhatsApp API", "AWS"],
    category: 'fullstack'
  },
  {
    slug: "info-bees",
    name: "Info Bees",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773778967/how-does-it-work_mmmilp.png",
    description: {
      es: "PWA de gestión de catálogos de productos y programa de puntos para red de distribuidores enterprise.",
      en: "Product catalog management PWA with loyalty points program for enterprise distributor network."
    },
    longDescription: {
      es: "Info Bees es una PWA enterprise que digitaliza la gestión de catálogos de productos y un programa de puntos para una red de más de 200 distribuidores. Construida con React, Express y MySQL sobre Azure, la plataforma reemplazó un proceso manual que generaba errores y demoras. Los distribuidores pueden navegar catálogos, acumular canjear puntos, y generar reportes desde cualquier dispositivo. La migración a digital eliminó errores manuales y redujo el tiempo de gestión en un 70%.",
      en: "Info Bees is an enterprise PWA that digitizes product catalog management and a loyalty points program for a network of 200+ distributors. Built with React, Express, and MySQL on Azure, the platform replaced a manual process that caused errors and delays. Distributors can browse catalogs, accumulate/redeem points, and generate reports from any device. The digital migration eliminated manual errors and reduced management time by 70%."
    },
    impact: {
      es: "Digitalización de proceso manual que afectaba a 200+ distribuidores",
      en: "Digitized manual process affecting 200+ distributors"
    },
    technologies: ["React", "Express", "MySQL", "Azure"],
    category: 'web'
  }
];
