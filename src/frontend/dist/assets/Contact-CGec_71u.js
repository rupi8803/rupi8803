import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, s as siteConfig, P as Phone, M as Mail, C as Clock, d as MapPin } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { C as Card, a as CardContent } from "./card-CX3JSG1C.js";
import { I as Input } from "./input--gcXmeYy.js";
import { u as useActor, L as Label, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea, e as createActor } from "./backend-D-1A2tK6.js";
import { S as Separator } from "./separator-4ycmBCmN.js";
import { u as ue } from "./index-DhEDnxwQ.js";
import { a as AnimatedSection } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { m as motion } from "./proxy-n-Hon7jR.js";
import { Z as Zap } from "./zap-B4TSkOxy.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import "./index-BnXQfpIr.js";
import "./index-DvZw9zcF.js";
import "./index-BwSjJFUb.js";
import "./chevron-up-D3jqohJj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
];
const CalendarClock = createLucideIcon("calendar-clock", __iconNode);
const emptyContact = {
  name: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: ""
};
const emptyConsultation = {
  name: "",
  email: "",
  phone: "",
  preferredDateTime: "",
  notes: ""
};
const serviceOptions = [
  { value: "web-design", label: "Web Design & Development" },
  { value: "website-maintenance", label: "Website Maintenance" },
  { value: "it-support", label: "IT Support (Small Business)" },
  { value: "managed-it", label: "Managed IT Services" },
  { value: "pos-solutions", label: "POS Solutions" },
  { value: "backup-recovery", label: "Backup & Recovery" },
  { value: "other", label: "Other / Not Sure" }
];
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.company.phone,
    href: `tel:${siteConfig.company.phone}`,
    description: "Call us directly during business hours"
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.company.email,
    href: `mailto:${siteConfig.company.email}`,
    description: "We aim to reply within 4 business hours"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 8am–6pm AEST",
    secondary: "Saturday: 9am–2pm AEST",
    href: void 0,
    description: "Emergency IT support available 24/7"
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.company.address,
    href: "https://maps.google.com",
    description: "Visit us or book a remote consultation"
  }
];
function ContactPage() {
  const [contactForm, setContactForm] = reactExports.useState(emptyContact);
  const [consultForm, setConsultForm] = reactExports.useState(emptyConsultation);
  const [submittingContact, setSubmittingContact] = reactExports.useState(false);
  const [submittingConsult, setSubmittingConsult] = reactExports.useState(false);
  const [contactSuccess, setContactSuccess] = reactExports.useState(false);
  const [consultSuccess, setConsultSuccess] = reactExports.useState(false);
  const { actor } = useActor(createActor);
  async function handleContactSubmit(e) {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      ue.error("Please fill in all required fields.");
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
          message: contactForm.message
        });
      }
      setContactSuccess(true);
      setContactForm(emptyContact);
      ue.success(
        "Message sent! We'll get back to you within 4 business hours."
      );
    } catch {
      ue.error(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setSubmittingContact(false);
    }
  }
  async function handleConsultSubmit(e) {
    e.preventDefault();
    if (!consultForm.name || !consultForm.email || !consultForm.phone) {
      ue.error("Please fill in your name, email, and phone number.");
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
          notes: consultForm.notes
        });
      }
      setConsultSuccess(true);
      setConsultForm(emptyConsultation);
      ue.success(
        "Consultation booked! We'll confirm your appointment shortly."
      );
    } catch {
      ue.error("Could not submit booking. Please call us directly.");
    } finally {
      setSubmittingConsult(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Contact Us",
        title: "Get In Touch — We'd Love to Hear From You",
        subtitle: "Whether you have a question, need a quote, or just want to explore your options — our team is ready to help.",
        compact: true,
        ctas: []
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/5 border-b border-border py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "gap-2 px-4 py-2 text-sm border-primary/30 bg-card text-primary font-medium",
            "data-ocid": "contact.response_badge",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
              "We respond within 4 business hours — guaranteed"
            ]
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "contact.main_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_400px] gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            label: "Send a Message",
            title: "Tell Us How We Can Help",
            align: "left",
            className: "mb-8"
          }
        ),
        contactSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "border-primary/20 bg-primary/5",
            "data-ocid": "contact.success_state",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-10 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-2", children: "Message Received!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-sm mx-auto", children: "Thank you for reaching out. A member of our team will be in touch within 4 business hours." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setContactSuccess(false),
                  "data-ocid": "contact.send_another_button",
                  children: "Send Another Message"
                }
              )
            ] })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleContactSubmit,
            className: "space-y-5",
            "data-ocid": "contact.form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-name", children: "Full Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-name",
                      value: contactForm.name,
                      onChange: (e) => setContactForm({
                        ...contactForm,
                        name: e.target.value
                      }),
                      placeholder: "John Smith",
                      required: true,
                      "data-ocid": "contact.name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-email", children: "Email Address *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-email",
                      type: "email",
                      value: contactForm.email,
                      onChange: (e) => setContactForm({
                        ...contactForm,
                        email: e.target.value
                      }),
                      placeholder: "john@business.com.au",
                      required: true,
                      "data-ocid": "contact.email_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-phone", children: "Phone Number *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-phone",
                      value: contactForm.phone,
                      onChange: (e) => setContactForm({
                        ...contactForm,
                        phone: e.target.value
                      }),
                      placeholder: "(03) 9000 1234",
                      required: true,
                      "data-ocid": "contact.phone_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service Interest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: contactForm.serviceInterest,
                      onValueChange: (v) => setContactForm({
                        ...contactForm,
                        serviceInterest: v
                      }),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "contact.service_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a service" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: serviceOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-message", children: "Message *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "contact-message",
                    value: contactForm.message,
                    onChange: (e) => setContactForm({
                      ...contactForm,
                      message: e.target.value
                    }),
                    placeholder: "Tell us about your business and what you need help with...",
                    rows: 5,
                    required: true,
                    "data-ocid": "contact.message_textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: submittingContact,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-5",
                  "data-ocid": "contact.submit_button",
                  children: submittingContact ? "Sending..." : "Send Message"
                }
              ),
              submittingContact && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center text-sm text-muted-foreground",
                  "data-ocid": "contact.loading_state",
                  children: "Sending your message..."
                }
              )
            ]
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "right", className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            label: "Contact Details",
            title: "Reach Us Directly",
            align: "left",
            className: "mb-6"
          }
        ),
        contactInfo.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "shadow-card hover-lift",
                "data-ocid": `contact.info.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5", children: item.label }),
                    item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: item.href,
                        className: "font-semibold text-foreground hover:text-primary transition-colors block truncate",
                        children: item.value
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: item.value }),
                    "secondary" in item && item.secondary && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.secondary }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: item.description })
                  ] })
                ] }) })
              }
            )
          },
          item.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 bg-muted flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/map-placeholder.jpg",
              alt: "Office location map",
              className: "w-full h-full object-cover",
              onError: (e) => {
                e.target.style.display = "none";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-primary/5 flex flex-col items-center justify-center text-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-8 h-8 text-primary mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: "Level 5, 123 Collins Street" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "Melbourne VIC 3000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://maps.google.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-3 text-xs text-primary hover:underline font-medium",
                "data-ocid": "contact.map_link",
                children: "Open in Google Maps →"
              }
            )
          ] })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "contact.consultation_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Free Consultation",
              title: "Book a Free Consultation",
              subtitle: "Prefer to talk things through? Book a free 30-minute consultation and we'll help you figure out the best solution for your business — no obligation.",
              className: "mb-10"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-6 mb-10 flex-wrap", children: [
            "30-minute session",
            "No obligation",
            "Remote or in-person",
            "Same-week availability"
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                item
              ]
            },
            item
          )) }),
          consultSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "border-primary/20 bg-primary/5",
              "data-ocid": "contact.consult_success_state",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-10 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "w-8 h-8 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-2", children: "Consultation Booked!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "We'll confirm your preferred time via email or phone within a few hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setConsultSuccess(false),
                    "data-ocid": "contact.book_another_button",
                    children: "Book Another Consultation"
                  }
                )
              ] })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleConsultSubmit,
              className: "space-y-5",
              "data-ocid": "contact.consultation_form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "consult-name", children: "Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "consult-name",
                        value: consultForm.name,
                        onChange: (e) => setConsultForm({
                          ...consultForm,
                          name: e.target.value
                        }),
                        placeholder: "Jane Smith",
                        required: true,
                        "data-ocid": "contact.consult_name_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "consult-email", children: "Email Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "consult-email",
                        type: "email",
                        value: consultForm.email,
                        onChange: (e) => setConsultForm({
                          ...consultForm,
                          email: e.target.value
                        }),
                        placeholder: "jane@business.com.au",
                        required: true,
                        "data-ocid": "contact.consult_email_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "consult-phone", children: "Phone Number *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "consult-phone",
                        value: consultForm.phone,
                        onChange: (e) => setConsultForm({
                          ...consultForm,
                          phone: e.target.value
                        }),
                        placeholder: "(03) 9000 1234",
                        required: true,
                        "data-ocid": "contact.consult_phone_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "consult-datetime", children: "Preferred Date & Time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "consult-datetime",
                        type: "datetime-local",
                        value: consultForm.preferredDateTime,
                        onChange: (e) => setConsultForm({
                          ...consultForm,
                          preferredDateTime: e.target.value
                        }),
                        "data-ocid": "contact.consult_datetime_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "consult-notes", children: "Brief Description of Needs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "consult-notes",
                      value: consultForm.notes,
                      onChange: (e) => setConsultForm({
                        ...consultForm,
                        notes: e.target.value
                      }),
                      placeholder: "Tell us a bit about your business and what you'd like to discuss in the consultation...",
                      rows: 4,
                      "data-ocid": "contact.consult_notes_textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: submittingConsult,
                    className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base py-5",
                    "data-ocid": "contact.consult_submit_button",
                    children: submittingConsult ? "Booking..." : "Book Free Consultation"
                  }
                ),
                submittingConsult && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-center text-sm text-muted-foreground",
                    "data-ocid": "contact.consult_loading_state",
                    children: "Submitting your booking..."
                  }
                )
              ]
            }
          ) }) })
        ] }) })
      }
    )
  ] });
}
export {
  ContactPage
};
