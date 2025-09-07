import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Portfolio | Rohith Shinoj",
  author: "Rohith Shinoj Kumar",
  description: "Software Engineer based in Bangalore, India.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Publications", href: "#publications" },
    { text: "Blog", href: "https://deeper-thoughts-blog.rohithshinoj.com" },
    // { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Contact", href: "mailto:rohithshinoj@gmail.com" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/rohith-8aa473147/" },
    { text: "Github", href: "https://github.com/Rohith-Shinoj" },
  ],
  socialImage: "photo.png",
  canonicalURL: "https://www.rohithshinoj.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Rohith Shinoj Kumar",
    specialty: "Software Engineer | Exploring Scalable Systems & ML",
    summary:
      "I'm a final-year Computer Science and Engineering student at the National Institute of Technology Karnataka. I’m passionate about building scalable machine learning systems. With a strong foundation in Python, C++, and ML, I’ve worked on end-to-end projects across MLOps and full-stack development — turning ideas into deployable, impactful solutions. Always eager to learn, collaborate, and innovate. Let’s connect!",
    email: "rohithshinoj@gmail.com",
  },
  experience: [
    {
      company: "Centre for Development of Telematics (C-DOT)",
      position: "Research Engineer (Incoming)",
      startDate: "August 2025",
      endDate: "Present",
      summary: ["Yet to join"],
    },
    {
      company: "Accenture Inc.",
      position: "Software Development Engineering Intern",
      startDate: "May 2024",
      endDate: "July 2024",
      summary: [
        "Designed and deployed a scalable dynamic pricing pipeline, leveraging real customer analytics data and Facebook Prophet for time-series demand forecasting — improving forecast accuracy to 94%",

        "Implemented Bayesian A/B testing for price optimization,in leading to a 12% lift in customer conversion rates by continuously aligning prices with predicted demand.",

        "Developed a full-stack application integrating ReactJS frontend with Flask backend APIs, automating real-time pricing updates future scalability."
      ],
    },
    {
      company: "Outside the Stack (OTS)",
      position: "Member of Project Team - Remote",
      startDate: "Feb 2024",
      endDate: "May 2024",
      summary: [
        "Optimized buffer utilization and reduced latency in a TLS proxy pair, enabling secure connections between clients and servers with deprecated SSL versions.",

        "Developed a high-performance logging system using memory-mapped JSON files, replacing the intial system logger.",

        "Cut read-write latency bynearly  20% and peak CPU usage by 8%, boosting proxy performance and reliability on new connections."
      ],
    },
  ],

  projects: [
    {
      name: "ZAlpha - GenAI Powered Stock Portfolio Enhancer",
      summary: [
        "Built a portfolio analytics platform with advanced risk models (VaR, CVaR, MPT) for real-time multi-asset analysis and optimizations",
        "Integrated Ollama-hosted local LLMs and Finnhub API data for live and historical financial data, generating contextual strategy insights and AI-powered financial narratives.",
        "Built interactive dashboards using AI-powered tooltips, enabling real-time performance attribution, factor exposure analysis, and contextual insights from market data and portfolio behavior."
      ],
      tags: ["Python", "Ollama (Local LLMs)", "REST APIs", "Flask", "react.js", "FinTech"],
      linkPreview: "https://www.z-alpha.rohithshinoj.com",
      linkBlog: "",
      linkSource: "https://github.com/Rohith-Shinoj/ZAlpha-AI-Powered-Stock-Optimization/",
      image: "",
    },
    {
      name: "Reliable, Auditable Messaging Platform for Regulated Industries",
      summary: [
        "Designed and implemented a scalable, fault-tolerant messaging backbone for regulated industries (like healthcare, finance, etc) requiring guaranteed delivery, end-to-end audit trails, and zero data loss in high-availability environments." ,
        "Used Kafka for durable event streaming and Redis as a low-latency replay + dead-letter queue system with structured audit logging to PostgreSQL.",
        "Built a dockerized deployment stack including Kafka, Redis, Postgres, and the app server for reproducible local and cloud environments."
      ],
      tags: ["Kafka", "Redis", "PostgreSQL", "Python", "Docker", "FastAPI"],
      
      linkPreview: "",
      linkBlog:"",
      linkSource: "https://github.com/Rohith-Shinoj/On-Campus-Food-Delivery",
      image: "/delivereats-logo.png",
    },
    {
      name: "Transformer-Based Multimodal Pomegranate Disease Detection (ICAR-affiliated)",
      summary: [
        "This project is part of a funded joint initiative between NITK and the Indian Council of Agricultural Research (ICAR) focussed on deep-learning aided crop disease detection",
        "Developed a semi-supervised learning pipeline combining EfficientNet-CNN backbones with Vision Transformer (ViT), leveraging attention-based region focusing to achieve 95.7% classification accuracy despite a small non-standard dataset of ~500 field-collected leaf and fruit images across multiple disease categories.",
        "Worked in a team of 3 to deliver a fully optimized ONNX-quantized model (for cross-platform deployment) to ICAR for upcoming integration into their field-level diagnostic tool."
      ],
      tags: ["Semi-Supervised Learning", "ONNX", "PyTorch","TorchVision", "ViT"],
      linkPreview: "",
      linkBlog: "https://www.deeper-thoughts-blog.rohithshinoj.com/blog/deploying-ai-in-agriculture",
      linkSource: "https://github.com/Rohith-Shinoj/Semi-Supervised-Pomegranate-Disease-Detection",
      image: "/shopify-clon.png",
    },
  ],

  publications: [
    {
      name: "1. H-Infinity Enhanced CNN-LSTM for Arrythmia Detection from Heart Sound Recordings",
      conference: "",
      date: "June 2025 (Under Review)",
      link: "",
    },
    {
      name: "2. A Deep Learning Framework for dynamic detection of ARP Spoofing attacks",
      conference:
        "IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), IIT Delhi",
      date: "July 2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10308031",
    },
  ],
};

// #5755ff
