'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ThemesHero() {
  return (
    <section className="relative py-20 md:py-28 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Partnerships.jpg" // You might want to use a different image that represents themes
          alt="Themes background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Strategic Themes
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how our focused initiatives drive meaningful change and
            create lasting impact across African agriculture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
