declare module '*.md' {
  import { ReactNode } from 'react';
  
  interface FrontMatter {
    title: string;
    description: string;
    date: string;
    author?: string;
    image?: string;
    category?: string;
    [key: string]: any;
  }
  
  const content: {
    frontmatter: FrontMatter;
    content: string;
    slug: string;
  };
  
  export = content;
}
