'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Entry } from 'contentful';
import type { BlogPostSkeleton } from '@/lib/contentful';

type BlogPostEntry = Entry<BlogPostSkeleton>;

interface BlogPostListProps {
  posts: BlogPostEntry[];
}

// Helper function to safely extract a date from Contentful
const getDateString = (dateValue: unknown): string | null => {
  if (!dateValue) return null;
  
  // If it's already a string in ISO format
  if (typeof dateValue === 'string') {
    return new Date(dateValue).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  // If it's a Date object
  if (dateValue instanceof Date) {
    return dateValue.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  return null;
};

// Type for Contentful asset fields
interface ContentfulAssetFields {
  file?: {
    url?: string;
    details?: {
      image?: {
        width: number;
        height: number;
      };
    };
    fileName?: string;
    contentType?: string;
  };
  title?: string;
  description?: string;
}

// Helper function to safely extract image URL from Contentful asset
const getImageUrl = (asset: unknown): string | null => {
  if (!asset || typeof asset !== 'object') return null;
  
  // Handle resolved asset
  if ('fields' in asset) {
    const fields = (asset as { fields?: ContentfulAssetFields }).fields;
    if (fields?.file?.url) {
      return `https:${fields.file.url}`;
    }
  }
  
  return null;
};

export default function BlogPostList({ posts }: BlogPostListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">No Posts Yet</h2>
        <p className="text-gray-500 mt-2">
          It looks like you haven&apos;t published any posts in Contentful, or there was an issue fetching them. 
          Please check your API keys and ensure you have at least one published post.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => {
        const { fields } = post;
        const dateString = fields.publishDate ? getDateString(fields.publishDate) : null;
        const imageUrl = fields.featuredImage ? getImageUrl(fields.featuredImage) : null;
        const title = typeof fields.title === 'string' ? fields.title : 'Untitled';
        const slug = typeof fields.slug === 'string' ? fields.slug : '';
        const excerpt = typeof fields.excerpt === 'string' ? fields.excerpt : '';

        return (
          <motion.article
            key={post.sys.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="relative h-48">
              <Link href={`/blog/${slug}`}>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </Link>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {dateString && (
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{dateString}</span>
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link href={`/blog/${slug}`} className="hover:text-green-600 transition-colors">
                  {title}
                </Link>
              </h2>
              {excerpt && (
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {excerpt}
                </p>
              )}
              <div className="mt-auto">
                <Link 
                  href={`/blog/${slug}`}
                  className="inline-block px-4 py-2 border border-green-600 text-green-600 rounded-md font-semibold text-sm hover:bg-green-600 hover:text-white transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
