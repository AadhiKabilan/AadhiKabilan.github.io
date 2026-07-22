import { Github, ExternalLink, Code, Shield, Globe, Brain, Smartphone, Cpu, ArrowLeft, Image, Check, BarChart } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Button } from '../components/ui/Button'
import { getProjectBySlug, getRelatedProjects } from '../data/projects'
import { useParams, Link } from 'react-router-dom'


const categoryIcons = {
  security: Shield,
  web: Globe,
  'ai-ml': Brain,
  mobile: Smartphone,
  iot: Cpu,
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug || '')

  if (!project) {
    return (
      <main id="main-content" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="font-display font-bold text-[var(--color-fg)] text-4xl mb-4">Project Not Found</h1>
          <p className="text-[var(--color-fg-muted)] mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </main>
    )
  }

  const relatedProjects = getRelatedProjects(project.slug, 3)

  return (
    <main id="main-content" className="pt-16">
      <article>
          <header className="relative min-h-[60vh] flex items-end overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/50 to-[var(--color-bg)] z-10" />
            <div className="absolute inset-0 z-0">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[var(--color-bg)]" />
            </div>
            <div className="relative z-20 container mx-auto px-4 md:px-6 mb-12">
              <div className="max-w-4xl">
                <ScrollReveal direction="up">
                  <h1 className="font-display font-bold text-[var(--color-fg)] text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                    {project.title}
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={100} direction="up">
                  <p className="text-[var(--color-fg-muted)] text-lg md:text-xl leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={200} direction="up">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)]">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)]">
                        {project.startDate} - {project.endDate || 'Present'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                          style={{ backgroundColor: 'var(--color-accent)', color: 'white', border: '1px solid var(--color-accent)' }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                          style={{ backgroundColor: 'var(--color-bg-elevated)', color: 'var(--color-fg)', border: '1px solid var(--color-border)' }}
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section aria-labelledby="problem-heading">
                  <ScrollReveal delay={300}>
                    <h2 id="problem-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                        <Shield className="h-4 w-4" />
                      </span>
                      The Problem
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <p className="text-[var(--color-fg-muted)] leading-relaxed text-lg">{project.problem}</p>
                  </ScrollReveal>
                </section>

                <section aria-labelledby="approach-heading">
                  <ScrollReveal delay={500}>
                    <h2 id="approach-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                        <Brain className="h-4 w-4" />
                      </span>
                      Approach & Solution
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={600}>
                    <p className="text-[var(--color-fg-muted)] leading-relaxed text-lg mb-4">{project.approach}</p>
                  </ScrollReveal>
                  <ScrollReveal delay={700}>
                    <p className="text-[var(--color-fg-muted)] leading-relaxed text-lg">{project.solution}</p>
                  </ScrollReveal>
                </section>

                <section aria-labelledby="outcomes-heading">
                  <ScrollReveal delay={800}>
                    <h2 id="outcomes-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                        <BarChart className="h-4 w-4" />
                      </span>
                      Key Outcomes
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={900}>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border)] group">
                          <span className="w-6 h-6 flex-shrink-0 mt-0.5 text-[var(--color-accent)]">
                            <Check className="h-6 w-6" />
                          </span>
                          <p className="text-[var(--color-fg)] leading-relaxed">{outcome}</p>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </section>

                <section aria-labelledby="tech-heading">
                  <ScrollReveal delay={1000}>
                    <h2 id="tech-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                        <Code className="h-4 w-4" />
                      </span>
                      Technology Stack
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={1100}>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 group-hover:scale-105"
                          style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>
                </section>

                {project.images.length > 1 && (
                  <section aria-labelledby="gallery-heading">
                    <ScrollReveal delay={1200}>
                      <h2 id="gallery-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                          <Image className="h-4 w-4" />
                        </span>
                        Project Gallery
                      </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={1300}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((img, idx) => (
                          <div key={idx} className="group relative aspect-[16/10] overflow-hidden rounded-xl">
                            <img
                              src={img}
                              alt={`${project.title} - Screenshot ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  </section>
                )}
              </div>

              <aside className="space-y-6">
                <GlassCard className="sticky top-24">
                  <h3 className="font-semibold text-[var(--color-fg)] mb-4">Project Details</h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-[var(--color-fg-subtle)] mb-1">Status</dt>
                      <dd className="text-[var(--color-fg)] font-medium">{project.endDate ? 'Completed' : 'In Progress'}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--color-fg-subtle)] mb-1">Duration</dt>
                      <dd className="text-[var(--color-fg)] font-medium">{project.startDate} - {project.endDate || 'Present'}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--color-fg-subtle)] mb-1">Category</dt>
                      <dd className="text-[var(--color-fg)] font-medium capitalize">{project.category.replace('-', ' ')}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--color-fg-subtle)] mb-1">Role</dt>
                      <dd className="text-[var(--color-fg)] font-medium">Full-Stack Developer</dd>
                    </div>
                  </dl>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{ backgroundColor: 'var(--color-bg-elevated)', color: 'var(--color-fg)', border: '1px solid var(--color-border)' }}
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  )}
                </GlassCard>
              </aside>
            </div>

            {relatedProjects.length > 0 && (
              <section aria-labelledby="related-heading" className="mt-20 pt-12 border-t border-[var(--color-border)]">
                <ScrollReveal delay={1400}>
                  <h2 id="related-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-8">
                    Related Projects
                  </h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-3 gap-6">
  {relatedProjects.map((p) => {
    const CategoryIcon = categoryIcons[p.category]

    return (
      <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
        <GlassCard className="h-full group-hover:border-[var(--color-accent)]/30 transition-all duration-300">
          <div className="aspect-[4/3] bg-[var(--color-bg-subtle)] rounded-xl mb-4 flex items-center justify-center">
            {CategoryIcon && (
              <CategoryIcon className="h-12 w-12 text-[var(--color-accent)]/50" />
            )}
          </div>

          <h3 className="font-semibold text-[var(--color-fg)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
            {p.title}
          </h3>

          <p className="text-[var(--color-fg-muted)] text-sm line-clamp-2">
            {p.shortDescription}
          </p>
        </GlassCard>
      </Link>
    )
  })}
</div>
              </section>
            )}

            <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
              <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to All Projects
              </Link>
            </div>
          </div>
        </article>
    </main>
  )
}
