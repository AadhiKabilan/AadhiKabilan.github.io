import { projects, getProjectsByCategory } from "../data/projects";
import { GlassCard } from "../components/ui/GlassCard";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ArrowRight, Github, ExternalLink, Shield, Globe, Brain, Smartphone, Cpu } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const categories = ["all", "security", "web", "ai-ml", "mobile", "iot"] as const;

const categoryLabels: Record<string, string> = {
  all: "All Projects",
  security: "Security",
  web: "Web Development",
  "ai-ml": "AI / ML",
  mobile: "Mobile",
  iot: "IoT",
};

const categoryIcons: Record<string, React.ReactNode> = {
  all: <span className="text-[var(--color-accent)]">*</span>,
  security: <Shield className="h-4 w-4" />,
  web: <Globe className="h-4 w-4" />,
  "ai-ml": <Brain className="h-4 w-4" />,
  mobile: <Smartphone className="h-4 w-4" />,
  iot: <Cpu className="h-4 w-4" />,
};

function ProjectCard({ project }: { project: typeof projects[0] }) {

  return (
    <article className="group">
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <GlassCard className="h-full flex flex-col group-hover:border-[var(--color-accent)]/30 transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 via-transparent to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 p-2 rounded-lg bg-[var(--glass-bg)] backdrop-[var(--glass-backdrop)] border border-[var(--glass-border)] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                aria-label={`View ${project.title} live`}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="flex-1 flex flex-col">
            <span className="px-3 py-1 text-xs font-medium rounded-full mb-3 w-fit" style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)", border: "1px solid var(--color-accent)" }}>
              {categoryLabels[project.category]}
            </span>

            <h3 className="font-display font-bold text-[var(--color-fg)] text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>

            <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 5).map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] border border-[var(--color-border)]">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-subtle)] border border-[var(--color-border)]">
                  +{project.techStack.length - 5}
                </span>
              )}
            </div>

            <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between">
              <span className="text-xs text-[var(--color-fg-subtle)]">
                {project.featured && "Featured"}
              </span>
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-all duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                <ArrowRight className="h-4 w-4 text-[var(--color-fg-subtle)] group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
            </div>
          </div>
        </GlassCard>
      </Link>
    </article>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'security' | 'web' | 'ai-ml' | 'mobile' | 'iot'>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return getProjectsByCategory(activeCategory);
  }, [activeCategory]);

  return (
    <>
      <main id="main-content" className="pt-16">
        <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="projects-heading">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="orb orb-1" style={{ top: '10%', right: '-5%', opacity: 0.25 }} />
            <div className="orb orb-2" style={{ bottom: '10%', left: '-5%', opacity: 0.2 }} />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-4">
                  Portfolio
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 id="projects-heading" className="font-display font-bold text-[var(--color-fg)] text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Selected <span className="text-[var(--color-accent)]">Work</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-[var(--color-fg-muted)] text-lg leading-relaxed">
                  A collection of projects spanning security, AI/ML, web development, mobile apps, and IoT.
                  Each project represents a real-world problem solved with modern technologies.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300} className="mb-10">
              <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Project categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    aria-controls={`${cat}-panel`}
                    id={`${cat}-tab`}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeCategory === cat
                        ? "bg-[var(--color-accent)] text-white shadow-[var(--shadow-2)]"
                        : "bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)] border border-[var(--color-border)]"
                    }`}
                  >
                    {categoryIcons[cat]}
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div id="projects-grid" role="tabpanel" aria-label="Projects list">
              <ScrollReveal delay={400}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <ScrollReveal key={project.slug} delay={Math.min(idx * 100, 300)} direction="up">
                      <ProjectCard project={project} />
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>

              {filteredProjects.length === 0 && (
                <ScrollReveal>
                  <div className="text-center py-12 text-[var(--color-fg-muted)]">
                    No projects found in this category.
                  </div>
                </ScrollReveal>
              )}
            </div>

            <ScrollReveal delay={500} className="mt-12 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] transition-colors">
                View All Projects & Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
