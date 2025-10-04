"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Partner with FiveWellAfrica
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Read our annual report to learn more about our work in building
              food systems that are nutritious, delicious, affordable, and
              local. Join us in our mission to eradicate hunger and malnutrition
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ExternalLink className="mr-2" size={20} />
                Become a Partner
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1543109740-4bdb38fda756?w=400&h=500&fit=crop&crop=center"
                alt="Annual Report Cover"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              {/* <div className="absolute -top-4 -right-4 bg-orange-400 text-white px-4 py-2 rounded-full font-bold text-sm">
                2024 Report
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
