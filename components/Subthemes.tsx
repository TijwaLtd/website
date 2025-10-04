'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Subtheme } from '@/data/themes';

interface SubthemesProps {
  subthemes: Subtheme[];
}

export default function Subthemes({ subthemes }: SubthemesProps) {
  if (!subthemes || subthemes.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our specialized approaches to sustainable development
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {subthemes.map((subtheme, index) => (
            <motion.article
              key={subtheme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={subtheme.image}
                      alt={subtheme.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{subtheme.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {subtheme.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Key Focus Areas</h4>
                    <ul className="space-y-3">
                      {subtheme.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {subtheme.details && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Implementation Approach</h4>
                      <p className="text-gray-600">{subtheme.details}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
