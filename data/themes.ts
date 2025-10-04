export interface Subtheme {
  id: string;
  title: string;
  description: string;
  image: string;
  keyPoints: string[];
  details?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

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
  subthemes: Subtheme[];
  keyFocusAreas: string[];
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
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
    description: "Developing resilient strategies for long-term success in sustainable development.",
    image: "/assets/Sustainability.jpg",
    heroImage: "/assets/Sustainability.jpg",
    introduction: {
      title: "Building Sustainable and Adaptive Pathways",
      content: "Developing resilient strategies for long-term success in sustainable development.",
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
      ],
    },
    subthemes: [
      {
        id: "sustainable-agriculture",
        title: "Sustainable Agriculture",
        description: "Promoting agricultural practices that are environmentally sustainable and productive.",
        image: "/assets/Herbs Greenhouse 2.jpg",
        keyPoints: [
          "Regenerative farming techniques",
          "Water conservation methods",
          "Organic crop management",
          "Soil health improvement"
        ],
      },
      {
        id: "renewable-energy",
        title: "Renewable Energy Solutions",
        description: "Implementing clean and sustainable energy sources for communities.",
        image: "/assets/Solar.jpg",
        keyPoints: [
          "Solar power installations",
          "Wind energy projects",
          "Biomass solutions",
          "Energy efficiency programs"
        ],
        stats: [
          { value: "80%", label: "Reduction in carbon footprint" },
          { value: "1000+", label: "Households powered" }
        ]
      },
      {
        id: "sustainable-infrastructure",
        title: "Sustainable Infrastructure",
        description: "Building resilient infrastructure that meets current needs without compromising future generations.",
        image: "/assets/Infrustructure.jpg",
        keyPoints: [
          "Green building design",
          "Water management systems",
          "Waste reduction strategies",
          "Sustainable materials"
        ],
        stats: [
          { value: "50%", label: "Reduction in energy use" },
          { value: "30%", label: "Lower maintenance costs" }
        ]
      }
    ],
    keyFocusAreas: [
      "Climate-resilient infrastructure development",
      "Sustainable resource management",
      "Community-based adaptation strategies",
      "Policy development for sustainability",
    ],
    process: {
      title: "Our Implementation Process",
      steps: [
        {
          title: "Needs Assessment",
          description: "Conduct comprehensive community and environmental assessments to identify specific challenges and opportunities."
        },
        {
          title: "Solution Design",
          description: "Co-create tailored solutions with local stakeholders, ensuring cultural appropriateness and sustainability."
        },
        {
          title: "Pilot Implementation",
          description: "Test solutions on a small scale to evaluate effectiveness and gather community feedback."
        },
        {
          title: "Capacity Building",
          description: "Train local teams and community members to ensure long-term sustainability of the initiatives."
        },
        {
          title: "Scale & Replicate",
          description: "Expand successful pilots to broader regions while maintaining quality and local relevance."
        }
      ]
    },
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
    image: "/assets/Innovation.jpg",
    heroImage: "/assets/Innovation.jpg",
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
    subthemes: [],
    keyFocusAreas: [
      "Emerging technology adoption",
      "Digital transformation",
      "Smart infrastructure",
      "Technology for social good",
    ],
    process: {
      title: "Technology Implementation Journey",
      steps: [
        {
          title: "Technology Assessment",
          description: "Evaluate existing systems and identify technology gaps and opportunities for innovation."
        },
        {
          title: "Solution Architecture",
          description: "Design scalable and sustainable technology solutions tailored to specific needs."
        },
        {
          title: "Prototype Development",
          description: "Build and test prototypes to validate concepts and gather user feedback."
        },
        {
          title: "Integration & Deployment",
          description: "Seamlessly integrate new technologies with existing systems and deploy solutions."
        },
        {
          title: "Training & Support",
          description: "Provide comprehensive training and ongoing support to ensure successful adoption."
        }
      ]
    },
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
    image: "/assets/Windmills.jpg",
    heroImage: "/assets/Windmills.jpg",
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
    subthemes: [],
    keyFocusAreas: [
      "Professional training programs",
      "Research and development",
      "Knowledge sharing platforms",
      "Institutional capacity building",
    ],
    process: {
      title: "Capacity Building Framework",
      steps: [
        {
          title: "Needs Analysis",
          description: "Conduct thorough assessments to identify knowledge gaps and capacity building needs."
        },
        {
          title: "Curriculum Development",
          description: "Design comprehensive training programs and learning materials tailored to specific audiences."
        },
        {
          title: "Training Delivery",
          description: "Implement interactive and participatory training sessions with expert facilitators."
        },
        {
          title: "Mentorship & Coaching",
          description: "Provide ongoing support through mentorship programs and one-on-one coaching sessions."
        },
        {
          title: "Monitoring & Evaluation",
          description: "Continuously assess the effectiveness of training programs and make necessary adjustments."
        }
      ]
    },
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
    image: "/assets/Solar.jpg",
    heroImage: "/assets/Solar.jpg",
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
    subthemes: [],
    keyFocusAreas: [
      "Strategic alliances",
      "Market development",
      "Investment facilitation",
      "Cross-sector collaboration",
    ],
    process: {
      title: "Partnership Development Cycle",
      steps: [
        {
          title: "Stakeholder Mapping",
          description: "Identify and analyze potential partners based on shared goals and complementary strengths."
        },
        {
          title: "Partnership Design",
          description: "Define clear objectives, roles, and governance structures for the partnership."
        },
        {
          title: "Agreement & Commitment",
          description: "Formalize partnerships through clear agreements that outline expectations and commitments."
        },
        {
          title: "Joint Implementation",
          description: "Collaboratively execute partnership activities with regular coordination and communication."
        },
        {
          title: "Impact Assessment & Evolution",
          description: "Evaluate partnership outcomes and adapt strategies for continuous improvement and growth."
        }
      ]
    },
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