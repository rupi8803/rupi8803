import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  CalendarClock,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { siteConfig } from "../config/siteContent";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  preferredDateTime: string;
  notes: string;
}

const emptyContact: ContactForm = {
  name: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

const emptyConsultation: ConsultationForm = {
  name: "",
  email: "",
  phone: "",
  preferredDateTime: "",
  notes: "",
};

const serviceOptions = [
  { value: "web-design", label: "Web Design & Development" },
  { value: "website-maintenance", label: "Website Maintenance" },
  { value: "it-support", label: "IT Support (Small Business)" },
  { value: "managed-it", label: "Managed IT Services" },
  { value: "pos-solutions", label: "POS Solutions" },
  { value: "backup-recovery", label: "Backup & Recovery" },
  { value: "other", label: "Other / Not Sure" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.company.phone,
    href: `tel:${siteConfig.company.phone}`,
    description: "Call us directly during business hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.company.email,
    href: `mailto:${siteConfig.company.email}`,
    description: "We aim to reply within 4 business hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 8am–6pm AEST",
    secondary: "Saturday: 9am–2pm AEST",
    href: undefined,
    description: "Emergency IT support available 24/7",
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.company.address,
    href: "https://maps.google.com",
    description: "Visit us or book a remote consultation",
  },
];

export function ContactPage() {
  const [contactForm, setContactForm] = useState<ContactForm>(emptyContact);
  const [consultForm, setConsultForm] =
    useState<ConsultationForm>(emptyConsultation);
  const [submittingContact, setSubmittingContact] = useState(false);
  const [submittingConsult, setSubmittingConsult] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [consultSuccess, setConsultSuccess] = useState(false);
  const { actor } = useActor(createActor);

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmittingContact(true);
    try {
      if (actor) {
        await actor.submitContactForm({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          serviceInterest: contactForm.serviceInterest,
          message: contactForm.message,
        });
      }
      setContactSuccess(true);
      setContactForm(emptyContact);
      toast.success(
        "Message sent! We'll get back to you within 4 business hours.",
      );
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    } finally {
      setSubmittingContact(false);
    }
  }

  async function handleConsultSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consultForm.name || !consultForm.email || !consultForm.phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmittingConsult(true);
    try {
      if (actor) {
        await actor.submitConsultationBooking({
          name: consultForm.name,
          email: consultForm.email,
          phone: consultForm.phone,
          preferredDateTime: consultForm.preferredDateTime,
          notes: consultForm.notes,
        });
      }
      setConsultSuccess(true);
      setConsultForm(emptyConsultation);
      toast.success(
        "Consultation booked! We'll confirm your appointment shortly.",
      );
    } catch {
      toast.error("Could not submit booking. Please call us directly.");
    } finally {
      setSubmittingConsult(false);
    }
  }

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Get In Touch — We'd Love to Hear From You"
        subtitle="Whether you have a question, need a quote, or just want to explore your options — our team is ready to help."
        compact
        ctas={[]}
      />

      {/* Response promise badge */}
      <div className="bg-primary/5 border-b border-border py-3">
        <div className="container flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge
              variant="outline"
              className="gap-2 px-4 py-2 text-sm border-primary/30 bg-card text-primary font-medium"
              data-ocid="contact.response_badge"
            >
              <Zap className="w-3.5 h-3.5" />
              We respond within 4 business hours — guaranteed
            </Badge>
          </motion.div>
        </div>
      </div>

      {/* Main contact section */}
      <section className="py-20 bg-background" data-ocid="contact.main_section">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <SectionHeading
                label="Send a Message"
                title="Tell Us How We Can Help"
                align="left"
                className="mb-8"
              />

              {contactSuccess ? (
                <Card
                  className="border-primary/20 bg-primary/5"
                  data-ocid="contact.success_state"
                >
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl mb-2">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                      Thank you for reaching out. A member of our team will be
                      in touch within 4 business hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setContactSuccess(false)}
                      data-ocid="contact.send_another_button"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <form
                      onSubmit={handleContactSubmit}
                      className="space-y-5"
                      data-ocid="contact.form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-name">Full Name *</Label>
                          <Input
                            id="contact-name"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="John Smith"
                            required
                            data-ocid="contact.name_input"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-email">Email Address *</Label>
                          <Input
                            id="contact-email"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="john@business.com.au"
                            required
                            data-ocid="contact.email_input"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-phone">Phone Number *</Label>
                          <Input
                            id="contact-phone"
                            value={contactForm.phone}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="(03) 9000 1234"
                            required
                            data-ocid="contact.phone_input"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label>Service Interest</Label>
                          <Select
                            value={contactForm.serviceInterest}
                            onValueChange={(v) =>
                              setContactForm({
                                ...contactForm,
                                serviceInterest: v,
                              })
                            }
                          >
                            <SelectTrigger data-ocid="contact.service_select">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea
                          id="contact-message"
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell us about your business and what you need help with..."
                          rows={5}
                          required
                          data-ocid="contact.message_textarea"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={submittingContact}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-5"
                        data-ocid="contact.submit_button"
                      >
                        {submittingContact ? "Sending..." : "Send Message"}
                      </Button>

                      {submittingContact && (
                        <p
                          className="text-center text-sm text-muted-foreground"
                          data-ocid="contact.loading_state"
                        >
                          Sending your message...
                        </p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              )}
            </AnimatedSection>

            {/* Right sidebar — Contact Info */}
            <AnimatedSection direction="right" className="space-y-5">
              <SectionHeading
                label="Contact Details"
                title="Reach Us Directly"
                align="left"
                className="mb-6"
              />

              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card
                    className="shadow-card hover-lift"
                    data-ocid={`contact.info.${i + 1}`}
                  >
                    <CardContent className="p-5">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-semibold text-foreground hover:text-primary transition-colors block truncate"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-semibold text-foreground">
                              {item.value}
                            </p>
                          )}
                          {"secondary" in item && item.secondary && (
                            <p className="text-sm text-muted-foreground">
                              {item.secondary}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Map placeholder */}
              <Card className="overflow-hidden shadow-card">
                <div className="relative h-48 bg-muted flex items-center justify-center">
                  <img
                    src="/assets/generated/map-placeholder.jpg"
                    alt="Office location map"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center text-center p-4">
                    <MapPin className="w-8 h-8 text-primary mb-2" />
                    <p className="font-semibold text-foreground text-sm">
                      Level 5, 123 Collins Street
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Melbourne VIC 3000
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-xs text-primary hover:underline font-medium"
                      data-ocid="contact.map_link"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Separator />

      {/* Consultation Booking Section */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="contact.consultation_section"
      >
        <div className="container max-w-3xl">
          <AnimatedSection>
            <SectionHeading
              label="Free Consultation"
              title="Book a Free Consultation"
              subtitle="Prefer to talk things through? Book a free 30-minute consultation and we'll help you figure out the best solution for your business — no obligation."
              className="mb-10"
            />

            <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
              {[
                "30-minute session",
                "No obligation",
                "Remote or in-person",
                "Same-week availability",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {consultSuccess ? (
              <Card
                className="border-primary/20 bg-primary/5"
                data-ocid="contact.consult_success_state"
              >
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CalendarClock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-2">
                    Consultation Booked!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We'll confirm your preferred time via email or phone within
                    a few hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setConsultSuccess(false)}
                    data-ocid="contact.book_another_button"
                  >
                    Book Another Consultation
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form
                    onSubmit={handleConsultSubmit}
                    className="space-y-5"
                    data-ocid="contact.consultation_form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="consult-name">Full Name *</Label>
                        <Input
                          id="consult-name"
                          value={consultForm.name}
                          onChange={(e) =>
                            setConsultForm({
                              ...consultForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Jane Smith"
                          required
                          data-ocid="contact.consult_name_input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="consult-email">Email Address *</Label>
                        <Input
                          id="consult-email"
                          type="email"
                          value={consultForm.email}
                          onChange={(e) =>
                            setConsultForm({
                              ...consultForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="jane@business.com.au"
                          required
                          data-ocid="contact.consult_email_input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="consult-phone">Phone Number *</Label>
                        <Input
                          id="consult-phone"
                          value={consultForm.phone}
                          onChange={(e) =>
                            setConsultForm({
                              ...consultForm,
                              phone: e.target.value,
                            })
                          }
                          placeholder="(03) 9000 1234"
                          required
                          data-ocid="contact.consult_phone_input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="consult-datetime">
                          Preferred Date & Time
                        </Label>
                        <Input
                          id="consult-datetime"
                          type="datetime-local"
                          value={consultForm.preferredDateTime}
                          onChange={(e) =>
                            setConsultForm({
                              ...consultForm,
                              preferredDateTime: e.target.value,
                            })
                          }
                          data-ocid="contact.consult_datetime_input"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="consult-notes">
                        Brief Description of Needs
                      </Label>
                      <Textarea
                        id="consult-notes"
                        value={consultForm.notes}
                        onChange={(e) =>
                          setConsultForm({
                            ...consultForm,
                            notes: e.target.value,
                          })
                        }
                        placeholder="Tell us a bit about your business and what you'd like to discuss in the consultation..."
                        rows={4}
                        data-ocid="contact.consult_notes_textarea"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submittingConsult}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base py-5"
                      data-ocid="contact.consult_submit_button"
                    >
                      {submittingConsult
                        ? "Booking..."
                        : "Book Free Consultation"}
                    </Button>

                    {submittingConsult && (
                      <p
                        className="text-center text-sm text-muted-foreground"
                        data-ocid="contact.consult_loading_state"
                      >
                        Submitting your booking...
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
