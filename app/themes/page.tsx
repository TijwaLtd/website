"use client";

import { themes } from "@/data/themes";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ThemesPage() {
  const colors = [
    "border-primary",
    "border-primary",
    "border-primary",
    "border-primary",
  ];

  const textColors = [
    "text-primary",
    "text-primary",
    "text-primary",
    "text-primary",
  ];

  const borderColors = [
    "border-primary hover:border-primary",
    "border-primary hover:border-primary",
    "border-primary hover:border-primary",
    "border-primary hover:border-primary",
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
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our work is organized around strategic themes that address the
                most pressing challenges and opportunities in our field. Each
                theme represents a commitment to excellence and a pathway to
                creating sustainable impact.
              </p>
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

          <div className="space-y-16 max-w-6xl mx-auto px-4">
            {themes.map((theme, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={theme.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } items-start`}
                  >
                    {/* Number with circular border */}
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center ${
                        isEven ? "md:mr-6" : "md:ml-0"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full border-4 ${
                          colors[index % colors.length]
                        } opacity-20`}
                      ></div>
                      <span
                        className={`text-3xl md:text-4xl font-bold ${
                          textColors[index % textColors.length]
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 min-w-0 -mt-1 ${
                        isEven ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <Link href={`/themes/${theme.slug}`} className="group">
                        <h3
                          className={`text-2xl md:text-3xl font-bold ${
                            textColors[index % textColors.length]
                          } mb-3 group-hover:underline`}
                        >
                          {theme.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                        {theme.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/themes/${theme.slug}`}
                          className={`inline-flex items-center px-5 py-2 border-2 ${
                            borderColors[index % borderColors.length]
                          } rounded-full text-sm md:text-base font-medium ${
                            textColors[index % textColors.length]
                          } hover:bg-opacity-10 transition-all duration-200`}
                        >
                          Explore theme
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                        <Link
                          href={`/projects?theme=${theme.slug}`}
                          className="inline-flex items-center px-4 py-2 text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                        >
                          View related projects
                        </Link>
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`w-full md:w-72 h-72 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl dark:shadow-gray-900/30 mt-6 md:mt-0 ${
                        isEven ? "md:ml-8" : "md:mr-8"
                      }`}
                    >
                      <Link
                        href={`/themes/${theme.slug}`}
                        className="block h-full"
                      >
                        <Image
                          src={theme.image || "/placeholder.svg"}
                          alt={theme.title}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Left border line */}
                  <div
                    className={`absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b ${
                      colors[index % colors.length]
                    } opacity-30 -z-10`}
                  ></div>
                </motion.div>
              );
            })}
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
