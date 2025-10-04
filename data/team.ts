export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  detailedBio?: string;
  image: string;
  department: "leadership" | "technical" | "operations" | "advisory";
  slug: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "calvin-otieno",
    name: "Calvin Otieno",
    role: "Agronomy & Plant Breeding",
    bio: "Pursuing a Master's in Plant Breeding, with experience in GIS, data management, and molecular biology techniques.",
    detailedBio: "Calvin Otieno is currently pursuing a Master's degree in Plant Breeding, bringing a wealth of knowledge in agricultural sciences. With hands-on experience in Geographic Information Systems (GIS), he excels in spatial data analysis for precision agriculture. His expertise extends to molecular biology techniques, where he applies cutting-edge research methods to improve crop varieties. Calvin's work focuses on developing sustainable agricultural solutions through innovative plant breeding techniques and data-driven approaches.",
    image: "/placeholder.png",
    department: "technical",
    slug: "calvin-otieno",
    social: {
      twitter: "https://x.com/?lang=en",
      linkedin: "",
      email: "",
    },
  },
  {
    id: "fredrick-kariuki",
    name: "Fredrick Kariuki",
    role: "Agricultural & Biosystems Engineer",
    bio: "Specializing in sustainable farming systems, precision agriculture, and technology integration.",
    detailedBio: "Fredrick Kariuki is an expert in Agricultural and Biosystems Engineering, with a strong focus on sustainable farming practices. His work integrates technology with traditional farming methods to create efficient and eco-friendly agricultural systems. Fredrick specializes in precision agriculture, utilizing sensors, drones, and data analytics to optimize crop yields while minimizing environmental impact. His innovative approaches to technology integration in agriculture have helped numerous farmers increase productivity and sustainability.",
    image: "/placeholder.png",
    department: "technical",
    slug: "fredrick-kariuki",
    social: {
      twitter: "https://x.com/?lang=en",
      linkedin: "https://x.com/?lang=en",
      email: "https://x.com/?lang=ens",
    },
  },
  {
    id: "charles-toywa",
    name: "Charles Toywa",
    role: "Agribusiness & Economics",
    bio: "Focuses on the economic aspects of agriculture, ensuring that our solutions are not only sustainable but also profitable.",
    detailedBio: "Charles Toywa brings a unique perspective to our team with his expertise in Agribusiness and Economics. He focuses on developing economically viable agricultural solutions that balance profitability with sustainability. Charles analyzes market trends, develops business models, and creates strategies that help agricultural enterprises thrive. His work ensures that our sustainable solutions are not just environmentally sound but also economically beneficial for farmers and stakeholders across the agricultural value chain.",
    image: "/assets/CharlesToywa.jpg",
    department: "operations",
    slug: "charles-toywa",
    social: {
      twitter: "",
      linkedin: "",
      email: "",
    },
  },
  {
    id: "mercy-philips",
    name: "Mercy Philips",
    role: "Communications & PR",
    bio: "A storyteller and sustainable development practitioner, crafting stories that connect people and inspire change.",
    detailedBio: "Mercy Philips is our Communications and PR expert, with a passion for storytelling that drives social change. As a sustainable development practitioner, she crafts compelling narratives that connect communities with our mission. Mercy's expertise in strategic communication helps us share the impact of our work with diverse audiences. She develops engaging content, manages media relations, and creates campaigns that raise awareness about sustainable agriculture and its role in community development.",
    image: "/assets/MercyPhilips.jpeg",
    department: "operations",
    slug: "mercy-philips",
    social: {
      twitter: "",
      linkedin: "",
      email: "",
    },
  },
];
