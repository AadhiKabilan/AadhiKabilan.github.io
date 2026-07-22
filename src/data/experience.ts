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
      'Graduated with CGPA 9.08/10 (Dean\'s List)',
      'Core coursework: Data Structures, Algorithms, Database Systems, Computer Networks, Operating Systems, Software Engineering, Machine Learning',
      'Capstone Project: PolyShield Pro - AI-powered malware detection system',
      'Active member of Technical Society - organized hackathons and workshops',
    ],
    technologies: ['C++', 'Python', 'Java', 'MySQL', 'Machine Learning', 'Data Structures'],
  },
  {
    id: 'internship-star-scans',
    type: 'internship',
    title: 'Web Development & Product Intern',
    organization: 'Star Scans & Labs',
    location: 'Puducherry, India',
    startDate: '2023-06',
    endDate: '2023-12',
    description: [
      'Developed responsive website with Tailwind CSS + PHP + MySQL for patient booking and lab management',
      'Built Python Tkinter desktop application for automated billing, thermal printing, and patient record management',
      'Created patient data management software with report generation, QR code verification, and WhatsApp delivery',
      'Integrated WhatsApp Business API for automated report delivery reducing delivery time from 2 hours to 5 minutes',
      'Implemented HIPAA-compliant data handling and role-based access control',
    ],
    technologies: ['React', 'FastAPI', 'Python', 'Tkinter', 'PHP', 'Tailwind CSS', 'MySQL', 'WhatsApp API', 'Docker'],
    url: 'https://www.starscansandlabs.com',
  },
  {
    id: 'internship-annai-care',
    type: 'internship',
    title: 'Web Development Intern',
    organization: 'Annai Care Industries',
    location: 'Puducherry, India',
    startDate: '2023-01',
    endDate: '2023-06',
    description: [
      'Developed responsive e-commerce website with Tailwind CSS + PHP + MySQL for medical product manufacturing',
      'Implemented product catalog with CRUD operations, category management, and image optimization',
      'Built admin dashboard with inquiry management, order tracking, and analytics',
      'Configured AWS deployment with Nginx, SSL, and CI/CD pipeline using GitHub Actions',
      'Achieved 95+ PageSpeed score and 40% increase in qualified international inquiries',
    ],
    technologies: ['PHP 8.2', 'MySQL', 'Tailwind CSS', 'JavaScript', 'AWS', 'Docker', 'Nginx', 'GitHub Actions'],
    url: 'https://www.annaicareindustries.com',
  },
]

export function getExperienceByType(type: Experience['type']): Experience[] {
  return experience.filter((e) => e.type === type).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}

export function getExperienceById(id: string): Experience | undefined {
  return experience.find((e) => e.id === id)
}