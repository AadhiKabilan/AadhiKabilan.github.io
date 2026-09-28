import {
  Github,
  ExternalLink,
  Code,
  Shield,
  Brain,
  ArrowLeft,
  Image,
  Check,
  BarChart,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Button } from '../components/ui/Button'
import { getProjectBySlug, getRelatedProjects } from '../data/projects'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug || '')

  // State for Full Image Lightbox Modal
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  // Force scroll to top whenever the project slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [slug])

  // Keyboard navigation for Lightbox (ESC, Left, Right arrows)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeImageIndex === null || !project) return
      if (e.key === 'Escape') {
        setActiveImageIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null ? (prev === 0 ? project.images.length - 1 : prev - 1) : null))
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev === project.images.length - 1 ? 0 : prev + 1) : null))
      }
    },
    [activeImageIndex, project]
  )

  useEffect(() => {
    if (activeImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImageIndex, handleKeyDown])

  if (!project) {
    return (
      <main id="main-content" className="min-h-screen flex items-center justify-center">
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

  const openLightbox = (index: number) => {
    setActiveImageIndex(index)
  }

  const closeLightbox = () => {
    setActiveImageIndex(null)
  }

  const prevImage = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev === 0 ? project.images.length - 1 : (prev as number) - 1))
  }

  const nextImage = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev === project.images.length - 1 ? 0 : (prev as number) + 1))
  }

  return (
    <main id="main-content" className="min-h-screen relative">
      {/* Full Resolution Image Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[var(--color-bg-elevated)]/50 text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="Close full view"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-[var(--color-bg-elevated)]/50 text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-[var(--color-bg-elevated)]/50 text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]"
            />
            <div className="mt-3 flex items-center gap-3 text-[var(--color-fg-muted)] text-sm font-medium">
              <span>
                Screenshot {activeImageIndex + 1} of {project.images.length}
              </span>
              <span className="mx-2">•</span>
              <a
                href={project.images[activeImageIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                <Download className="h-4 w-4" />
                Original View
              </a>
            </div>
          </div>
        </div>
      )}

      <article className="pt-8 pb-12 md:pt-12 md:pb-16">
        {/* Separated Text/Image Header */}
        <section className="relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start">
              {/* Text Column: category, title, description, metadata */}
              <div className="space-y-6 md:space-y-8">
                <ScrollReveal direction="up">
                  <span
                    className="px-3 py-0.5 text-xs font-semibold rounded-full mb-3 inline-block tracking-wide uppercase"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}
                  >
                    {project.category.replace('-', ' ')}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={100} direction="up">
                  <h1 className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    {project.title}
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={200} direction="up">
                  <p className="text-[var(--color-fg-muted)] text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                    {project.shortDescription}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300} direction="up">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)]">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)] font-medium">
                        {project.startDate} - {project.endDate || 'Present'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-all"
                          style={{ backgroundColor: 'var(--color-accent)', color: 'white', border: '1px solid transparent' }}
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
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-all border border-[var(--color-border)]"
                          style={{ backgroundColor: 'var(--color-bg-elevated)', color: 'var(--color-fg)' }}
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Image Column: clean image panel with border/shadow */}
              <div>
                <ScrollReveal delay={400} direction="up">
                  <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[var(--color-border)] shadow-lg">
                    <div className="absolute inset-0 z-0 cursor-pointer group" onClick={() => openLightbox(0)}>
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content Body */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section aria-labelledby="problem-heading">
                <ScrollReveal delay={300}>
                  <h2 id="problem-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
                      <Shield className="h-4 w-4" />
                    </span>
                    The Problem
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <p className="text-[var(--color-fg-muted)] leading-relaxed text-lg p-4 bg-[var(--color-bg-subtle)] rounded-lg">
                    {project.problem}
                  </p>
                </ScrollReveal>
              </section>

              <section aria-labelledby="approach-heading">
                <ScrollReveal delay={500}>
                  <h2 id="approach-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
                      <Brain className="h-4 w-4" />
                    </span>
                    Approach & Solution
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={600}>
                  <div className="space-y-4 text-[var(--color-fg-muted)] leading-relaxed text-lg p-4 bg-[var(--color-bg-subtle)] rounded-lg">
                    <p>{project.approach}</p>
                    <div className="h-0.5 my-4 bg-[var(--color-border)]" />
                    <p>{project.solution}</p>
                  </div>
                </ScrollReveal>
              </section>

              <section aria-labelledby="outcomes-heading">
                <ScrollReveal delay={800}>
                  <h2 id="outcomes-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
                      <BarChart className="h-4 w-4" />
                    </span>
                    Key Outcomes & Impact
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={900}>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-bg-subtle)]">
                        <span className="w-5 h-5 rounded-full bg-[var(--color-success)]/20 text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                          <Check className="h-3 w-3" />
                        </span>
                        <p className="text-[var(--color-fg)] leading-relaxed font-medium">{outcome}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </section>

              <section aria-labelledby="tech-heading">
                <ScrollReveal delay={1000}>
                  <h2 id="tech-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
                      <Code className="h-4 w-4" />
                    </span>
                    Technologies Used
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={1100}>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              </section>

              {/* Project Screenshots Gallery with Full-Screen Lightbox Trigger */}
              {project.images.length > 0 && (
                <section aria-labelledby="gallery-heading">
                  <ScrollReveal delay={1200}>
                    <div className="flex items-center justify-between mb-4">
                      <h2 id="gallery-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
                          <Image className="h-4 w-4" />
                        </span>
                        Project Screenshots & Artifacts
                      </h2>
                      <span className="text-xs text-[var(--color-fg-subtle)] font-medium">Click any image for full view</span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={1300}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--color-border)] cursor-pointer hover:border-[var(--color-border-strong)] transition-all duration-200"
                          onClick={() => openLightbox(idx)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} - Screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[var(--color-bg)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-[var(--color-fg)] text-sm">
                            <Maximize2 className="h-4 w-4" />
                            <span>View Full Screen</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </section>
              )}
            </div>

            {/* Sidebar Details Card */}
            <aside className="space-y-6">
              <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-bg-elevated)] p-6">
                <h3 className="font-display font-bold text-[var(--color-fg)] text-xl mb-4 border-b border-[var(--color-border)] pb-3">Project Metadata</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[var(--color-fg-subtle)] text-xs uppercase tracking-wider mb-1">Project Status</dt>
                    <dd className="text-[var(--color-fg)] font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-success)]/20" />
                      {project.endDate ? 'Completed' : 'In Active Development'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-fg-subtle)] text-xs uppercase tracking-wider mb-1">Timeline</dt>
                    <dd className="text-[var(--color-fg)] font-medium">
                      {project.startDate} - {project.endDate || 'Present'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-fg-subtle)] text-xs uppercase tracking-wider mb-1">Category</dt>
                    <dd className="text-[var(--color-fg)] font-medium capitalize">{project.category.replace('-', ' ')}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-fg-subtle)] text-xs uppercase tracking-wider mb-1">Developer Role</dt>
                    <dd className="text-[var(--color-fg)] font-medium">Full-Stack Developer</dd>
                  </div>
                </dl>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-all border border-[var(--color-border)]"
                    style={{ backgroundColor: 'var(--color-bg-elevated)', color: 'var(--color-fg)' }}
                  >
                    <Github className="h-4 w-4" />
                    Source Code on GitHub
                  </a>
                )}
              </div>
            </aside>
          </div>

          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <section aria-labelledby="related-heading" className="mt-16 pt-10 border-t border-[var(--color-border)]">
              <ScrollReveal delay={1400}>
                <h2 id="related-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-8">
                  Related Projects
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
                    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden hover:border-[var(--color-border-strong)] transition-all duration-200 flex flex-col h-full">
                      <div>
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <h3 className="font-display font-bold text-[var(--color-fg)] text-lg mb-3 group-hover:text-[var(--color-accent)] transition-colors p-4">
                          {p.title}
                        </h3>
                        <p className="text-[var(--color-fg-muted)] text-sm line-clamp-2 leading-relaxed flex-1 p-4">{p.shortDescription}</p>
                      </div>
                      <span className="text-xs font-semibold text-[var(--color-accent)] flex items-center gap-1 p-4">
                        View Case Study &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent-light)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}