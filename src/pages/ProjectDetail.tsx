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
import { GlassCard } from '../components/ui/GlassCard'
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

  // Force scroll to top whenever the project slug changes (e.g. clicking a related project card)
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
    <main id="main-content" className="pt-16 min-h-screen relative">
      {/* Full Resolution Image Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 shadow-xl"
            aria-label="Close full view"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 shadow-xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 shadow-xl"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 flex items-center gap-4 text-white text-sm font-medium">
              <span>
                Screenshot {activeImageIndex + 1} of {project.images.length}
              </span>
              <span className="opacity-40">•</span>
              <a
                href={project.images[activeImageIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Download className="h-4 w-4" />
                Original View
              </a>
            </div>
          </div>
        </div>
      )}

      <article>
        {/* Header Hero Banner with Real Image */}
        <header className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/50 to-[var(--color-bg)] z-10" />
          <div className="absolute inset-0 z-0 cursor-pointer group" onClick={() => openLightbox(0)}>
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[var(--color-bg)]" />
            <div className="absolute top-20 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="h-3.5 w-3.5" />
              Click to view full cover
            </div>
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-6 mb-12">
            <div className="max-w-4xl">
              <ScrollReveal direction="up">
                <span
                  className="px-3.5 py-1 text-xs font-semibold rounded-full mb-4 inline-block tracking-wide uppercase"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}
                >
                  {project.category.replace('-', ' ')}
                </span>
                <h1 className="font-display font-bold text-[var(--color-fg)] text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                  {project.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={100} direction="up">
                <p className="text-[var(--color-fg-muted)] text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
                  {project.shortDescription}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200} direction="up">
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
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md"
                        style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
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
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
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

        {/* Project Content Body */}
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
                  <p className="text-[var(--color-fg-muted)] leading-relaxed text-lg bg-[var(--glass-bg)] p-6 rounded-2xl border border-[var(--glass-border)]">
                    {project.problem}
                  </p>
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
                  <div className="space-y-4 text-[var(--color-fg-muted)] leading-relaxed text-lg bg-[var(--glass-bg)] p-6 rounded-2xl border border-[var(--glass-border)]">
                    <p>{project.approach}</p>
                    <div className="w-full h-px bg-[var(--color-border)] my-4" />
                    <p>{project.solution}</p>
                  </div>
                </ScrollReveal>
              </section>

              <section aria-labelledby="outcomes-heading">
                <ScrollReveal delay={800}>
                  <h2 id="outcomes-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                      <BarChart className="h-4 w-4" />
                    </span>
                    Key Outcomes & Impact
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={900}>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] group">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                          <Check className="h-3.5 w-3.5" />
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
                    <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                      <Code className="h-4 w-4" />
                    </span>
                    Technologies Used
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={1100}>
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 shadow-sm"
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
                        <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
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
                          className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--glass-border)] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                          onClick={() => openLightbox(idx)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} - Screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
                            <Maximize2 className="h-5 w-5" />
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
              <GlassCard className="sticky top-24 border border-[var(--glass-border)] shadow-xl">
                <h3 className="font-display font-bold text-[var(--color-fg)] text-xl mb-4 border-b border-[var(--glass-border)] pb-3">Project Metadata</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[var(--color-fg-subtle)] text-xs uppercase tracking-wider mb-1">Project Status</dt>
                    <dd className="text-[var(--color-fg)] font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
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
                    className="mt-6 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{ backgroundColor: 'var(--color-bg-elevated)', color: 'var(--color-fg)', border: '1px solid var(--color-border)' }}
                  >
                    <Github className="h-4 w-4" />
                    Source Code on GitHub
                  </a>
                )}
              </GlassCard>
            </aside>
          </div>

          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <section aria-labelledby="related-heading" className="mt-20 pt-12 border-t border-[var(--color-border)]">
              <ScrollReveal delay={1400}>
                <h2 id="related-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-8">
                  Related Projects
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
                    <GlassCard className="h-full group-hover:border-[var(--color-accent)]/40 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[4/3] relative overflow-hidden rounded-xl mb-4">
                          <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="font-display font-bold text-[var(--color-fg)] text-lg mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-[var(--color-fg-muted)] text-sm line-clamp-2 leading-relaxed mb-4">{p.shortDescription}</p>
                      </div>
                      <span className="text-xs font-semibold text-[var(--color-accent)] flex items-center gap-1">
                        View Case Study &rarr;
                      </span>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent-light)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-sm"
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
