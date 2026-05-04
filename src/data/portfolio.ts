import { lazy, Suspense } from "react";

export const portfolioData = {
  personalInfo: {
   
    name: "Jay Benitez",
    
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
      id: "calorieiq",
      title: "CalorieIQ",
      description: "A website that has the tools for your healthy diet and fitness journey.",
      tags: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      link: "https://a19kp19.github.io/CalorieIQ/",
      repo: "https://github.com/a19kp19/CalorieIQ",
    },
    {
      id: "weather-checker",
      title: "Guide to Make Weather Checker with C",
      description: "Weather Checker that uses a free weather API.",
      tags: ["HTML", "CSS", "JavaScript", "C"],
      status: "Live",
      link: "https://weather-checker-a19kp19s-projects.vercel.app",
      repo: "",
    }
  ],

  certifications: [
    {
      id: "usingcomputerandmobiledevices",
      title: "Using Computer and Mobile Devices",
      issuer: "Cisco Networking Academy",
      date: "Sep 2025",
      image: "/certificates/usingcomputerandmobiledevices.jpg",
      verifyUrl: "https://www.credly.com/badges/13e25788-d016-47af-a8d1-5403d99773ec",
    },
    {
      id: "computerhardwarebasics",
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy",
      date: "Sep 2025",
      image: "/certificates/computerhardwarebasics.jpg",
      verifyUrl: "https://www.credly.com/badges/b2b72ee2-a6bf-4fa0-af83-56d455faac9a",
    },
    {
      id: "operatingsystembasics",
      title: "Operating System Basics",
      issuer: "Cisco Networking Academy",
      date: "Sep 2025",
      image: "/certificates/operatingsystembasics.jpg",
      verifyUrl: "https://www.credly.com/badges/9b3a26c1-74b7-44ae-b9d3-e7a7c5880629",
    },
    {
      id: "htmlessentials",
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      date: "Feb 2026",
      image: "/certificates/htmlessentials.jpg",
      verifyUrl: "https://www.credly.com/badges/261a20c3-87b1-45e3-b4a6-b8ed42b2be07",
    },
    {
      id: "cssessentials",
      title: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      date: "March 2026",
      image: "/certificates/cssessentials.jpg",
      verifyUrl: "https://www.credly.com/badges/ce655184-0051-4c4f-8621-8e82b803379e",
    },
  ],
};
