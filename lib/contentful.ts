import { createClient, type Entry, type EntryCollection, type EntrySkeletonType, type EntryFieldTypes } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT || 'master';

if (!spaceId) {
  throw new Error('Missing CONTENTFUL_SPACE_ID. Add it to your environment (e.g., .env.local).');
}

if (!accessToken) {
  throw new Error('Missing CONTENTFUL_ACCESS_TOKEN. Add a valid Content Delivery API (CDA) token to your environment.');
}

// Guard against placeholder values to avoid confusing 404 responses
const looksLikePlaceholder = (val: string) => /your_?\w*/i.test(val) || val === 'SPACE_ID';
if (looksLikePlaceholder(spaceId)) {
  throw new Error(`Invalid CONTENTFUL_SPACE_ID value ('${spaceId}'). Replace placeholder with your real Space ID from Contentful.`);
}
if (process.env.CONTENTFUL_ENVIRONMENT && looksLikePlaceholder(environmentId)) {
  throw new Error(`Invalid CONTENTFUL_ENVIRONMENT value ('${environmentId}'). Replace placeholder with your real environment id (e.g., 'master' or 'production').`);
}

const client = createClient({
  space: spaceId,
  accessToken,
  environment: environmentId,
});

// Properly typed Contentful skeleton for the Blog Post content type

export type BlogPostFields = {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  featuredImage: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
  excerpt: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
};

export type BlogPostSkeleton = EntrySkeletonType & {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
};

// Fetch all blog posts for the blog index page
export const getBlogPosts = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  try {
    const entries: EntryCollection<BlogPostSkeleton> = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch a single blog post by its slug
export const getBlogPost = async (slug: string): Promise<Entry<BlogPostSkeleton> | null> => {
  try {
    const entries: EntryCollection<BlogPostSkeleton> = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0];
    }
    return null;
  } catch (error) {
    console.error(`Error fetching blog post by slug: ${slug}`, error);
    return null;
  }
};

