
"use client"
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-primary dark:text-primary-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission is to empower organizations and communities with innovative, technological, and sustainable solutions that enhance productivity, resilience, and environmental stewardship.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-primary dark:text-primary-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our vision is to drive transformation in Africa and beyond through innovative and sustainable solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
