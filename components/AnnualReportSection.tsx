"use client"
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export default function AnnualReportSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Read Our Annual Report
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Learn more about our work building food systems that are nutritious, delicious, affordable, and local. 
            Our comprehensive annual report details our impact, partnerships, and vision for eradicating hunger and malnutrition worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg flex items-center"
            >
              <Download className="mr-3" size={24} />
              Download 2024 Report
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center"
            >
              <ExternalLink className="mr-3" size={24} />
              View Online
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1543109740-4bdb38fda756?w=300&h=400&fit=crop&crop=center"
                alt="Tailored Food 2024 Annual Report"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                2024 Edition
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
