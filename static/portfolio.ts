export interface PortfolioItem {
  name: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  technologies: string[];
}

export const portfolio: PortfolioItem[] = [
  {
    name: "Stream App",
    image: "https://res.cloudinary.com/scute/image/upload/v1773778967/473444735_595757333071719_4162_unjamk.webp",
    description: {
      es: "Una app de streaming de cámaras de seguridad y gestión de emergencias",
      en: "A security camera streaming and emergency management app"
    },
    technologies: ["react-native", "firebase", "graphql", "node", "google APIs"]
  },
  {
    name: "AMX 2.0",
    image: "https://res.cloudinary.com/scute/image/upload/v1773778967/unnamed_1_veuzpc.webp",
    description: {
      es: "POD de profile, gestión de reservaciones, puntos de recompensa y medios de pago",
      en: "Profile POD, reservation management, reward points and payment methods"
    },
    technologies: ["react-native", "firebase", "swift", "API Calls"]
  },
  {
    name: "Torre de Control",
    image: "https://res.cloudinary.com/scute/image/upload/v1773778967/unnamed_am9suk.webp",
    description: {
      es: "Gestión de logistica de transporte, scanner de código de barras, eventos de geolocalización",
      en: "Transport logistics management, barcode scanner, geolocation events"
    },
    technologies: ["react-native", "Geolocalización", "Dispositivos fisicos", "API calls", "redux storage"]
  },
  {
    name: "Kometa",
    image: "https://res.cloudinary.com/scute/image/upload/v1773778967/473524359_595758226404963_4864_ylmvlv.webp",
    description: {
      es: "WPA de deliveries, registro de tiendas vía wsp, usuario realizaba un pedido, el repartidor lo tomaba desde su appi",
      en: "Delivery PWA, store registration via WhatsApp, user orders, driver takes orders from their app"
    },
    technologies: ["React", "Node", "Flutter", "Whatsapp API", "API calls", "AWS"]
  },
  {
    name: "Info Bees",
    image: "https://res.cloudinary.com/scute/image/upload/v1773778967/how-does-it-work_mmmilp.png",
    description: {
      es: "WPA para gestionar productos y puntos de recompensa para distribuidores del entonces llamado grupo MODELO",
      en: "PWA to manage products and reward points for distributors of what was then called Grupo MODELO"
    },
    technologies: ["react", "express", "MySql", "Azure"]
  }
];
