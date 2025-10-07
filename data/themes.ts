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
    title: "Building Sustainable and Adaptive Pathways for Development",
    slug: "building-sustainable-and-adaptive-pathways",
    description: "In a world of constant change, we help our partners pivot, adjust, and remain resilient while navigating shifting markets, policies, or social challenges.",
    image: "/assets/Sustainability.jpg",
    heroImage: "/assets/Sustainability.jpg",
    introduction: {
      title: "Building Sustainable and Adaptive Pathways for Development",
      content: "In a world of constant change, we help our partners pivot, adjust, and remain resilient while navigating shifting markets, policies, or social challenges.",
    },
    keyAreas: {
      title: "Key Focus Areas",
      points: [
        {
          title: "Climate-resilient development",
          description: "Creating strategies that help communities and businesses adapt to changing environmental conditions.",
        },
        {
          title: "Sustainable resource management",
          description: "Implementing practices that ensure long-term availability of natural resources.",
        },
        {
          title: "Policy and market adaptation",
          description: "Helping organizations navigate and adapt to changing policies and market conditions.",
        },
      ],
    },
    subthemes: [
      {
        id: "climate-smart-agriculture",
        title: "Climate Smart Agriculture",
        description: "Focus on sustainable food systems, improving yield, and reducing post-harvest losses.",
        image: "/assets/Herbs Greenhouse 2.jpg",
        keyPoints: [
          "Sustainable farming practices",
          "Crop diversification",
          "Soil and water conservation",
          "Climate-resilient crops"
        ],
        details: "Transforming agriculture into a pathway for nourishment and prosperity."
      },
      {
        id: "circular-economy",
        title: "Circular Economy & Resource Efficiency",
        description: "Focus on turning waste into value through composting, renewable energy, and upcycling in agribusiness.",
        image: "/assets/Infrastructure.jpg",
        keyPoints: [
          "Waste-to-resource initiatives",
          "Renewable energy solutions",
          "Sustainable production cycles",
          "Resource optimization"
        ],
        details: "Closing loops, creating value, minimizing waste.",
        stats: [
          { value: "60%", label: "Waste reduction" },
          { value: "200+", label: "Circular projects" }
        ]
      }
    ],
    keyFocusAreas: [
      "Climate-smart agriculture",
      "Circular economy",
      "Resource efficiency",
      "Sustainable food systems"
    ],
    process: {
      title: "Our Implementation Process",
      steps: [
        {
          title: "Assessment",
          description: "Analyze current practices and identify areas for sustainable transformation."
        },
        {
          title: "Solution Design",
          description: "Develop tailored solutions that balance environmental and economic needs."
        },
        {
          title: "Pilot Testing",
          description: "Implement solutions on a small scale to test effectiveness."
        },
        {
          title: "Scaling",
          description: "Expand successful pilots to broader applications."
        },
        {
          title: "Monitoring",
          description: "Continuously evaluate impact and make necessary adjustments."
        }
      ]
    },
    approach: "We combine traditional knowledge with innovative approaches to create sustainable and adaptive development pathways that work in the real world.",
    impact: "Our sustainable pathways have helped communities and businesses adapt to change while reducing environmental impact and improving livelihoods.",
    stats: [
      { value: "100+", label: "Communities Impacted" },
      { value: "50%+", label: "Resource Efficiency" },
      { value: "1M+", label: "Lives Improved" },
    ],
  },
  {
    title: "Innovation and Technology",
    slug: "innovation-and-technology",
    description: "Where tradition meets innovation — bringing modern solutions to age-old farming challenges.",
    image: "/assets/Innovation.jpg",
    heroImage: "/assets/Innovation.jpg",
    introduction: {
      title: "Innovation and Technology",
      content: "We bring fresh thinking and creative solutions to complex challenges. Whether it's in business, development, or community transformation, we don't recycle old ideas—we design new pathways that work.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Digital Agriculture",
          description: "Leveraging technology to enhance agricultural productivity and sustainability.",
        },
        {
          title: "Precision Farming",
          description: "Using data and technology to optimize farming practices and resource use.",
        },
        {
          title: "Financial Technology",
          description: "Developing innovative financing models to support agricultural innovation.",
        },
      ],
    },
    subthemes: [
      {
        id: "digital-tools",
        title: "Digital Tools & Precision Farming",
        description: "Introducing digital tools, precision farming, bio-tech, AI, and new financing models.",
        image: "/assets/Tech.jpg",
        keyPoints: [
          "AI and machine learning applications",
          "Precision agriculture technologies",
          "IoT and sensor networks",
          "Data-driven decision making"
        ],
        details: "Where tradition meets innovation — bringing modern solutions to age-old farming challenges."
      }
    ],
    keyFocusAreas: [
      "Digital transformation",
      "Precision agriculture",
      "Financial innovation",
      "Sustainable tech solutions"
    ],
    process: {
      title: "Technology Implementation",
      steps: [
        {
          title: "Needs Assessment",
          description: "Identify technological gaps and opportunities."
        },
        {
          title: "Solution Design",
          description: "Develop customized technology solutions."
        },
        {
          title: "Pilot Testing",
          description: "Test solutions in real-world conditions."
        },
        {
          title: "Training",
          description: "Build local capacity to use and maintain technologies."
        },
        {
          title: "Scale Up",
          description: "Expand successful implementations."
        }
      ]
    },
    approach: "We combine cutting-edge technology with deep sector expertise to create practical, scalable solutions that address real-world challenges in agriculture and beyond.",
    impact: "Our technology initiatives have transformed traditional practices, improving efficiency, productivity, and sustainability across multiple sectors.",
    stats: [
      { value: "500+", label: "Tech Solutions Deployed" },
      { value: "75%", label: "Efficiency Gains" },
      { value: "50K+", label: "Users Trained" },
    ],
  },
  {
    title: "Training, Research and Capacity Building",
    slug: "training-research-capacity-building",
    description: "We believe growth begins with knowledge. Our work is rooted in research, training, and knowledge-sharing that equips people and organizations to thrive.",
    image: "/assets/Training.jpg",
    heroImage: "/assets/Training.jpg",
    introduction: {
      title: "Training, Research and Capacity Building",
      content: "We believe growth begins with knowledge. Our work is rooted in research, training, and knowledge-sharing that equips people and organizations to thrive.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Professional Development",
          description: "Enhancing skills and knowledge for sustainable development professionals.",
        },
        {
          title: "Applied Research",
          description: "Conducting research that informs policy and practice.",
        },
        {
          title: "Knowledge Exchange",
          description: "Creating platforms for sharing best practices and innovations.",
        },
      ],
    },
    subthemes: [
      {
        id: "community-development",
        title: "Community-Centered Development",
        description: "Ensuring local farmers, producers, and SMEs remain at the heart of projects.",
        image: "/assets/Community.jpg",
        keyPoints: [
          "Participatory approaches",
          "Local capacity building",
          "Stakeholder engagement",
          "Sustainable livelihoods"
        ],
        details: "Impact-driven consulting that grows people as much as it grows profits."
      }
    ],
    keyFocusAreas: [
      "Capacity development",
      "Applied research",
      "Knowledge management",
      "Community empowerment"
    ],
    process: {
      title: "Capacity Building Approach",
      steps: [
        {
          title: "Needs Assessment",
          description: "Identify knowledge and skill gaps."
        },
        {
          title: "Program Design",
          description: "Develop targeted training and research programs."
        },
        {
          title: "Implementation",
          description: "Deliver high-quality training and conduct research."
        },
        {
          title: "Mentorship",
          description: "Provide ongoing support and guidance."
        },
        {
          title: "Evaluation",
          description: "Measure impact and refine approaches."
        }
      ]
    },
    approach: "Our capacity building initiatives combine academic rigor with practical application, ensuring that knowledge translates into real-world impact. We focus on creating sustainable learning ecosystems that continue to deliver value over time.",
    impact: "Our training and research programs have built the capacity of thousands of professionals and organizations, leading to improved practices and better development outcomes.",
    stats: [
      { value: "10K+", label: "Trained Professionals" },
      { value: "100+", label: "Research Studies" },
      { value: "95%", label: "Satisfaction Rate" },
    ],
  },
  {
    title: "Partnerships & Market Access",
    slug: "partnerships-market-access",
    description: "Bridging the gap between farmers, markets, and investors to create sustainable value chains.",
    image: "/assets/Partnerships.jpg",
    heroImage: "/assets/Partnerships.jpg",
    introduction: {
      title: "Partnerships & Market Access",
      content: "Creating connections that drive sustainable growth and opportunity by linking smallholders with large markets, strengthening supply chains, and influencing policy.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Market Linkages",
          description: "Connecting producers with domestic and international markets.",
        },
        {
          title: "Value Chain Development",
          description: "Strengthening agricultural value chains for better market access.",
        },
        {
          title: "Investment Facilitation",
          description: "Attracting investment into sustainable agriculture and rural development.",
        },
      ],
    },
    subthemes: [
      {
        id: "market-linkages",
        title: "Market Access & Value Chains",
        description: "Linking smallholders with large markets, supply chain strengthening, and policy influence.",
        image: "/assets/Market.jpg",
        keyPoints: [
          "Market analysis and intelligence",
          "Value chain development",
          "Trade facilitation",
          "Policy advocacy"
        ],
        details: "Bridging the gap between farmers, markets, and investors.",
        stats: [
          { value: "$50M+", label: "Trade Facilitated" },
          { value: "5K+", label: "Farmers Connected" }
        ]
      }
    ],
    keyFocusAreas: [
      "Market access",
      "Value chain development",
      "Trade facilitation",
      "Investment attraction"
    ],
    process: {
      title: "Partnership Development",
      steps: [
        {
          title: "Market Analysis",
          description: "Identify market opportunities and constraints."
        },
        {
          title: "Stakeholder Engagement",
          description: "Build relationships with key market actors."
        },
        {
          title: "Partnership Formation",
          description: "Develop strategic alliances and partnerships."
        },
        {
          title: "Capacity Building",
          description: "Strengthen market actors' capabilities."
        },
        {
          title: "Market Linkages",
          description: "Facilitate connections between producers and markets."
        }
      ]
    },
    approach: "We take a market-systems approach to development, working with a wide range of stakeholders to create inclusive and sustainable market systems that benefit all participants, especially smallholder farmers and rural communities.",
    impact: "Our market access initiatives have connected thousands of smallholder farmers to profitable markets, increased incomes, and created sustainable market systems that continue to function and grow.",
    stats: [
      { value: "$100M+", label: "Market Value Created" },
      { value: "50+", label: "Value Chains Strengthened" },
      { value: "200%", label: "Farmer Incomes Increased" },
    ],
  },
];