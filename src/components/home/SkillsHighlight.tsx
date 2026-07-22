import { Code, Globe, Brain, Wrench, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getSkillsByCategory, categoryLabels, categoryImages } from "../../data/skills";
import { GlassCard } from "../../components/ui/GlassCard";
import { ScrollReveal } from "../../components/ui/ScrollReveal";

const categories = [
  { key: "languages", icon: Code },
  { key: "web", icon: Globe },
  { key: "ai-ml", icon: Brain },
  { key: "tools", icon: Wrench },
  { key: "databases", icon: Database },
] as const;

export function SkillsHighlight() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-4 border border-[var(--color-accent)]/30">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const catSkills = getSkillsByCategory(cat.key);
            const Icon = cat.icon;
            const coverImg = categoryImages[cat.key];

            return (
              <ScrollReveal key={cat.key} delay={idx * 100} direction="up">
                <GlassCard className="group flex flex-col h-full overflow-hidden hover:border-[var(--color-accent)]/40 transition-all duration-300 p-0">
                  {/* Category Image Header */}
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={coverImg}
                      alt={categoryLabels[cat.key]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--glass-bg)] via-black/40 to-black/20" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 z-10">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-white text-base shadow-sm">{categoryLabels[cat.key]}</h3>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {catSkills.slice(0, 7).map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 transition-transform duration-200 group-hover:scale-105"
                        >
                          {skill.iconUrl && <img src={skill.iconUrl} alt="" className="w-3.5 h-3.5 object-contain flex-shrink-0" />}
                          {skill.name}
                        </span>
                      ))}
                      {catSkills.length > 7 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full text-[var(--color-fg-subtle)] bg-[var(--color-bg-subtle)] border border-[var(--color-border)]">
                          +{catSkills.length - 7} more
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={600} className="mt-12">
          <div className="text-center">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-all shadow-md hover:shadow-lg"
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
