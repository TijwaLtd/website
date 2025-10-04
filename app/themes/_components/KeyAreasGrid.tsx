'use client';

import { motion } from 'framer-motion';

interface KeyArea {
  title: string;
  description: string;
}

interface KeyAreasGridProps {
  areas: {
    title: string;
    points: KeyArea[];
  };
}

export function KeyAreasGrid({ areas }: KeyAreasGridProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">{areas.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {areas.points.map((point, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
