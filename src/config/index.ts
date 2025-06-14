import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Portfolio | Rohith Shinoj",
  author: "Rohith Shinoj Kumar",
  description:
    "Software Engineer based in Bangalore, India.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Publications", href: "#publications" },
    { text: "Blog", href: "https://deep-thoughts-blog.vercel.app"},
    // { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Contact", href: "mailto:rohithshinoj@gmail.com" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/rohith-8aa473147/" },
    { text: "Github", href: "https://github.com/Rohith-Shinoj" },

  ],
  socialImage: "photo.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Rohith Shinoj Kumar",
    specialty: "Software Engineer | Exploring Scalable Systems & ML",
    summary:
      "I'm a final-year Computer Science and Engineering student at the National Institute of Technology Karnataka. I’m passionate about building scalable systems at the intersection of software engineering and machine learning. With a strong foundation in Python, C++, and ML, I’ve worked on end-to-end projects across MLOps and full-stack development — turning ideas into deployable, impactful solutions. Always eager to learn, collaborate, and innovate. Let’s connect!",
    email: "rohithshinoj@gmail.com",
  },
  experience: [
    {
      company: "Centre for Development of Telematics (C-DOT)",
      position: "Research Engineer (Incoming)",
      startDate: "August 2025",
      endDate: "Present",
      summary: [
        "Yet to join",
      ],
    },
    {
      company: "Accenture Inc.",
      position: "Software Development Engineering Intern",
      startDate: "May 2024",
      endDate: "July 2024",
      summary: [
        "Designed and implemented a production-ready pipeline for dynamic pricing using real customer analytics data. Applied Facebook Prophet for time-series based demand forecasting, and Bayesian A/B Testing for price optimizations.",

        "Built a full-stack application to deploy the solution in a real-time business environment — integrating a ReactJS frontend with Flask-based backend APIs to serve model predictions and automate pricing adjustments aligned with demand metrics. Focused on clean architecture, modularity, and performance to ensure scalability and maintainability across potential product lines.",
      ],
    },
    {
      company: "Outside the Stack (OTS)",
      position: "Member of Project Team - Remote",
      startDate: "Feb 2024",
      endDate: "May 2024",
      summary:[
        "Collaborated closely with the engineering team, under the guidance of Nalini Elkins, to optimize buffer utilization and reduce latency in a TLS forward and reverse proxy pair, enabling seamless secure connections between clients and servers with incompatible or deprecated SSL versions.",
        
        "Designed and implemented a logging system that flushes SSL session history and keylog data to memory-mapped JSON files, replacing the initial system logger. This improvement reduced read-write latency by approximately 20% and CPU utilization during peak loads by 8%, enhancing overall proxy performance and reliability."
      ]
    },
  ],

  projects: [
    {
      name: "ChatWithPDF: PDF Chatbot with OCR",
      summary: "Multimodal PDF question-answering system that integrates LangChain with HuggingFace open-source models, together with OCR and Image recognition tp extract and interpret both text and visual information (graphs/charts/photos) from documents. THe final model is wrapped in a a simple Flask UI to allow user PDF upload and question",
      linkPreview: "",
      linkSource: "https://https://github.com/Rohith-Shinoj/ChatWithPDF.com/",
      image: "/clone-ig.png",
    },
    {
      name: "DeliverEats: An On-Campus Food Delivery System",
      summary: "Production-ready web application for online food ordering in campus, enabling customers to browse menus, place orders, and make secure payments with restaurants inside NITK with a dynamic, user-friendly interface. Implemented secure payment workflows via Razorpay API and encrypted user transactions.",
      linkPreview: "",
      linkSource: "https://github.com/Rohith-Shinoj/On-Campus-Food-Delivery",
      image: "/spotifu.png",
    },
    {
      name: "PomoNet-v1: Pomegranate Crop Disease Identification",
      summary: " This project is a part of a funded joint initiative between NITK and Indian Council for Agricultural Research (ICAR). Trained on a highly limited ~500 images sourced directly from farms by ICAR, the model achieved a 97.7% accuracy on independant evaluation. The full training and inference pipeline was delivered to ICAR for integration into their mobile diagnostic tool to support real-time, field-level disease identification.",
      linkPreview: "",
      linkSource: "",
      image: "/shopify-clon.png",
    },
  ],

  publications: [
    {name: "1. H-Infinity Enhanced CNN-LSTM for Arrythmia Detection from Heart Sound Recordings",
     conference: "",
     date: "June 2025 (Under Review)",
     link: "",
    },
    {name: "2. A Deep Learning Framework for dynamic detection of ARP Spoofing attacks",
      conference: "IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), IIT Delhi",
      date: "July 2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10308031",
     },
  ],
};

// #5755ff

