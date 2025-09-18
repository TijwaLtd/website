"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

export default function Partners() {
  const entrepreneurs = [
    {
      name: "Grace Wanjiku",
      business: "Nyama Choma Express",
      location: "Nairobi, Kenya",
      description: "Developing locally-sourced, nutritious ready-to-eat meals for urban families using traditional Kenyan recipes.",
      impact: "Serving 500+ families daily",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Samuel Ochieng",
      business: "Green Harvest Cooperative",
      location: "Kisumu, Kenya",
      description: "Building a network of smallholder farmers to produce organic vegetables for local markets and schools.",
      impact: "200+ farmers connected",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Fatuma Hassan",
      business: "Coastal Foods Initiative",
      location: "Mombasa, Kenya",
      description: "Preserving traditional coastal recipes while improving nutritional content and creating sustainable livelihoods.",
      impact: "15 new products launched",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "John Mutiso",
      business: "Protein Plus",
      location: "Machakos, Kenya",
      description: "Developing affordable, protein-rich food products using locally-sourced insects and traditional grains.",
      impact: "3,000+ children reached",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const partnershipBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Development",
      description: "Access to mentorship, business planning, and market research to scale your food enterprise."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Network Access",
      description: "Connect with other entrepreneurs, suppliers, distributors, and potential customers across Africa."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Technical Support",
      description: "Expert guidance on nutrition, food safety, production efficiency, and sustainable practices."
    }
  ];

  return (
    <div className="min-h-screen">
   
      
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
              Entrepreneur Partners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We partner with grassroots food entrepreneurs across Africa to develop, launch, and scale delicious, affordable, nutritious food products that serve their communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Become a Partner
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you partner with FiveWellAfrica, you gain access to comprehensive support to grow your food business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneur Spotlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These innovative entrepreneurs are transforming their communities through sustainable food enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {entrepreneurs.map((entrepreneur, index) => (
              <motion.div
                key={entrepreneur.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={entrepreneur.image}
                  alt={entrepreneur.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{entrepreneur.name}</h3>
                  <div className="text-green-600 font-semibold mb-1">{entrepreneur.business}</div>
                  <div className="text-gray-500 text-sm mb-4">{entrepreneur.location}</div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{entrepreneur.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {entrepreneur.impact}
                    </span>
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 flex items-center">
                      Read Story <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're an emerging food entrepreneur or an established business looking to scale, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Apply for Partnership
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300">
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
