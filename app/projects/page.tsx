"use client"

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Target } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "School Nutrition Program - Kenya",
      organization: "World Food Programme",
      location: "Nairobi & Rural Kenya",
      duration: "2022 - Present",
      beneficiaries: "15,000 students",
      description: "Developing locally-sourced meal programs for primary schools across Kenya, focusing on nutrition education and sustainable food procurement.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop&crop=center",
      status: "Active",
      impact: "Improved attendance by 35% in participating schools"
    },
    {
      title: "Urban Agriculture Initiative",
      organization: "UN-Habitat",
      location: "Lagos, Nigeria & Accra, Ghana",
      duration: "2023 - 2024",
      beneficiaries: "2,500 families",
      description: "Supporting urban communities in developing rooftop gardens and vertical farming systems to improve food security in dense urban areas.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center",
      status: "Completed",
      impact: "500 new urban gardens established"
    },
    {
      title: "Food Safety & Processing Training",
      organization: "African Development Bank",
      location: "Rwanda & Uganda",
      duration: "2021 - 2023",
      beneficiaries: "800 entrepreneurs",
      description: "Training program for small-scale food processors on safety standards, packaging, and market access to reduce post-harvest losses.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      status: "Completed",
      impact: "50% reduction in post-harvest losses"
    },
    {
      title: "Climate-Resilient Agriculture",
      organization: "USAID",
      location: "Ethiopia & Somalia",
      duration: "2023 - 2025",
      beneficiaries: "10,000 farmers",
      description: "Implementing drought-resistant crop varieties and sustainable farming practices to build resilience against climate change.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&crop=center",
      status: "Active",
      impact: "30% increase in crop yields during dry seasons"
    },
    {
      title: "Nutrition Education Campaign",
      organization: "UNICEF",
      location: "Tanzania & Malawi",
      duration: "2022 - 2024",
      beneficiaries: "25,000 mothers",
      description: "Community-based nutrition education focusing on locally available foods and traditional recipes to combat malnutrition.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center",
      status: "Active",
      impact: "40% improvement in child nutrition indicators"
    },
    {
      title: "Value Chain Development",
      organization: "Gates Foundation",
      location: "Senegal & Mali",
      duration: "2020 - 2022",
      beneficiaries: "5,000 farmers",
      description: "Strengthening cassava and millet value chains to improve farmer incomes and food processing capabilities.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=center",
      status: "Completed",
      impact: "60% increase in farmer incomes"
    }
  ];

  const projectTypes = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Program Design",
      description: "Developing comprehensive food security programs tailored to local contexts and needs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Capacity Building",
      description: "Training local organizations and entrepreneurs to implement sustainable food system solutions."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Field Implementation",
      description: "On-ground support for program execution and community engagement across Africa."
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
              Consulting Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We consult with the world's largest food system organizations, furthering their work to ensure healthy food is affordable and available to families struggling with malnutrition.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized consulting services to global organizations working to improve food systems across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent consulting projects and the impact we've achieved with our global partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-green-600 font-semibold mb-3">{project.organization}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {project.beneficiaries}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Impact:</p>
                    <p className="text-sm text-gray-600">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Collective Impact</h2>
            <p className="text-xl text-gray-600">Our consulting projects have reached communities across Africa</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">60K+</div>
              <div className="text-gray-600">Beneficiaries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Countries Reached</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Global Partners</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
