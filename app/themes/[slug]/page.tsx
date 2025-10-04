import { themes, type Theme } from '@/data/themes';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import ProcessSection from '@/components/ProcessSection';
import MissionSection from '@/components/MissionSection';
import Subthemes from '@/components/Subthemes';
import CTASection from '@/components/CTASection';
import { KeyAreasGrid } from '../_components';


interface ThemePageProps {
  params: { slug: string };
}

// This function generates the static paths for each theme slug
export async function generateStaticParams() {
  return themes.map((theme) => ({
    slug: theme.slug,
  }));
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { slug } = await params;
  const theme = themes.find((t) => t.slug === slug);

  if (!theme) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{theme.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{theme.description}</p>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <KeyAreasGrid areas={theme.keyAreas} />
        </div>
      </section>

      {/* Impact Section */}
      {theme.impact && (
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center">{theme.impact}</p>
          </div>
        </section>
      )}

      {/* Subthemes Section */}
      {theme.subthemes && theme.subthemes.length > 0 && (
        <Subthemes subthemes={theme.subthemes} />
      )}

      {/* Additional Sections */}
      <WhatWeDoSection />
      {theme.process && (
        <ProcessSection process={theme.process} />
      )}
      <MissionSection />
    </div>
  );
}

// This function generates the metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Read route params
  const { slug } = await params;
  const theme = themes.find(t => t.slug === slug);

  if (!theme) {
    return {
      title: 'Theme Not Found',
      description: 'The theme you are looking for does not exist.',
    };
  }

  return {
    title: theme.title,
    description: theme.description,
    openGraph: {
      title: theme.title,
      description: theme.description,
      images: [
        {
          url: theme.heroImage || theme.image,  // Fallback to theme.image if heroImage is undefined,
          width: 1200,
          height: 630,
          alt: theme.title,
        },
      ],
    },
  };
}