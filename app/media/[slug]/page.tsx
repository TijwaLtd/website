import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';
import ReactMarkdown from 'react-markdown';

interface ArticleParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'public/blogs', `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      title: data.title || 'Article',
      description: data.description || 'Read this article on FiveWell Africa',
    };
  } catch (error) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

export default async function ArticlePage({ params }: ArticleParams) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'public/blogs', `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Custom components for ReactMarkdown
    const components = {
      img: ({ node, ...props }: any) => {
        const altText = props.alt || '';
        const [alt, caption] = altText.split('|').map((s: string) => s.trim());
        const isBase64 = props.src?.startsWith('data:image');
        const isLocal = props.src?.startsWith('/');
        
        return (
          <figure className="my-8 group relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {isBase64 ? (
                // Handle base64 images
                <img 
                  src={props.src} 
                  alt={alt}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  loading="lazy"
                />
              ) : isLocal ? (
                // Handle local images from public folder
                <div className="relative w-full aspect-video">
                  <Image
                    src={props.src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                // Handle external images
                <img 
                  src={props.src}
                  alt={alt}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  loading="lazy"
                />
              )}
              {props.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {props.title}
                </div>
              )}
            </div>
            {caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {caption}
              </figcaption>
            )}
          </figure>
        );
      },
      a: ({ node, ...props }: any) => {
        // Check if the link is external
        const isExternal = props.href?.startsWith('http');
        return (
          <a 
            {...props} 
            className="text-green-600 hover:text-green-700 hover:underline font-medium"
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          />
        );
      },
      h2: ({ node, ...props }: any) => {
        // Create an ID for the heading for anchor links
        const id = props.children
          .toString()
          .toLowerCase()
          .replace(/[^\w\s]/g, '')
          .replace(/\s+/g, '-');
          
        return (
          <h2 id={id} className="text-2xl font-bold mt-12 mb-6 text-gray-900 flex items-center group">
            <a 
              href={`#${id}`} 
              className="invisible group-hover:visible text-green-500 mr-2 no-underline hover:opacity-75"
              aria-hidden="true"
            >
              #
            </a>
            {props.children}
          </h2>
        );
      },
      p: ({ node, ...props }: any) => (
        <p className="my-6 text-gray-700 leading-relaxed text-base" {...props} />
      ),
      ul: ({ node, ...props }: any) => (
        <ul className="list-disc pl-8 my-6 space-y-3" {...props} />
      ),
      li: ({ node, ...props }: any) => (
        <li className="text-gray-700 leading-relaxed" {...props}>
          <span className="relative -left-1">{props.children}</span>
        </li>
      ),
      blockquote: ({ node, ...props }: any) => (
        <blockquote 
          className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-6 pr-4 py-3 my-6 text-gray-700 dark:text-gray-300 not-italic rounded-r-lg"
          {...props} 
        />
      ),
      code: ({ node, inline, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline ? (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto">
            <code className={className} {...props}>
              {children}
            </code>
          </div>
        ) : (
          <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono">
            {children}
          </code>
        );
      },
    };

    return (
      <div className="min-h-screen pt-18 bg-gray-50">
        {/* Article Header */}
        <div className="relative bg-green-700 py-16">
          <div className="absolute inset-0 overflow-hidden">
            {data.image && (
              <Image
                src={data.image}
                alt={data.title || 'Article Header'}
                fill
                className="object-cover opacity-20"
              />
            )}
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <Link 
                href="/media" 
                className="inline-flex items-center text-green-200 hover:text-white mb-4 transition-colors"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Media
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{data.title || 'Article'}</h1>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-green-100">
                {data.date && (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(data.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                )}
                {data.author && (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {data.author}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose lg:prose-lg max-w-none">
            <ReactMarkdown components={components}>{content}</ReactMarkdown>
            
            <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to learn more?</h3>
              <p className="text-gray-700 mb-6">Contact us today to learn how we can help your organization.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-green-300 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

// Generate static paths for all markdown files at build time
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'public/blogs');
  
  try {
    const files = fs.readdirSync(blogDir);
    return files.map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
  } catch (error) {
    return [];
  }
}