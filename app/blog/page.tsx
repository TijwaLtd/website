'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
};

const BlogPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Sustainable Farming Practices for Smallholder Farmers',
      excerpt: 'Discover innovative farming techniques that are helping smallholder farmers increase their yields while protecting the environment.',
      date: '2024-09-10',
      author: 'Jane Muthoni',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      category: 'Agriculture',
      slug: 'sustainable-farming-practices'
    },
    {
      id: '2',
      title: 'The Impact of Climate Change on African Agriculture',
      excerpt: 'Understanding how climate change is affecting farming communities and what we can do to build resilience.',
      date: '2024-08-25',
      author: 'David Ochieng',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      category: 'Climate',
      slug: 'climate-change-impact'
    },
    {
      id: '3',
      title: 'Empowering Women in Agriculture',
      excerpt: 'How our programs are helping women farmers gain access to resources and training to improve their livelihoods.',
      date: '2024-08-12',
      author: 'Amina Juma',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      category: 'Gender',
      slug: 'empowering-women-agriculture'
    },
    {
      id: '4',
      title: 'The Future of Food Security in Africa',
      excerpt: 'Exploring innovative solutions to ensure food security for growing populations across the continent.',
      date: '2024-07-28',
      author: 'Kwame Asante',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      category: 'Food Security',
      slug: 'future-food-security-africa'
    },
    {
      id: '5',
      title: 'Success Story: Transforming Lives Through Irrigation',
      excerpt: 'How access to reliable water sources is changing lives in rural communities.',
      date: '2024-07-15',
      author: 'Fatima Diallo',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      category: 'Success Stories',
      slug: 'irrigation-success-story'
    },
    {
      id: '6',
      title: 'The Role of Technology in Modern Agriculture',
      excerpt: 'How digital tools and innovations are revolutionizing farming practices in Africa.',
      date: '2024-06-30',
      author: 'Michael Ofori',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      category: 'Technology',
      slug: 'technology-in-agriculture'
    },
  ];


  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative bg-green-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop"
            alt="Blog"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Blog</h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Insights, stories, and updates on our work in sustainable agriculture and community development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-end">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors"
                    aria-label="Read more"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
