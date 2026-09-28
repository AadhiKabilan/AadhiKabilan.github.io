import { Briefcase, GraduationCap, ExternalLink, Calendar } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { experience, getExperienceByType } from "../data/experience";

export default function ExperiencePage() {
  const internships = getExperienceByType("internship");
  const education = getExperienceByType("education");

  return (
    <>
      <main id="main-content">
        <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden" aria-labelledby="experience-heading">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium"
                style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', borderColor: 'var(--color-border)' }}>
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
                      <span className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
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
                  <ScrollReveal delay={100} className="mb-8">
                    <h2 className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg-elevated)]">
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

            <ScrollReveal delay={200} className="mt-12 text-center">
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
  const shortDescription = item.description[0] || "";

  return (
    <ScrollReveal key={item.id} delay={index * 50} direction="up">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" aria-hidden="true" />
        <div className="relative pl-8">
          {/* Dot */}
          <div className="absolute left-0 -translate-x-1/2 top-2.5 w-3 h-3 rounded-full border-2"
            style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-bg)" }}
            aria-hidden="true"
          />
          <div className="mb-6 last:mb-0">
            <div className="text-sm text-[var(--color-fg-muted)] flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{item.startDate} - {item.endDate}</span>
            </div>
            <h3 className="font-display font-bold text-[var(--color-fg)] text-lg mb-1">{item.title}</h3>
            <p className="font-medium text-[var(--color-accent)]">{item.organization}</p>
            <p className="text-[var(--color-fg-muted)] leading-relaxed mb-3">{shortDescription}</p>
            {item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-200 bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent)]/30">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {item.url && (
              <div className="mt-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 border border-[var(--color-border)]"
                  style={{ backgroundColor: "var(--color-bg-elevated)", color: "var(--color-fg)" }}
                >
                  <ExternalLink className="h-4 w-4" />
                  {type === "education" ? "View University" : "View Live Site"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}