import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniocelaya.dev"),
  title: "Antonio C. | Desarrollo de Apps Móviles, Web y APIs",
  description: "Full Stack Developer con 5+ años de experiencia. Construyo apps móviles con React Native, aplicaciones web con Next.js y APIs robustas con Node.js. Disponible para proyectos freelance.",
  authors: [{ name: "Antonio C." }],
  openGraph: {
    title: "Antonio C. | Desarrollo de Apps Móviles, Web y APIs",
    description: "Full Stack Developer. Apps móviles, web y APIs. 5+ años de experiencia construyendo soluciones reales.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/profile_resume.jpeg",
        width: 800,
        height: 600,
        alt: "Antonio C. - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio C. | Desarrollo de Apps Móviles, Web y APIs",
    description: "Full Stack Developer. Apps móviles, web y APIs.",
    images: ["/profile_resume.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://antoniocelaya.dev",
    languages: {
      es: "https://antoniocelaya.dev",
      en: "https://antoniocelaya.dev",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Antonio C. - Full Stack Developer",
    "description": "Freelance development services: mobile apps, web apps, and APIs.",
    "url": "https://antoniocelaya.dev",
    "image": "https://antoniocelaya.dev/profile_resume.jpeg",
    "sameAs": [
      "https://github.com/gario300",
      "https://www.linkedin.com/in/antonio-g-a0885b19a/"
    ],
    "areaServed": "Worldwide",
    "serviceType": ["Mobile App Development", "Web Application Development", "API Development"],
    "provider": {
      "@type": "Person",
      "name": "Antonio C.",
      "jobTitle": "Full Stack Developer"
    }
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preload" href="/profile_resume.jpeg" as="image" type="image/jpeg" />
      </head>
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-body antialiased pt-16`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cta focus:text-white focus:rounded-lg"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('ServiceWorker registration successful');
                    })
                    .catch(function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
