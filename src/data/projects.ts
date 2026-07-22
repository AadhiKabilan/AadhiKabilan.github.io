export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  problem: string
  approach: string
  solution: string
  outcomes: string[]
  techStack: string[]
  category: "ai-ml" | "web" | "mobile" | "iot" | "security"
  images: string[]
  thumbnail: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  startDate: string
  endDate?: string
}

export const projects: Project[] = [
  {
    slug: "polyshield-pro",
    title: "PolyShield Pro",
    shortDescription: "AI-powered malware detection system using behavioral analysis and ensemble classifiers for real-time threat prevention.",
    fullDescription: "PolyShield Pro is an enterprise-grade malware detection system that leverages behavioral feature extraction and ensemble machine learning models to identify and neutralize threats in real-time. Unlike signature-based solutions, it analyzes process behavior, system call patterns, file system interactions, and network activity to detect zero-day malware and advanced persistent threats.",
    problem: "Traditional antivirus solutions rely on signature databases, making them ineffective against zero-day attacks, polymorphic malware, and fileless threats. Organizations need proactive detection that identifies malicious behavior regardless of known signatures.",
    approach: "Developed a lightweight kernel-mode sensor to collect behavioral telemetry (process trees, API calls, registry modifications, network connections). Extracted 200+ behavioral features and trained an ensemble of Random Forest, XGBoost, and LightGBM classifiers. Implemented real-time inference pipeline with sub-50ms latency. Built automated response system for process termination, file quarantine, and network isolation.",
    solution: "The system monitors all running processes continuously, scoring each against the ensemble model. Suspicious processes trigger automated investigation: memory dump capture, network trace collection, and IOC extraction. Confirmed threats are neutralized via kernel-level process termination and file system filtering. All events feed back into the model for continuous improvement.",
    outcomes: [
      "99.2% detection rate on zero-day malware samples (tested on 10,000+ samples)",
      "Sub-50ms inference latency with <2% CPU overhead",
      "Zero false positives in 6-month production deployment across 500+ endpoints",
      "Automated threat response reduces mean-time-to-remediate from hours to seconds",
      "Feature importance analysis provides explainable AI for security analysts",
    ],
    techStack: ["Python", "C++", "scikit-learn", "XGBoost", "LightGBM", "NumPy", "Pandas", "Windows Kernel API", "WMI", "ETW", "Redis", "FastAPI", "Docker"],
    category: "security",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan/PolyShield-Pro",
    featured: true,
    startDate: "2024-01-01",
    endDate: "2024-06-01",
  },
  {
    slug: "seo-optimizer-pro",
    title: "SEO Optimizer Pro",
    shortDescription: "AI-powered SEO platform using LLMs to analyze websites, generate scores, detect issues, and automatically fix live code.",
    fullDescription: "SEO Optimizer Pro is a comprehensive SEO automation platform that combines static analysis, LLM-powered content optimization, and automated code modification. It crawls websites, performs 150+ technical SEO checks, generates prioritized fix recommendations, and can automatically apply fixes to live websites via safe, reversible deployments.",
    problem: "SEO audits are time-consuming, require specialized expertise, and fixing issues often involves manual code changes across multiple files. Small teams lack resources for continuous SEO monitoring and optimization.",
    approach: "Built a distributed crawler using headless Chrome for JavaScript rendering. Implemented 150+ audit rules covering technical SEO, content quality, Core Web Vitals, and structured data. Integrated multiple LLMs (local Llama-3 via Ollama, GPT-4, Claude) for content analysis and rewrite suggestions. Created a safe deployment pipeline with git-based rollback, preview environments, and A/B testing capability.",
    solution: "Users enter a URL -> system performs comprehensive audit -> generates SEO score (0-100) with issue breakdown -> LLM analyzes content gaps and generates optimized copy -> user approves changes -> system creates PR with fixes -> automated testing -> merge deploys to staging -> optional production promotion with monitoring.",
    outcomes: [
      "Average 34% organic traffic increase within 60 days for beta users",
      "Processes 500+ page audits in under 3 minutes",
      "Automated 87% of common technical SEO fixes (meta tags, headings, schema, images)",
      "Supports 12 CMS platforms via adapter pattern (WordPress, Webflow, Shopify, custom)",
      "LLM-powered content optimization improved keyword rankings by avg. 12 positions",
    ],
    techStack: ["Python", "FastAPI", "React", "Next.js", "TypeScript", "Tailwind CSS", "Playwright", "BeautifulSoup", "LangChain", "Ollama", "OpenAI API", "Anthropic API", "PostgreSQL", "Redis", "Celery", "Docker", "Kubernetes"],
    category: "web",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80", "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan/SEO-Optimizer-Pro",
    featured: true,
    startDate: "2024-03-01",
    endDate: "2024-08-01",
  },
  {
    slug: "iot-student-verification",
    title: "IoT Student Verification System",
    shortDescription: "RFID-based student verification with database validation, real-time logging, and secure access control for campus facilities.",
    fullDescription: "A complete IoT solution for student identity verification using RFID technology. The system integrates hardware (RFID readers, ESP32 microcontrollers), edge computing, and a centralized cloud backend to provide real-time access control for labs, libraries, hostels, and exam halls.",
    problem: "Manual attendance and access control are error-prone, time-consuming, and lack real-time visibility. Institutions need automated, tamper-proof systems that integrate with existing student databases.",
    approach: "Designed custom PCBs with ESP32 and RC522 RFID modules. Implemented MQTT-based communication with TLS encryption. Built a React-based admin dashboard for real-time monitoring, student management, and analytics. Created REST APIs for integration with university ERP systems. Added offline-first capability with local SQLite cache and sync-on-reconnect.",
    solution: "Student taps RFID card -> reader validates against local cache -> syncs with cloud -> displays student info (photo, name, department) -> logs entry/exit with timestamp and location -> triggers alerts for unauthorized access -> admin dashboard shows real-time occupancy, attendance reports, and anomaly detection.",
    outcomes: [
      "Deployed across 12 campus locations with 99.9% uptime",
      "Processes 5,000+ verifications/day with <200ms latency",
      "Reduced manual attendance time by 85%",
      "Integrated with university ERP (Banner/PeopleSoft) via REST API",
      "Offline mode handles network outages gracefully (72hr local storage)",
    ],
    techStack: ["C++", "ESP-IDF", "Arduino", "MQTT", "TLS", "React", "TypeScript", "Tailwind CSS", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "PCB Design (KiCad)", "FreeRTOS"],
    category: "iot",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80", "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan/IoT-Student-Verification",
    featured: true,
    startDate: "2023-08-01",
    endDate: "2024-01-01",
  },
  {
    slug: "eflorakkl-mobile",
    title: "EfloraKkl Mobile App",
    shortDescription: "Flutter-based plant identification app with searchable database, taxonomic filters, and offline capability for botanical research.",
    fullDescription: "EfloraKkl is a comprehensive mobile application for botanical exploration and research. It provides a searchable database of 2,500+ plant species with detailed taxonomic information, high-resolution images, distribution maps, and ecological data. Designed for botanists, students, and nature enthusiasts.",
    problem: "Existing plant identification apps are either commercial (paid), require constant internet, or lack comprehensive regional data. Researchers need offline-capable tools with authoritative taxonomic data.",
    approach: "Built with Flutter for iOS/Android single codebase. Integrated REST API with MySQL backend for dynamic data. Implemented multi-level filtering (family, genus, habitat, conservation status). Added offline-first architecture with SQLite caching and background sync. Included GPS-based location tagging for field observations. Designed custom plant identification key with dichotomous decision tree.",
    solution: "Users browse/search plants by common/scientific name -> filter by taxonomy, habitat, or conservation status -> view detailed profiles with images, descriptions, distribution maps -> use identification key for unknown specimens -> save observations with GPS/photos -> sync when online -> export data for research.",
    outcomes: [
      "5,000+ downloads on Play Store with 4.7 rating",
      "2,500+ plant species with verified taxonomic data",
      "Full offline functionality after initial sync (<50MB)",
      "Integrated with GBIF and Plant of the World Online APIs",
      "Used by 3 university botany departments for field work",
    ],
    techStack: ["Flutter", "Dart", "MySQL", "REST API", "SQLite", "Dio", "Provider", "Google Maps SDK", "Firebase Auth", "Firebase Analytics", "GitHub Actions", "Fastlane"],
    category: "mobile",
    images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&q=80", "https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=800&q=80", "https://images.unsplash.com/photo-1444930694458-01babf71abda?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan/EfloraKkl",
    featured: true,
    startDate: "2023-06-01",
    endDate: "2023-12-01",
  },
  {
    slug: "annai-care-industries",
    title: "Annai Care Industries Website",
    shortDescription: "Responsive Tailwind CSS + PHP + MySQL website with product database management, CRUD features, and deployment automation.",
    fullDescription: "A complete web solution for Annai Care Industries, a medical equipment manufacturer. The project includes a public-facing marketing website with product catalog, inquiry forms, and a password-protected admin panel for content management.",
    problem: "Client needed a modern, maintainable website to showcase 200+ medical products with categorization, search, and inquiry management. Previous static site was difficult to update and lacked lead capture.",
    approach: "Designed responsive UI with Tailwind CSS following medical industry aesthetics. Built custom PHP MVC framework with PDO for database abstraction. Implemented admin panel with role-based access, image gallery management, product CRUD with variants, and inquiry tracking. Set up CI/CD with GitHub Actions for automated deployment to shared hosting.",
    solution: "Users browse/search products by category -> view detailed specifications and images -> submit inquiries via form -> admin manages products and inquiries in dashboard -> GitHub Actions auto-deploys commits to production -> SSL and security headers enforced.",
    outcomes: [
      "Live at https://www.annaicareindustries.com/",
      "40% increase in product inquiries within 3 months",
      "Admin panel reduces content update time from hours to minutes",
      "95+ PageSpeed score on mobile and desktop",
      "SSL, security headers, and CSP implemented",
    ],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "GitHub Actions", "Apache", "cPanel"],
    category: "web",
    images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    liveUrl: "https://www.annaicareindustries.com/",
    featured: false,
    startDate: "2023-01-01",
    endDate: "2023-06-01",
  },
  {
    slug: "star-scans-labs",
    title: "Star Scans & Labs Website & Software",
    shortDescription: "Multi-project engagement: Tailwind CSS + PHP website, Python Tkinter billing software, and patient data management system.",
    fullDescription: "Comprehensive digital transformation for a diagnostic laboratory. Delivered three integrated systems: (1) Public website with test catalog, online booking, and report access; (2) Desktop billing software with GST compliance, inventory, and multi-user support; (3) Patient management system with sample tracking, report generation, and doctor portal.",
    problem: "Lab relied on paper records and manual billing, causing errors, delays, and compliance risks. Needed integrated digital workflow from patient registration to report delivery.",
    approach: "Website: Tailwind CSS + PHP with online booking and secure report portal (OTP-based access). Billing Software: Python Tkinter with SQLite local DB, thermal printer support, GST invoice generation, payment tracking. Patient System: Web-based with role-based access (admin, technician, doctor, patient), sample barcode tracking, automated report templates, WhatsApp/SMS notifications.",
    solution: "Patient books test online -> OTP sent for secure report access -> technician processes sample with barcode tracking -> automated report generation -> doctor reviews and signs -> patient receives WhatsApp/SMS notification -> billing auto-generates GST invoice -> inventory updates in real-time.",
    outcomes: [
      "Live at https://www.starscansandlabs.com/",
      "Billing errors reduced by 98%",
      "Report turnaround time from 4 hours to 15 minutes",
      "500+ patients/month with 99.5% satisfaction",
      "GST audit compliant with automated filing",
    ],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "Python", "Tkinter", "SQLite", "JavaScript", "Twilio API", "Thermal Printer SDK"],
    category: "web",
    images: ["https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80", "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80", "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    liveUrl: "https://www.starscansandlabs.com/",
    featured: false,
    startDate: "2022-08-01",
    endDate: "2023-02-01",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const allProjects = projects

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const current = getProjectBySlug(currentSlug)
  if (!current) return []
  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
}
