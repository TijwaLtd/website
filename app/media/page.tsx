import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import MediaGrid, { type MediaItem as MediaGridItem } from '@/components/media/MediaGrid';

export const metadata: Metadata = {
  title: 'Data-Driven Agricultural Strategy | FiveWell Africa',
  description: 'See FiveWell Africa in the news. Explore our publications, white papers, and media mentions showcasing our expertise in African agriculture.',
};

const MediaPage = () => {
  const mediaItems: MediaGridItem[] = [
    {
      id: '1',
      title: 'White Paper: The Future of Sustainable Coffee Production in East Africa',
      type: 'publication',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
      date: '2024-09-15',
      url: '#',
      category: 'White Paper',
      source: 'FiveWell Africa Research'
    },
    {
      id: '2',
      title: 'Dr. Amara Okafor\'s Keynote at the African Agri-Investment Indaba',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=450&fit=crop',
      date: '2024-08-22',
      url: '#',
      category: 'Keynote',
      source: 'Agri-Investment Indaba'
    },
    {
      id: '3',
      title: 'Why Data Privacy Matters: Building Trust in Kenya\'s Digital Development',
      type: 'article',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      date: '2024-07-15',
      url: '/media/why-data-privacy-matters',
      category: 'Featured Article',
      source: 'FiveWell Africa'
    },
    {
      id: '4',
      title: 'Publication: A Framework for De-Risking Smallholder Farmer Loans',
      type: 'publication',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
      date: '2024-06-28',
      url: '#',
      category: 'Report',
      source: 'Journal of Modern Agriculture'
    },
    {
      id: '5',
      title: 'Interview with James Mwangi on Precision Farming',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop',
      date: '2024-05-15',
      url: '#',
      category: 'Interview',
      source: 'Africa Farming Today'
    },
    {
      id: '6',
      title: 'How Data is Transforming African Supply Chains',
      type: 'article',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop',
      date: '2024-04-10',
      url: '#',
      category: 'Article',
      source: 'Logistics Monthly'
    },
  ];


  // Grid rendering with animations is handled in the client component `MediaGrid`.

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative bg-green-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop"
            alt="Publications and Media"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Publications & Media</h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Explore our published research, white papers, and mentions in leading industry publications.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Media Grid */}
        <MediaGrid mediaItems={mediaItems as MediaGridItem[]} />
      </div>
    </div>
  );
};

export default MediaPage;