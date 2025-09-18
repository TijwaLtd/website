import React from 'react';

interface FeatureCardProps {
  icon: string; // Placeholder for icon component or path
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
      {/* Icon Placeholder */}
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          We work to build resilient food systems through various initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="💡"
            title="Partner with Entrepreneurs"
            description="We collaborate with local entrepreneurs to develop and scale sustainable food businesses."
          />
          <FeatureCard
            icon="🤝"
            title="Consult with Experts"
            description="We provide expert consultation to organizations to improve food accessibility and nutrition."
          />
          <FeatureCard
            icon="🌱"
            title="Design Food Systems"
            description="We design holistic and climate-sensitive food systems from production to distribution."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
