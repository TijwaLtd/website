"use client"
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <p className="text-5xl font-bold text-green-600 mb-2">{value}</p>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  );
};

const OurImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard value="10+" label="Countries Impacted" />
          <StatCard value="1M+" label="People Reached" />
          <StatCard value="50+" label="Local Partnerships" />
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
