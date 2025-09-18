import React from 'react';
import Image from 'next/image';

const PartnerSection = () => {
  // Add your partner logos here
  const partners = [
    { name: 'Partner 1', logo: '/partner1.png' },
    { name: 'Partner 2', logo: '/partner2.png' },
    { name: 'Partner 3', logo: '/partner3.png' },
    { name: 'Partner 4', logo: '/partner4.png' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Partners & Collaborators</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <div className="relative w-32 h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
