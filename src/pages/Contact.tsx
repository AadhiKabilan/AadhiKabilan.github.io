import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Github, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { Button } from "../components/ui/Button";
import { contactSchema, type ContactFormData, subjects } from "../lib/validations";
import { useToast } from "../hooks/useToast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      subject: "general",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        toast({ variant: 'success', title: "Message sent!", description: "I'll get back to you within 24 hours." });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({ variant: 'error', title: "Failed to send", description: "Please try again or email me directly at aadhikabilanj@gmail.com" });
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aadhikabilanj@gmail.com",
      action: "mailto:aadhikabilanj@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AadhiKabilan",
      action: "https://github.com/AadhiKabilan",
      description: "Check out my code",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      description: "Available for remote work",
    },
    
  ];

  if (submitStatus === "success") {
    return (
      <>
        <main id="main-content" className="pt-16 min-h-screen flex items-center justify-center px-4 py-16">
          <ScrollReveal className="max-w-md w-full text-center">
            <GlassCard className="p-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-success-light)] flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-[var(--color-success)]" />
              </div>
              <h1 className="font-display font-bold text-[var(--color-fg)] text-3xl mb-4">
                Message Sent!
              </h1>
              <p className="text-[var(--color-fg-muted)] leading-relaxed mb-8">
                Thank you for reaching out. I'll get back to you within 24 hours.
                In the meantime, feel free to check out my projects or connect on GitHub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild onClick={() => window.location.href = "/projects"}>
                  View Projects
                </Button>
                <Button variant="ghost" onClick={() => window.location.href = "/contact"}>
                  Send Another
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>
        </main>
      </>
    );
  }

  return (
    <>
      <main id="main-content" className="pt-16">
        <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="contact-heading" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="orb orb-1" style={{ top: '-15%', right: '-10%', opacity: 0.2 }} />
            <div className="orb orb-3" style={{ bottom: '-10%', left: '-5%', opacity: 0.18 }} />
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-4">
                  Get in Touch
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 id="contact-heading" className="font-display font-bold text-[var(--color-fg)] text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Let's <span className="text-[var(--color-accent)]">Work Together</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-[var(--color-fg-muted)] text-lg leading-relaxed">
                  Have a project in mind? Looking for a collaborator? Or just want to say hi?
                  I'd love to hear from you.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <ScrollReveal delay={300} direction="up">
                  <GlassCard className="p-6 h-full">
                    <h2 className="font-semibold text-[var(--color-fg)] mb-6">Let&apos;s Connect</h2>
                    <div className="space-y-5">
                      {contactInfo.map((item) => (
                        <a
                          key={item.label}
                          href={item.action}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-[var(--color-bg-subtle)] border border-transparent hover:border-[var(--color-border)]"
                        >
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110" style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}>
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[var(--color-fg-subtle)] text-xs font-medium uppercase tracking-wider mb-1">
                              {item.label}
                            </p>
                            <p className="text-[var(--color-fg)] font-medium truncate">{item.value}</p>
                            <p className="text-[var(--color-fg-muted)] text-sm mt-0.5">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-2">
                <ScrollReveal delay={400} direction="up">
                  <GlassCard className="p-6 md:p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="label">
                            Name <span className="text-[var(--color-error)]">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            {...register("name")}
                            className="input w-full"
                            aria-invalid={errors.name ? "true" : "false"}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                          {errors.name && (
                            <p id="name-error" className="error-message" role="alert">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="label">
                            Email <span className="text-[var(--color-error)]">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            {...register("email")}
                            className="input w-full"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="error-message" role="alert">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="label">
                          Subject <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <select
                          id="subject"
                          {...register("subject")}
                          className="input w-full"
                          aria-invalid={errors.subject ? "true" : "false"}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        >
                          {subjects.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                        {errors.subject && (
                          <p id="subject-error" className="error-message" role="alert">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="label">
                          Message <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell me about your project, idea, or just say hello..."
                          {...register("message")}
                          className="input w-full resize-none"
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="error-message" role="alert">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-[var(--color-fg-muted)]">
                          By submitting, you agree to our Privacy Policy.
                        </p>
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting || !isValid}
                          className="group w-full md:w-auto min-w-[160px]"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>

                      {submitStatus === "error" && (
                        <div className="flex items-center gap-2 p-4 rounded-xl bg-[var(--color-error-light)] border border-[var(--color-error)]/20" role="alert">
                          <AlertCircle className="h-5 w-5 text-[var(--color-error)] flex-shrink-0" />
                          <p className="text-[var(--color-error)] text-sm">
                            Something went wrong. Please try again or email me directly.
                          </p>
                        </div>
                      )}
                    </form>
                  </GlassCard>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-bg)]" aria-labelledby="availability-heading">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollReveal>
              <h2 id="availability-heading" className="font-display font-bold text-[var(--color-fg)] text-2xl md:text-3xl mb-4">
                Currently Available For
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="inline-flex flex-wrap items-center justify-center gap-2">
                {["Freelance Projects", "Full-time Roles", "Open Source", "Mentoring"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-accent-light)",
                      color: "var(--color-accent)",
                      border: "1px solid var(--color-accent)",
                      
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
