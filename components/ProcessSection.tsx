"use client";
import { motion } from "framer-motion";

const colors = [
  "from-green-500 to-green-600",
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-amber-500 to-amber-600",
  "from-rose-500 to-rose-600"
];

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  process: {
    title: string;
    steps: ProcessStep[];
  };
}

export default function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {process.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Step Header */}
                <div className={`bg-gradient-to-r ${colors[index % colors.length]} p-6 relative`}>
                  <div className="text-6xl font-bold text-white/20 absolute top-2 right-4">
                    {index + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-white mb-2">
                      {`Step ${index + 1}`}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Step Number Indicator */}
                <div className="flex justify-center items-center h-48 bg-gray-50">
                  <div className="text-8xl font-bold text-gray-200">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
