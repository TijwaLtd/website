'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type MediaItem = {
  id: string;
  title: string;
  type: 'video' | 'image' | 'document';
  thumbnail: string;
  date: string;
  url: string;
  category?: string;
};

const MediaPage = () => {
  const mediaItems: MediaItem[] = [
    {
      id: '1',
      title: 'Our Impact in 2024',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1581092921461-39b2f2c6a964?w=800&h=450&fit=crop',
      date: '2024-09-15',
      url: '#',
      category: 'Featured'
    },
    {
      id: '2',
      title: 'Community Farming Initiative',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop',
      date: '2024-08-22',
      url: '#',
      category: 'Gallery'
    },
    {
      id: '3',
      title: 'Annual Report 2023',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
      date: '2024-07-10',
      url: '#',
      category: 'Reports'
    },
    {
      id: '4',
      title: 'Sustainable Agriculture Workshop',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=450&fit=crop',
      date: '2024-06-28',
      url: '#',
      category: 'Workshops'
    },
    {
      id: '5',
      title: 'Field Visit Photos',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop',
      date: '2024-05-15',
      url: '#',
      category: 'Gallery'
    },
    {
      id: '6',
      title: 'Quarterly Newsletter Q2 2024',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
      date: '2024-04-10',
      url: '#',
      category: 'Newsletters'
    },
  ];


  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        );
      case 'document':
        return (
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative bg-green-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop"
            alt="Media Library"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Media Library</h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Explore our latest videos, images, and publications showcasing our work and impact.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {getTypeIcon(item.type)}
                {item.category && (
                  <span className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  {item.type === 'video' 
                    ? 'A detailed video showcasing our latest work and impact in the community.'
                    : item.type === 'document' 
                      ? 'Download this document to learn more about our initiatives and reports.'
                      : 'High-quality images from our projects and events.'}
                </p>
                <a
                  href={item.url}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  {item.type === 'video' ? 'Watch Now' : item.type === 'document' ? 'View Document' : 'View Image'}
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MediaPage;
