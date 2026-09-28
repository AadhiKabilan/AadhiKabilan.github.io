import { projects, getProjectsByCategory } from "../data/projects";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ArrowRight, Github } from "lucide-react";
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

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article className="border border-[var(--color-border)] rounded-lg overflow-hidden transition-all duration-200 hover:border-[var(--color-border-strong)] hover:shadow-md">
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--color-bg)]/80 backdrop-blur-sm border border-[var(--color-border)]/20 text-[var(--color-fg)] hover:bg-[var(--color-bg)]/90"
              aria-label={`View ${project.title} live`}
            >
              <ArrowRight className="h-3 w-3" />
            </a>
          )}
        </div>

        <div className="p-5 space-y-4">
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)]"
          >
            {categoryLabels[project.category]}
          </span>

          <h3 className="font-display font-bold text-[var(--color-fg)] text-lg mb-1">
            {project.title}
          </h3>

          <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.slice(0, 6).map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)]">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 6 && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)]">
                  +{project.techStack.length - 6}
                </span>
              )}
            </div>
          )}

          <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
            <span className="text-[var(--color-fg-muted)]">
              {project.featured ? "Featured" : ""}
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-3 w-3" />
            </a>
          </div>
        </div>
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
      <main id="main-content">
        <section className="pt-8 pb-16 md:pt-12 md:pb-24" aria-labelledby="projects-heading">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium"
                  style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', borderColor: 'var(--color-border)' }}
                >
                  Portfolio
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 id="projects-heading" className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl leading-tight">
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

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${activeCategory === cat
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)]"}
                  `}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <ScrollReveal key={project.slug} delay={idx * 50} direction="up">
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
              <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)]">
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