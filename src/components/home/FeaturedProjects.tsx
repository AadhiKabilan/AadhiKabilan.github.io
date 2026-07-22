
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import { featuredProjects } from "../../data/projects";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[var(--color-bg-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16" delay={0}>
          <h2 className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured <span className="text-[var(--color-accent)]">Projects</span>
          </h2>
          <p className="text-[var(--color-fg-muted)] text-lg leading-relaxed">
            A selection of projects showcasing expertise in full-stack development, AI/ML, IoT, and mobile applications.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <ScrollReveal delay={500}>
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, cardRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <ScrollReveal key={project.slug} delay={index * 100} direction="up">
      <article
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[var(--glass-shadow)] backdrop-[var(--glass-backdrop)] transition-all duration-500 ease-out hover:shadow-[var(--glass-shadow),var(--shadow-3)] hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative aspect-[4/3] overflow-hidden transition-transform duration-700 ease-out ${isHovered && "scale-[1.05]"}`}>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display font-bold text-xl text-white mb-1">{project.title}</h3>
            <p className="text-white/80 text-xs line-clamp-2">{project.shortDescription}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
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

          <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between">
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

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--glass-bg)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
      </article>
    </ScrollReveal>
  );
}
