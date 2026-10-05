export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "AI Services" | "AI Solutions" | "IoT Development" | "Software Development" | "Software Solutions";
  img: string;
  bio: string;
  skills: string[];
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const departments = [
  "AI Services",
  "AI Solutions",
  "IoT Development",
  "Software Development",
  "Software Solutions",
] as const;

export const teamMembers: TeamMember[] = [
  // ── AI Services ────────────────────────────────────────────
  {
    id: "aris-thorne",
    name: "Dr. Aris Thorne",
    role: "Head of AI Services",
    department: "AI Services",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Aris leads the AI Services division — from agentic workflows to LLM fine-tuning and enterprise AI consulting.",
    skills: ["Agentic AI", "LLM Fine-Tuning", "NLP", "AI Consulting"],
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "nadia-kapoor",
    name: "Nadia Kapoor",
    role: "Senior AI Engineer",
    department: "AI Services",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Nadia builds production-grade chatbot and AI copilot systems, specializing in generative AI and RAG pipelines.",
    skills: ["Chatbot Development", "Generative AI", "RAG", "Computer Vision"],
    socials: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },

  // ── AI Solutions ───────────────────────────────────────────
  {
    id: "ria-nancoo",
    name: "Ria Nancoo",
    role: "AI Solutions Architect",
    department: "AI Solutions",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Ria architects end-to-end AI solutions for healthcare, fintech, and education platforms with scalable ML backends.",
    skills: ["AI Fitness Apps", "HealthTech AI", "EdTech AI", "FinTech ML"],
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "ML Solutions Engineer",
    department: "AI Solutions",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    bio: "Alex designs and deploys production ML pipelines for real estate, travel, and dating app AI solutions.",
    skills: ["PyTorch", "MLOps", "Real Estate AI", "Recommendation Systems"],
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },

  // ── IoT Development ────────────────────────────────────────
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "IoT Systems Lead",
    department: "IoT Development",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Marcus leads IoT platform engineering — designing connected device architectures, edge computing solutions, and sensor networks.",
    skills: ["Edge Computing", "MQTT", "AWS IoT", "Embedded Systems"],
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },

  // ── Software Development ───────────────────────────────────
  {
    id: "jaylon-calzoni",
    name: "Jaylon Calzoni",
    role: "Principal Software Engineer",
    department: "Software Development",
    img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=600&auto=format&fit=crop",
    bio: "Jaylon oversees full-stack software development — from custom web applications and CRM/ERP integrations to legacy system modernization.",
    skills: ["Next.js", "TypeScript", "System Architecture", "CI/CD"],
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Lead UI/UX Architect",
    department: "Software Development",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "Sarah designs complex enterprise interfaces for custom software and CRM/ERP projects, ensuring smooth usability and brand fidelity.",
    skills: ["Design Systems", "Prototyping", "User Research", "Interaction Design"],
    socials: { linkedin: "https://linkedin.com" },
  },

  // ── Software Solutions ─────────────────────────────────────
  {
    id: "cheyenne-george",
    name: "Cheyenne George",
    role: "Software Solutions Manager",
    department: "Software Solutions",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Cheyenne manages delivery of enterprise software solutions — SaaS platforms, cloud migrations, and cybersecurity compliance projects.",
    skills: ["SaaS Architecture", "Cloud Migration", "Cybersecurity", "DevOps"],
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    id: "daniel-osei",
    name: "Daniel Osei",
    role: "Senior DevOps Engineer",
    department: "Software Solutions",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Daniel automates infrastructure pipelines and implements robust monitoring, scaling, and disaster recovery systems.",
    skills: ["Terraform", "Kubernetes", "AWS", "Docker", "Prometheus"],
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
];
