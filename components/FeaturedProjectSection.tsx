import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const FeaturedProjectSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Project</h2>

        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src="/next.svg" // Placeholder image
              alt="Featured Project Image"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">Project Title: Sustainable Farming in Rural Africa</h3>
            <p className="text-gray-700 mb-6">
              This project focuses on empowering local farmers in rural African communities with sustainable farming techniques and access to markets, improving food security and economic stability.
            </p>
            <Button asChild>
              <Link href="/projects/sustainable-farming">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
