import { Certification, Project, SkillItem, TimelineItem } from "../types/portfolioTypes";

export const projectsList: Project[] = [
  {
    title: "Service Booking App - Kamke",
    description: "Service booking and marketplace application featuring location-based search, quote comparison, product discovery, role-based access, and dedicated workflows for customers, sellers, service providers, and manufacturers.",
    tech: ["React Native", "Redux Toolkit", "Nativewind CSS", "Expo", "Google Maps API", "Razorpay API"],
    category: "Mobile App",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Right Choice Bike Bazar",
    description: "Responsive business website showcasing motorcycle inventory and services with clean user experience.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
    category: "Web Application",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Dairy Application - ERP",
    description: "End-to-end dairy management system with inventory tracking, sales analytics.",
    tech: ["React.js", "Tailwind CSS", "Redux"],
    category: "Enterprise Software",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Infosai Software Company - Portfolio",
    description: "Corporate portfolio website featuring company services, projects, and contact management with responsive design, reusable components, email notifications, and deployment for seamless cross-device accessibility.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    className: "md:col-span-2 md:row-span-1",
  },
];


// skills
export const row1Skills: SkillItem[] = [
  { name: "HTML5", iconName: "html5" },
  { name: "CSS3", iconName: "css3" },
  { name: "JavaScript", iconName: "js" },
  { name: "Typescript", iconName: "typescript" },
  { name: "Bootstrap", iconName: "bootstrap5" },
  { name: "Tailwind CSS", iconName: "tailwindcss" },
  { name: "Shadcn", iconName: "shadcnui" },
  { name: "Sass", iconName: "sass" },
];

export const row2Skills: SkillItem[] = [
  { name: "React JS", iconName: "react" },
  { name: "React Native", iconName: "reactnative" },
  { name: "Redux Toolkit", iconName: "redux" },
  { name: "Expo", iconName: "expo" },
  { name: "REST APIs", iconName: "api" },
  { name: "Node JS", iconName: "nodejs" },
  { name: "Tanstack Query", iconName: "tanstack" },
  { name: "GSAP", iconName: "gsap" },
];


// work
export const experiences: TimelineItem[] = [
  {
    duration: "2023 - 2025",
    title: "Frontend Developer",
    institution: "Infosai Software Company",
    details: "As Lead Frontend Developer, I worked extensively with React and React Native to build cutting-edge user interfaces. I collaborated with the backend team to ensure seamless integration, contributing to innovative and high-performance web and mobile applications.",
  },
  {
    duration: "2023 - 2023",
    title: "Trainee Software Engineer",
    institution: "Tantransh Solutions",
    details: "As an intern, I collaborated closely with the design team to deliver a polished and user-friendly UI. Over six months, I built a portfolio website for the company, applying best practices in frontend development and honing my skills in creating seamless user experiences.",
  },
  {
    duration: "2018 - 2022",
    title: "Rollout Senior Manager",
    institution: "Velocis Private Limited",
    details: "Managed government tenders through CPPP and GeM portals, overseeing tender submissions, tracking bid openings, coordinating evaluations, and ensuring compliance with procurement processes and deadlines.",
  }
];

export const educationList: TimelineItem[] = [
  {
    duration: "2012 - 2017",
    title: "Bachelor of Engineering in Computer Science",
    institution: "Goa University",
    details: "Focused on web development, programming languages, and database management. Actively involved in coding, where I developed several web applications using HTML, CSS and JavaScript. Completed a senior project on developing an e-commerce platform.",
  }
];

export const certificationsList: Certification[] = [
  {
    title: "Essentials on Python",
    issuer: "Livewire Institute",
    date: "Issued 2022",
    credentialId: "LWR220412003",
    verifyLink: "https://registry.livewireindia.com/ghbji.php?asdsad=RWtTTDlqTjBQTjI5dzVuN3BjcndkRmZXcGFOWm1CM3lNallzWVp5NHEwc2l5VnBTWGJLYzl5azFNNnkra000aw==",
  },
  {
    title: "Essentials on Full Stack Development",
    issuer: "Livewire Institute",
    date: "Issued 2022",
    credentialId: "LWR220412003",
    verifyLink: "https://registry.livewireindia.com/ghbji.php?asdsad=RWtTTDlqTjBQTjI5dzVuN3BjcndkRmZXcGFOWm1CM3lNallzWVp5NHEwc2l5VnBTWGJLYzl5azFNNnkra000aw==",
  },
  
];





