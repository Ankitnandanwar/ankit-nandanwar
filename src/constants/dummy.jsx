import { GiNunchaku } from "react-icons/gi";
import projectImage1 from "../assets/Project1.jpg"
import projectImage2 from "../assets/Project2.jpg"
import projectImage3 from "../assets/Project3.jpg"
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa6";


export const HERO = {
    name: "ANKIT NANDANWAR",
    greet: "Hello there! 👋🏻",
    description:
        "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Work Experience", href: "#work" },
    // { label: "Education", href: "#education" },
    // { label: "Certification", href: "#certificate" },
    { label: "Contact", href: "#contact" },
];


export const TAGS_NAMES = [
    { name: "HTML/CSS", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DC6F" },
    { name: "BootStrap", color: "#4CAF50" },
    { name: "Tailwind", color: "#007ACC" },
    { name: "React Js", color: "#8BC34A" },
    { name: "React Redux", color: "#8BC34A" },
    { name: "Node Js", color: "#8BC34A" },
    { name: "Express Js", color: "#8BC34A" },
    { name: "Mongo Db", color: "#8BC34A" },
]

export const PROJECTS = [
    {
      id: 1,
      name: "Dairy Project",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      githubLink: "https://github.com/user/personal-portfolio",
    },
    {
      id: 2,
      name: "E-Commerce Mobile App",
      description:
        "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
      image: projectImage2,
      githubLink: "https://github.com/user/ecommerce-platform",
    },
    {
      id: 3,
      name: "Infosai Software Portfolio",
      description:
        "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
      image: projectImage3,
      githubLink: "https://github.com/user/task-management-tool",
    },
  ];


  export const EXPERIENCES = [
    {
      title: "Lead Frontend Developer",
      company: "Infosai Software",
      duration: "August 2023 - Present",
      description:
        "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
    },
    {
      title: "Trainee Software Engineer",
      company: "Tantransh Solutions",
      duration: "March 2023 - August 2023",
      description:
        "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
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
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaTelegram fontSize={25} className="hover:opacity-80" />,
    },
    // {
    //   href: "https://www.linkedin.com/",
    //   icon: <FaNaukri fontSize={25} className="hover:opacity-80" />,
    // },
  ];