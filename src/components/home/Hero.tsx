import { ArrowRight, Zap, Shield, Smartphone, Cpu, Mail } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import { useEffect } from "react";

export function Hero() {
  // Inject blob animation styles
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes blob {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
      }
      .animate-blob { animation: blob 7s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-1 animate-blob" style={{ top: '-10%', left: '-5%' }} />
        <div className="orb orb-2 animate-blob animation-delay-2000" style={{ top: '40%', right: '-5%' }} />
        <div className="orb orb-3 animate-blob animation-delay-4000" style={{ bottom: '-5%', left: '40%' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <ScrollReveal className="mb-6" delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium"
                style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', borderColor: 'rgba(99,102,241,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Available for Hire · Software Developer
              </span>
            </ScrollReveal>

            <ScrollReveal className="mb-6" delay={100}>
              <h1 className="font-display font-bold leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-7xl">
                <span style={{ color: 'var(--color-fg)' }}>Building </span>
                <span style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Scalable</span>
                <br />
                <span style={{ color: 'var(--color-fg)' }}>Digital Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal className="mb-8" delay={200}>
              <p className="text-[var(--color-fg-muted)] text-lg md:text-xl leading-relaxed max-w-xl">
                Full-stack developer specializing in React, Python, AI/ML, and IoT.
                B.Tech IT graduate (CGPA 9.08) crafting performant, accessible applications.
              </p>
            </ScrollReveal>

            <ScrollReveal className="mb-10" delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <a href="/projects" className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="glass" asChild>
                  <a href="/contact" className="flex items-center gap-2">
                    Get In Touch
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-fg-muted)]">
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[var(--color-accent)]" />Security Focused</span>
                <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-[var(--color-accent)]" />High Performance</span>
                <span className="flex items-center gap-1.5"><Smartphone className="h-4 w-4 text-[var(--color-accent)]" />Mobile First</span>
                <span className="flex items-center gap-1.5"><Cpu className="h-4 w-4 text-[var(--color-accent)]" />AI/ML Powered</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - visual card grid */}
          <div className="relative">
            <ScrollReveal delay={200} direction="right">
              <div className="relative">
                {/* Main glass card */}
                <div className="rounded-2xl p-8 relative overflow-hidden" style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  WebkitBackdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  {/* Inner gradient accent */}
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 50%, rgba(168,85,247,0.08) 100%)'
                  }} />
                  <div className="relative">
                    <p className="text-[var(--color-fg-subtle)] text-xs font-mono uppercase tracking-widest mb-6">// tech_stack.py</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { value: '9.08', label: 'CGPA', color: '#6366f1' },
                        { value: '4+', label: 'Projects', color: '#a855f7' },
                        { value: '2', label: 'Internships', color: '#06b6d4' },
                        { value: '15+', label: 'Technologies', color: '#10b981' },
                        { value: '3+', label: 'Yrs Coding', color: '#f59e0b' },
                        { value: '100%', label: 'Passion', color: '#ef4444' },
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-3 rounded-xl" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.12)' }}>
                          <div className="font-display font-bold text-2xl" style={{ color: stat.color }}>{stat.value}</div>
                          <div className="text-[var(--color-fg-subtle)] text-xs mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Mini skill bars */}
                    {[
                      { label: 'Python', pct: 95, color: '#6366f1' },
                      { label: 'React.js', pct: 90, color: '#a855f7' },
                      { label: 'ML / AI', pct: 85, color: '#06b6d4' },
                      { label: 'C++ / Java', pct: 85, color: '#10b981' },
                    ].map((s) => (
                      <div key={s.label} className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span style={{ color: 'var(--color-fg-muted)' }}>{s.label}</span>
                          <span style={{ color: 'var(--color-fg-subtle)' }}>{s.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: 'var(--color-bg-subtle)' }}>
                          <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}88)` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge bottom-left */}
                <div className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 text-sm font-medium" style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-3)',
                  color: 'var(--color-fg)'
                }}>
                  <span style={{ color: '#10b981' }}>●</span> Open to work
                </div>

                {/* Floating badge top-right */}
                <div className="absolute -top-4 -right-4 rounded-xl px-4 py-3 text-sm font-medium" style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
                  color: 'white'
                }}>
                  B.Tech IT · PTU
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        
      </div>
    </section>
  );
}
