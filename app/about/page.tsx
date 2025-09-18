'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Globe, BookOpen, Eye, BarChart3, Leaf } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community-Centered",
      description: "We believe in empowering local communities to lead their own food security initiatives and build sustainable solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact-Driven",
      description: "Every program and partnership is designed to create measurable, lasting change in food access and nutrition."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Locally Focused",
      description: "We prioritize local solutions, ingredients, and knowledge to create food systems that work for each unique community."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative",
      description: "We work alongside grassroots entrepreneurs, global organizations, and communities to maximize collective impact."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Amara Okafor",
      role: "Executive Director",
      bio: "Leading agricultural development initiatives across West Africa for over 15 years.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "James Mwangi",
      role: "Program Director",
      bio: "Expert in community-based nutrition programs and sustainable farming practices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Nyong",
      role: "Research Coordinator",
      bio: "Specialist in food systems research and anthropological studies across rural Africa.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kimani",
      role: "Partnership Manager",
      bio: "Connecting local entrepreneurs with global resources and building sustainable partnerships.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About FiveWellAfrica
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We're building sustainable food systems across Africa that are nutritious, delicious, affordable, and local. Our mission is to eradicate hunger and malnutrition through community-driven solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop"
                alt="FiveWellAfrica Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="about" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="about">About Us</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about" className="space-y-16">
              {/* Our Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    FiveWellAfrica was founded with a simple belief: that every community has the knowledge, resources, and capability to create sustainable food systems. We started by working directly with rural farming communities across Kenya, learning from their traditional practices while introducing modern techniques that enhance both nutrition and income.
                  </p>
                </div>
              </motion.div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-green-50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <Eye className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    A future where every community in Africa has access to nutritious, affordable, and 
                    sustainably produced food, while preserving the environment and local cultures.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To empower communities across Africa with the knowledge, resources, and support needed 
                    to build resilient, sustainable food systems that nourish people and the planet.
                  </p>
                </motion.div>
              </div>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-green-600 mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="team" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="h-64 relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-green-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
