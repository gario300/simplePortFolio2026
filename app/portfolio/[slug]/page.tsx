import { Metadata } from "next";
import { portfolio } from "@/static/portfolio";
import { notFound } from "next/navigation";
import PortfolioClient from "./PortfolioClient";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | Portfolio de Antonio C.`,
    description: project.description.es,
    openGraph: {
      title: `${project.name} | Antonio C.`,
      description: project.description.es,
      images: [{ url: project.image, width: 800, height: 600, alt: project.name }],
      type: "website",
      url: `https://antoniocelaya.dev/portfolio/${slug}`,
    },
    alternates: {
      canonical: `https://antoniocelaya.dev/portfolio/${slug}`,
    },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.longDescription.es,
    creator: {
      "@type": "Person",
      name: "Antonio Celaya",
      jobTitle: "Full Stack Developer",
    },
    image: project.image,
    keywords: project.technologies.join(", "),
    url: `https://antoniocelaya.dev/portfolio/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient slug={slug} />
    </>
  );
}
