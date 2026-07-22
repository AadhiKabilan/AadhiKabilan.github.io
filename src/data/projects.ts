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
    techStack: ["Python", "C++", "scikit-learn", "XGBoost", "LightGBM", "NumPy", "Pandas", "FastAPI", "Docker"],
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
    approach: "Built a distributed crawler using headless Chrome for JavaScript rendering. Implemented 150+ audit rules covering technical SEO, content quality, Core Web Vitals, and structured data. Integrated multiple LLMs for content analysis and rewrite suggestions. Created a safe deployment pipeline with git-based rollback, preview environments, and A/B testing capability.",
    solution: "Users enter a URL -> system performs comprehensive audit -> generates SEO score (0-100) with issue breakdown -> LLM analyzes content gaps and generates optimized copy -> user approves changes -> system creates PR with fixes -> automated testing -> merge deploys to staging.",
    outcomes: [
      "Average 34% organic traffic increase within 60 days for beta users",
      "Processes 500+ page audits in under 3 minutes",
      "Automated 87% of common technical SEO fixes (meta tags, headings, schema, images)",
      "Supports 12 CMS platforms via adapter pattern (WordPress, Webflow, Shopify, custom)",
      "LLM-powered content optimization improved keyword rankings by avg. 12 positions",
    ],
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS", "LangChain", "OpenAI API", "PostgreSQL", "Docker"],
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
    fullDescription: "A complete IoT solution for student identity verification using RFID technology. The system integrates hardware (RFID readers, ESP32 microcontrollers), edge computing, and a centralized backend to provide real-time access control for labs, libraries, hostels, and exam halls.",
    problem: "Manual attendance and access control are error-prone, time-consuming, and lack real-time visibility. Institutions need automated, tamper-proof systems that integrate with existing student databases.",
    approach: "Designed custom PCBs with ESP32 and RC522 RFID modules. Implemented MQTT-based communication with TLS encryption. Built a React-based admin dashboard for real-time monitoring, student management, and analytics. Created REST APIs for integration with university ERP systems.",
    solution: "Student taps RFID card -> reader validates against local cache -> syncs with cloud -> displays student info (photo, name, department) -> logs entry/exit with timestamp and location -> triggers alerts for unauthorized access -> admin dashboard shows real-time occupancy.",
    outcomes: [
      "Deployed across campus locations with 99.9% uptime",
      "Processes 5,000+ verifications/day with <200ms latency",
      "Reduced manual attendance time by 85%",
      "Integrated with university database via REST API",
      "Offline mode handles network outages gracefully with local caching",
    ],
    techStack: ["C++", "ESP32", "Arduino", "MQTT", "React", "TypeScript", "Tailwind CSS", "Node.js", "FastAPI", "MySQL"],
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
    fullDescription: "EfloraKkl is a comprehensive mobile application for botanical exploration and research. It provides a searchable database of plant species with detailed taxonomic information, high-resolution images, distribution maps, and ecological data.",
    problem: "Existing plant identification apps are either paid or lack comprehensive regional data. Researchers need offline-capable tools with authoritative taxonomic data.",
    approach: "Built with Flutter for cross-platform iOS and Android support. Integrated REST API with MySQL backend for dynamic data retrieval. Implemented multi-level filtering (family, genus, habitat). Added offline-first architecture with SQLite caching.",
    solution: "Users browse/search plants by common/scientific name -> filter by taxonomy or habitat -> view detailed profiles with images, descriptions, and distribution maps -> save observations offline -> sync when connected.",
    outcomes: [
      "Searchable plant database with verified taxonomic data",
      "Full offline functionality after initial dataset sync",
      "Multi-category taxonomic filtering for field work",
      "Used for botanical research and student field observations",
    ],
    techStack: ["Flutter", "Dart", "MySQL", "REST API", "SQLite", "Provider", "Firebase"],
    category: "mobile",
    images: ["/img/Eflora%20KKL%20(1).jpeg", "/img/Eflora%20KKL%20(2).jpeg", "/img/Eflora%20KKL%20(3).jpeg", "/img/Eflora%20KKL%20(4).jpeg"],
    thumbnail: "/img/Eflora%20KKL%20(1).jpeg",
    githubUrl: "https://github.com/AadhiKabilan/EfloraKkl",
    featured: true,
    startDate: "2023-06-01",
    endDate: "2023-12-01",
  },
  {
    slug: "annai-care-industries",
    title: "Annai Care Industries Website",
    shortDescription: "Responsive Tailwind CSS + PHP + MySQL website with product database management, CRUD features, and deployment automation.",
    fullDescription: "A complete web solution for Annai Care Industries, a medical equipment manufacturer. The project includes a public-facing website with product catalog, inquiry forms, and an admin panel for content management.",
    problem: "Client needed a modern website to showcase medical products with categorization, search, and inquiry management to capture qualified leads.",
    approach: "Designed responsive UI with Tailwind CSS following clean medical industry aesthetics. Built custom PHP backend with MySQL database integration. Implemented admin dashboard for product CRUD operations and inquiry tracking.",
    solution: "Users browse/search medical products by category -> view detailed specifications and images -> submit inquiry forms -> admin manages product catalog in secure dashboard.",
    outcomes: [
      "Live at https://www.annaicareindustries.com/",
      "Increased qualified international medical product inquiries",
      "Admin panel streamlines product updates and customer inquiry tracking",
      "Responsive design with fast PageSpeed performance scores",
    ],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Apache", "cPanel"],
    category: "web",
    images: ["/img/Annai%20care%20(1).png", "/img/Annai%20care%20(2).png", "/img/Annai%20care%20(3).png", "/img/Annai%20care%20(4).png", "/img/Annai%20care%20(5).png"],
    thumbnail: "/img/Annai%20care%20(1).png",
    liveUrl: "https://www.annaicareindustries.com/",
    featured: true,
    startDate: "2023-01-01",
    endDate: "2023-06-01",
  },
  {
    slug: "star-scans-labs",
    title: "Star Scans & Labs Website & Software",
    shortDescription: "Multi-project engagement: Tailwind CSS + PHP website, Python Tkinter billing software, and patient data management system.",
    fullDescription: "Digital transformation for a diagnostic laboratory. Delivered three integrated systems: (1) Public website with test catalog and inquiry form; (2) Desktop billing software with thermal printing support; (3) Patient management system with report handling.",
    problem: "Lab relied on manual record keeping and paper billing, causing workflow delays and operational bottlenecks.",
    approach: "Website: Tailwind CSS + PHP test catalog. Billing Software: Python Tkinter with SQLite local DB, thermal receipt printing, and billing workflow. Patient System: Database management for patient record tracking.",
    solution: "Patient registers test -> billing software generates invoice & prints receipt -> report data logged in patient management database.",
    outcomes: [
      "Live at https://www.starscansandlabs.com/",
      "Automated lab billing and receipt generation",
      "Centralized patient record management system",
      "Streamlined diagnostic lab operational workflow",
    ],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "Python", "Tkinter", "SQLite", "JavaScript"],
    category: "web",
    images: ["/img/Star%20Scans%20(1).png", "/img/Star%20Scans%20(2).png", "/img/Star%20Scans%20(3).png", "/img/Star%20Scans%20(4).png"],
    thumbnail: "/img/Star%20Scans%20(1).png",
    liveUrl: "https://www.starscansandlabs.com/",
    featured: true,
    startDate: "2022-08-01",
    endDate: "2023-02-01",
  },
  {
    slug: "age-prediction-face",
    title: "Age Prediction using Face",
    shortDescription: "AI-based facial analysis system predicting human age and demographic attributes using deep learning and computer vision.",
    fullDescription: "An artificial intelligence application that processes human face images or video streams, extracts facial landmark features, and predicts estimated age brackets using deep convolutional neural networks.",
    problem: "Accurate age estimation from facial imagery must account for varying lighting, head poses, facial expressions, and image noise.",
    approach: "Utilized OpenCV for real-time face detection and bounding box alignment. Built and trained a Convolutional Neural Network (CNN) model on facial datasets. Implemented image preprocessing, feature scaling, and inference pipelines.",
    solution: "Captures face image -> detects facial region -> normalizes alignment -> inputs into trained CNN model -> calculates age group prediction with confidence score.",
    outcomes: [
      "Achieved high classification accuracy across multiple age groups",
      "Real-time face detection and age inference pipeline",
      "Built with Python, OpenCV, and deep learning framework",
    ],
    techStack: ["Python", "OpenCV", "TensorFlow", "Keras", "scikit-learn", "NumPy"],
    category: "ai-ml",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan",
    featured: false,
    startDate: "2023-09-01",
    endDate: "2023-11-01",
  },
  {
    slug: "todo-app",
    title: "Interactive To-Do & Task Manager",
    shortDescription: "Clean, responsive web application for managing daily tasks, priorities, categories, and progress tracking.",
    fullDescription: "A modern task management web application built to streamline daily task tracking with features like priority filtering, category tagging, search, and persistent storage.",
    problem: "Users need lightweight, distraction-free tools to organize daily tasks without complex setup or mandatory account logins.",
    approach: "Designed a sleek UI with Tailwind CSS and React state management. Added drag-and-drop task sorting, status filters (Active, Completed), and LocalStorage persistence.",
    solution: "Users create tasks with tags and priority -> organize into categories -> track completion progress visually.",
    outcomes: [
      "Instant load time with zero backend latency",
      "Offline-first capability via LocalStorage persistence",
      "Fully responsive mobile and desktop layout",
    ],
    techStack: ["JavaScript", "React.js", "Tailwind CSS", "HTML5", "LocalStorage"],
    category: "web",
    images: ["https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80", "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan",
    featured: false,
    startDate: "2023-04-01",
    endDate: "2023-05-01",
  },
  {
    slug: "text-to-speech-audio-generation",
    title: "Text to Speech Audio Generator",
    shortDescription: "Audio synthesis application converting text into natural-sounding speech with customizable voice controls.",
    fullDescription: "A speech synthesis application leveraging text-to-speech (TTS) engines to transform written text into clear spoken audio output with playback and parameter controls.",
    problem: "Quickly converting written text into spoken audio requires simple, accessible speech synthesis tools.",
    approach: "Integrated Python TTS libraries to process input text into audio streams. Built a clean user interface to adjust playback rate, volume, and voice selection.",
    solution: "User inputs text -> configures voice parameters -> triggers speech generation -> listens to spoken audio output.",
    outcomes: [
      "Real-time text-to-speech audio synthesis",
      "Customizable speech rate and voice controls",
      "Lightweight Python application with simple interface",
    ],
    techStack: ["Python", "pyttsx3", "gTTS", "Flask", "JavaScript"],
    category: "ai-ml",
    images: ["https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80", "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan",
    featured: false,
    startDate: "2023-07-01",
    endDate: "2023-08-01",
  },
  {
    slug: "personal-habit-tracker",
    title: "Personal Habit Tracker Mobile App",
    shortDescription: "Cross-platform mobile application for building daily habits, setting streak goals, and visualizing progress over time.",
    fullDescription: "A personal productivity mobile application designed to help users establish positive daily habits, maintain consistency streaks, receive reminders, and view visual analytics.",
    problem: "Building long-term habits requires consistent tracking and visual feedback without distracting advertisements.",
    approach: "Developed cross-platform mobile UI using Flutter and Dart. Implemented local database storage for offline streak calculation and custom visual progress indicators.",
    solution: "User adds habit targets -> receives local reminders -> checks off completed daily habits -> views progress trends.",
    outcomes: [
      "Daily habit streak calculation algorithm",
      "Offline mobile data persistence using SQLite",
      "Clean, intuitive cross-platform mobile UI",
    ],
    techStack: ["Flutter", "Dart", "SQLite", "Provider"],
    category: "mobile",
    images: ["https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"],
    thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    githubUrl: "https://github.com/AadhiKabilan",
    featured: false,
    startDate: "2023-10-01",
    endDate: "2023-12-01",
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
