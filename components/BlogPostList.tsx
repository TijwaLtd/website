'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Entry } from 'contentful';
import type { IBlogPost } from '@/lib/contentful';

interface BlogPostListProps {
  posts: Entry<IBlogPost>[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">No Posts Yet</h2>
        <p className="text-gray-500 mt-2">It looks like you haven't published any posts in Contentful, or there was an issue fetching them. Please check your API keys and ensure you have at least one published post.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.sys.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
        >
          <div className="relative h-48">
            <Link href={`/blog/${post.fields.slug}`}>
              {post.fields.featuredImage?.fields?.file?.url && (
                <Image
                  src={`https:${post.fields.featuredImage.fields.file.url}`}
                  alt={post.fields.title}
                  fill
                  className="object-cover"
                />
              )}
            </Link>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{new Date(post.fields.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              <Link href={`/blog/${post.fields.slug}`} className="hover:text-green-600 transition-colors">
                {post.fields.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{post.fields.excerpt}</p>
            <div className="mt-auto">
              <Link href={`/blog/${post.fields.slug}`} className="inline-block px-4 py-2 border border-green-600 text-green-600 rounded-md font-semibold text-sm hover:bg-green-600 hover:text-white transition-colors">
                Read More
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
