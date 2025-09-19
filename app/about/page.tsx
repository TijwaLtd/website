import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Globe, BookOpen, Eye, BarChart3, Leaf, TrendingUp, Handshake, BrainCircuit } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team & Expertise | FiveWell Africa',
  description: 'Meet the expert team of agriculture consultants at FiveWell Africa. Learn about our experience in sustainable farming and agribusiness across the continent.',
};

const AboutPage = () => {
  const values = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Client Success-Driven",
      description: "We are committed to delivering measurable results, increased profitability, and sustainable growth for our clients' agribusinesses."
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Data-Informed Strategy",
      description: "Our recommendations are grounded in rigorous data analysis, market research, and cutting-edge agricultural science."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Practices",
      description: "We champion and implement sustainable and regenerative farming techniques that ensure long-term environmental and economic viability."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, building trusted partnerships to navigate challenges and unlock opportunities together."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Amara Okafor",
      role: "Managing Director, Agribusiness Strategy",
      bio: "Over 15 years of experience advising on agricultural investments and market entry strategies across West Africa.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "James Mwangi",
      role: "Head of Agritech & Sustainable Farming",
      bio: "Expert in implementing precision agriculture, irrigation technology, and sustainable farming practices for large-scale farms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Nyong",
      role: "Senior Analyst, Market Research",
      bio: "Specialist in supply chain analysis, commodity pricing, and agricultural market intelligence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kimani",
      role: "Client & Partnership Manager",
      bio: "Connects agribusinesses with strategic partners, financial resources, and new market opportunities.",
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
                Expert Agricultural Consulting for Africa
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We are a premier agriculture consulting firm dedicated to unlocking the potential of African agribusiness through data-driven strategy, sustainable practices, and innovative technology.
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
                alt="Agricultural consultants reviewing data in a field"
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
                    FiveWell Africa was founded by agricultural experts who saw a critical need for data-driven, practical advisory services to help African agribusinesses thrive in a complex global market. We started by helping farms in Kenya leverage technology to increase yields, and have since grown to serve clients across the continent.
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
                    To be Africa's most trusted agricultural consulting partner, driving a future where the continent's agribusinesses are global leaders in productivity, sustainability, and innovation.
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
                    To provide actionable, data-driven insights and expert implementation support that empowers our clients to achieve sustainable growth, operational excellence, and market leadership.
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
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team of Experts</h2>
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