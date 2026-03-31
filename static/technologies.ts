export interface Technology {
  name: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  level_experience: number;
  url: string;
}

export const technologies: Technology[] = [
  {
    name: "React",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734498/React-icon_kgvjrf.png",
    level_experience: 97,
    description: {
      es: "Desarrollo de soluciones tecnológicas complejas a nivel de PWA y SPA",
      en: "Development of complex technological solutions at PWA and SPA level"
    },
    url: "https://es.react.dev/",
  },
  {
    name: "React Native",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734499/react-native_wcaxcx.png",
    description: {
      es: "Aplicaciones mobiles hibridas para Android e IOs, desde la planeación hasta el lanzamiento en tiendas",
      en: "Hybrid mobile applications for Android and iOS, from planning to app store launch"
    },
    level_experience: 100,
    url: "https://reactnative.dev/",
  },
  {
    name: "Vue",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734499/Vue.js_Logo_2_pbkw9m.png",
    level_experience: 85,
    description: {
      es: "Desarrollo de soluciones tecnológicas complejas a nivel de PWA y SPA",
      en: "Development of complex technological solutions at PWA and SPA level"
    },
    url: "https://vuejs.org/",
  },
  {
    name: "Adonis",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734497/13810373_rnxhpt.png",
    level_experience: 90,
    description: {
      es: "API REST, similar a laravel modelo - controlador haciendo consultas a MySql, crawler, cola de procesos, etc..",
      en: "REST API, very similar to Laravel in its MVC pattern, database queries, crawlers, process queues, etc."
    },
    url: "https://adonisjs.com/",
  },
  {
    name: "Express",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734497/Expressjs_pvidwp.png",
    description: {
      es: "A nivel de API REST haciendo consultas a bases de datos, sockets, etc",
      en: "At the REST API level, performing database queries, sockets, etc."
    },
    level_experience: 90,
    url: "https://expressjs.com/",
  },
  {
    name: "Laravel",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734497/images_jdbpzw.jpg",
    description: {
      es: "A nivel de API REST haciendo consultas a bases de datos, sockets, etc",
      en: "At the REST API level, performing database queries, sockets, etc."
    },
    level_experience: 85,
    url: "https://laravel.com/",
  },
  {
    name: "Firebase",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734498/touchicon-180_czv5rn.png",
    description: {
      es: "Para una arquitectura Serverless, uso de Auth, Base de datos, herramientas de google cloud, etc..",
      en: "For serverless architectures, using Auth, Database, Google Cloud tools, etc."
    },
    level_experience: 95,
    url: "https://firebase.google.com/docs?hl=es-419",
  },
  {
    name: "AWS",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734498/Amazon_Web_Services_Logo_wdkkwo.png",
    level_experience: 85,
    description: {
      es: "A nivel de infraestructura para hacer despliegues. Jenkins, DynamoDB, S3 Entre otros...",
      en: "Infrastructure level for deployments. Jenkins, DynamoDB, S3, and more..."
    },
    url: "https://docs.aws.amazon.com/",
  },
  {
    name: "Azure",
    image: "https://res.cloudinary.com/scute/image/upload/f_auto,q_auto/v1773734498/Microsoft_Azure_davish.png",
    level_experience: 70,
    description: {
      es: "A nivel de infraestructura para despliegues automatizados",
      en: "Infrastructure level for automated deployments"
    },
    url: "https://learn.microsoft.com/es-es/azure/?product=popular",
  },
  {
    name: "Swift",
    image: "https://res.cloudinary.com/scute/image/upload/v1774941030/5968371_kh3osp.png",
    level_experience: 75,
    description: {
      es: "Desarrollo de aplicaciones nativas iOS con integración de funcionalidades del sistema y APIs de Apple",
      en: "Native iOS application development with system functionality integration and Apple APIs"
    },
    url: "https://www.swift.org/documentation/",
  },
];
