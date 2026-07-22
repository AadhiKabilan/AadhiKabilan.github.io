export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  author: {
    name: string
    email: string
    phone?: string
    github: string
    linkedin?: string
    twitter?: string
    location: string
  }
  navigation: Array<{
    label: string
    href: string
    external?: boolean
  }>
  socialLinks: Array<{
    label: string
    href: string
    icon: string
  }>
}

export const siteConfig: SiteConfig = {
  name: 'Aadhi Kabilan J',
  title: 'Aadhi Kabilan J — Software Developer',
  description: 'Software Developer specializing in full-stack web development, AI/ML, mobile apps, and IoT. Building scalable solutions with React, Python, Flutter, and modern cloud technologies.',
  url: 'https://aadhikabilan.github.io',
  ogImage: '/og-image.png',
  author: {
    name: 'Aadhi Kabilan J',
    email: 'jaadhikabilan@gmail.com',
    phone: '+91 7604940996',
    github: 'https://github.com/AadhiKabilan',
    linkedin: 'https://linkedin.com/in/aadhikabilan',
    twitter: 'https://twitter.com/aadhikabilan',
    location: 'Puducherry, India',
  },
  navigation: [
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/AadhiKabilan', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/aadhikabilan', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:jaadhikabilan@gmail.com', icon: 'mail' },
  ],
}