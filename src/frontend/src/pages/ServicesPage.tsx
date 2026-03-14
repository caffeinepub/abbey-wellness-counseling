import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2, Monitor, Wind } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Psychotherapy",
    tagline: "One-on-one care tailored to you",
    desc: "Through a thoughtful, personalized approach, we explore the patterns, beliefs, and experiences shaping your well-being. Whether you are navigating anxiety, depression, trauma, or major life changes, individual therapy provides a dedicated space for growth and healing.",
    features: [
      "Personalized treatment planning",
      "Cognitive Behavioral Therapy (CBT)",
      "Acceptance & Commitment Therapy (ACT)",
      "Trauma-informed approaches",
    ],
    accent: "oklch(0.62 0.07 145)",
  },
  {
    icon: Wind,
    title: "Anxiety & Stress Management",
    tagline: "Reclaim calm and clarity",
    desc: "Anxiety can feel overwhelming, but it doesn't have to define your life. Using evidence-based techniques, we work together to identify triggers, reframe unhelpful thought patterns, and build a practical toolkit for lasting resilience.",
    features: [
      "Mindfulness-based stress reduction",
      "Breathing and grounding techniques",
      "Exposure therapy when appropriate",
      "Long-term coping strategies",
    ],
    accent: "oklch(0.72 0.07 145)",
  },
  {
    icon: Monitor,
    title: "Remote Telehealth Sessions",
    tagline: "Professional care from anywhere",
    desc: "Geography should never be a barrier to mental health support. Our secure, HIPAA-compliant telehealth platform delivers the same quality of care as in-person sessions — from the comfort and privacy of your own home or wherever you feel most at ease.",
    features: [
      "HIPAA-compliant video platform",
      "Flexible scheduling options",
      "Available across Texas",
      "All services available remotely",
    ],
    accent: "oklch(0.80 0.06 145)",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="py-28 px-6 bg-secondary text-center">
        <div className="container mx-auto max-w-2xl">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            How We Help
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground">
            Our Services
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            Every service is designed with one goal: to provide you with a
            transformative, supportive experience on your path to lasting
            well-being.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-card rounded-3xl shadow-zen border border-border overflow-hidden flex flex-col"
            >
              <div className="px-8 pt-8 pb-4 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${svc.accent}22` }}
                >
                  <svc.icon size={26} style={{ color: svc.accent }} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                    {svc.title}
                  </h3>
                  <p className="font-body text-xs text-primary uppercase tracking-wide mt-0.5">
                    {svc.tagline}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 flex flex-col gap-5 flex-1">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {svc.desc}
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-foreground">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-secondary">
        <div className="container mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-5">
            Ready to Start?
          </h2>
          <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">
            Reach out today to schedule your first session. We offer a free
            15-minute phone consultation to answer your questions and explore
            the right fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold rounded-2xl px-10 py-4 hover:brightness-110 transition-all duration-300 shadow-zen"
          >
            Request an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
