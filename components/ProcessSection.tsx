import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    step: "01",
    title: "Community Assessment",
    description:
      "We begin by conducting thorough assessments with local communities to understand their unique needs, challenges, and existing resources.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-green-600",
  },
  {
    step: "02",
    title: "Program Development",
    description:
      "Based on community input, we develop customized programs that address specific needs while building on existing strengths and capabilities.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "03",
    title: "Implementation & Support",
    description:
      "We work alongside communities to implement programs, provide ongoing training, and ensure sustainable long-term impact and self-sufficiency.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-purple-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Read Our Annual Report
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our work building food systems that are nutritious,
            delicious, affordable, and local.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Step Number */}
                <div className={`bg-gradient-to-r ${step.color} p-6 relative`}>
                  <div className="text-6xl font-bold text-white/20 absolute top-2 right-4">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-white mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Indicators (Desktop) */}
        <div className="hidden lg:block mt-12">
          <div className="relative">
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transform -translate-y-1/2"></div>
            <div className="flex justify-center space-x-32">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
