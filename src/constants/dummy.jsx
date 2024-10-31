import projectImage1 from "../assets/project6.jpeg"
import projectImage2 from "../assets/project5.jpeg"
import projectImage3 from "../assets/project4.jpeg"
import projectImage4 from "../assets/project1.jpg"
import projectImage5 from "../assets/project2.jpg"
import projectImage6 from "../assets/project3.jpg"

import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Bootstrap from "../assets/bootstrap.png"
import Tailwind from "../assets/tailwind.png"
import Git from "../assets/git.png"
import Express from "../assets/express.png"


import React from "../assets/react.png"
import Mongo from "../assets/mongoDB.png"
import Nodejs from "../assets/node.png"




import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";


export const HERO = {
  name: "Hi, I'am Ankit Nandanwar",
  greet: "Frontend Developer",
  description:
    "I have over a year of experience in frontend development, specializing in React.js. I excel at collaborating in team environments to deliver high-quality, user-friendly web applications.",
};

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  // { label: "Certification", href: "#certificate" },
  { label: "Contact", href: "#contact" },
];


export const TAGS_NAMES = [
  { name: "HTML/CSS" },
  { name: "JavaScript" },
  { name: "BootStrap" },
  { name: "Tailwind CSS" },
  { name: "React Js" },
  { name: "React Redux" },
  { name: "Node Js" },
  { name: "Express Js" },
  { name: "Mongo Db" },
  { name: "React Native" },
  { name: "Git" },
]

export const PROJECTS = [
  
  {
    id: 1,
    name: "Infosai Portfolio Website",
    description:
      "A portfolio website designed for Infosai Software, showcasing their services, projects, and team, with a sleek, responsive design and seamless user experience.",
    image: projectImage5,
    // githubLink: "https://github.com/user/personal-portfolio",
    projectType:'office',
  },
  {
    id: 2,
    name: "Extreme Digital Solutions",
    description:
      "A marketing portfolio website developed for Extreme Digital Solution, highlighting their digital services, client success stories, and industry expertise with a modern, engaging design.",
    image: projectImage2,
    // githubLink: "https://github.com/user/ecommerce-platform",
    projectType:'office',
  },

  {
    id: 3,
    name: "Dairy ERP Application",
    description:
      "A comprehensive dairy ERP application built using React.js, designed to streamline dairy product management, sales tracking, and overall business operations for efficient dairy industry management.",
    image: projectImage6,
    // githubLink: "https://github.com/user/ecommerce-platform",
    projectType:'office',
  },

  {
    id: 4,
    name: "Bike Application (Admin Panel)",
    description:
      "A sleek bike ERP application built using HTML, CSS, and JavaScript, with a strong focus on UI design and responsiveness, ensuring a smooth user experience across all devices.",
    image: projectImage1,
    // githubLink: "https://github.com/user/ecommerce-platform",
    projectType:'office',
  },

  {
    id: 5,
    name: "Ecommerce Mobile App",
    description:
      "A user-friendly ecommerce mobile app built using React Native, offering seamless shopping experiences with smooth navigation and optimized performance across devices.",
    image: projectImage3,
    githubLink: "",
    apkfile:"../assets/apk.apk",
    projectType:'office',
  },

  {
    id: 6,
    name: "Virtual Application",
    description:
      "A web app built with React-Vite and Tailwind CSS, showcasing sleek UI/UX design and responsive functionality.",
    image: projectImage1,
    githubLink: "https://virtualrp.vercel.app/",
    projectType:'personal',
  },

  {
    id: 7,
    name: "MERN AUTH Project",
    description:
      "A MERN authentication project that implements user registration, login, and secure access using MongoDB, Express, React, and Node.js with JWT-based authentication.",
    image: projectImage6,
    githubLink: "https://mern-auth-4pij.onrender.com",
    projectType:'personal',
  },

 

  {
    id: 8,
    name: "Ecommerce Web App",
    description:
      "A modern ecommerce web app built using React.js, featuring add-to-cart functionality and seamless payment integration using Razorpay and Stripe for a smooth and secure shopping experience.",
    image: projectImage5,
    githubLink: "https://ecommerce-frontend-one-beta.vercel.app/",
    projectType:'personal',
  },

  {
    id: 9,
    name: "Ecommerce Admin Panel",
    description:
      "An efficient ecommerce admin panel built using React.js, enabling administrators to add and remove products, and manage orders with ease. username: admin@2043.com password: ankit2043",
    image: projectImage4,
    githubLink: "https://ecommerce-admin-rose-two.vercel.app/",
    projectType:'personal',
  },
];


export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Infosai Software",
    duration: "August 2023 - Present",
    description:
      "As Lead Frontend Developer, I worked extensively with React and React Native to build cutting-edge user interfaces. I collaborated with the backend team to ensure seamless integration, contributing to innovative and high-performance web and mobile applications.",
  },
  {
    title: "Trainee Software Engineer",
    company: "Tantransh Solutions",
    duration: "March 2023 - August 2023",
    description:
      "As an intern, I collaborated closely with the design team to deliver a polished and user-friendly UI. Over six months, I built a portfolio website for the company, applying best practices in frontend development and honing my skills in creating seamless user experiences.",
  },
  // {
  //   title: "Rollout Senior Manager",
  //   company: "Velocis Pvt Ltd",
  //   duration: "March 2018 - March 2022",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer",
    institution: "Don Bosco College of Engineering, Fatorda Goa",
    duration: "August 2012 - September 2017",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const CERTIFICATION = [
  {
    title: "Essentials on Full Stack Development-Mern",
    institution: "LIVEWIRE India",
    duration: "Issued Oct 2022",
    link: "",
  },

  {
    title: "Essentials on Python",
    institution: "LIVEWIRE India",
    duration: "Issued Oct 2022",
    link: "",
  }
]




export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Ankitnandanwar",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ankit-nandanwar/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "#",
    icon: <FaTelegram fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://www.linkedin.com/",
  //   icon: <FaNaukri fontSize={25} className="hover:opacity-80" />,
  // },
];



export const skillsImg = [
  {
    image: Html,
    alt: "html_logo",
    tooltipId: "html-tooltip",
    cont: "HTML"
  },

  {
    image: Css,
    alt: "css_logo",
    tooltipId: "css-tooltip",
    cont: "CSS"
  },

  {
    image: Javascript,
    alt: "javascript_logo",
    tooltipId: "javascript-tooltip",
    cont: "Javascript"
  },

  {
    image: Bootstrap,
    alt: "bootstrap_logo",
    tooltipId: "bootstrap-tooltip",
    cont: "BootStrap"
  },

  {
    image: React,
    alt: "React_logo",
    tooltipId: "React-tooltip",
    cont: "React"
  },

  {
    image: Mongo,
    alt: "mongo_logo",
    tooltipId: "mongo-tooltip",
    cont: "Mongo"
  },

  {
    image: Nodejs,
    alt: "node_logo",
    tooltipId: "node-tooltip",
    cont: "Node"
  },

  {
    image: Express,
    alt: "Express_logo",
    tooltipId: "Express-tooltip",
    cont: "Express"
  },

  {
    image: Tailwind,
    alt: "tailwind_logo",
    tooltipId: "tailwind-tooltip",
    cont: "Tailwind"
  },

  {
    image: Git,
    alt: "git_logo",
    tooltipId: "git-tooltip",
    cont: "Git"
  },
]