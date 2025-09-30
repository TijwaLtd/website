import { themes } from '@/data/themes';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import ProcessSection from '@/components/ProcessSection';
import MissionSection from '@/components/MissionSection';
import ThirdStep from '@/components/ThirdStep';

// This function generates the static paths for each theme slug
export async function generateStaticParams() {
  return themes.map((theme) => ({
    slug: theme.slug,
  }));
}

// This is the main page component for a single theme
export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Since we're using generateStaticParams, we can safely access params.slug directly
  const theme = themes.find((t) => t.slug === slug);

  if (!theme) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] text-white">
        <Image
          src={theme.heroImage}
          alt={theme.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{theme.title}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">{theme.description}</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{theme.introduction.title}</h2>
          <p className="text-lg">{theme.introduction.content}</p>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{theme.keyAreas.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theme.keyAreas.points.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      <WhatWeDoSection />
      <ProcessSection />
      <MissionSection />
      <ThirdStep />
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
          url: theme.heroImage,
          width: 1200,
          height: 630,
          alt: theme.title,
        },
      ],
    },
  };
}