import { Code, Globe, Brain, Wrench, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getSkillsByCategory, categoryLabels } from "../../data/skills";
import { ScrollReveal } from "../../components/ui/ScrollReveal";

export function SkillsHighlight() {
  return (
    <section className="py-16 md:py-24 relative" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium"
              style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', borderColor: 'var(--color-border)' }}>
              Core Competencies
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 id="skills-heading" className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl leading-tight">
              Technologies & <span className="text-[var(--color-accent)]">Expertise</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-[var(--color-fg-muted)] text-lg leading-relaxed">
              Proficient across the full stack &mdash; from systems programming to AI-powered web applications.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {([
            { key: "languages", icon: Code },
            { key: "web", icon: Globe },
            { key: "ai-ml", icon: Brain },
            { key: "tools", icon: Wrench },
            { key: "databases", icon: Database },
          ] as const).map((cat) => {
            const catSkills = getSkillsByCategory(cat.key);
            const Icon = cat.icon;

            return (
              <ScrollReveal key={cat.key} delay={100} direction="up">
                <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-bg-elevated)] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-fg)] bg-[var(--color-bg-subtle)]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-[var(--color-fg)] text-base">
                      {categoryLabels[cat.key]}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {catSkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 text-[var(--color-fg-muted)] text-sm">
                        {skill.iconUrl && (
                          <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="w-4 h-4 object-contain flex-shrink-0"
                          />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={600} className="mt-12">
          <div className="text-center">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium text-[var(--color-fg)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)] transition-colors"
            >
              View Full Skill Directory
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}