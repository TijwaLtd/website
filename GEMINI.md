# TailoredFood.org Clone - Development Guide

## Project Overview

Create a modern, responsive clone of **[tailoredfood.org](https://tailoredfood.org/)** with your branding applied. The clone should replicate the original site’s structure, layout, and interactions but use **reusable React + Tailwind components** for maintainability. The site will feature **dynamic navigation behavior**: the navbar appears on scroll but hides when the user remains idle.

All branding (colors, logos, text, typography) will be configurable and reusable across components.

Before starting development, check each page of the reference site carefully (home, about, media, reports, contact) and take notes on layout, content blocks, and interactions to ensure a faithful replication.

## Tech Stack Requirements

* **Framework**: Next.js 14+ (App Router)
* **Language**: TypeScript
* **Styling**: TailwindCSS (with design tokens for branding)
* **Package Manager**: npm/yarn compatible
* **Browser Support**: Modern browsers (ES2020+)
* **CMS Integration**: Configurable (Sanity, Contentful, or Markdown-based)
* **Hosting**: Vercel (recommended)

## Project Structure (Next.js App Router)

```
tailoredfood-clone/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── media/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── reports/
│   │   └── [year]/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── MediaGrid.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── lib/
│   └── scroll.ts
├── public/
│   └── branding/
├── styles/
│   └── globals.css
├── tests/
└── package.json
```

## Core Components

### 1. Navbar

* Sticky navigation with scroll-based visibility.
* Appears when scrolling up, hides when idle.
* Configurable logo + brand name.
* Smooth transitions.
* Mobile menu with slide-in animation.

### 2. Hero

* Homepage banner with background image/video.
* CTA button.
* Configurable text.

### 3. Section

* Generic reusable section.
* Flexible layout (text left, image right or reversed).
* Supports headings, paragraphs, CTAs.

### 4. MediaGrid

* Grid of media cards.
* Responsive adjustments.
* Hover effects.

### 5. ContactForm

* Input validation.
* API integration for email/Supabase storage.

### 6. Footer

* Consistent footer with branding.
* Links, social icons, and text.

## Branding & Theming

### Logo

* Place logo in the top-left corner of the navbar.
* Scales responsively (SVG preferred).
* Dark/light variants for different backgrounds.

### Typography

* **Heading font**: Use `Inter` or custom brand font.
* **Body font**: Sans-serif, easily readable.
* Sizing hierarchy:

  * H1: 36px / bold
  * H2: 28px / semi-bold
  * H3: 22px / medium
  * Body: 16px

### Colors (Design Tokens)

```ts
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#dc2626', // Replace with brand color
        secondary: '#6b7280',
        accent: '#fbbf24', // optional highlight
        background: '#ffffff',
        text: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

### Imagery

* Store branded images in `/public/branding`.
* Use optimized formats (WebP/AVIF).
* Maintain consistent style: clean, high-resolution.

## Navbar Scroll Behavior

```tsx
'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full transition-transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Navbar content */}
    </nav>
  );
}
```

## Responsive Design Requirements

* **Mobile**: Hamburger nav, stacked sections.
* **Tablet**: Adjusted grids.
* **Desktop**: Full nav bar, multi-column sections.

## Performance Optimizations

* Image optimization with `next/image`.
* Code splitting.
* Lazy loading media grids.

## CMS Integration (Optional)

* Connect to Sanity/Contentful or Markdown files for content.
* Reports and media fetched dynamically.

## Testing Strategy

* Unit tests: Navbar scroll, component rendering.
* Integration tests: Form submissions.
* E2E: Navigation across pages.

## Deployment

* **Vercel** (recommended) for Next.js hosting.
* CI/CD with GitHub Actions.
* Environment variables for API endpoints.

## Documentation Requirements

* How to add a new section.
* How to update branding.
* How to change navbar scroll behavior.

## Future Enhancements

* Multilingual support.
* Dark mode toggle.
* CMS-driven navigation.
* Blog/news integration.

## 🔍 Pre-Build Page Audit

Before starting development, conduct a **page-by-page audit** of https://tailoredfood.org/:

1. Open each page (Home, About, Our Work, News, Contact, etc.).
2. Document:
   - Page title
   - Layout structure (header, hero, sections, footer)
   - Components used (cards, grids, forms, buttons, etc.)
   - Unique design elements
   - Images, icons, or branding details
   - Any interactive features (animations, links, hover states)
3. Cross-check with your brand guidelines:
   - Replace logos, colors, and typography with your branding.
   - Swap imagery with your assets or placeholders.
   - Note any features to enhance (e.g., SEO, performance, accessibility).
4. Store audit results in `/docs/page-audit.md` for reference.

✅ This ensures the clone is not just structurally accurate but also **fully adapted to your brand identity** and scalable with reusable Next.js components.
