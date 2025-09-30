export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  department: "leadership" | "technical" | "operations" | "advisory";
  social?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "John Doe",
    role: "CEO & Founder",
    bio: "John has over 15 years of experience in the industry and founded the company in 2020.",
    image: "/man.png",
    department: "leadership",
    social: {
      twitter: "johndoe",
      linkedin: "johndoe",
      email: "john@example.com",
    },
  },
  {
    id: "cto",
    name: "Jane Smith",
    role: "CTO",
    bio: "Jane leads our technical team with expertise in software development and system architecture.",
    image: "/man.png",
    department: "leadership",
    social: {
      twitter: "janesmith",
      linkedin: "janesmith",
      email: "jane@example.com",
    },
  },
  // Add more team members as needed
];
