"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers } from "@/data/team";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {


  return (
    <div className="min-h-screen">
      <section className="pt-48 pb-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About FiveWell Africa
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              FiveWell Africa stands as the convergence of five journeys, five
              pillars of expertise, and one well of solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pb-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary mx-auto mb-8"
            />
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 w-0.5 h-full bg-primary"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 pr-4 sm:pl-0 sm:pr-0"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Our Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    When we left Kenya in the summer of 2023, we were just five
                    experts in Agronomy, Environmental Science, Agribusiness,
                    Agricultural Engineering, and Agricultural Extension, each
                    seeking to sharpen our skills and expand our frontiers.
                  </p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-4 pr-8 sm:pl-0 sm:pr-0 sm:ml-auto sm:w-5/6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -right-4 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Inspiration in Israel
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    In Israel, we worked alongside leading experts in the Arava
                    Valley, witnessing firsthand how science, innovation, and
                    determination could turn desert sands into fields that feed
                    the world.
                  </p>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative pl-8 pr-4 sm:pl-0 sm:pr-0"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    The Birth of FiveWell
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Inspired by this possibility, we came together to bring that
                    spirit of innovation back home. We believed that if the
                    desert could bloom, then Africa&apos;s challenges too could
                    be met with solutions rooted in knowledge, technology, and
                    collaboration.
                  </p>
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-4 pr-8 sm:pl-0 sm:pr-0 sm:ml-auto sm:w-5/6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -right-4 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Our Vision Today
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Today, FiveWell Africa stands as the convergence of five
                    journeys, five pillars of expertise, and one well of
                    solutions. With over 25 years of cumulative experience, we
                    are committed to being a bridge between needs and solutions,
                    and a partner in building a sustainable, prosperous Africa.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs for Team Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="team" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="team">Our Team</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="team" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                  Meet Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                      <div className="h-64 relative bg-gray-200 dark:bg-gray-700">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {member.role}
                        </p>
                        {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{member.bio}</p> */}
                        <Link 
                          href={`/team/${member.slug}`}
                          className="mt-auto inline-block px-4 py-2 text-sm font-medium text-white text-center bg-primary rounded-md hover:bg-primary/90 transition-colors"
                        >
                          View Profile
                        </Link>
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
};

export default AboutPage;
