import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Monitor, Quote, Wind } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Psychotherapy",
    desc: "One-on-one sessions tailored to your unique needs, helping you navigate life's challenges with evidence-based therapeutic approaches.",
  },
  {
    icon: Wind,
    title: "Anxiety & Stress Management",
    desc: "Learn proven techniques to reduce anxiety, manage stress, and reclaim calm and clarity in your daily life.",
  },
  {
    icon: Monitor,
    title: "Remote Telehealth Sessions",
    desc: "Access compassionate care from the comfort of your home with secure, HIPAA-compliant virtual therapy sessions.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-therapy-office.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="font-body text-sm tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.80 0.06 145)" }}
          >
            Abbey Wellness &amp; Counseling
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
            style={{ color: "oklch(0.97 0.01 80)" }}
          >
            A Safe Space for Your Healing Journey.
          </h1>
          <p
            className="font-body text-xl md:text-2xl mb-10 leading-relaxed"
            style={{ color: "oklch(0.90 0.02 80)" }}
          >
            Compassionate, professional therapy tailored to your unique path.
          </p>
          <Link
            to="/contact"
            data-ocid="hero.primary_button"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-2xl px-10 py-4 hover:brightness-110 transition-all duration-300 shadow-zen-lg"
          >
            Request an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Welcome intro */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            Welcome
          </span>
          <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
            Welcome to Abbey Wellness &amp; Counseling
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-5">
            We believe that every person deserves a safe, non-judgmental space
            to explore their emotions, heal from past wounds, and build a life
            aligned with their values.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-5">
            Our practice offers evidence-based, compassionate therapy for
            individuals navigating anxiety, life transitions, trauma, and
            relationship challenges.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Whether you are seeking in-person sessions or convenient telehealth
            appointments, we meet you exactly where you are.
          </p>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-3">
              What We Offer
            </span>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="card-zen flex flex-col gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svc.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {svc.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote / CTA */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "oklch(0.93 0.03 145)" }}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <Quote size={40} className="text-primary/40 mx-auto mb-6" />
          <blockquote className="font-display text-3xl md:text-4xl italic font-medium text-foreground mb-10 leading-snug">
            "Healing doesn't mean the damage never existed — it means the damage
            no longer controls your life."
          </blockquote>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold rounded-2xl px-10 py-4 hover:brightness-110 transition-all duration-300 shadow-zen"
          >
            Begin Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
