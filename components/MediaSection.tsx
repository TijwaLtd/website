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
};

const MediaSection = () => {
  const mediaItems: MediaItem[] = [
    {
      id: '1',
      title: 'Our Impact in 2024',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1581092921461-39b2f2c6a964?w=800&h=450&fit=crop',
      date: '2024-09-15',
      url: '#'
    },
    {
      id: '2',
      title: 'Community Farming Initiative',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop',
      date: '2024-08-22',
      url: '#'
    },
    {
      id: '3',
      title: 'Annual Report 2023',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
      date: '2024-07-10',
      url: '#'
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Media & Resources</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our latest videos, images, and publications
          </p>
        </div>

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
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{item.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <a
                  href={item.url}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-4"
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

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            View All Media
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
