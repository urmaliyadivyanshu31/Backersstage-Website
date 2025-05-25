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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                Our team is in
                <br />
                Dubai, Australia and India
              </address>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 max-w-2xl mx-auto">
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />

              <form
                action="https://formsubmit.co/partner@backersstage.com"
                method="POST"
                className="space-y-6"
              >
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

            <div className="h-full flex-1">
              <div className="premium-card p-6 h-full">
                <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.505797766098!2d7.017899715749611!3d43.55082927912487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce81908167df81%3A0x417434919e92508c!2sCanopy%20by%20Hilton%20Cannes!5e0!3m2!1sen!2sin!4v1647355840475!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="mt-6 space-y-4">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Canopy%20by%20Hilton%20Cannes&query_place_id=ChIJ4dn_ZKGBzhIRgUyS4Z00dEE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
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
    </div>
  );
}
