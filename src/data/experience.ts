export interface Experience {
  id: string
  type: 'internship' | 'education'
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
  url?: string
  logo?: string
}

export const experience: Experience[] = [
  {
    id: 'education-btech',
    type: 'education',
    title: 'B.Tech, Information Technology',
    organization: 'Puducherry Technological University',
    location: 'Puducherry, India',
    startDate: '2022-08',
    endDate: '2026-06',
    description: [
      'Graduated with CGPA 8.88/10',
      'Core coursework: Data Structures, Algorithms, Database Systems, Computer Networks, Operating Systems, Software Engineering, Machine Learning',
      'Academic Project: Polymorphic Malware Detection using Machine Learning',
      'Academic Project: Government Tender Intelligence System (GTIS)',
      'Academic Project: Age Prediction Application',
      'Academic Project: Automated SEO Auditor & Fixer',
    ],
    technologies: ['C++', 'Python', 'Java', 'MySQL', 'Machine Learning', 'Data Structures'],
  },
  {
    id: 'internship-star-scans',
    type: 'internship',
    title: 'Full-Stack Development Intern',
    organization: 'Star Scans and Labs',
    location: 'Puducherry, India',
    startDate: '2025-05',
    endDate: '2025-07',
    description: [
      'Designed, developed, and deployed a diagnostic-services website using PHP, Tailwind CSS, and MySQL, including online appointment booking and email notifications.',
      'Contributed to a Patient Data Management and Billing System using Python/MySQL and supported digital-marketing content creation.',
    ],
    technologies: ['PHP', 'Tailwind CSS', 'MySQL', 'Python'],
    url: 'https://www.starscansandlabs.com',
  },
  {
    id: 'internship-annai-care',
    type: 'internship',
    title: 'Web Development Intern',
    organization: 'Annai Care Industries',
    location: 'Puducherry, India',
    startDate: '2024-05',
    endDate: '2024-06',
    description: [
      'Designed and developed a company website for a medical-equipment distributor using HTML, CSS, PHP, and MySQL.',
      'Implemented dynamic database content and performed testing/debugging for functionality, reliability, security, and usability.',
    ],
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    url: 'https://www.annaicareindustries.com',
  },
]

export function getExperienceByType(type: Experience['type']): Experience[] {
  return experience.filter((e) => e.type === type).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}

export function getExperienceById(id: string): Experience | undefined {
  return experience.find((e) => e.id === id)
}