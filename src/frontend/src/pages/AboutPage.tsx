import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    desc: "Every session begins with unconditional positive regard. You will always feel heard, accepted, and understood without judgment.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Practice",
    desc: "Treatments grounded in the latest clinical research — including CBT, ACT, and trauma-informed approaches — ensuring you receive effective, proven care.",
  },
  {
    icon: Award,
    title: "Growth-Centered",
    desc: "Therapy is a collaborative journey. Together we set meaningful goals and celebrate each step toward the life you deserve.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page hero */}
      <section
        className="relative py-28 px-6 flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/about-nature.dim_800x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 page-hero-overlay" />
        <div className="relative z-10 container mx-auto max-w-4xl">
          <span
            className="font-body text-sm tracking-widest uppercase mb-4 block"
            style={{ color: "oklch(0.80 0.06 145)" }}
          >
            Get to Know Me
          </span>
          <h1
            className="font-display text-5xl md:text-6xl font-semibold leading-tight"
            style={{ color: "oklch(0.97 0.01 80)" }}
          >
            About Me
          </h1>
        </div>
      </section>

      {/* Two-column bio */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="flex justify-center">
            <img
              src="/assets/generated/therapist-portrait.dim_600x700.jpg"
              alt="Dr. Abbey — Licensed Professional Counselor"
              className="w-full max-w-sm rounded-3xl shadow-zen-lg object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-4xl font-semibold text-foreground mb-1">
                Dr. Abbey
              </h2>
              <p className="font-body text-sm tracking-wide text-primary uppercase font-semibold">
                Licensed Professional Counselor · LPC-Associate Supervisor
              </p>
            </div>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              With over a decade of clinical experience, Dr. Abbey has dedicated
              her career to helping individuals find clarity, restore
              well-being, and build resilience. She holds a Master of Science in
              Clinical Mental Health Counseling and has completed advanced
              training in Cognitive Behavioral Therapy (CBT) and Acceptance and
              Commitment Therapy (ACT).
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Dr. Abbey specializes in anxiety disorders, life transitions,
              grief, self-esteem, and relationship challenges. Her warm, direct
              style creates an atmosphere where clients feel genuinely safe to
              explore difficult emotions and take meaningful steps toward
              lasting change.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              She is deeply committed to culturally responsive care and strives
              to honor each client's unique background, identity, and lived
              experience in every session.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold rounded-2xl px-8 py-3 mt-2 hover:brightness-110 transition-all duration-300 shadow-zen w-fit"
            >
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-3">
              My Approach
            </span>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              A Philosophy Rooted in Connection
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              I believe that the therapeutic relationship itself is one of the
              most powerful instruments of healing. Every technique, tool, and
              framework I use is in service of our human connection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card-zen flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-5">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">
            Taking the first step toward therapy is an act of courage. I'm here
            to walk alongside you every step of the way.
          </p>
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
