"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type MediaItem = {
  id: string;
  title: string;
  type: "publication" | "video" | "article";
  thumbnail: string;
  date: string;
  url: string;
  category?: string;
  source: string;
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      );
    case "publication":
    case "article":
      return (
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default function MediaGrid({ mediaItems }: { mediaItems: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mediaItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
        >
          <div className="relative h-48">
            <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
            {getTypeIcon(item.type)}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              {item.category}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 flex-grow">
              {item.title}
            </h3>
            <div className="text-sm text-gray-500 mb-4">
              <span>
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{item.source}</span>
            </div>
            <a
              href={item.url}
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-auto"
            >
              {item.type === "video" ? "Watch Now" : "Read More"}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
