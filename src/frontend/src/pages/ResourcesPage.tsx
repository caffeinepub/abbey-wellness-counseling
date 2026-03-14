import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Phone } from "lucide-react";

const faqs = [
  // Insurance & Fees
  {
    id: "faq-1",
    ocid: "faq.item.1",
    category: "Insurance & Fees",
    q: "Do you accept insurance?",
    a: "We are currently an out-of-network provider. We can provide you with a superbill (detailed receipt) that you may submit to your insurance company for potential reimbursement. Many PPO plans offer partial reimbursement for out-of-network mental health services. Please contact your insurance provider to confirm your benefits.",
  },
  {
    id: "faq-2",
    ocid: "faq.item.2",
    category: "Insurance & Fees",
    q: "What are your session fees?",
    a: "Individual therapy sessions are 50 minutes long and are priced at $150 per session. Telehealth sessions are the same rate. Payment is due at the time of service and we accept all major credit/debit cards, HSA, and FSA cards.",
  },
  {
    id: "faq-3",
    ocid: "faq.item.3",
    category: "Insurance & Fees",
    q: "Do you offer a sliding scale?",
    a: "Yes, a limited number of reduced-fee slots are available for those experiencing financial hardship. Please discuss this with Dr. Abbey during your initial consultation. We are committed to making therapy accessible.",
  },
  // First Session
  {
    id: "faq-4",
    ocid: "faq.item.4",
    category: "Your First Session",
    q: "What should I expect in my first session?",
    a: "Your first session (intake session) is a chance for us to get to know each other. Dr. Abbey will ask about your background, what brings you to therapy, and your goals. It's a two-way conversation — you're also welcome to ask questions to make sure we're the right fit. There's no pressure and no judgment.",
  },
  {
    id: "faq-5",
    ocid: "faq.item.5",
    category: "Your First Session",
    q: "How long are sessions?",
    a: "Standard therapy sessions are 50 minutes. Extended 80-minute sessions are available for individuals who benefit from additional time and can be scheduled upon request.",
  },
  {
    id: "faq-6",
    ocid: "faq.item.6",
    category: "Your First Session",
    q: "What should I bring to my first session?",
    a: "For in-person visits, bring a valid photo ID and a completed intake form (sent to you in advance). For telehealth, simply ensure you have a private, quiet space with a reliable internet connection. Bring yourself — that's truly all that's required.",
  },
  // Confidentiality
  {
    id: "faq-7",
    ocid: "faq.item.7",
    category: "Privacy & Confidentiality",
    q: "Is what I share confidential?",
    a: "Yes. Everything discussed in therapy is strictly confidential. Dr. Abbey is ethically and legally bound to protect your privacy. What you share stays between the two of you, with very limited exceptions required by law.",
  },
  {
    id: "faq-8",
    ocid: "faq.item.8",
    category: "Privacy & Confidentiality",
    q: "When is confidentiality broken?",
    a: "Confidentiality may be broken only in specific circumstances required by law: (1) if there is imminent risk of harm to yourself or others, (2) if there is suspicion of child, elder, or dependent adult abuse, or (3) if a court order requires disclosure. These are rare and will always be discussed with you whenever possible.",
  },
  {
    id: "faq-9",
    ocid: "faq.item.9",
    category: "Privacy & Confidentiality",
    q: "How is my data protected (HIPAA)?",
    a: "Our practice is fully HIPAA-compliant. All records are stored securely in an encrypted electronic health records (EHR) system. Telehealth sessions are conducted on a HIPAA-compliant video platform. Your personal health information is never sold or shared with third parties.",
  },
];

const categories = [
  "Insurance & Fees",
  "Your First Session",
  "Privacy & Confidentiality",
];

const crisisResources = [
  {
    label: "988 Suicide & Crisis Lifeline",
    detail: "Call or text 988 — available 24/7",
    href: "tel:988",
  },
  {
    label: "Crisis Text Line",
    detail: "Text HOME to 741741",
    href: "sms:741741",
  },
  {
    label: "National Alliance on Mental Illness (NAMI)",
    detail: "1-800-950-NAMI",
    href: "tel:18009506264",
  },
  {
    label: "SAMHSA National Helpline",
    detail: "1-800-662-4357 — free, confidential 24/7",
    href: "tel:18006624357",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="py-28 px-6 bg-secondary text-center">
        <div className="container mx-auto max-w-2xl">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            Support &amp; Information
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground">
            Patient Resources
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            Answers to common questions and resources to support you on your
            journey.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {cat}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-3"
              >
                {faqs
                  .filter((f) => f.category === cat)
                  .map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      data-ocid={faq.ocid}
                      className="bg-card rounded-2xl border border-border px-6 shadow-xs"
                    >
                      <AccordionTrigger className="font-body text-base font-semibold text-foreground py-5 hover:text-primary hover:no-underline text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Crisis resources */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-3">
            Crisis &amp; Support Resources
          </h2>
          <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
            If you or someone you know is in immediate distress, please reach
            out to one of the following resources right away.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {crisisResources.map((r) => (
              <a
                key={r.label}
                href={r.href}
                className="card-zen flex items-start gap-4 group"
              >
                <span className="bg-primary/10 rounded-full p-2 mt-0.5">
                  <Phone size={16} className="text-primary" />
                </span>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {r.label}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    {r.detail} <ExternalLink size={11} />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
