'use client';

import { partners } from '@/data/partners';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
} as const;

const PartnerSection = () => {
  return (
    <section className="relative pb-6  overflow-hidden">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/Partnerships.jpg"
          alt="Partnerships background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/70 backdrop-blur-sm"></div>
      </div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold  drop-shadow-lg">Our Partners</h2>
          <p className="mt-4 text-lg  max-w-3xl mx-auto">
            We are proud to collaborate with a diverse range of partners to achieve our mission.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover="hover"
              className="flex items-center justify-center p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-gray-800/95 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 h-24 md:h-28"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2 dark:brightness-0 dark:invert dark:opacity-100"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
