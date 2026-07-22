import { GlassCard } from '../components/ui/GlassCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { skills, getSkillsByCategory, getAllCategories, categoryLabels, categoryImages } from '../data/skills'
import { Code, Globe, Brain, Wrench, Database, ChevronDown, ChevronUp, X, Star, Zap } from 'lucide-react'
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
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null)

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  const isExpanded = (cat: string) => expandedCategories.includes(cat)

  return (
    <main id="main-content" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background ambient decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-1" style={{ top: '5%', right: '-10%', opacity: 0.35 }} />
        <div className="orb orb-2" style={{ top: '45%', left: '-8%', opacity: 0.3 }} />
        <div className="orb orb-3" style={{ bottom: '5%', right: '10%', opacity: 0.25 }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.08) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Selected Skill Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedSkill(null)} />
          <GlassCard className="relative z-10 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[var(--color-accent)]/40 shadow-2xl p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {selectedSkill.iconUrl ? (
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-subtle)] p-2.5 border border-[var(--color-border)] flex items-center justify-center shadow-inner">
                    <img src={selectedSkill.iconUrl} alt={selectedSkill.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                    <Zap className="h-7 w-7" />
                  </div>
                )}
                <div>
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full mb-1 inline-block"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}
                  >
                    {categoryLabels[selectedSkill.category]}
                  </span>
                  <h2 className="font-display font-bold text-[var(--color-fg)] text-2xl">{selectedSkill.name}</h2>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-2 rounded-xl bg-[var(--color-bg-subtle)] hover:bg-[var(--color-accent-light)] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Close detail modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-[var(--color-fg-subtle)] uppercase tracking-wider block mb-2">Description</label>
                <p className="text-[var(--color-fg-muted)] text-base leading-relaxed bg-[var(--color-bg-subtle)] p-4 rounded-xl border border-[var(--color-border)]">
                  {selectedSkill.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-[var(--color-fg)]">Proficiency Score</span>
                  <span className="text-[var(--color-accent)] font-bold text-base">{selectedSkill.proficiency}%</span>
                </div>
                <div className="h-3.5 bg-[var(--color-bg-subtle)] rounded-full overflow-hidden p-0.5 border border-[var(--color-border)]">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${selectedSkill.proficiency}%`,
                      background: 'linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)',
                    }}
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Main Page Content */}
      <section className="py-16 md:py-24 relative z-10" aria-labelledby="skills-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-4 border border-[var(--color-accent)]/30 shadow-sm">
                Core Technical Stack
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 id="skills-heading" className="font-display font-bold text-[var(--color-fg)] text-4xl md:text-5xl lg:text-6xl leading-tight">
                Skills & <span className="text-[var(--color-accent)]">Technologies</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-4 text-[var(--color-fg-muted)] text-lg leading-relaxed max-w-2xl mx-auto">
                Comprehensive technical toolkit across systems programming, full-stack web, AI/ML models, databases, and modern developer infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const catSkills = getSkillsByCategory(cat)
              const Icon = catIconMap[cat]
              const displaySkills = isExpanded(cat) ? catSkills : catSkills.slice(0, 8)
              const coverImg = categoryImages[cat]

              return (
                <ScrollReveal key={cat} delay={idx * 100} direction="up">
                  <GlassCard className="group flex flex-col h-full overflow-hidden hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:shadow-xl p-0">
                    {/* Visual Card Cover Image Header */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={coverImg}
                        alt={categoryLabels[cat]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--glass-bg)] via-black/40 to-black/20" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <h2 className="font-display font-bold text-white text-lg drop-shadow-sm">{categoryLabels[cat]}</h2>
                            <p className="text-white/80 text-xs font-medium">{catSkills.length} Technologies</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleCategory(cat)}
                          className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
                          aria-label={`Toggle ${categoryLabels[cat]}`}
                        >
                          {isExpanded(cat) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Skill Items Badge Grid */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="flex flex-wrap gap-2.5" role="list" aria-label={categoryLabels[cat]}>
                        {displaySkills.map((skill) => (
                          <button
                            key={skill.name}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 hover:scale-105 hover:border-[var(--color-accent)] shadow-sm"
                            role="listitem"
                            onClick={() => setSelectedSkill(skill)}
                          >
                            {skill.iconUrl ? (
                              <img src={skill.iconUrl} alt="" className="w-4 h-4 object-contain flex-shrink-0" />
                            ) : (
                              <Star className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            )}
                            <span>{skill.name}</span>
                            <span className="opacity-70 text-[10px] bg-[var(--color-accent)]/15 px-1.5 py-0.5 rounded-full">{skill.proficiency}%</span>
                          </button>
                        ))}
                      </div>

                      {!isExpanded(cat) && catSkills.length > 8 && (
                        <button
                          className="w-full mt-2 py-2 text-xs font-semibold rounded-xl text-[var(--color-accent)] bg-[var(--color-accent-light)] hover:bg-[var(--color-accent)]/20 transition-colors border border-[var(--color-accent)]/20"
                          onClick={() => toggleCategory(cat)}
                        >
                          Show {catSkills.length - 8} More Skills
                        </button>
                      )}

                      <div className="pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs text-[var(--color-fg-subtle)]">
                        <span>Click any skill to inspect profile</span>
                        <Zap className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={600} className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl px-8 py-5 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-fg)]">
                <span className="w-3 h-3 rounded-full bg-[#6366f1]" />
                15+ Tech Stack Tools
              </div>
              <div className="hidden sm:block w-px h-5 bg-[var(--glass-border)]" />
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-fg)]">
                <span className="w-3 h-3 rounded-full bg-[#a855f7]" />
                3+ Years Development
              </div>
              <div className="hidden sm:block w-px h-5 bg-[var(--glass-border)]" />
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-fg)]">
                <span className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                High Performance Standards
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
