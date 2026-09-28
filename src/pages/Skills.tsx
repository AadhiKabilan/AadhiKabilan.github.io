import { ScrollReveal } from '../components/ui/ScrollReveal'
import { skills, getSkillsByCategory, getAllCategories, categoryLabels } from '../data/skills'
import { Code, Globe, Brain, Wrench, Database, X, Zap } from 'lucide-react'
import { useState } from 'react'

const catIconMap = {
  languages: Code,
  web: Globe,
  'ai-ml': Brain,
  tools: Wrench,
  databases: Database,
}

export default function SkillsPage() {
  const categories = getAllCategories()
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null)

  return (
    <main id="main-content">
      {/* Selected Skill Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedSkill(null)} />
          <div className="relative z-10 max-w-md w-full bg-white dark:bg-[var(--color-bg)] rounded-lg p-6 md:p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {selectedSkill.iconUrl ? (
                  <div className="w-12 h-12 rounded-md bg-[var(--color-bg-subtle)] p-2 border border-[var(--color-border)] flex items-center justify-center">
                    <img src={selectedSkill.iconUrl} alt={selectedSkill.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-md bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                    <Zap className="h-6 w-6" />
                  </div>
                )}
                <div>
                  <span
                    className="px-2 py-0.5 text-xs font-semibold rounded-full mb-1 inline-block"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}
                  >
                    {categoryLabels[selectedSkill.category]}
                  </span>
                  <h2 className="font-display font-bold text-[var(--color-fg)] text-xl">{selectedSkill.name}</h2>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-1 rounded-md bg-[var(--color-bg-subtle)] hover:bg-[var(--color-accent-light)] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Close detail modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[var(--color-fg-subtle)] uppercase tracking-wider block mb-1">Description</label>
                <p className="text-[var(--color-fg-muted)] text-base leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24" aria-labelledby="skills-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium"
                style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', borderColor: 'var(--color-border)' }}>
                Core Technical Stack
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 id="skills-heading" className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Skills & <span className="text-[var(--color-accent)]">Technologies</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-4 text-[var(--color-fg-muted)] text-lg leading-relaxed max-w-2xl mx-auto">
                Comprehensive technical toolkit across systems programming, full-stack web, AI/ML models, databases, and modern developer infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, idx) => {
              const catSkills = getSkillsByCategory(cat)
              const Icon = catIconMap[cat]

              return (
                <ScrollReveal key={cat} delay={idx * 50} direction="up">
                  <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-bg-elevated)] p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-fg)] bg-[var(--color-bg-subtle)]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h2 className="font-display font-bold text-[var(--color-fg)] text-base">
                        {categoryLabels[cat]}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {catSkills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-2 text-[var(--color-fg-muted)] text-sm cursor-pointer hover:text-[var(--color-fg)] transition-colors"
                          onClick={() => setSelectedSkill(skill)}
                        >
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
              )
            })}
          </div>

          <ScrollReveal delay={300} className="mt-12 text-center">
            <p className="text-[var(--color-fg-muted)] text-sm">
              Click on any skill to see details.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}