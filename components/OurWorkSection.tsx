"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ThirdStep from './ThirdStep';

export default function OurWorkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Tailored Food Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven three-step approach ensures sustainable impact and transforms food systems worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Food Security Program */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center"
                alt="Anthropological Deep Dives"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4">01</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Anthropological Deep Dives
                </h3>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  In communities impacted by malnutrition, we study which foods are available locally and what families enjoy eating. We immerse ourselves in rural agricultural communities, urban markets, and with families as they purchase, cook, and consume food.
                </p>
                <button className="flex items-center text-white font-semibold hover:text-orange-200 transition-colors duration-200">
                  Learn About Our Research
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Agricultural Development Program */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center"
                alt="Holistic Food System Design"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-yellow-600 text-xl font-bold mb-4">02</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Holistic Food System Design
                </h3>
                <p className="text-yellow-100 mb-6 leading-relaxed">
                  Working with local experts, we design and build holistic food system models. These encompass climate sensitive agriculture value chains, food production facilities, and distribution channels.
                </p>
                <button className="flex items-center text-white font-semibold hover:text-yellow-200 transition-colors duration-200">
                  Explore Our Systems Design
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Third Step */}
        <ThirdStep />

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Food Entrepreneurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">12+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
