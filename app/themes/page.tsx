"use client";

import { themes } from "@/data/themes";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ThemesPage() {
  const themeColors = [
    {
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
      hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/50',
      button: 'bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700/70'
    },
    {
      bg: 'bg-green-50 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-700 dark:text-green-300',
      hover: 'hover:bg-green-100 dark:hover:bg-green-900/50',
      button: 'bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-700/70'
    },
    {
      bg: 'bg-amber-50 dark:bg-amber-900/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      hover: 'hover:bg-amber-100 dark:hover:bg-amber-900/50',
      button: 'bg-amber-100 dark:bg-amber-800/50 text-amber-700 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-700/70'
    },
    {
      bg: 'bg-purple-50 dark:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-700 dark:text-purple-300',
      hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/50',
      button: 'bg-purple-100 dark:bg-purple-800/50 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700/70'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/Pollution.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
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
              create lasting impact across all our areas of expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Driving Change Through Focused Initiatives
              </h2>
              {/* <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our work is organized around strategic themes that address the
                most pressing challenges and opportunities in our field. Each
                theme represents a commitment to excellence and a pathway to
                creating sustainable impact.
              </p> */}
              <p className="text-lg text-gray-600 mb-8">
                Explore our themes to learn more about our approach, key focus
                areas, and the difference we&apos;re making in communities
                worldwide.
              </p>
              {/* <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200"
              >
                Learn about our approach
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link> */}
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/image.png"
                alt="Strategic Themes"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Themes Grid Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Themes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each theme represents a pillar of our strategy for creating
              meaningful, sustainable change.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:flex-wrap -mx-4">
              {themes.map((theme, index) => {
                const color = themeColors[index % themeColors.length];
                const isLarge = index % 4 === 0; // Make every 4th item larger
                
                return (
                  <motion.div
                    key={theme.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-full px-4 mb-8 group ${isLarge ? 'lg:w-2/3' : 'lg:w-1/3'}`}
                  >
                    <div className={`h-full flex flex-col rounded-2xl overflow-hidden border ${color.border} ${color.bg} ${color.hover} transition-all duration-300`}>
                      {/* Image with gradient overlay */}
                      <div className={`relative h-48 ${isLarge ? 'lg:h-64' : 'lg:h-48'} overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <Image
                          src={theme.image || "/placeholder-theme.jpg"}
                          alt={theme.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${color.button} text-sm font-bold mb-2`}>
                            {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold text-white">
                            <Link href={`/themes/${theme.slug}`} className="hover:underline">
                              {theme.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className={`${color.text} mb-6 flex-grow`}>
                          {theme.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mt-auto">
                          <Link
                            href={`/themes/${theme.slug}`}
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${color.button} transition-all duration-200`}
                          >
                            Explore theme
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                          <Link
                            href={`/projects?theme=${theme.slug}`}
                            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200"
                          >
                            View projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto mb-8 dark:text-gray-300">
              Join us in our mission to create sustainable change. Explore
              partnership opportunities or learn how you can get involved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-100 text-primary rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-20 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
