import { ArrowRight, Mail, GraduationCap, BarChart3, Microscope, Settings, Brain, Laptop, School } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ScrollReveal } from "../../components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative mt-12 md:mt-16 bg-gradient-to-b from-[var(--color-accent)]/40 to-[var(--color-accent)]/60" aria-label="Home">
      <div className="container px-4 mx-auto md:px-6">
        {/* Desktop: Two-column layout | Mobile: Stacked */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left Column: Main Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Availability Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-accent-light text-accent text-sm font-medium border-border">
                Available for Hire
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={100}>
              <h1 className="font-display font-bold text-[var(--color-fg)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
                Data Science & Machine Learning Developer
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={200}>
              <p className="text-[var(--color-fg-muted)] text-base md:text-lg leading-relaxed max-w-md">
                B.Tech Information Technology graduate from Puducherry Technological University (CGPA 8.88/10) specializing in Data Science, Machine Learning, and AI/ML applications.
                Skilled in Python, SQL, scikit-learn, Pandas, NumPy, and related technologies.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4 mb-6 md:gap-6 md:mb-8">
                <Button size="lg" asChild>
                  <Link to="/projects" className="flex items-center gap-3">
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:aadhikabilanj@gmail.com" className="flex items-center gap-3">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    Direct Email
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Information Panel */}
          <div className="w-full md:w-[500px] flex flex-col items-center justify-center">
            <ScrollReveal delay={400} direction="up">
              <div className="relative w-full max-w-[480px] max-h-[384px] bg-[var(--color-bg-elevated)]/50 backdrop-blur-lg border border-[var(--color-border)]/30 rounded-xl p-6 shadow-[inset_0_0_0_1px_rgb(255,255,255,0.15)]">
                <div className="space-y-5">
                  <div className="flex items-center gap-5">
                    <GraduationCap className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] font-semibold text-xl">B.Tech Information Technology</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <School className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] font-medium text-lg">Puducherry Technological University</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <BarChart3 className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] font-semibold text-lg">CGPA 8.88 / 10</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Microscope className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] text-lg">Data Science</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Settings className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] text-lg">Machine Learning</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Brain className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] text-lg">AI / ML</p>
                  </div>
                  {/* <div className="flex items-center gap-5">
                    <Laptop className="h-6 w-6 text-[var(--color-accent)]" />
                    <p className="text-[var(--color-fg)] text-lg">Full-stack Development</p>
                  </div> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Spacing before Featured Projects - content-driven, not arbitrary */}
        <div className="mt-4 md:mt-6">
          {/* This space will be determined by the content above, not fixed heights */}
        </div>
      </div>
    </section>
  );
}