import { Metadata } from "next";
import { services } from "@/static/services";
import { notFound } from "next/navigation";
import ServiceClient from "./ServiceClient";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title.es} | Antonio C. - Full Stack Developer`,
    description: service.description.es,
    openGraph: {
      title: `${service.title.es} | Antonio C.`,
      description: service.description.es,
      type: "website",
      url: `https://antoniocelaya.dev/servicios/${slug}`,
    },
    alternates: {
      canonical: `https://antoniocelaya.dev/servicios/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title.es,
    description: service.longDescription.es,
    provider: {
      "@type": "Person",
      name: "Antonio Celaya",
      jobTitle: "Full Stack Developer",
    },
    areaServed: "Worldwide",
    serviceType: service.title.es,
    url: `https://antoniocelaya.dev/servicios/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceClient slug={slug} />
    </>
  );
}
