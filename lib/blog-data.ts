import agenticsImage from "@/public/images/blog/ agentics.jpg";
import solutionsImage from "@/public/images/blog/ Solutions .jpg";
import analyticsImage from "@/public/images/blog/ Analytics.jpg";
import minsetImage from "@/public/images/blog/ Mindset.jpg";
import securityImage from "@/public/images/blog/ Businesses.jpg";
import consistencyImage from "@/public/images/blog/ Consistent .jpg";
const blogPosts = [
  {
    slug: "ai-agents-changing-client-operations-2026",
    title: "Unlocking the Power of AI Agentics",
    category: "AI Strategy",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: agenticsImage,
    summary:
      "A practical look at where automation delivers measurable value, and how teams can adopt it without disrupting service quality.",
    eyebrow: "Featured editorial",
    intro:
      "AI agents are moving from experimentation into everyday operations, especially in teams that need faster responses, cleaner handoffs, and more consistent service delivery.",
    paragraphs: [
      "The strongest results come from narrow, well-defined workflows. Instead of asking an agent to replace a whole process, high-performing teams use it to accelerate intake, summarize context, and surface the next best action.",
      "That approach keeps the human team in control while removing repetitive work. It also makes it much easier to measure impact, because every step is tied to a clear operational outcome.",
      "The organizations getting ahead are the ones treating AI as part of their service design, not as a separate innovation track. That shift creates faster delivery and a more reliable customer experience.",
    ],
    takeaways: [
      "Start with one workflow that already has measurable friction.",
      "Keep humans in the loop for decisions that affect customers.",
      "Measure time saved, response quality, and resolution speed together.",
    ],
  },
  {
    slug: "modern-engineering-teams-operating-model",
    title: "Top AI Software Development Solutions for Scaling Teams",
    category: "Engineering",
    date: "May 08, 2026",
    readTime: "4 min read",
    image: solutionsImage,
    summary:
      "What high-performing delivery teams are doing differently with architecture, collaboration, and release velocity.",
    eyebrow: "Featured editorial",
    intro:
      "Modern engineering teams are organizing around speed, ownership, and decision clarity instead of handoffs and heavy approval chains.",
    paragraphs: [
      "The operating model matters as much as the stack. Teams that move faster usually have smaller cross-functional groups, clearer product ownership, and fewer dependencies between release units.",
      "Architecture decisions are also more intentional. Rather than optimizing only for technical purity, these teams balance maintainability, release cadence, and the ability to learn from production quickly.",
      "The result is not just more shipping. It is a delivery system that is easier to coordinate, easier to improve, and easier to scale when priorities change.",
    ],
    takeaways: [
      "Reduce dependency chains before increasing delivery pressure.",
      "Make ownership visible from planning through release.",
      "Treat release velocity as an outcome of the system, not a one-off goal.",
    ],
  },
  {
    slug: "data-integration-strategic-advantage",
    title: "Turning Data into Strategy: The Power of Analytics",
    category: "Integration",
    date: "May 02, 2026",
    readTime: "5 min read",
    image: analyticsImage,
    summary:
      "The patterns that make ERP, CRM, and internal systems easier to scale as the business grows.",
    eyebrow: "Featured editorial",
    intro:
      "Integration stops being a support task when it becomes the backbone of how teams trust and use information across the business.",
    paragraphs: [
      "A good integration strategy starts with consistency. When systems share common identifiers, event patterns, and governance rules, data becomes easier to trace and easier to reuse.",
      "The next advantage is resilience. Well-structured integrations reduce the blast radius of change and make it possible to evolve core systems without stalling the rest of the business.",
      "That is why integration should be treated as a strategic capability rather than a collection of point-to-point fixes.",
    ],
    takeaways: [
      "Standardize key entities before expanding more integrations.",
      "Design for traceability so teams can diagnose issues quickly.",
      "Build for change, not only for the current operating model.",
    ],
  },
  {
    slug: "legacy-modernization-product-mindset",
    title: "Why Legacy Modernization Needs a Product Mindset",
    category: "Modernization",
    date: "Apr 28, 2026",
    readTime: "3 min read",
    image: minsetImage,
    summary:
      "A product-first view of modernization keeps teams focused on outcomes instead of infrastructure for its own sake.",
    eyebrow: "Deep dive",
    intro:
      "Modernization works best when the team treats the legacy system as a product surface with users, constraints, and measurable outcomes.",
    paragraphs: [
      "That perspective changes the conversation. Instead of asking what can be rewritten first, teams ask what experience is most valuable to improve and what risk is worth removing next.",
      "The product mindset keeps modernization tied to business priorities. It also prevents over-engineering by forcing each step to justify itself through customer impact or operational improvement.",
      "The most durable programs sequence work so each release earns trust and unlocks the next one.",
    ],
    takeaways: [
      "Tie every modernization phase to a user-facing or operational outcome.",
      "Ship in increments that reduce risk and prove value early.",
      "Measure the journey by reliability, speed, and team confidence.",
    ],
  },
  {
    slug: "secure-foundation-connected-businesses",
    title: "Designing a Secure Foundation for Connected Businesses",
    category: "Security",
    date: "Apr 22, 2026",
    readTime: "7 min read",
    image: securityImage,
    summary:
      "A practical approach to security that supports connected operations without slowing teams down.",
    eyebrow: "Deep dive",
    intro:
      "Security becomes much easier to maintain when it is built into the operating model instead of bolted on after delivery decisions are made.",
    paragraphs: [
      "Connected businesses need a simple baseline: clear identity controls, least-privilege access, and visibility into where data flows.",
      "The most effective programs are also designed for adoption. When controls are predictable and well-documented, teams follow them without workarounds.",
      "That balance between protection and usability is what keeps the business secure while allowing it to keep moving.",
    ],
    takeaways: [
      "Build security into workflows people already use.",
      "Document the critical data paths before expanding controls.",
      "Prefer repeatable guardrails over one-off manual reviews.",
    ],
  },
  {
    slug: "digital-teams-consistency",
    title: "What the Best Digital Teams Keep Consistent Across Projects",
    category: "Team Building",
    date: "Apr 18, 2026",
    readTime: "4 min read",
    image: consistencyImage,
    summary:
      "Shared patterns in communication, planning, and delivery help teams scale without losing quality.",
    eyebrow: "Operational note",
    intro:
      "The highest-performing teams do not rely on heroics. They rely on consistent habits that make projects easier to start, run, and finish.",
    paragraphs: [
      "Those habits usually include clearer planning rituals, stronger handoff discipline, and a small set of delivery standards everyone follows.",
      "Consistency also lowers cognitive load. When teams know how decisions are made and how work is reviewed, they spend less time re-litigating process and more time shipping valuable work.",
      "That is why consistency compounds: it improves both speed and quality at the same time.",
    ],
    takeaways: [
      "Keep rituals simple and repeatable across teams.",
      "Make quality standards visible and easy to follow.",
      "Reduce process variation where it does not add value.",
    ],
  },
];

export const featuredPosts = blogPosts.slice(0, 3);
export const recentPosts = blogPosts.slice(0, 6);
export const allBlogPosts = blogPosts;

export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export const pressReleases = [
  {
    slug: "biz4group-advances-proptech-innovation",
    title: "Biz4Group LLC Advances PropTech Innovation with Intelligent Automation Solutions",
    category: "PropTech",
    date: "May 24, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=640&auto=format&fit=crop",
    summary: "Biz4Group LLC, a leading AI software development firm, is driving the next generation of PropTech innovation with custom automation solutions that optimize building energy usage and property management.",
    location: "ORLANDO, Fla.",
    paragraphs: [
      "Biz4Group LLC, a premier technology engineering provider specializing in cognitive computing and smart architectures, today announced a milestone expansion of its Property Technology (PropTech) automation portfolio.",
      "The firm's new intelligent solutions leverage AI agent workflows and edge automation algorithms to help building operators track utility performance, automate HVAC cycles based on predictive occupant loads, and streamline preventative maintenance logs in real-time.",
      "By integrating sensor networks with deep learning models, property managers can achieve up to a 30% reduction in utility overhead while extending structural equipment lifecycle standards. The framework conforms with modern SOC2 compliance policies, ensuring safety and data confidentiality across enterprise smart grids.",
      "“We are bridging the gap between legacy building systems and cognitive operations,” said Sean Hynes, Technology Director at Biz4Group. “These automation agents help operators identify performance bottlenecks before they escalate, driving carbon offset efficiency and substantial ROI.”"
    ],
    contact: {
      name: "Marcus Miller",
      email: "media@biz4group.com",
      phone: "+1 (407) 555-0182"
    }
  },
  {
    slug: "biz4group-empowers-real-estate-investors",
    title: "Biz4Group LLC Empowers Real Estate Investors with AI-Driven Market Intelligence",
    category: "Analytics",
    date: "May 18, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=640&auto=format&fit=crop",
    summary: "Biz4Group develops AI real estate investment solutions that transform complex market data into actionable insights, providing developers and investors with predictive analytics on rental yields and asset valuations.",
    location: "NEW YORK, N.Y.",
    paragraphs: [
      "Biz4Group LLC has unveiled its new AI-driven Real Estate Market Intelligence suite, aiming to transform asset underwriting and risk assessment standards for commercial developers and real estate investment trusts (REITs).",
      "The predictive analytics platform ingests macro-economic trends, local construction permits, historical transaction data, and demographic flows to forecast capitalization rates and rental yield shifts over 3-year, 5-year, and 10-year horizons.",
      "Unlike traditional Excel-based projection models, Biz4Group’s neural pipelines adjust projections dynamically as market factors shift, lowering evaluation times by 60% and improving underwriting margin accuracy. The platform features responsive, interactive dashboards built on Next.js and secure REST API services.",
      "“Real estate decision-makers need tools that adapt to changing economic realities in real time,” stated Dave Caplis, Technical Director at Biz4Group. “Our intelligent engines parse vast unstructured datasets to help investors unlock actionable alpha, mitigating portfolio volatility.”"
    ],
    contact: {
      name: "Elena Rostova",
      email: "pr@biz4group.com",
      phone: "+1 (212) 555-0149"
    }
  },
  {
    slug: "biz4group-announces-next-gen-ai-solutions",
    title: "Biz4Group LLC Announces Next-Gen AI Solutions for Real Estate Businesses",
    category: "AI Technology",
    date: "May 10, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=640&auto=format&fit=crop",
    summary: "Introducing state-of-the-art generative AI integration models designed to automate property matching, customer qualification chatbots, and scheduling processes for modern real estate operations.",
    location: "ORLANDO, Fla.",
    paragraphs: [
      "Biz4Group LLC has officially announced a suite of Next-Generation AI integrations customized for residential and commercial brokerage networks looking to scale lead workflows and operations.",
      "The technology release centers on conversational qualification bots that integrate directly with MLS databases to resolve client property search requests. The AI agents manage scheduling pipelines, check customer credit standards, and match user criteria with listings in seconds.",
      "These advancements resolve operational bottlenecks for busy brokerages, allowing agents to focus on client relationships and closings. The system is designed to seamlessly connect with Salesforce CRM, HubSpot, and Twilio communication channels.",
      "“We want to make the real estate search process immediate and highly personalized,” said Sanjeev Verma, Founder & CEO at Biz4Group. “Our Next-Gen AI solutions give brokerages a competitive edge by automating intake scheduling and client matching workflows smoothly.”"
    ],
    contact: {
      name: "Marcus Miller",
      email: "media@biz4group.com",
      phone: "+1 (407) 555-0182"
    }
  },
  {
    slug: "biz4group-top-ai-healthcare-provider",
    title: "Biz4Group LLC Emerges as a Top AI Healthcare Solutions Provider",
    category: "Healthcare",
    date: "May 02, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=640&auto=format&fit=crop",
    summary: "Biz4Group LLC has been recognized as a leading provider of custom AI healthcare solutions, introducing automated EHR inputs and virtual medical agents to U.S. hospital networks.",
    location: "CHICAGO, Ill.",
    paragraphs: [
      "Biz4Group LLC today announced its ranking as a leading U.S. provider of healthcare-focused artificial intelligence solutions, awarded for its pioneering work in medical documentation automation and EHR systems.",
      "The firm's clinical assistant tools help healthcare groups convert oral clinical interactions into structured medical records with high diagnostic classification speed. The system parses speech segments and tags symptoms based on ICD-10 medical protocols.",
      "Designed with strict compliance, the clinical models operate in completely HIPAA-secure isolated cloud servers. Early studies report hospital systems utilizing the automation agents save up to 15 hours of manual data entry per practitioner weekly.",
      "“Our goal is to reduce cognitive fatigue for doctors,” said Apporva Verma, Chief People Officer at Biz4Group. “By automating the intake and record-creation workflows, we help medical workers spend more focus time with patient care.”"
    ],
    contact: {
      name: "Elena Rostova",
      email: "pr@biz4group.com",
      phone: "+1 (212) 555-0149"
    }
  },
  {
    slug: "biz4group-autonomous-agent-platform",
    title: "Biz4Group LLC Launches Autonomous AI Agent Orchestration Platform",
    category: "Product Launch",
    date: "Apr 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=640&auto=format&fit=crop",
    summary: "Biz4Group LLC has launched its enterprise-grade Multi-Agent Orchestration Platform, enabling businesses to deploy cooperating AI agents that handle multi-step workflows.",
    location: "ORLANDO, Fla.",
    paragraphs: [
      "Biz4Group LLC, a technology development leader, today announced the release of its new enterprise AI orchestration engine, codenamed AgentFlow-3.",
      "The system allows developers to link specialized cognitive agents together, enabling them to communicate, share memory blocks, and cooperatively execute multi-step business transactions. Example integrations include automated customer intake connecting to credit checking, ledger logging, and notification channels.",
      "AgentFlow-3 includes built-in cost tracking, rate-limiting guards, and audit logs. Early integrations in pilot organizations have demonstrated a 40% reduction in workflow latency and improved output consistency compared to single-prompt pipelines.",
      "“Single-agent models have key boundaries,” said Sean Hynes, Technology Director at Biz4Group. “AgentFlow-3 facilitates cooperative problem solving among specialized agents, unlocking automation possibilities for complex operational workflows.”"
    ],
    contact: {
      name: "Marcus Miller",
      email: "media@biz4group.com",
      phone: "+1 (407) 555-0182"
    }
  }
];


export const featuredPressReleases = pressReleases.slice(0, 3);

export const caseStudies = [
  {
    slug: "case-study-trainwell-ai",
    title: "Transforming Insurance Training with AI - Meet Trainwell AI",
    category: "AI Training",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=640&auto=format&fit=crop",
    summary: "How we built an AI-powered avatar of our client that helped them train insurance agents with a 50% improvement in training efficiency.",
    challenge: "Traditional onboarding and sales training for insurance adjusters and brokers relied heavily on manual shadowing, case reviews, and classroom seminars. This approach led to long ramp-up cycles, high training expenditures, and significant inconsistencies in how agents evaluated policy guidelines and managed customer claims.",
    solution: "We engineered Trainwell AI, a conversational training simulator featuring dynamic, lifelike AI avatars that mimic policyholders during complex claim adjustments. Using real-time NLP dialogue modeling, the system dynamically grades agents on parameter validation, dispute mitigation, and claim logging speed.",
    achievements: [
      "Simulates over 150 unique customer risk and claim scenarios.",
      "Instant feedback metrics grading communication empathy and procedural conformity.",
      "Personalized learning dashboards that track skill gap analysis over time."
    ],
    stats: [
      { value: "50%", label: "Training Efficiency" },
      { value: "$120K+", label: "Annual Cost Saved" },
      { value: "92%", label: "Agent Readiness Score" }
    ],
    testimonial: {
      text: "Trainwell AI has completely overhauled our onboarding workflow. Our new hires are field-ready in half the time, and their claim validation accuracy has skyrocketed.",
      author: "Samantha Reynolds",
      role: "VP of Talent & Onboarding, Beacon Insurance Group"
    },
    meta: {
      client: "Beacon Insurance Group",
      industry: "Insurance & FinTech",
      techStack: ["Next.js", "Python", "FastAPI", "WebRTC", "OpenAI GPT-4", "Pinecone"],
      timeline: "4 Months",
      services: ["Agentic AI Development", "AI App Development", "UI/UX Design"]
    }
  },
  {
    slug: "case-study-nextlpc",
    title: "AI-powered eLearning Platform for Therapy Students",
    category: "EdTech",
    date: "May 05, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=640&auto=format&fit=crop",
    summary: "Developing a first-of-its-kind Avatar-based AI eLearning solution for psychotherapy students to practice client counseling.",
    challenge: "Psychotherapy students face high-stakes practical examinations with real clients before certification. However, sourcing roleplayers to mimic diverse behavioral conditions is expensive, and scheduling constraints restrict students' clinical training hours.",
    solution: "We designed an interactive learning portal incorporating avatar-based AI personas representing clients experiencing various clinical conditions. Students conduct video-based and text-based mock counseling sessions, receiving structured reports on diagnostic identification, safety protocols, and therapeutic alignment.",
    achievements: [
      "Interactive voice and text conversations driven by customized clinical guardrails.",
      "Automated evaluation engines scoring clinical compliance and active listening behaviors.",
      "Scalable infrastructure hosting thousands of simultaneous mock sessions."
    ],
    stats: [
      { value: "3x", label: "Increase in Practice Hours" },
      { value: "95%", label: "Student Test Passing Rate" },
      { value: "0", label: "Incident Rate with Live Patients" }
    ],
    testimonial: {
      text: "By utilizing this simulator, our students gain real clinical experience in a safe, automated environment. It has set a new standard for psychotherapy education in our institution.",
      author: "Dr. Arthur Vance",
      role: "Dean of Clinical Psychology, NextGen University"
    },
    meta: {
      client: "NextGen University",
      industry: "Education & Mental Health",
      techStack: ["React", "Express", "Node.js", "Hugging Face Models", "PostgreSQL"],
      timeline: "5 Months",
      services: ["AI Agent Development", "EdTech Software Solutions", "Full Stack Development"]
    }
  },
  {
    slug: "case-study-hrms",
    title: "AI-Powered HRMS for a Staffing Agency",
    category: "Staffing Solutions",
    date: "Apr 25, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=640&auto=format&fit=crop",
    summary: "How we built an AI-powered human resource management system that helped the ShiftFit staffing agency achieve 25% reduction in operational costs.",
    challenge: "ShiftFit struggled with scheduling temporary workers across scattered shifts, verifying compliance certificates, and processing timesheets manually. These hurdles led to administrative bottlenecks, payroll inaccuracies, and high employee turnover rates.",
    solution: "We delivered an AI-driven HRMS platform featuring auto-scheduling rules, predictive shift allocation, automated document verification via OCR, and seamless accounting integration. The system suggests optimal candidates based on availability, experience, and proximity.",
    achievements: [
      "AI shift matching engine that matches open shifts in seconds.",
      "OCR verification validating health and compliance credentials automatically.",
      "Integrated secure accounting bridges for instant payroll computations."
    ],
    stats: [
      { value: "25%", label: "Reduction in Overhead" },
      { value: "98%", label: "Timesheet Processing Speed" },
      { value: "10K+", label: "Shift Matches Completed" }
    ],
    testimonial: {
      text: "The auto-scheduling matching engine has transformed our operations. We no longer spend hours on manual dispatching, allowing us to focus on growing our client relationships.",
      author: "Edward Croft",
      role: "COO, ShiftFit Logistics & Staffing"
    },
    meta: {
      client: "ShiftFit Staffing Agency",
      industry: "Staffing & Human Resources",
      techStack: ["Next.js", "NestJS", "MongoDB", "AWS Textract", "Redis", "Stripe API"],
      timeline: "3 Months",
      services: ["AI-Powered Staffing Software", "Software Solutions Integrations", "Full Stack Development"]
    }
  },
  {
    slug: "case-study-smart-factory",
    title: "OPC-UA Asset Integration for Smart Factory Operations",
    category: "IoT & Industry 4.0",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=640&auto=format&fit=crop",
    summary: "Connecting legacy PLCs and machinery to a secure cloud IoT analytics pipeline using standardized OPC-UA data models.",
    challenge: "A leading automotive parts manufacturer operated scattered CNC machines and legacy assembly lanes lacking central communication channels. Operational teams were unable to track real-time machine efficiency, resulting in unplanned downtime and high tooling failure scrap rates.",
    solution: "We deployed edge gateway bridges running custom OPC-UA connectors that secure and model machine metrics. The telemetry flows into a centralized Kafka pipeline, analyzing Machine OEE, thermal thresholds, and mechanical vibrations via custom analytics engines.",
    achievements: [
      "Standardized data telemetry across 80+ legacy and modern CNC machines.",
      "Configured real-time OEE dashboards displaying device-level cycle details.",
      "Implemented predictive maintenance alerts for early spindle wear detection."
    ],
    stats: [
      { value: "18%", label: "Increase in Machine OEE" },
      { value: "35%", label: "Reduction in Downtime" },
      { value: "12ms", label: "Edge-to-Cloud Telemetry Latency" }
    ],
    testimonial: {
      text: "The OPC-UA integration gave us full visibility into our assembly lines. We can now react to spindle failures before they occur, saving thousands in scrap metal costs daily.",
      author: "Douglas Vance",
      role: "Operations Director, MotoCorp Manufacturing"
    },
    meta: {
      client: "MotoCorp Manufacturing",
      industry: "Automotive & Heavy Industry",
      techStack: ["Node-RED", "Docker", "Apache Kafka", "InfluxDB", "Grafana", "OPC-UA SDK"],
      timeline: "6 Months",
      services: ["IoT Product Development", "IoT Solutions Integrations", "Full Stack Development"]
    }
  },
  {
    slug: "case-study-headless-personalization",
    title: "Headless Personalization Engine for Global Fashion Retailer",
    category: "E-Commerce",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=640&auto=format&fit=crop",
    summary: "Refactoring a monolith platform into a fast Next.js headless storefront equipped with AI personalization recommendations.",
    challenge: "A retail clothing brand experienced high bounce rates and poor conversions due to slow page load speeds on their legacy e-commerce platform. Furthermore, their static suggestion engine was unable to target shoppers' individual tastes dynamically.",
    solution: "We decoupled the storefront using Next.js on Vercel, connecting to a commerce backend via GraphQL APIs. We integrated a real-time behavioral recommendation model that tailors product placements based on user clicks and search intent.",
    achievements: [
      "Decreased core page loads from 4.2 seconds to 650ms worldwide.",
      "Deployed behavioral AI recommendation modules boosting average cart value.",
      "Built multi-region localization schemas for currency, tax, and inventory sync."
    ],
    stats: [
      { value: "220%", label: "Storefront Load Velocity" },
      { value: "14%", label: "Increase in Checkout CSAT" },
      { value: "3.2x", label: "Recommendation Conversions" }
    ],
    testimonial: {
      text: "Our conversion rate jumped immediately after launch. Shifting headless has allowed us to deliver an ultra-fast customer experience that feels uniquely personalized to every visitor.",
      author: "Vanessa Albright",
      role: "Digital Commerce Officer, Aura Threads Global"
    },
    meta: {
      client: "Aura Threads Global",
      industry: "Retail & E-Commerce",
      techStack: ["Next.js", "GraphQL", "Shopify Plus", "Algolia", "Tailwind CSS", "Python AI Engine"],
      timeline: "5 Months",
      services: ["Headless E-Commerce Platform", "Custom Software Development", "Web Development"]
    }
  }
];

export const featuredCaseStudies = caseStudies.slice(0, 3);