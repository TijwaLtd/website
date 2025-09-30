import { getBlogPost, getBlogPosts } from "@/lib/contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata } from "next";

// Revalidate the data every hour
export const revalidate = 3600;

// Safely extract an image URL from a Contentful Asset or an unresolved link
function getAssetUrl(asset: unknown): string | null {
  if (asset && typeof asset === "object" && "fields" in asset) {
    const a = asset as { fields?: { file?: { url?: string } } };
    const url = a.fields?.file?.url;
    return url ? `https:${url}` : null;
  }
  return null;
}

// Unwrap Contentful localized fields which can be either a plain value or a locale map
function unwrapField<T>(
  value: T | { [x: string]: T | undefined } | undefined
): T | undefined {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    // Try common default locale keys first
    const localeMap = value as { [x: string]: T | undefined };
    return localeMap["en-US"] ?? localeMap["en"] ?? Object.values(localeMap)[0];
  }
  return value as T | undefined;
}

// This function tells Next.js which pages to pre-render at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

// This function generates the metadata for each blog post page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getBlogPost(decodedSlug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
    };
  }

  const title = unwrapField(post.fields.title) ?? "Blog Post";
  const description = unwrapField(post.fields.excerpt) ?? undefined;
  const ogImage = getAssetUrl(post.fields.featuredImage) ?? undefined;
  return {
    title: `${title} | FiveWell Africa`,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getBlogPost(decodedSlug);

  if (!post) {
    notFound(); // Triggers the 404 page
  }

  const title = unwrapField(post.fields.title) ?? "";
  const publishDate = unwrapField(post.fields.publishDate);
  const content = unwrapField(post.fields.content);

  return (
    <article className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        {(() => {
          const imageUrl = getAssetUrl(post.fields.featuredImage);
          return imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          ) : null;
        })()}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg text-white/90 mt-4">
            {publishDate
              ? new Date(publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg lg:prose-xl">
          {content && Array.isArray(content.content) ? documentToReactComponents(content) : null}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
