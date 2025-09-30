'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const BecomePartner = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Partner with FiveWell Africa
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join us in our drive to transform Africa's agricultural sector through innovative solutions and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ExternalLink className="mr-2" size={20} />
              Become a Partner
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomePartner;
