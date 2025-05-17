"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/section-heading";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen px-8 max-w-5xl items-center w-full mx-auto">
      {/* Hero Section */}
      <section className="pt-32  ">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="body-lg text-muted-foreground mb-8">
              We'd love to hear from you. Get in touch with our team to discuss
              your project or answer any questions you may have.
            </p>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="premium-card p-8 text-center">
              <div className="mb-6 text-gold bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="heading-sm mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-2">Mon-Fri, 9am-6pm</p>
              <a
                href="tel:+15551234567"
                className="text-lg font-medium hover:text-gold transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="premium-card p-8 text-center">
              <div className="mb-6 text-gold bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="heading-sm mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-2">
                We'll respond within 24 hours
              </p>
              <a
                href="mailto:partner@backersstage.com"
                className="text-lg font-medium hover:text-gold transition-colors"
              >
                partner@backersstage.com
              </a>
            </div>

            <div className="premium-card p-8 text-center">
              <div className="mb-6 text-gold bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="heading-sm mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-2">Our headquarters</p>
              <address className="text-lg font-medium not-italic">
                123 Premium Street
                <br />
                Luxury City, LC 10001
              </address>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.subject}
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">
                          Project Discussion
                        </SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gold-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex bg-accent px-5 py-2 rounded items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            <div>
              <SectionHeading
                title="Our Location"
                subtitle="Visit our headquarters or reach out to us online."
              />

              <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                {/* This would typically be a map component */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Interactive Map Would Be Here
                  </p>
                </div>
              </div>

              <div className="premium-card p-6">
                <h3 className="heading-sm mb-4">Office Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with Premium Brand."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical process for new projects?",
                answer:
                  "Our process begins with an initial consultation to understand your needs and goals. We then develop a proposal, create a detailed project plan, and work closely with you throughout the implementation phase to ensure your vision is realized.",
              },
              {
                question: "How long does a typical project take to complete?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple project might take 2-4 weeks, while more complex projects can take several months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question:
                  "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we offer various support packages to ensure your solution continues to perform optimally. Our team is always available to address any questions or concerns that may arise after project completion.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We work with clients across various industries, including luxury retail, hospitality, finance, technology, and more. Our diverse expertise allows us to bring fresh perspectives and innovative solutions to any industry.",
              },
            ].map((faq, i) => (
              <div key={i} className="premium-card p-6">
                <h3 className="heading-sm mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Privacy Policy Section */}
      <section className="py-24 mb-8 pb-10 px-8 rounded-xl bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Effective Date: 01-05-2025"
            center
          />

          <div className="max-w-4xl mx-auto">
            <div className="premium-card p-8 space-y-6">
              <p className="text-muted-foreground">
                Effective Date: 01-05-2025
              </p>
              <p className="text-muted-foreground">
                BackersStage (“we,” “our,” “us”) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, use our platform, or participate in our events. Please
                read this policy carefully to understand our views and practices
                regarding your personal data.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "1. Information We Collect",
                    content: [
                      {
                        subtitle: "a. Personal Information:",
                        text: "We collect information that identifies you personally, such as your name, email address, phone number, company, job title, and any other information you provide during registration, communication, or use of our services.",
                      },
                      {
                        subtitle: "b. Technical Data:",
                        text: "This includes your IP address, browser type, operating system, device identifiers, and usage data collected automatically through cookies, log files, and other tracking technologies when you visit our website or use our services.",
                      },
                      {
                        subtitle: "c. Event Participation Data:",
                        text: "Details related to your participation in events, including registration information, pitch submissions, networking activities, and communication with other users.",
                      },
                    ],
                  },
                  {
                    title: "2. How We Use Your Information",
                    content: [
                      {
                        subtitle: "",
                        text: "We use your information to:",
                      },
                      {
                        subtitle: "",
                        text: "• Provide, operate, and maintain our services and events.",
                      },
                      {
                        subtitle: "",
                        text: "• Facilitate communications between founders, investors, partners, and participants.",
                      },
                      {
                        subtitle: "",
                        text: "• Process registrations, applications, and submissions.",
                      },
                      {
                        subtitle: "",
                        text: "• Improve and personalize your experience.",
                      },
                      {
                        subtitle: "",
                        text: "• Send important updates, event notifications, and marketing communications (with your consent).",
                      },
                      {
                        subtitle: "",
                        text: "• Comply with legal obligations and protect our rights.",
                      },
                    ],
                  },
                  {
                    title: "3. Sharing Your Information",
                    content: [
                      {
                        subtitle: "",
                        text: "We do not sell your personal data. We may share your information with:",
                      },
                      {
                        subtitle: "• Service Providers:",
                        text: "Third-party vendors who support our platform, events, and marketing efforts.",
                      },
                      {
                        subtitle: "• Partners and Sponsors:",
                        text: "With your consent or as necessary to facilitate partnerships and event participation.",
                      },
                      {
                        subtitle: "• Legal Authorities:",
                        text: "When required by law or to protect our legal rights.",
                      },
                    ],
                  },
                  {
                    title: "4. Cookies and Tracking Technologies",
                    content:
                      "We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide relevant content. You can control cookies through your browser settings but disabling some cookies may affect website functionality.",
                  },
                  {
                    title: "5. Data Security",
                    content:
                      "We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.",
                  },
                  {
                    title: "6. Data Retention",
                    content:
                      "We retain your personal information as long as necessary to fulfill the purposes described in this policy or as required by law.",
                  },
                  {
                    title: "7. Your Rights",
                    content: [
                      {
                        subtitle: "",
                        text: "Depending on your location, you may have the right to:",
                      },
                      {
                        subtitle: "",
                        text: "• Access, correct, or delete your personal data.",
                      },
                      {
                        subtitle: "",
                        text: "• Object to or restrict certain processing of your data.",
                      },
                      {
                        subtitle: "",
                        text: "• Withdraw consent to marketing communications.",
                      },
                      {
                        subtitle: "",
                        text: "• Request data portability.",
                      },
                      {
                        subtitle: "",
                        text: "To exercise these rights, please contact us at atharv@backersstage.com.",
                      },
                    ],
                  },
                  {
                    title: "8. Children’s Privacy",
                    content:
                      "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from minors.",
                  },
                  {
                    title: "9. Changes to This Policy",
                    content:
                      "We may update this Privacy Policy periodically. We will notify you of any significant changes via our website or email.",
                  },
                  {
                    title: "10. Contact Us",
                    content:
                      "If you have questions about this Privacy Policy or our data practices, please contact us at: partner@backersstage.com",
                  },
                  {
                    title: "11. Changes to Terms",
                    content:
                      "We may update these Terms from time to time. Continued use of our services after changes indicates your acceptance of the revised Terms.",
                  },
                  {
                    title: "12. Contact Information",
                    content:
                      "If you have questions about these Terms, please contact us at: Email: partner@backersstage.com",
                  },
                ].map((section, i) => (
                  <div key={i} className="space-y-4">
                    <h3 className="heading-sm">{section.title}</h3>
                    {Array.isArray(section.content) ? (
                      <div className="space-y-2 pl-4">
                        {section.content.map((item, j) => (
                          <div key={j}>
                            {item.subtitle && (
                              <p className="font-medium">{item.subtitle}</p>
                            )}
                            <p className="text-muted-foreground">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">{section.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
