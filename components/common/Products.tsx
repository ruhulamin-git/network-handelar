import { AiProduct } from "./AiProductsMegaMenu";

export const aiProducts: AiProduct[] = [
  {
    id: "chatbot",
    label: "Customer Service AI Chatbot",
    previewImage: "/images/products/chatbot-market-size.png",
    href: "/ai-products/chatbot",
    icon: "🤖",
    tagline: "Achieve 50% increase in agent productivity and 80% in CSAT.",
    features: [
      { title: "Support Ticket Labeling", desc: "Efficiently categorises customer inquiries for streamlined support & faster response times." },
      { title: "Appointment Scheduling", desc: "Automates booking process, managing calendars and setting reminders for upcoming appointments." },
      { title: "Payment, Refund Processing", desc: "Handles transactions smoothly, ensuring secure payments and processing refunds without hassle." },
      { title: "Order Tracking", desc: "Keeps customers informed by tracking orders from dispatch to delivery accurately." },
    ],
  },
  {
    id: "staffing",
    label: "AI-Powered Staffing Software",
    previewImage: "/images/products/staffing-software.png",
    href: "/ai-products/staffing",
    icon: "👔",
    tagline: "Streamlining the recruitment lifecycle with AI capabilities.",
    features: [
      { title: "In-App Communication", desc: "Enables swift communication between job seekers, employers, and staffing agencies." },
      { title: "Payroll Management", desc: "Automates payroll, ensuring accurate, timely payments and reducing manual errors." },
      { title: "Integration With Enterprise Systems", desc: "Seamlessly integrates with CRM and accounting for efficient staffing operations." },
      { title: "White-Labeling for Brand Consistency", desc: "Customisable software for agencies to maintain brand consistency and professionalism." },
    ],
  },
  {
    id: "iot",
    label: "Industrial IoT Software",
    previewImage: "/images/products/iot-software.png",
    href: "/ai-products/iot",
    icon: "🏭",
    tagline: "Connect, monitor, and optimise industrial equipment with real-time AI insights.",
    features: [
      { title: "Real-Time Monitoring", desc: "Live dashboards tracking machine health and performance metrics." },
      { title: "Predictive Maintenance", desc: "AI models that forecast failures before they cause costly downtime." },
      { title: "Edge Computing", desc: "Process data at the device level for ultra-low latency decisions." },
      { title: "OPC-UA Integration", desc: "Standards-based connectivity to PLCs and SCADA systems." },
    ],
  },
  {
    id: "ecommerce",
    label: "Headless E-Commerce Platform",
    previewImage: "/images/products/ecommerce-platform.png",
    href: "/ai-products/ecommerce",
    icon: "🛒",
    tagline: "API-first commerce engine with AI-driven personalisation and performance.",
    features: [
      { title: "AI Recommendations", desc: "Dynamic product suggestions powered by behavioural data." },
      { title: "Headless Architecture", desc: "Decouple front-end from back-end for blazing-fast storefronts." },
      { title: "Multi-Currency & Tax", desc: "Sell globally with automatic tax calculation and FX support." },
      { title: "Inventory Intelligence", desc: "Smart restocking alerts and demand forecasting built in." },
    ],
  },
];

export const serviceProducts: AiProduct[] = [
  {
    id: "ai-services",
    label: "AI Services",
    href: "/services/ai-services",
    icon: "🤖",
    tagline: "Empower your business operations with next-generation intelligence.",
    exploreLabel: "Explore",
    previewImage: "/images/services/ai-services-preview.webp",
    previewAlt: "AI Services dashboard preview",
    features: [
      {
        title: "Agentic AI Development",
        desc: "Build autonomous AI systems that analyze, decide, and act independently to achieve business goals.",
      },
      {
        title: "Generative AI Development Services",
        desc: "Leverage LLMs to create custom content, summarize documentation, and write code via RAG pipelines.",
      },
      {
        title: "AI Automation Services",
        desc: "Replace manual, high-error processes with smart cognitive automation scripts and RPA.",
      },
      {
        title: "AI Consulting Services",
        desc: "Align enterprise strategy with feasibility studies, design roadmaps, and ROI evaluations.",
      },
    ],
  },
  {
    id: "ai-solutions",
    label: "AI Solutions",
    href: "/services/ai-solutions",
    icon: "🏥",
    tagline: "Turnkey, industry-focused platforms driven by state-of-the-art AI.",
    exploreLabel: "Explore",
    previewImage: "/images/services/ai-solutions-preview.webp",
    previewAlt: "AI Solutions staffing platform preview",
    features: [
      {
        title: "AI Healthcare Software Development",
        desc: "Power electronic medical records, patient diagnoses, and hospital staff management with smart algorithms.",
      },
      {
        title: "Wealth Management Solutions",
        desc: "Build AI advisors that evaluate market dynamics to propose investment strategies and automate portfolio balancing.",
      },
      {
        title: "EdTech Solutions",
        desc: "Deliver personalized learning portals that adapt to each student's speed, offering tailored tests and scoring.",
      },
      {
        title: "Real Estate AI Solutions",
        desc: "Estimate property valuations, predict investment yields, and handle virtual property tours via automated tools.",
      },
    ],
  },
  {
    id: "iot-development",
    label: "IoT Development",
    href: "/services/iot-development",
    icon: "🏭",
    tagline: "Bridge the physical and digital worlds with robust IoT networks.",
    exploreLabel: "Explore",
    previewImage: "/images/services/iot-development-preview.webp",
    previewAlt: "Industrial IoT software dashboard",
    features: [
      {
        title: "IoT Solutions",
        desc: "End-to-end industrial and commercial internet-of-things ecosystems tracking operations seamlessly.",
      },
      {
        title: "IoT Product Development",
        desc: "Prototype and manufacture custom connected hardware items with secure cloud data pipelines.",
      },
      {
        title: "Wearable App Development",
        desc: "Build highly optimized companion apps for smartwatches, fitness trackers, and health bands.",
      },
    ],
  },
  {
    id: "software-development",
    label: "Software Development",
    href: "/services/software-development",
    icon: "💻",
    tagline: "Build custom digital products with scalability and high performance.",
    exploreLabel: "Explore",
    previewImage: "/images/services/software-development-preview.png",
    previewAlt: "Software development team preview",
    features: [
      {
        title: "Custom Software Development",
        desc: "Create bespoke applications to solve unique workflow bottlenecks and replace legacy tech.",
      },
      {
        title: "Mobile App Development",
        desc: "Deliver stellar native and cross-platform mobile apps for iOS and Android devices.",
      },
      {
        title: "Web Development",
        desc: "Craft fast-loading, SEO-optimized, responsive websites with state-of-the-art interactive designs.",
      },
      {
        title: "Full Stack Development",
        desc: "Complete front-to-back engineering of database schemas, API routes, and user interface panels.",
      },
    ],
  },
  {
    id: "software-solutions",
    label: "Software Solutions",
    href: "/services/software-solutions",
    icon: "🛒",
    tagline: "Industry-standard software architectures tailored for quick deployment.",
    exploreLabel: "Explore",
    previewImage: "/images/services/software-solutions-preview.webp",
    previewAlt: "Headless e-commerce platform preview",
    features: [
      {
        title: "eCommerce & Marketplaces",
        desc: "Support multi-vendor platforms with separate vendor consoles, product approval queues, and split carts.",
      },
      {
        title: "Fintech Solutions",
        desc: "Deploy online wallets, payment gateway bridges, currency exchanges, and security tokens.",
      },
      {
        title: "HR Software Development",
        desc: "Automate company staff directories, payroll calculators, reviews, and time tracking.",
      },
      {
        title: "On Demand App Development",
        desc: "Deliver local home service, transport, or food ordering platforms with live map routing.",
      },
    ],
  },
];
