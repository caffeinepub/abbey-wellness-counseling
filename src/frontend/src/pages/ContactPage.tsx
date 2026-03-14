import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2, Lock, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submit(name, email, phone, message, method || "Email");
      }
      setSubmitted(true);
      toast.success("Message sent! We will be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try calling us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* Page hero */}
      <section className="py-28 px-6 bg-secondary text-center">
        <div className="container mx-auto max-w-2xl">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            Reach Out
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground">
            Get In Touch
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            We would love to hear from you. Complete the form below or give us a
            call.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-14 items-start">
          {/* Phone + info */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="card-zen flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={28} className="text-primary" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  Call for a Consultation
                </p>
                <a
                  href="tel:8177248161"
                  className="font-display text-3xl font-semibold text-primary hover:text-sage-600 transition-colors"
                >
                  (817) 724-8161
                </a>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Available Monday – Friday, 9am – 6pm CT. Leave a voicemail
                outside of office hours and we will return your call within one
                business day.
              </p>
            </div>

            <div className="card-zen flex flex-col gap-3">
              <h3 className="font-display text-base font-semibold text-foreground">
                Office Hours
              </h3>
              {[
                ["Monday – Thursday", "9:00 AM – 6:00 PM"],
                ["Friday", "9:00 AM – 3:00 PM"],
                ["Saturday – Sunday", "Closed"],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between font-body text-sm"
                >
                  <span className="text-muted-foreground">{day}</span>
                  <span className="text-foreground font-medium">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="card-zen flex flex-col items-center text-center gap-5 py-16"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-foreground">
                  Message Received!
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed max-w-sm">
                  Thank you for reaching out, <strong>{name}</strong>. We will
                  review your message and follow up within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-zen flex flex-col gap-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Request an Appointment
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.name.input"
                      placeholder="Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-xl border-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email.input"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-xl border-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="phone"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.phone.input"
                      placeholder="(817) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl border-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="method"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Preferred Contact Method
                    </Label>
                    <Select value={method} onValueChange={setMethod}>
                      <SelectTrigger
                        id="method"
                        data-ocid="contact.method.select"
                        className="rounded-xl border-input"
                      >
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Email">Email</SelectItem>
                        <SelectItem value="Phone">Phone</SelectItem>
                        <SelectItem value="Text">Text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="message"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Message / Reason for Inquiry{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message.textarea"
                    placeholder="Please briefly describe what brings you to therapy and any questions you have..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="rounded-xl border-input resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                  <Lock size={12} className="shrink-0 mt-0.5 text-primary" />
                  <span>
                    Your information is kept strictly confidential and handled
                    in accordance with HIPAA privacy regulations.
                  </span>
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={submitting}
                  className="rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-base py-5 hover:brightness-110 transition-all"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
