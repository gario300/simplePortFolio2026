import { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Antonio C. - Full Stack Developer",
  description: "Contacta a Antonio Celaya para tu próximo proyecto de desarrollo de apps móviles, web o APIs. Respuesta en menos de 24 horas.",
  openGraph: {
    title: "Contacto | Antonio C. - Full Stack Developer",
    description: "Contacta para tu próximo proyecto. Disponible para freelance.",
    type: "website",
    url: "https://antoniocelaya.dev/contacto",
  },
  alternates: {
    canonical: "https://antoniocelaya.dev/contacto",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
