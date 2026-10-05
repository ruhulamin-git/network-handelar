export interface SubService {
  title: string;
  desc: string;
  features: string[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  iconColor: "lime" | "cyan" | "purple" | "blue" | "emerald";
  subServices: SubService[];
}

export const servicesData: Record<string, ServiceCategory> = {
  "ai-services": {
    slug: "ai-services",
    title: "AI Services",
    subtitle: "INTELLIGENT SYSTEMS",
    tagline: "Empower your business operations with next-generation intelligence.",
    description: "Our comprehensive AI development and consulting services turn complex data into actionable business outcomes. We build custom, scalable solutions that streamline workflows and drive efficiency.",
    heroImage: "/images/hero_ai_nodes.png",
    iconColor: "cyan",
    subServices: [
      {
        title: "Agentic AI Development",
        desc: "Build autonomous AI systems that analyze, decide, and act independently to achieve business goals.",
        features: ["Autonomous Workflows", "Goal-Driven Actions", "Adaptive Learning Systems"]
      },
      {
        title: "AI Agent Development",
        desc: "Design specialized conversational and task-oriented virtual agents for customer service, training, and sales.",
        features: ["Multi-Agent Orchestration", "Natural Language Understanding", "System Integration"]
      },
      {
        title: "AI Copilot Development",
        desc: "Create interactive assistant tools embedded directly into your software applications to boost user productivity.",
        features: ["In-Context Recommendations", "Generative Prompting", "Workflow Assistance"]
      },
      {
        title: "AI Development Services",
        desc: "End-to-end custom machine learning and deep learning pipelines tailored to solve your unique bottlenecks.",
        features: ["Predictive Analytics", "Custom ML Models", "Data Pipeline Engineering"]
      },
      {
        title: "AI App Development",
        desc: "Transform your smart business ideas into intelligent, cross-platform mobile and web applications.",
        features: ["User-Friendly Interfaces", "Integrated AI Features", "Cloud-Scalable Backends"]
      },
      {
        title: "Chatbot Development Services",
        desc: "Deploy smart, intent-based conversational interfaces to automate 24/7 client interactions.",
        features: ["Intent & Sentiment Analysis", "Multi-Language Support", "Omnichannel Deployment"]
      },
      {
        title: "AI Product Development Services",
        desc: "Pioneer new digital products built with intelligence at their core, accelerating your path to market.",
        features: ["AI Product Architecture", "Rapid Prototyping", "Scalable MVP Delivery"]
      },
      {
        title: "AI Avatar Development",
        desc: "Develop lifelike, interactive virtual avatars that humanize customer service and online training.",
        features: ["Realistic Voice Synthesis", "Facial Expression Sync", "Interactive Dialogues"]
      },
      {
        title: "Generative AI Development Services",
        desc: "Leverage Large Language Models (LLMs) to create custom content, summarize documentation, and write code.",
        features: ["LLM Fine-Tuning", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"]
      },
      {
        title: "AI Consulting Services",
        desc: "Align your enterprise strategy with feasibility studies, design roadmaps, and return-on-investment evaluations.",
        features: ["AI Readiness Assessment", "Technology Stack Selection", "Governance & Ethics Design"]
      },
      {
        title: "AI Integration Services",
        desc: "Seamlessly embed machine learning modules into your legacy infrastructure and existing software solutions.",
        features: ["API Integration", "Data Flow Synchronization", "Legacy System Bridge"]
      },
      {
        title: "AI Automation Services",
        desc: "Replace manual, high-error operational processes with smart cognitive automation scripts.",
        features: ["Robotic Process Automation (RPA)", "Intelligent Document Processing", "Workflow Optimization"]
      },
      {
        title: "Computer Vision Software Development",
        desc: "Build video and image processing tools for object detection, facial recognition, and automated visual inspection.",
        features: ["Image & Video Segmentation", "Real-Time Object Tracking", "Industrial Quality Control"]
      },
      {
        title: "Enterprise AI Solutions",
        desc: "Architect scale-ready models, data warehouses, and AI governance standards for major corporations.",
        features: ["Corporate Data Strategy", "High-Performance Computing", "Security & Auditing Systems"]
      },
      {
        title: "Hire AI Developers",
        desc: "Expand your internal technical capabilities by onboarding vetted, top-tier artificial intelligence specialists.",
        features: ["Dedicated Engineers", "Flexible Engagement Models", "Seamless Collaboration"]
      }
    ]
  },
  "ai-solutions": {
    slug: "ai-solutions",
    title: "AI Solutions",
    subtitle: "SECTOR-SPECIFIC APPS",
    tagline: "Turnkey, industry-focused platforms driven by state-of-the-art AI.",
    description: "We deploy specialized vertical AI applications tailored for specific business domains. Leverage targeted intelligence to achieve industry leadership.",
    heroImage: "/images/about_mission_engineering.png",
    iconColor: "lime",
    subServices: [
      {
        title: "AI Fitness App Development",
        desc: "Create virtual personal trainers with computer vision for pose analysis and tailored workout generation.",
        features: ["Real-Time Posture Correction", "Personalized Workout Plans", "Nutritional AI Trackers"]
      },
      {
        title: "Mental Health AI Solutions",
        desc: "Deploy sensitive, secure, and empathetic AI chatbots for mood tracking, guided therapy, and telehealth support.",
        features: ["Sentiment Monitoring", "HIPAA-Compliant Encryptions", "Emergency Alert System"]
      },
      {
        title: "AI Printing Software Development",
        desc: "Automate prepress workflows, page layouts, print color adjustments, and scheduling using intelligent rules.",
        features: ["Prepress Automation", "Optimal Layout Planners", "Smart Machine Scheduling"]
      },
      {
        title: "Wealth Management Solutions",
        desc: "Build AI advisors that evaluate market dynamics to propose investment strategies and automate portfolio balancing.",
        features: ["Robo-Advisory Engines", "Risk-Tolerance Analysis", "Automatic Rebalancing"]
      },
      {
        title: "Solutions for Staffing",
        desc: "Automate workforce scheduling, time trackers, and communication pipelines with intelligent HR software.",
        features: ["Automated Scheduling", "Contract Compliance Checks", "In-App Chat Channels"]
      },
      {
        title: "Solutions for Recruitment",
        desc: "Streamline talent acquisition with automated resume screening, semantic matching, and interview calendars.",
        features: ["Resume Parser Engines", "Smart Profile Matching", "Auto-Scheduling Calendar"]
      },
      {
        title: "EdTech Solutions",
        desc: "Deliver personalized learning portals that adapt to each student's speed, offering tailored tests and scoring.",
        features: ["Adaptive Curriculums", "AI Essay Evaluators", "Student Engagement Analytics"]
      },
      {
        title: "AI Healthcare Software Development",
        desc: "Power electronic medical records, patient diagnoses, and hospital staff management with smart algorithms.",
        features: ["Diagnostic Assistant Tools", "EHR Smart Data Entry", "Hospital Staff Optimizer"]
      },
      {
        title: "Real Estate AI Solutions",
        desc: "Estimate property valuations, predict investment yields, and handle virtual property tours via automated tools.",
        features: ["Automated Valuation Models", "Rental Yield Predictors", "Smart Search Filter Engines"]
      },
      {
        title: "Insurance AI Software Development",
        desc: "Automate insurance claims analysis, policy underwriting, and fraud detection patterns using computer vision and ML.",
        features: ["Claims Image Damage Check", "Underwriting Risk Assessor", "Fraud Pattern Matcher"]
      }
    ]
  },
  "iot-development": {
    slug: "iot-development",
    title: "IoT Development",
    subtitle: "CONNECTED HARDWARE",
    tagline: "Bridge the physical and digital worlds with robust IoT networks.",
    description: "Design, build, and deploy interconnected device architectures. We specialize in embedded programming, sensor integrations, and real-time dashboard applications.",
    heroImage: "/images/about_precision_tech.png",
    iconColor: "purple",
    subServices: [
      {
        title: "IoT Solutions",
        desc: "End-to-end industrial and commercial internet-of-things ecosystems tracking operations seamlessly.",
        features: ["Fleet & Asset Trackers", "Smart Factory Integration", "Sensor Mesh Networks"]
      },
      {
        title: "IoT Product Development",
        desc: "Prototype and manufacture custom connected hardware items with secure cloud data pipelines.",
        features: ["Firmware Custom Coding", "PCB Architecture Layouts", "Cloud Connection Gateways"]
      },
      {
        title: "Wearable App Development",
        desc: "Build highly optimized companion apps for smartwatches, fitness trackers, and health bands.",
        features: ["Real-Time Sensor Sync", "Low-Energy Bluetooth Data", "Interactive HUD Interfaces"]
      }
    ]
  },
  "software-development": {
    slug: "software-development",
    title: "Software Development",
    subtitle: "ROBUST CODE",
    tagline: "Build custom digital products with scalability and high performance.",
    description: "We engineer software platforms that align precisely with your goals. Our developers follow agile best practices to build robust, modern, and reliable architectures.",
    heroImage: "/images/software_develop.png",
    iconColor: "blue",
    subServices: [
      {
        title: "Custom Software Development",
        desc: "Create bespoke applications to solve your unique workflow bottlenecks and replace legacy tech.",
        features: ["High-Security Protocols", "Scalable Microservices", "Dedicated Team Model"]
      },
      {
        title: "Mobile App Development",
        desc: "Deliver stellar native and cross-platform mobile apps for iOS and Android devices.",
        features: ["React Native & Flutter", "App Store Optimizations", "High-FPS Interface Design"]
      },
      {
        title: "CMS Development",
        desc: "Implement customizable content management backends allowing your team to update websites instantly.",
        features: ["Headless CMS Architecture", "Role-Based Permissions", "Instant Content CDN"]
      },
      {
        title: "Web Development",
        desc: "Craft fast-loading, SEO-optimized, responsive websites with state-of-the-art interactive designs.",
        features: ["React / Next.js Frameworks", "Core Web Vitals Optimizers", "Accessible CSS (WCAG)"]
      },
      {
        title: "ECommerce Development",
        desc: "Build transaction-heavy store environments with secure payment channels and analytics.",
        features: ["Shopify & Custom Commerce", "ERP Product Sync Platforms", "High-Speed Cart Checkouts"]
      },
      {
        title: "Full Stack Development",
        desc: "Complete front-to-back engineering of database schemas, API routes, and user interface panels.",
        features: ["Node.js & Python Backends", "SQL / NoSQL Datastores", "Modern SPA Frontend Styling"]
      },
      {
        title: "Digital Marketing",
        desc: "Drive targeted search engine traffic, manage campaigns, and track conversion rates across channels.",
        features: ["Search Engine Optimizations", "Pay-Per-Click Ad Accounts", "User Acquisition Analytics"]
      }
    ]
  },
  "software-solutions": {
    slug: "software-solutions",
    title: "Software Solutions",
    subtitle: "TURNKEY APPLICATIONS",
    tagline: "Industry-standard software architectures tailored for quick deployment.",
    description: "Deploy feature-rich solutions built for modern business verticals. Reduce time-to-market using our verified, scalable, and customizable application architectures.",
    heroImage: "/images/enterprise_integration.png",
    iconColor: "emerald",
    subServices: [
      {
        title: "Event Management Software",
        desc: "Simplify ticketing, schedules, seat layouts, and attendee check-ins through a centralized portal.",
        features: ["Ticketing QR Scanning", "Interactive Seat Charts", "Live Stream Integration"]
      },
      {
        title: "UI/UX Design",
        desc: "Create gorgeous user journeys, high-fidelity wireframes, and design guidelines for digital products.",
        features: ["User Behavior Researches", "Figma High-Fidelity Demos", "Interactivity Style Systems"]
      },
      {
        title: "MVP Development",
        desc: "Build minimal viable versions of your app to test market demand and showcase to seed investors.",
        features: ["Rapid Code Deployments", "Core Metric Trackers", "Startup-Budget Friendly"]
      },
      {
        title: "Manufacturing Software Development",
        desc: "Manage warehouse stock, machine performance logs, supply lines, and assembly planning software.",
        features: ["Inventory Tracking Logs", "OEE Machine Monitors", "Supply Chain Planners"]
      },
      {
        title: "Sports Betting App Development",
        desc: "Implement high-security gaming apps showing real-time odds, live logs, and wallet withdrawals.",
        features: ["Odds Feed API Integrations", "Secure Payments Ledger", "Live In-Play Wagers"]
      },
      {
        title: "Dating App Development",
        desc: "Develop location-based matchmakers with instant messaging, media upload, and premium subs.",
        features: ["Geolocation Matching", "Push Notification Alerts", "Subscription Paywalls"]
      },
      {
        title: "Trading Software Development",
        desc: "Engineer financial platforms with candle graphs, instant stock/crypto buying, and alerts.",
        features: ["Live Stock Tickers", "High-Frequency Execution", "Candlestick Integrations"]
      },
      {
        title: "HR Software Development",
        desc: "Automate company staff directories, payroll calculators, reviews, and time tracking.",
        features: ["Payroll Computations", "Leave Tracker Calendars", "Performance Evaluation Cards"]
      },
      {
        title: "Social Networking",
        desc: "Build community apps supporting personal profiles, news feeds, likes, comments, and file uploads.",
        features: ["Activity Feed Indexes", "Follower Network Schemes", "Media Storage Solutions"]
      },
      {
        title: "eCommerce & Marketplaces",
        desc: "Support multi-vendor platforms with separate vendor consoles, product approval queues, and split carts.",
        features: ["Vendor Console Layouts", "Automated Commission Split", "Multi-Seller Cart Support"]
      },
      {
        title: "On Demand App Development",
        desc: "Deliver local home service, transport, or food ordering platforms with live map routing.",
        features: ["Real-Time Driver Maps", "In-App Stripe Payments", "Instant Delivery Alerts"]
      },
      {
        title: "Real Estate",
        desc: "Implement property listing panels with virtual walk-throughs, agent dashboards, and filters.",
        features: ["MLS Database Sync", "Lead Retargeting Filters", "Agent Schedule Portals"]
      },
      {
        title: "E-Learning",
        desc: "Provide virtual schoolrooms with course modules, video players, quizzes, and digital certificates.",
        features: ["Video Stream Hosting", "Quiz Builder Modules", "Certificates Generator"]
      },
      {
        title: "IoT Solutions Integrations",
        desc: "Bridge physical smart devices directly into your web management consoles and ERP systems.",
        features: ["API Data Interconnects", "Device Remote Management", "Hardware Event Loggers"]
      },
      {
        title: "Fantasy/Sports Apps",
        desc: "Build fantasy leagues with points calculators based on real athlete matches.",
        features: ["Player Stat Calculators", "League Draft Integrators", "Rank Leaderboards"]
      },
      {
        title: "Recruitment/Staffing Platforms",
        desc: "Deploy job search engines allowing candidates to upload CVs and companies to list openings.",
        features: ["Candidate Search Pipelines", "Resume Parsing Scripts", "Employer Plan Billing"]
      },
      {
        title: "Legal/Law Advisory Software",
        desc: "Create attorney schedule organizers, document signing folders, and secure client chats.",
        features: ["Law Document Encryptions", "Consultation Booking Slots", "Client Escrow Payments"]
      },
      {
        title: "Fintech Solutions",
        desc: "Deploy online wallets, payment gateway bridges, currency exchanges, and security tokens.",
        features: ["PCI-DSS Conformances", "Dynamic Currency Converters", "Multi-Factor Access Code"]
      }
    ]
  }
};
