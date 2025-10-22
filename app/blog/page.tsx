import BlogPostList from "@/components/BlogPostList";
import MediaContnent from "@/components/Media";
import { getBlogPosts } from "@/lib/contentful";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Agricultural Insights Blog | FiveWell Africa",
  description:
    "Explore the latest trends, expert analysis, and case studies in African agriculture. Our blog covers everything from agritech to sustainable farming and market insights.",
};

// Revalidate the data every hour
export const revalidate = 3600;

// Safely extract an image URL from a Contentful Asset or an unresolved link
// function getAssetUrl(asset: unknown): string | null {
//   if (asset && typeof asset === "object" && "fields" in asset) {
//     const a = asset as { fields?: { file?: { url?: string } } };
//     const url = a.fields?.file?.url;
//     return url ? `https:${url}` : null;
//   }
//   return null;
// }

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <div className="relative  py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/Seedling.jpg"
            alt="Agricultural Insights Blog"
            fill
            className="object-cover "
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Stay connected with Fivewell Africa&apos;s latest updates, stories, and
              thought leadership.
            </h1>
           
          </div>
        </div>
      </div>
      <MediaContnent />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <BlogPostList posts={blogPosts} />
      </div>
    </div>
  );
};

export default BlogPage;
