'use client';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ThirdStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop&crop=center"
          alt="Sustainable Social Enterprises"
          width={600}
          height={400}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600 text-xl font-bold mb-4">
            03
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Sustainable Social Enterprises
          </h3>
          <p className="text-red-100 mb-6 leading-relaxed">
            Tailored Food supports local entrepreneur partners throughout the
            food value chain. We work together to transform food systems that
            are climate resilient and financially sustainable.
          </p>
          <button className="flex items-center text-white font-semibold hover:text-red-200 transition-colors duration-200">
            Meet Our Entrepreneur Partners
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}