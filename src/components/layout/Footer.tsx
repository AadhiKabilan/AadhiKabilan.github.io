import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'
import { siteConfig } from '../../data/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl md:text-2xl text-[var(--color-fg)]" aria-label="Aadhi Kabilan J - Home">
              <span className="text-[var(--color-accent)]">AK</span>
              <span>Aadhi Kabilan</span>
            </Link>
            <p className="mt-4 text-[var(--color-fg-muted)] text-sm leading-relaxed max-w-xs">
              Software Developer building scalable solutions with React, Python, Flutter, and AI/ML.
              Passionate about clean code, great UX, and continuous learning.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href={siteConfig.author.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href={siteConfig.author.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${siteConfig.author.email}`} className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href={siteConfig.author.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--color-fg)] mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--color-fg)] mb-4">Featured Projects</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/projects/polyshield-pro" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  PolyShield Pro
                </Link>
              </li>
              <li>
                <Link to="/projects/seo-optimizer-pro" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  SEO Optimizer Pro
                </Link>
              </li>
              <li>
                <Link to="/projects/iot-student-verification" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  IoT Student Verification
                </Link>
              </li>
              <li>
                <Link to="/projects/eflorakkl-mobile" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  EfloraKkl Mobile App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--color-fg)] mb-4">Contact</h3>
            <address className="not-italic text-[var(--color-fg-muted)] text-sm space-y-3">
              <p>
                <a href={`mailto:${siteConfig.author.email}`} className="hover:text-[var(--color-accent)] transition-colors">
                  {siteConfig.author.email}
                </a>
              </p>
              <p>{siteConfig.author.location}</p>
              <p>Available for freelance & full-time opportunities</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-fg-subtle)] text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[var(--color-fg-subtle)] text-sm flex items-center gap-1.5">
            Built with
            <Heart className="h-4 w-4 text-[var(--color-error)]" aria-hidden="true" />
            React, TypeScript, Tailwind CSS, GSAP, Framer Motion, Lenis
          </p>
        </div>
      </div>
    </footer>
  )
}