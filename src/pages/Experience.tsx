import { Briefcase, GraduationCap, ExternalLink, Calendar, MapPin, ChevronDown } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { experience, getExperienceByType } from "../data/experience";
import { useGSAP } from "../hooks/useGSAP";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperiencePage() {
  const internships = getExperienceByType("internship");
  const education = getExperienceByType("education");

  return (
    <>
      <main id="main-content" className="pt-16">
        <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="experience-heading" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="orb orb-2" style={{ top: '-10%', left: '-10%', opacity: 0.25 }} />
            <div className="orb orb-3" style={{ bottom: '-5%', right: '-5%', opacity: 0.2 }} />
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-4">
                Timeline
              </span>
              <h1 id="experience-heading" className="font-display font-bold text-[var(--color-fg)] text-4xl md:text-5xl lg:text-6xl leading-tight">
                Education & <span className="text-[var(--color-accent)]">Experience</span>
              </h1>
              <p className="mt-4 text-[var(--color-fg-muted)] text-lg leading-relaxed">
                Academic excellence meets real-world impact. From university research to production systems.
              </p>
            </ScrollReveal>

            <div className="space-y-16">
              {internships.length > 0 && (
                <div>
                  <ScrollReveal delay={0} className="mb-8">
                    <h2 className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                        <Briefcase className="h-5 w-5" />
                      </span>
                      Internships
                    </h2>
                  </ScrollReveal>
                  <div className="space-y-6">
                    {internships.map((item, idx) => (
                      <ExperienceItem key={item.id} item={item} index={idx} type="internship" />
                    ))}
                  </div>
                </div>
              )}

              {education.length > 0 && (
                <div>
                  <ScrollReveal delay={200} className="mb-8">
                    <h2 className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                        <GraduationCap className="h-5 w-5" />
                      </span>
                      Education
                    </h2>
                  </ScrollReveal>
                  <div className="space-y-6">
                    {education.map((item, idx) => (
                      <ExperienceItem key={item.id} item={item} index={idx} type="education" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <ScrollReveal delay={400} className="mt-12 text-center">
              <a href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] transition-colors">
                Open to Opportunities
                <ExternalLink className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}

interface ExperienceItemProps {
  item: typeof experience[0];
  index: number;
  type: "internship" | "education";
}

function ExperienceItem({ item, index, type }: ExperienceItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [index]);

  const shortDescription = item.description[0] || "";

  return (
    <div className="relative">
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-border)] to-transparent" aria-hidden="true" />
      <ScrollReveal key={item.id} delay={index * 100} direction="left">
        <GlassCard
          ref={cardRef}
          className="relative pl-6 md:pl-8 group hover:border-[var(--color-accent)]/30 transition-colors duration-300"
        >
          <div className="absolute left-6 md:left-8 -translate-x-1/2 top-4 w-3 h-3 rounded-full border-2 flex-shrink-0 transition-all duration-300 group-hover:scale-125"
            style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-bg)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display font-bold text-[var(--color-fg)] text-xl mb-1">{item.title}</h3>
              <p className="font-medium text-[var(--color-accent)]">{item.organization}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-[var(--color-fg-muted)] flex-wrap">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {item.startDate} - {item.endDate}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {item.location}
              </span>
            </div>
          </div>

          <p className="text-[var(--color-fg-muted)] leading-relaxed mb-4">{shortDescription}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.slice(0, 6).map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)", border: "1px solid var(--color-accent)" }}>
                {tech}
              </span>
            ))}
            {item.technologies.length > 6 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-fg-subtle)] border border-[var(--color-border)]">
                +{item.technologies.length - 6}
              </span>
            )}
          </div>

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ backgroundColor: "var(--color-accent)", color: "white", border: "1px solid var(--color-accent)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              {type === "education" ? "View University" : "View Live Site"}
            </a>
          )}

          <details className="group mt-4 pt-4 border-t border-[var(--glass-border)]">
            <summary className="flex items-center justify-between cursor-pointer list-none text-[var(--color-fg)] font-medium">
              <span>View Details</span>
              <ChevronDown className="h-4 w-4 text-[var(--color-fg-muted)] transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-4 space-y-3 animate-slide-down">
              {item.description.slice(1).map((desc, i) => (
                <p key={i} className="text-[var(--color-fg-muted)] leading-relaxed text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--color-accent)" }} />
                  {desc}
                </p>
              ))}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 mt-2"
                  style={{ backgroundColor: "var(--color-accent)", color: "white", border: "1px solid var(--color-accent)" }}
                >
                  <ExternalLink className="h-4 w-4" />
                  {type === "education" ? "View University" : "View Live Site"}
                </a>
              )}
            </div>
          </details>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}
