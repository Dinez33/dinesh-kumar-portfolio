import {
  FaRobot,
  FaChrome,
  FaMoneyCheckAlt,
  FaBuilding,
  FaCode,
  FaBrain,
  FaDatabase,
  FaShoppingCart,
  FaGlobe,
} from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "SmartSpend AI",
    featured: true,
    category: "Personal Project",
    year: "2026",
    status: "Completed",
    private: false,

    icon: FaRobot,
    color: "#8B5CF6",

    description:
      "AI-powered personal finance platform that analyzes bank statements, categorizes spending patterns, generates financial insights, and provides personalized saving recommendations using AI.",

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "OpenAI",
      "PostgreSQL",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "Chrome Coupon Finder Extension",
    featured: true,
    category: "Personal Project",
    year: "2025",
    status: "Completed",
    private: false,

    icon: FaChrome,
    color: "#22C55E",

    description:
      "Developed a Chrome Extension that automatically detects shopping websites, communicates with backend APIs, and displays available coupons in real time.",

    technologies: [
      "JavaScript",
      "Chrome Extension API",
      "PHP",
      "CodeIgniter",
      "REST API",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "Developer Portfolio",
    featured: false,
    category: "Personal Project",
    year: "2026",
    status: "In Progress",
    private: false,

    icon: FaGlobe,
    color: "#06B6D4",

    description:
      "Modern full-stack developer portfolio built using React and FastAPI with animations, responsive design, project showcase, and contact functionality.",

    technologies: [
      "React",
      "FastAPI",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "Private Equity Management Platform",
    featured: true,
    category: "Enterprise Project",
    year: "2025",
    status: "Production",
    private: true,

    icon: FaMoneyCheckAlt,
    color: "#0EA5E9",

    description:
      "Developed enterprise software for private equity operations including investor management, financial calculations, reporting, workflow automation, and secure REST APIs.",

    technologies: [
      "Laravel",
      "Python",
      "React",
      "MySQL",
      "REST API",
    ],

    github: null,
    demo: null,
  },

  {
    id: 5,
    title: "Financial SaaS Platform",
    featured: true,
    category: "Enterprise Project",
    year: "2025",
    status: "Production",
    private: true,

    icon: FaBuilding,
    color: "#F97316",

    description:
      "Built scalable SaaS modules for financial operations, dashboards, reporting, user management, and workflow automation for enterprise clients.",

    technologies: [
      "PHP",
      "Laravel",
      "React",
      "MySQL",
    ],

    github: null,
    demo: null,
  },

  {
    id: 6,
    title: "PHP to Python Migration",
    featured: true,
    category: "Enterprise Project",
    year: "2025",
    status: "Production",
    private: true,

    icon: FaCode,
    color: "#3B82F6",

    description:
      "Migrated business-critical application modules from PHP architecture to Python-based services, improving maintainability and backend performance.",

    technologies: [
      "Python",
      "FastAPI",
      "PHP",
      "REST API",
    ],

    github: null,
    demo: null,
  },

  {
    id: 7,
    title: "AI Recommendation Engine",
    featured: false,
    category: "Enterprise Project",
    year: "2025",
    status: "Production",
    private: true,

    icon: FaBrain,
    color: "#EC4899",

    description:
      "Integrated AI-powered recommendation features into enterprise applications to improve user engagement and automate business insights.",

    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "REST API",
    ],

    github: null,
    demo: null,
  },

  {
    id: 8,
    title: "CRM & CMS Platform",
    featured: false,
    category: "Enterprise Project",
    year: "2023",
    status: "Production",
    private: true,

    icon: FaDatabase,
    color: "#14B8A6",

    description:
      "Developed and maintained CRM and CMS applications with authentication, role-based access, reporting modules, and content management features.",

    technologies: [
      "CodeIgniter",
      "React",
      "MySQL",
      "JavaScript",
    ],

    github: null,
    demo: null,
  },

  {
    id: 9,
    title: "Ecommerce Platform",
    featured: false,
    category: "Enterprise Project",
    year: "2023",
    status: "Production",
    private: true,

    icon: FaShoppingCart,
    color: "#F59E0B",

    description:
      "Built and maintained ecommerce applications including product management, order processing, payment integration, reporting, and performance optimization.",

    technologies: [
      "CodeIgniter",
      "React",
      "MySQL",
      "JavaScript",
    ],

    github: null,
    demo: null,
  },
];