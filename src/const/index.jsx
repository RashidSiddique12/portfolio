import React from "react";
import { Code, Layout } from "lucide-react";

export const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

export const skills = {
    Frontend: [
      { name: "React.js", level: 97 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Redux Toolkit", level: 90 },
      { name: "Redux Saga", level: 85 },
      { name: "HTML & CSS", level: 97 },
      { name: "WebSockets/Socket.IO", level: 85 },
      { name: "Angular", level: 80 },
    ],
    Backend: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 95 },
      { name: "NestJS", level: 85 },
      { name: "Python", level: 75 },
      { name: "FastAPI", level: 75 },
    ],
    Databases: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 85 },
    ],
    AI_Integrations: [
      { name: "Google Gemini API", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "OpenStreetMap", level: 80 },
      { name: "Blockchain APIs", level: 75 },
      { name: "Razorpay", level: 85 },
    ],
    Testing_Tools: [
      { name: "Jest & Vitest", level: 90 },
      { name: "Playwright", level: 80 },
      { name: "Swagger & Postman", level: 90 },
      { name: "Git & GitHub", level: 90 },
    ],
    Engineering: [
      { name: "Agile/Scrum & SDLC", level: 90 },
      { name: "Unit Testing & Debugging", level: 90 },
      { name: "Feature Ownership", level: 95 },
      { name: "200+ DSA on LeetCode", level: 85 },
    ],
};

export const experience = [
    {
      company: "AgNext Technologies",
      role: "Software Development Engineer-I",
      duration: "03/2025 - Present",
      location: "Mohali, India",
      description: "Building scalable enterprise web applications for workflow, audit, and analytics systems.",
      points: [
        "Built and enhanced a configurable multi-client SaaS platform, developing 50+ REST APIs and 10+ enterprise features supporting 500+ workflows, 5,000+ forms, 25+ clients, and 1,000+ users.",
        "Built React.js + TypeScript interfaces using Redux Toolkit/Saga, reusable components, dynamic forms, dashboards, responsive UI, and API integrations for complex enterprise workflows.",
        "Developed Node.js backend services using Express.js/NestJS, PostgreSQL, and MongoDB, implementing JWT authentication, RBAC, webhooks, scheduled/background processing, and database optimization.",
        "Reduced frontend page-load time from 8–10s to 1–2s through lazy loading, virtualization, memoization, API-call optimization, debouncing, and throttling.",
        "Reduced API response time from 6–7s to 800–900ms through API/query optimization, caching, asynchronous processing, and database improvements.",
        "Integrated Google Gemini API for laboratory-report processing across 300+ laboratories, reducing manual report-processing effort by approximately 90%.",
        "Integrated Redis, WebSockets/Socket.IO, Firebase, OpenStreetMap, and Blockchain APIs for caching, real-time features, notifications, location/address workflows, and data verification; deployed production features using Docker and GitHub Actions/CI/CD.",
      ],
    },
    {
      company: "MountBlue Technologies (Client: AgNext)",
      role: "Software Engineer (Consultant)",
      duration: "02/2024 - 02/2025",
      location: "Mohali, India",
      description: "Developed backend APIs and business workflows for warehouse and transportation inspection data.",
      points: [
        "Developed a full-stack inspection platform used by 1,000+ client auditors for warehouse and truck inspections using Angular, JavaScript, Node.js, and REST APIs.",
        "Developed backend APIs and business workflows for capturing, processing, and managing warehouse and transportation inspection data across multiple clients.",
        "Implemented configurable report-generation workflows based on client-specific business and reporting requirements.",
        "Developed GPS/location movement tracking and selfie-based attendance marking for auditors to support field-audit operations.",
      ],
    },
    {
      company: "MountBlue Technologies",
      role: "Software Engineering Intern",
      duration: "10/2023 - 02/2024",
      location: "Bangalore, India",
      description: "Completed an intensive software engineering internship focused on modern development practices.",
      points: [
        "Completed intensive software-engineering training covering data structures, frontend development, backend development, Git, testing, debugging, and software development practices.",
        "Built web applications using modern frontend and backend technologies with emphasis on clean code, testing, and collaborative development.",
      ],
    },
];

export const projects = [
  {
    title: "MediConnect",
    category: "Full-Stack Healthcare Platform",
    problem:
      "Patients lack a single platform to discover hospitals/doctors, book appointments, and access prescriptions digitally. Hospitals need a streamlined way to manage doctors, schedules, and patient records.",
    description:
      "Independently built and deployed a full-stack healthcare platform with 50+ REST APIs and 30+ frontend pages supporting Patient, Hospital Admin, and Super Admin roles. Implemented appointment workflows, authentication, Redux Saga state management, MongoDB models, and Razorpay order, payment, refund, and webhook integrations.",
    highlights: [
      "Independently built and deployed a full-stack healthcare platform with 50+ REST APIs and 30+ frontend pages supporting Patient, Hospital Admin, and Super Admin roles.",
      "Implemented appointment workflows, authentication, Redux Saga state management, MongoDB models, and Razorpay order, payment, refund, and webhook integrations.",
      "Architecture: RESTful API with Express middleware chain, Redux Saga for frontend async flow",
      "Security: JWT with refresh token rotation, bcrypt hashing, Helmet headers, rate limiting, role-based access control",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Saga", "JWT", "Razorpay", "Swagger", "Cloudinary"],
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    liveLink: "https://medi-connect-inky.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/mediConnect",
    completionDate: "05/2026 – 06/2026",
  },
  {
    title: "Trello Clone",
    category: "React 18, Material-UI, Trello REST API",
    description:
      "A Trello-inspired Kanban-style task management app powered by the official Trello REST API as the backend. Users can create and manage boards, organize tasks into lists, and interact with cards through drag-and-drop. The app integrates directly with Trello's API for real-time data persistence — all boards, lists, and cards are synced with Trello's servers, eliminating the need for a custom backend.",
    highlights: [
      "Integrated with official Trello REST API for full backend data persistence",
      "Create, read, update, and delete boards, lists, and cards",
      "Responsive Material Design UI for desktop and mobile",
      "Axios-based API layer with centralized error handling",
      "Fast development with Vite HMR (Hot Module Replacement)",
    ],
    tech: ["React 18", "Material-UI", "Axios", "React Router", "Trello API"],
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    liveLink: "https://trello-phi-sable.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/Trello",
    completionDate: "Jan 2024",
  },
  {
    title: "Todoist Clone",
    category: "Node.js, Express, PostgreSQL, React, Redux Toolkit, Ant Design",
    description:
      "A full-stack task management application built with a React frontend and Node.js/Express backend, powered by PostgreSQL via Sequelize ORM. Features secure user authentication, a dashboard-driven workflow for managing tasks with full CRUD operations, and global state management using Redux Toolkit. The app supports filtering and sorting tasks by priority, due date, and status, with a fully responsive UI optimized for both mobile and desktop.",
    highlights: [
      "Secure user authentication and authorization with session management",
      "Full CRUD task management with real-time dashboard updates",
      "Filter and sort tasks by priority, due date, and completion status",
      "RESTful API with Express and Sequelize ORM for PostgreSQL",
      "Global state management using Redux Toolkit",
      "Responsive design for seamless mobile and desktop experience",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Redux Toolkit", "Ant Design"],
    icon: <Code className="w-6 h-6 text-purple-400" />,
    liveLink: "https://todoist-app-iota.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/Todoist_FullStack/tree/main",
    completionDate: "Feb 2024",
  },
];