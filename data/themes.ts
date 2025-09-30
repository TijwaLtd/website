export interface Theme {
  title: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
  introduction: {
    title: string;
    content: string;
  };
  keyAreas: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
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
    introduction: {
      title: "Building Sustainable and Adaptive Pathways",
      content:
        "Developing resilient strategies for long-term success in sustainable development.",
    },
    keyAreas: {
      title: "Key Focus Areas",
      points: [
        {
          title: "Climate-resilient infrastructure development",
          description: "Building infrastructure that can withstand the impacts of climate change.",
        },
        {
          title: "Sustainable resource management",
          description: "Managing resources in a way that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
        },
        {
          title: "Community-based adaptation strategies",
          description: "Working with communities to develop and implement adaptation strategies that are tailored to their specific needs and contexts.",
        },
        {
          title: "Policy development for sustainability",
          description: "Developing and advocating for policies that promote sustainability at the local, national, and international levels.",
        },
      ],
    },
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
    introduction: {
      title: "Innovation & Technology",
      content:
        "Leveraging cutting-edge solutions to drive progress and transformation.",
    },
    keyAreas: {
      title: "Key Focus Areas",
      points: [
        {
          title: "Emerging technology adoption",
          description: "Adopting new and emerging technologies to drive innovation and progress.",
        },
        {
          title: "Digital transformation",
          description: "Transforming business processes and models to take advantage of digital technologies.",
        },
        {
          title: "Smart infrastructure",
          description: "Building and managing infrastructure that is more efficient, sustainable, and resilient.",
        },
        {
          title: "Technology for social good",
          description: "Using technology to address social and environmental challenges.",
        },
      ],
    },
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
    introduction: {
      title: "Knowledge, Research & Capacity Building",
      content:
        "Empowering individuals and organizations through education, research, and skill development.",
    },
    keyAreas: {
      title: "Key Focus Areas",
      points: [
        {
          title: "Professional training programs",
          description: "Providing training and development opportunities to professionals in the field of sustainable development.",
        },
        {
          title: "Research and development",
          description: "Conducting research and development to advance the field of sustainable development.",
        },
        {
          title: "Knowledge sharing platforms",
          description: "Creating and managing platforms for sharing knowledge and best practices in sustainable development.",
        },
        {
          title: "Institutional capacity building",
          description: "Strengthening the capacity of institutions to support sustainable development.",
        },
      ],
    },
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
    introduction: {
      title: "Partnerships and Market Access",
      content:
        "Creating connections that drive sustainable growth and opportunity.",
    },
    keyAreas: {
      title: "Key Focus Areas",
      points: [
        {
          title: "Strategic alliances",
          description: "Building and managing strategic alliances with partners in the public, private, and non-profit sectors.",
        },
        {
          title: "Market development",
          description: "Developing and implementing strategies to create and expand markets for sustainable products and services.",
        },
        {
          title: "Investment facilitation",
          description: "Facilitating investment in sustainable businesses and projects.",
        },
        {
          title: "Cross-sector collaboration",
          description: "Promoting collaboration across sectors to address complex challenges in sustainable development.",
        },
      ],
    },
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
