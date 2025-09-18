
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  imageSrc: string;
  title: string;
  date: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, title, date, link }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <Image src={imageSrc} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{date}</p>
        <Link href={link} className="text-blue-600 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            imageSrc="/next.svg" // Placeholder image
            title="New Partnership to Combat Malnutrition"
            date="September 1, 2025"
            link="/news/new-partnership"
          />
          <NewsCard
            imageSrc="/next.svg" // Placeholder image
            title="Innovations in Sustainable Food Production"
            date="August 15, 2025"
            link="/news/innovations"
          />
          <NewsCard
            imageSrc="/next.svg" // Placeholder image
            title="Community Outreach Program Launched"
            date="July 20, 2025"
            link="/news/community-program"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
