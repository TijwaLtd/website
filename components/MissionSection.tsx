
"use client"
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            FiveWellAfrica's Mission: Eradicating Hunger and Malnutrition
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We build sustainable food systems across Africa that are nutritious, delicious, affordable, and local. Through partnerships with grassroots food entrepreneurs and consulting with global food organizations, we create community-driven solutions that ensure healthy food is accessible to families struggling with malnutrition across the continent.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grassroots Food Entrepreneurs</h3>
              <p className="text-gray-600">We develop, launch, and scale delicious, low-cost, nutritious, locally sourced food products in partnership with local entrepreneurs.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Food Systems</h3>
              <p className="text-gray-600">We consult with the world's largest food system organizations, furthering their work to ensure healthy food is affordable and available.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Holistic Food Systems</h3>
              <p className="text-gray-600">Designing and building holistic food system models that encompass climate sensitive agriculture, production facilities, and distribution channels.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
