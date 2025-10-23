declare module '*.md' {
  interface FrontMatter {
    title: string;
    description: string;
    date: string;
    author?: string;
    image?: string;
    category?: string;
    [key: string]: string | number | boolean | undefined;
  }
  
  const content: {
    frontmatter: FrontMatter;
    content: string;
    slug: string;
  };
  
  export = content;
}
