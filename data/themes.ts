export interface Theme {
  title: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
  keyFocusAreas: string[];
  approach: string;
  impact: string;
  stats?: {
    value: string;
    label: string;
  }[];
  relatedProjects?: {
    title: string;
    description: string;
    link: string;
  }[];
}

export const themes: Theme[] = [
  {
    title: "Building Sustainable and Adaptive Pathways",
    slug: "building-sustainable-and-adaptive-pathways",
    description:
      "Developing resilient strategies for long-term success in sustainable development.",
    image: "/image.png",
    heroImage: "/image.png",
    keyFocusAreas: [
      "Climate-resilient infrastructure development",
      "Sustainable resource management",
      "Community-based adaptation strategies",
      "Policy development for sustainability",
    ],
    approach:
      "Our approach combines cutting-edge research with community engagement to develop pathways that are both environmentally sustainable and socially inclusive. We work closely with local communities to understand their unique challenges and co-create solutions that enhance resilience while promoting economic growth.",
    impact:
      "Through our initiatives, we've helped implement sustainable practices in over 50 communities, resulting in a 40% reduction in resource waste and improved livelihoods for thousands of families. Our adaptive strategies have been recognized by international organizations for their effectiveness in addressing climate change challenges.",
    stats: [
      { value: "50+", label: "Communities Impacted" },
      { value: "40%", label: "Reduction in Waste" },
      { value: "10K+", label: "Lives Improved" },
    ],
  },
  {
    title: "Innovation & Technology",
    slug: "innovation-and-technology",
    description:
      "Leveraging cutting-edge solutions to drive progress and transformation.",
    image: "/image.png",
    heroImage: "/image.png",
    keyFocusAreas: [
      "Emerging technology adoption",
      "Digital transformation",
      "Smart infrastructure",
      "Technology for social good",
    ],
    approach:
      "We bridge the gap between technological innovation and practical implementation. Our team of experts works to identify, develop, and scale technologies that address critical challenges in sustainable development. We prioritize solutions that are accessible, scalable, and have measurable impact.",
    impact:
      "Our technology initiatives have facilitated the deployment of innovative solutions in over 30 countries, improving access to essential services for millions. We've supported 100+ startups and helped implement digital transformation in numerous organizations, leading to increased efficiency and expanded reach.",
    stats: [
      { value: "30+", label: "Countries Reached" },
      { value: "100+", label: "Startups Supported" },
      { value: "5M+", label: "People Impacted" },
    ],
  },
  {
    title: "Knowledge, Research & Capacity Building",
    slug: "knowledge-research-and-capacity-building",
    description:
      "Empowering individuals and organizations through education, research, and skill development.",
    image: "/image.png",
    heroImage: "/image.png",
    keyFocusAreas: [
      "Professional training programs",
      "Research and development",
      "Knowledge sharing platforms",
      "Institutional capacity building",
    ],
    approach:
      "We believe in the power of knowledge to drive sustainable change. Our comprehensive capacity building programs combine academic rigor with practical application, equipping individuals and organizations with the skills and knowledge needed to address complex challenges. We focus on creating sustainable learning ecosystems that continue to deliver value long after our direct involvement ends.",
    impact:
      "To date, we've trained over 10,000 professionals, published 50+ research papers, and established 15 knowledge hubs across different regions. Our alumni network spans across 40 countries, creating a global community of change-makers committed to sustainable development.",
    stats: [
      { value: "10K+", label: "Professionals Trained" },
      { value: "50+", label: "Research Papers" },
      { value: "15", label: "Knowledge Hubs" },
    ],
  },
  {
    title: "Partnerships and Market Access",
    slug: "partnerships-and-market-access",
    description:
      "Creating connections that drive sustainable growth and opportunity.",
    image: "/image.png",
    heroImage: "/image.png",
    keyFocusAreas: [
      "Strategic alliances",
      "Market development",
      "Investment facilitation",
      "Cross-sector collaboration",
    ],
    approach:
      "We believe that complex challenges require collaborative solutions. Our partnership model brings together diverse stakeholders including governments, private sector, NGOs, and local communities to create sustainable market systems. We focus on building bridges that connect resources with needs, creating value for all parties involved.",
    impact:
      "Our partnership initiatives have facilitated over $50M in investments, created 5,000+ jobs, and supported 200+ small and medium enterprises. We've established market linkages that have improved livelihoods for thousands of smallholder farmers and artisans while promoting sustainable business practices.",
    stats: [
      { value: "$50M+", label: "Investments Facilitated" },
      { value: "5K+", label: "Jobs Created" },
      { value: "200+", label: "SMEs Supported" },
    ],
  },
];
