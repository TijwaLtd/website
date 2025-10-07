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
    detailedBio: "Calvin is an agricultural data specialist whose work integrates agronomy, plant breeding, and advanced analytics to drive sustainable farming solutions. He earned a Bachelor's degree in Agronomy with IT from Maseno University, where he developed a keen interest in integrating data with practical farming solutions. His passion for climate-smart agriculture was further shaped at the Arava International Centre for Agricultural Training (AICAT) in Israel, where he gained advanced training in sustainable farming and crop improvement. He is currently pursuing a Master's in Plant Breeding at Kenyatta University, deepening his expertise in one of the most critical areas for global food security.\n\nProfessionally, Calvin has built a solid career at the intersection of agronomy and data science. He has worked as an Agronomist at Porat Farm in Israel, conducted applied research in molecular biology and agronomy, and advanced into data-centered roles, including serving as a Data Consultant with OCP Africa, where he led field teams and delivered GIS-driven agricultural data solutions. His expertise spans molecular techniques (DNA extraction, PCR), crop research, and agricultural data management, making him a versatile leader in both field and lab contexts.\n\nAt the core of Calvin's work is a simple belief: better crops mean stronger communities. By combining advanced breeding knowledge with robust data analysis, he develops solutions that strengthen productivity and resilience in farming systems.\n\nWhen he's not in the field or lab, you'll probably find him on a football pitch, enjoying good music, or lost in a book.",
    image: "/assets/Calvin.jpg",
    department: "technical",
    slug: "calvin-otieno",
    social: {
      twitter: "https://x.com/?lang=en",
      linkedin: "",
      email: "",
    },
  },
  {
    id: "mercy-philips",
    name: "Mercy Philips",
    role: "Communications & PR",
    bio: "A storyteller and sustainable development practitioner, crafting stories that connect people and inspire change.",
    detailedBio: "Mercy describes herself as a storyteller, farmer's ally, and sustainable development practitioner. Growing up in a farming community nurtured her early passion in agriculture and informed her decision to study Agribusiness Economics at JKUAT, followed by advanced training in Israel. Her career has since spanned collaborations with leading initiatives such as the Kenya Climate-Smart Agriculture Project, the World Bank, and the Ban Ki-moon Center for Global Citizens, where her community project, Evergreen Garden, was recognized as one of Africa's best practices in sustainable farming.\n\nBeyond her professional work, Mercy is a lover of art and literature, often sharing reflections on her long-running blog. She also enjoys the discipline and creativity of baking, which she views as another form of storytelling and experimentation.\n\nShe brings this blend of field experience, creativity and communication expertise to her role at FiveWell, where she shapes the organization's PR, storytelling, and digital presence to connect people, amplify impact, and inspire change.",
    image: "/assets/MercyPhilips.jpeg",
    department: "operations",
    slug: "mercy-philips",
    social: {
      twitter: "",
      linkedin: "",
      email: "",
    },
  },
  {
    id: "fredrick-kariuki",
    name: "Fredrick Kariuki",
    role: "Agricultural & Biosystems Engineer",
    bio: "Specializing in sustainable farming systems, precision agriculture, and technology integration.",
    detailedBio: "Fredrick is an Agricultural and Biosystems Engineer specializing in sustainable farming systems, precision agriculture, and technology integration. With hands-on experience in mechanization and irrigation projects in the Arava, he has seen how the right technologies can transform yields and resource use.\n\nAt Fivewell, he brings on board his expertise in digital agriculture, environmental management, water and greenhouse systems, and livestock production. Fredrick is passionate about advancing agri-tech solutions that build resilience, efficiency, and environmental responsibility.\n\nOutside of work, he enjoys exploring emerging technologies, mentoring young professionals, and spending time in nature.",
    image: "/assets/karis.png",
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
    detailedBio: "Charles Toywa is a co-founder whose passion for agriculture was shaped from an early age. He holds a Bachelor's degree in Agricultural Education and Extension from the University of Nairobi and a Postgraduate Diploma in Advanced Agricultural Technology from the Arava International Centre for Agricultural Training in Israel. His global experience includes production research in Brandenburg, Germany and vegetable farming in Israel, giving him a unique perspective on agricultural systems across continents.\n\nAt Fivewell, Charles combines his agricultural expertise with a strong finance and operations focus. He oversees financial planning and reporting, tax compliance, project budgeting, and payroll, while also managing logistics and team operations. This balance allows him to ensure that the organization's vision is backed by sound financial stewardship and efficient systems.\n\nCurrently, Charles is advancing research to bridge information gaps within the agricultural sector, while leveraging his international experience from Africa, Israel, and Germany to design practical solutions for clients and partners. Through his leadership, he helps the team translate ideas into financially sustainable, impactful agricultural projects.\n\nOutside of work, Charles enjoys fitness and has recently discovered a passion for cycling.",
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
    id: "dravin",
    name: "Dravin Victor Odhiambo",
    role: "Environmental & Agricultural Sustainability Specialist",
    bio: "Expert in climate-smart agriculture, desert technologies, and community resilience with international experience in sustainable development.",
    detailedBio: "Dravin is an environmental and agricultural sustainability specialist with expertise in climate-smart agriculture, desert technologies, and community resilience. He holds a BSc in Environmental Science, a Postgraduate Diploma in Agricultural Studies (Israel), and a Master's in Sustainable Communities from Ben-Gurion University.\n\nHis career has combined policy, research, and field practice across organizations such as the International Organization for Migration (IOM–UN), the Agriculture and Food Authority, the Ministry of Housing and Public Service in Kenya, and the Kisumu Water and Sanitation Company. Internationally, he has worked with Nura Global Lab (Pears Program) in Tel Aviv and My Desert Produce – Hamidbar Sheli Ltd. in Israel.\n\nThis range of experience positions him at the intersection of global innovation and local implementation, particularly in tackling issues of food security, water management, and sustainable livelihoods.\n\nDravin's personal interests are closely aligned with his professional path. In his free time, he remains deeply engaged in environmental conservation, research, and community work.",
    image: "/assets/DravinVictor.jpg",
    department: "technical",
    slug: "dravin-victor-odhiambo",
    social: {
      twitter: "",
      linkedin: "",
      email: "",
    },
  },

];
