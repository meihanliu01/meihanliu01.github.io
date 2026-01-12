export const siteConfig = {
  name: "Meihan liu",
  title: "ECE graduate student at Waterloo University",
  description: "Portfolio website of Meihan Liu",
  accentColor: "#1d4ed8",

  social: {
    email: "mliu64@outlook.com",
    linkedin: "https://www.linkedin.com/in/meihanliu01",
    github: "https://github.com/meihanliu01",
  },

  aboutMe: "I build intelligent systems and elegant digital experiences, with the goal of creating technology that genuinely helps people.",

  avatar: {
    src: "/me.jpg",
    alt: "Meihan Liu",
  },

  skills: ["Java", "React", "R", "Python", "C++", "SQL", "JavaScript"],

  projects: [
    {
      name: "Smart Clinical Trial Search for Small Molecule Drugs",
      description:
        "Provide pharmaceutical researchers with the most up-to-date clinical trial information through molecular fingerprint similarity calculation of small molecule drugs.",
      link: "https://devpost.com/software/smart-clinical-trial-search-for-small-molecule-drugs?_gl=1*1tdybf9*_gcl_au*NDE4OTEwOTI3LjE3NjY4NTI4ODM.*_ga*MTU1MDAyNzY5Ny4xNzM4MTE1MjY3*_ga_0YHJK3Y10M*czE3NjgyNDYwNjQkbzEzJGcxJHQxNzY4MjQ2MDg0JGo0MCRsMCRoMA..",
      skills: ["Python", "R", "rdkit", "shiny"],
    },
    {
      name: "Multi-GPU CAGRA",
      description:
        "Built a scalable multi-GPU extension of NVIDIA CAGRA for billion-scale Approximate Nearest Neighbor (ANN) search, enabling 50M+ vectors with high recall and parallel GPU indexing.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["CUDA", "Multi-GPU", "ANN"],
    },
    {
      name: "Spatial–Temporal Ecosystem Simulation with Coupled Map Lattices ",
      description:
        "Developed Python-based mathematical and spatial models to simulate nutrient cycling and biomass dynamics in ecosystems, including ODE and coupled-map lattice systems.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "ODEs", "Coupled Map Lattice", "Simulation", "Data Visualization"],
    },
  ],

  education: [
    {
      school: "University of Waterloo",
      degree: "Master of Engineering in Electrical and Computer Engineering",
      dateRange: "2025-current",
      // achievements: [
      //   "Graduated Magna Cum Laude with 3.8 GPA",
      //   "Dean's List all semesters",
      //   "President of Computer Science Club",
      // ],
    },
    {
      school: "McGill University",
      degree: "Bachelor of Science in Computer Science and Biology, Minor in Mathematics",
      dateRange: "2018-2022",
      achievements: [
        "Won Best Use of Google Cloud at Pharmahacks 2022 for innovative cloud integration.",
        "Built 10+ projects",
        "Specialized in bioinformatics",
      ],
    },
  ],

  personalLife: [
    {
      slug: "baking",
      title: "Baking",
      cover: "/personal/baking/cover.jpg",
      description:
        "I love baking – especially experimenting with breads and pastries.",
      images: [
        "/personal/baking/1.jpg",
        "/personal/baking/2.jpg",
        "/personal/baking/3.jpg",
        "/personal/baking/4.jpg",
        "/personal/baking/5.jpg",
      ],
    },

    {
      slug: "travelling",
      title: "Travelling",
      cover: "/personal/travelling/cover.jpg",
      description:
        "A small collection of places I've been lucky enough to visit ✨",
      sections: [
        {
          title: "Portugal 🇵🇹",
          images: [
            "/personal/travelling/portugal/1.jpg",
            "/personal/travelling/portugal/2.jpg",
            "/personal/travelling/portugal/3.jpg",
            "/personal/travelling/portugal/4.jpg",
            "/personal/travelling/portugal/5.jpg",
            "/personal/travelling/portugal/6.jpg",
            "/personal/travelling/portugal/7.jpg",
            "/personal/travelling/portugal/8.jpg",
          ],
        },
        {
          title: "Spain 🇪🇸",
          images: [
            "/personal/travelling/spain/1.jpg",
            "/personal/travelling/spain/2.jpg",
            "/personal/travelling/spain/3.jpg",
            "/personal/travelling/spain/4.jpg",
            "/personal/travelling/spain/5.jpg",
            "/personal/travelling/spain/6.jpg",
            "/personal/travelling/spain/7.jpg",
            "/personal/travelling/spain/8.jpg",
            "/personal/travelling/spain/9.jpg",
            "/personal/travelling/spain/10.jpg",
            "/personal/travelling/spain/11.jpg",
            "/personal/travelling/spain/12.jpg",
          ],
        },
        {
          title: "Dominican Republic 🇩🇴",
          images: [
            "/personal/travelling/dominican/1.jpg",
            "/personal/travelling/dominican/2.jpg",
            "/personal/travelling/dominican/3.jpg",
            "/personal/travelling/dominican/4.jpg",
            "/personal/travelling/dominican/5.jpg",
            "/personal/travelling/dominican/6.jpg",
          ],
            
            

        },
      ],
    },

    {
      slug: "coffee-hopping",
      title: "Coffee Hopping",
      cover: "/personal/coffee/cover.jpg",
      description:
        "Exploring cafes and tasting new beans around the city ✨",
      images: [
        "/personal/coffee/1.jpg",
        "/personal/coffee/2.jpg",
        "/personal/coffee/3.jpg",
        "/personal/coffee/4.jpg",
        "/personal/coffee/5.jpg",
        "/personal/coffee/6.jpg",
        "/personal/coffee/7.jpg",
        "/personal/coffee/8.jpg",
        "/personal/coffee/9.jpg",
      ],
    },
  ],
};
