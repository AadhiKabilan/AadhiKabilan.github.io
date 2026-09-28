import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ScrollReveal } from '../../components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12">
            <div className="relative">

              <h2 id="cta-heading" className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Ready to Build Something <span className="text-[var(--color-accent)]">Amazing</span> Together?
              </h2>

              <p className="text-[var(--color-fg-muted)] text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
                I'm always open to discussing new projects, freelance opportunities, or full-time roles.
                Let's create something impactful.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="mailto:jaadhikabilan@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Direct Email
                  </a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-fg-subtle)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" aria-hidden="true" />
                  Available for hire
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]" aria-hidden="true" />
                  Open to freelance
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  Remote friendly
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}