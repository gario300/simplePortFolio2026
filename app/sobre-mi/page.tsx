import { Metadata } from "next";
import SobreMiClient from "./SobreMiClient";

export const metadata: Metadata = {
  title: "Sobre Mí | Antonio Celaya - Full Stack Developer",
  description: "Conoce a Antonio Celaya: Full Stack Developer con 5+ años de experiencia en React Native, Next.js, Node.js. Especializado en apps móviles, web y APIs.",
  openGraph: {
    title: "Sobre Mí | Antonio Celaya - Full Stack Developer",
    description: "Full Stack Developer con 5+ años de experiencia. Especializado en apps móviles, web y APIs.",
    type: "profile",
    url: "https://antoniocelaya.dev/sobre-mi",
    images: [
      {
        url: "https://antoniocelaya.dev/profile_resume.jpeg",
        width: 800,
        height: 600,
        alt: "Antonio Celaya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: "https://antoniocelaya.dev/sobre-mi",
  },
};

export default function SobreMiPage() {
  return <SobreMiClient />;
}
