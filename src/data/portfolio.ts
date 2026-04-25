import { lazy, Suspense } from "react";

export const portfolioData = {
  personalInfo: {
   
    name: "Jhayrald Benitez",
    
    title: "1st Year BSIT Student & Aspiring Developer",
    
    school: "Our Lady of Fatima University",
    
    location: "Antipolo City, Rizal, Philippines",
    
    email: "jhayrald2004@gmail.com",
    
    github: "https://github.com/a19kp19",
    
    githubUsername: "a19kp19",
  },


  skills: [
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "C", icon: "SiC" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "Python", icon: "SiPython" },
  ],

 
  projects: [
    {
      id: "online-shopping-site",
      title: "Online Shopping Site",
      description: "A full e-commerce-style site built from scratch. Features product browsing and a conceptual shopping cart experience.",
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      status: "Live",
      link: "https://www.marielstore.page",
      repo: "https://github.com/a19kp19/Mariel-Store-Testing"
    },
    {
      id: "project-two-tba",
      title: "Project Two — TBA",
      description: "Currently in the learning and planning phase. More exciting builds coming soon.",
      tags: ["React", "TypeScript"],
      status: "In Progress",
      link: "",
      repo: "",
    },
    {
      id: "project-three-tba",
      title: "Project Three — TBA",
      description: "Exploring new frameworks and backend architectures. Details will be updated here.",
      tags: ["Node.js", "Express"],
      status: "In Progress",
      link: "",
      repo: "",
    }
  ]
};
