import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const JoinUsSection = () => {
  return (
    <section className="py-16 bg-green-700 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Join Us in Building a Better Food Future</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your support helps us create sustainable food systems and fight malnutrition worldwide. Get involved today!
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/donate">Donate Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default JoinUsSection;
