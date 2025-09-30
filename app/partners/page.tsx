"use client";

// import type { Metadata } from 'next';
import { motion } from "framer-motion";
import { Zap, University, Landmark, Handshake } from "lucide-react";

// export const metadata: Metadata = {
//   title: 'Our Partners | FiveWell Africa',
//   description: 'FiveWell Africa collaborates with leading technology providers, financial institutions, and research organizations to deliver exceptional results for our clients.',
// };

export default function Partners() {
  const partners = {
    technology: [
      {
        name: "AgriTech Global",
        logo: "/agritech-global-logo.svg",
        description:
          "Leading provider of farm management software and IoT sensors.",
      },
      {
        name: "Precision Crop",
        logo: "/precision-crop-logo.svg",
        description:
          "Specialists in drone imaging and data analysis for agriculture.",
      },
      {
        name: "WaterWise Solutions",
        logo: "/waterwise-logo.svg",
        description:
          "Innovators in smart irrigation and water management technology.",
      },
    ],
    research: [
      {
        name: "University of Nairobi, Faculty of Agriculture",
        logo: "/uon-logo.svg",
        description:
          "Collaborating on cutting-edge research in crop science and soil health.",
      },
      {
        name: "CGIAR",
        logo: "/cgiar-logo.svg",
        description: "Partnering on global research for a food-secure future.",
      },
    ],
    finance: [
      {
        name: "Africa Ag-Invest",
        logo: "/ag-invest-logo.svg",
        description:
          "Venture capital firm focused on scaling African agribusinesses.",
      },
      {
        name: "GreenGrowth Bank",
        logo: "/greengrowth-logo.svg",
        description:
          "Providing accessible financing for sustainable farming initiatives.",
      },
    ],
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Strategic Alliances
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We collaborate with a network of leaders in technology, research,
              and finance to deliver comprehensive, cutting-edge solutions for
              our clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technology Partners */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <Zap className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Technology Partners
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {partners.technology.map((partner) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  {/* Placeholder for logo */}
                  <div className="h-20 w-full flex items-center justify-center bg-gray-200 rounded-md mb-4 text-sm text-gray-500">
                    Logo
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research & Academia */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <University className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Research & Academia
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {partners.research.map((partner) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="h-20 w-full flex items-center justify-center bg-gray-200 rounded-md mb-4 text-sm text-gray-500">
                    Logo
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Financial & Investment Partners */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <Landmark className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Financial & Investment Partners
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {partners.finance.map((partner) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="h-20 w-full flex items-center justify-center bg-gray-200 rounded-md mb-4 text-sm text-gray-500">
                    Logo
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Handshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Become a Strategic Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              If your organization shares our vision for a technologically
              advanced and sustainable agricultural sector in Africa, we invite
              you to connect with us.
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg">
              Contact for Partnerships
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
