import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import { featuredProjects } from "../../data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="pt-4 md:pt-8 pb-16 md:pb-24 bg-[var(--color-bg-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12" delay={0}>
          <h2 className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured <span className="text-[var(--color-accent)]">Projects</span>
          </h2>
          <p className="text-[var(--color-fg-muted)] text-lg leading-relaxed">
            A selection of projects showcasing expertise in full-stack development, AI/ML, IoT, and mobile applications.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <ScrollReveal delay={250}>
            <Button size="lg" variant="ghost" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  return (
    <ScrollReveal key={project.slug} delay={index * 50} direction="up">
      <article
        className="group relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-all duration-200 ease-out hover:border-[var(--color-border-strong)] hover:shadow-md"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Optional: subtle overlay on hover */}
          <div className="absolute inset-0 bg-[var(--color-bg)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-200 bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent)]/30"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] border border-[var(--color-border)]">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Title and description */}
          <h3 className="font-display font-bold text-[var(--color-fg)] text-xl mb-1">{project.title}</h3>
          <p className="text-[var(--color-fg-muted)] text-sm line-clamp-3">{project.shortDescription}</p>

          {/* Footer: category and live demo link */}
          <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
            <span className="text-sm text-[var(--color-fg-muted)]">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace("-", " ")}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] flex items-center gap-1 transition-colors"
              >
                Live Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}