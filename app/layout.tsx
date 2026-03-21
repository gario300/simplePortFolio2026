import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniocelaya.dev"),
  title: "Antonio C. | Software Engineer & Full Stack Developer",
  description: "Portafolio profesional de Antonio C., Ingeniero de Software especializado en React, Next.js, Node.js y arquitecturas cloud (AWS/Azure). 5+ años de experiencia desarrollando aplicaciones web y móviles modernas.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "AWS", "Azure", "React Native", "Antonio Celaya", "Portafolio", "Desarrollador Web"],
  authors: [{ name: "Antonio C." }],
  openGraph: {
    title: "Antonio C. | Software Engineer & Full Stack Developer",
    description: "Desarrollador Full Stack con 5+ años de experiencia en aplicaciones web modernas y arquitecturas cloud.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/profile_resume.jpeg",
        width: 800,
        height: 600,
        alt: "Antonio C. - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio C. | Software Engineer",
    description: "Desarrollador Full Stack especializado en React, Next.js y Cloud Computing.",
    images: ["/profile_resume.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antonio C.",
    "jobTitle": "Software Engineer & Full Stack Developer",
    "url": "https://antoniocelaya.dev",
    "image": "https://antoniocelaya.dev/profile_resume.jpeg",
    "sameAs": [
      "https://github.com/gario300",
      "https://www.linkedin.com/in/antonio-g-a0885b19a/"
    ],
    "description": "Software Engineer with 5+ years of experience in modern web applications and cloud architectures."
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-body antialiased pt-16`}>
        {children}
      </body>
    </html>
  );
}
