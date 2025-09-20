import { notFound } from 'next/navigation';
import { Theme, themes } from '@/data/themes';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

const StatCard = ({ value, label, index }: StatCardProps) => {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-teal-500 to-teal-600'
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <div className={`text-4xl font-bold bg-gradient-to-r ${colors[index % colors.length]} bg-clip-text text-transparent`}>
        {value}
      </div>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
};

export default function ThemePage({ params }: { params: { slug: string } }) {
  const theme = themes.find((t) => t.slug === params.slug);

  if (!theme) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{theme.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{theme.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {theme.stats && theme.stats.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {theme.stats.map((stat, index) => (
                <StatCard 
                  key={index} 
                  value={stat.value} 
                  label={stat.label} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-3xl mx-auto">
          <h2>Our Approach</h2>
          <p className="text-gray-700">{theme.approach}</p>
          
          <h2>Key Focus Areas</h2>
          <ul className="space-y-2">
            {theme.keyFocusAreas.map((area, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{area}</span>
              </li>
            ))}
          </ul>
          
          <h2>Impact</h2>
          <p className="text-gray-700">{theme.impact}</p>
          
          {/* Call to Action */}
          <div className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
            <p className="text-gray-700 mb-6">
              Interested in learning more about our {theme.title.toLowerCase()} initiatives? 
              Contact us to explore partnership opportunities or learn how you can contribute.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all themes
export async function generateStaticParams() {
  return themes.map((theme) => ({
    slug: theme.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const theme = themes.find(t => t.slug === params.slug);
  
  if (!theme) {
    return {
      title: 'Theme Not Found',
      description: 'The requested theme could not be found.',
    };
  }

  return {
    title: `${theme.title} | Fivewell`,
    description: theme.description,
  };
}
