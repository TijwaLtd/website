export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: "strategic" | "implementation" | "funding";
}

export const partners: Partner[] = [
  {
    id: "partner1",
    name: "Partner 1",
    logo: "/logo.png",
    url: "#",
    category: "strategic",
  },
  {
    id: "partner2",
    name: "Partner 2",
    logo: "/logo.png",
    url: "#",
    category: "implementation",
  },
  {
    id: "partner3",
    name: "Partner 3",
    logo: "/logo.png",
    url: "#",
    category: "funding",
  },
  {
    id: "partner4",
    name: "Partner 4",
    logo: "/logo.png",
    url: "#",
    category: "strategic",
  },
  {
    id: "partner5",
    name: "Partner 5",
    logo: "/logo.png",
    url: "#",
    category: "implementation",
  },
  {
    id: "partner6",
    name: "Partner 6",
    logo: "/logo.png",
    url: "#",
    category: "funding",
  },
  // Add more partners as needed
];
