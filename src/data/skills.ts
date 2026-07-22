export interface Skill {
  name: string
  category: 'languages' | 'web' | 'ai-ml' | 'tools' | 'databases'
  proficiency: number
  icon?: string
  iconUrl?: string
  description: string
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'C++',
    category: 'languages',
    proficiency: 90,
    icon: 'cpp',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    description: 'Systems programming, competitive programming, DSA, memory management',
  },
  {
    name: 'Python',
    category: 'languages',
    proficiency: 95,
    icon: 'python',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'ML/Data Science, backend APIs, automation, scripting, web scraping',
  },
  {
    name: 'Java',
    category: 'languages',
    proficiency: 80,
    icon: 'java',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    description: 'OOP concepts, enterprise applications, Android fundamentals',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    proficiency: 88,
    icon: 'javascript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Modern ES6+, async programming, React, DOM manipulation',
  },
  {
    name: 'Dart',
    category: 'languages',
    proficiency: 80,
    icon: 'dart',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    description: 'Flutter cross-platform mobile app development',
  },
  {
    name: 'PHP',
    category: 'languages',
    proficiency: 80,
    icon: 'php',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    description: 'Web backends, server-side scripting, MySQL integration',
  },
  {
    name: 'SQL',
    category: 'languages',
    proficiency: 85,
    icon: 'database',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'Complex queries, optimization, relational database modeling',
  },

  // Web Development
  {
    name: 'React.js',
    category: 'web',
    proficiency: 90,
    icon: 'react',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Hooks, Context API, state management, component architecture',
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    proficiency: 95,
    icon: 'tailwind',
    iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    description: 'Utility-first styling, design systems, responsive glassmorphism UI',
  },
  {
    name: 'FastAPI',
    category: 'web',
    proficiency: 90,
    icon: 'fastapi',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    description: 'Async Python REST APIs, Pydantic validation, OpenAPI documentation',
  },
  {
    name: 'REST APIs',
    category: 'web',
    proficiency: 90,
    icon: 'api',
    iconUrl: 'https://cdn.simpleicons.org/postman/FF6C37',
    description: 'API design, HTTP protocols, versioning, JWT authentication',
  },
  {
    name: 'Node.js',
    category: 'web',
    proficiency: 75,
    icon: 'nodejs',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Express.js backend development, NPM ecosystem, middleware',
  },
  {
    name: 'Flask',
    category: 'web',
    proficiency: 80,
    icon: 'flask',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    description: 'Micro web framework for lightweight Python APIs & web apps',
  },
  {
    name: 'Next.js',
    category: 'web',
    proficiency: 75,
    icon: 'nextjs',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    description: 'Full-stack React framework, SSR/SSG, App Router',
  },

  // AI/ML
  {
    name: 'Machine Learning',
    category: 'ai-ml',
    proficiency: 85,
    icon: 'brain',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Supervised/unsupervised learning, model evaluation, classification algorithms',
  },
  {
    name: 'Data Preprocessing',
    category: 'ai-ml',
    proficiency: 90,
    icon: 'table',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    description: 'Feature engineering, normalization, handling missing data pipelines',
  },
  {
    name: 'scikit-learn',
    category: 'ai-ml',
    proficiency: 90,
    icon: 'sklearn',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    description: 'Machine learning models, pipelines, feature selection, evaluation',
  },
  {
    name: 'NumPy',
    category: 'ai-ml',
    proficiency: 95,
    icon: 'numpy',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    description: 'High-performance numerical computing, matrix operations, array manipulation',
  },
  {
    name: 'Pandas',
    category: 'ai-ml',
    proficiency: 95,
    icon: 'pandas',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    description: 'Data manipulation, DataFrame transformation, exploratory data analysis',
  },
  {
    name: 'Ensemble Methods',
    category: 'ai-ml',
    proficiency: 85,
    icon: 'chart-bar',
    iconUrl: 'https://cdn.simpleicons.org/scikitlearn/F7931E',
    description: 'Random Forest, XGBoost, LightGBM, Bagging & Boosting techniques',
  },
  {
    name: 'Anomaly Detection',
    category: 'ai-ml',
    proficiency: 85,
    icon: 'alert-triangle',
    iconUrl: 'https://cdn.simpleicons.org/python/3776AB',
    description: 'Isolation Forest, One-Class SVM, behavioral security analysis',
  },
  {
    name: 'Tkinter',
    category: 'ai-ml',
    proficiency: 80,
    icon: 'window',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Python desktop GUI applications & automation software',
  },

  // Tools & Infrastructure
  {
    name: 'Git/GitHub',
    category: 'tools',
    proficiency: 95,
    icon: 'git',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Version control, collaborative workflows, CI/CD Actions',
  },
  {
    name: 'Docker',
    category: 'tools',
    proficiency: 82,
    icon: 'docker',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Containerization, Dockerfiles, multi-container deployment',
  },
  {
    name: 'Linux/Unix',
    category: 'tools',
    proficiency: 85,
    icon: 'terminal',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    description: 'Bash scripting, system administration, process management',
  },
  {
    name: 'Postman',
    category: 'tools',
    proficiency: 90,
    icon: 'postman',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    description: 'API testing, automated collection runs, mock server setup',
  },
  {
    name: 'VS Code',
    category: 'tools',
    proficiency: 95,
    icon: 'vscode',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    description: 'IDE custom workflows, debugging, extension configuration',
  },
  {
    name: 'AWS',
    category: 'tools',
    proficiency: 70,
    icon: 'aws',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    description: 'Cloud hosting, EC2 instances, S3 bucket storage, cloud deployment',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'databases',
    proficiency: 90,
    icon: 'mysql',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'Relational database design, query optimization, indexing',
  },
  {
    name: 'Oracle',
    category: 'databases',
    proficiency: 75,
    icon: 'oracle',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    description: 'Oracle DB, PL/SQL stored procedures, enterprise database management',
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    proficiency: 80,
    icon: 'postgresql',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    description: 'Advanced SQL, JSONB operations, transactional integrity',
  },
  {
    name: 'SQLite',
    category: 'databases',
    proficiency: 85,
    icon: 'sqlite',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    description: 'Embedded databases for desktop & mobile applications',
  },
  {
    name: 'Redis',
    category: 'databases',
    proficiency: 72,
    icon: 'redis',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    description: 'In-memory caching, key-value data structures, session storage',
  },
]

export const skillsByCategory = {
  languages: skills.filter((s) => s.category === 'languages'),
  web: skills.filter((s) => s.category === 'web'),
  'ai-ml': skills.filter((s) => s.category === 'ai-ml'),
  tools: skills.filter((s) => s.category === 'tools'),
  databases: skills.filter((s) => s.category === 'databases'),
}

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((s) => s.category === category).sort((a, b) => b.proficiency - a.proficiency)
}

export function getAllCategories(): Skill['category'][] {
  return ['languages', 'web', 'ai-ml', 'tools', 'databases']
}

export const categoryLabels: Record<Skill['category'], string> = {
  languages: 'Programming Languages',
  web: 'Web Development',
  'ai-ml': 'AI / Machine Learning',
  tools: 'Tools & Infrastructure',
  databases: 'Databases',
}

export const categoryImages: Record<Skill['category'], string> = {
  languages: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  web: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'ai-ml': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80',
  tools: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
  databases: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
}

export const categoryIcons: Record<Skill['category'], string> = {
  languages: 'code',
  web: 'globe',
  'ai-ml': 'brain',
  tools: 'wrench',
  databases: 'database',
}