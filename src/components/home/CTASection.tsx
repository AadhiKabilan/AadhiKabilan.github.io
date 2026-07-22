import { ArrowRight, Mail } from 'lucide-react'
import { GlassCard } from '../../components/ui/GlassCard'
import { Button } from '../../components/ui/Button'
import { ScrollReveal } from '../../components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <GlassCard className="max-w-3xl mx-auto text-center p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="relative">
              <h2 id="cta-heading" className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Ready to Build Something <span className="text-[var(--color-accent)]">Amazing</span> Together?
              </h2>

              <p className="text-[var(--color-fg-muted)] text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
                I'm always open to discussing new projects, freelance opportunities, or full-time roles.
                Let's create something impactful.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <a href="/contact" className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
                <Button size="lg" variant="glass" asChild>
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
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}