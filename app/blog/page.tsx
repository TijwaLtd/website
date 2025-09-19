import React from 'react';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/contentful';
import type { Metadata } from 'next';
import BlogPostList from '@/components/BlogPostList';

export const metadata: Metadata = {
  title: 'Agricultural Insights Blog | FiveWell Africa',
  description: 'Explore the latest trends, expert analysis, and case studies in African agriculture. Our blog covers everything from agritech to sustainable farming and market insights.',
};

// Revalidate the data every hour
export const revalidate = 3600;

// Safely extract an image URL from a Contentful Asset or an unresolved link
function getAssetUrl(asset: unknown): string | null {
  if (asset && typeof asset === 'object' && 'fields' in asset) {
    const a = asset as { fields?: { file?: { url?: string } } };
    const url = a.fields?.file?.url;
    return url ? `https:${url}` : null;
  }
  return null;
}

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative bg-green-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop"
            alt="Agricultural Insights Blog"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Agricultural Insights</h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Expert analysis, case studies, and the latest trends shaping the future of agribusiness and sustainable farming in Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlogPostList posts={blogPosts} />
      </div>
    </div>
  );
};

export default BlogPage;
