import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  Calendar,
  CheckCircle,
  Filter,
  Handshake,
  Users,
  Zap,
  Construction,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { MagneticButton } from "@/components/magnetic-button";
import { ParallaxSection } from "@/components/parallax-section";
import { Marquee } from "@/components/marquee";
import { RevealText } from "@/components/reveal-text";
import { RevealImage } from "@/components/reveal-image";
import { IconWrapper } from "@/components/icon-wrapper";
import { StatCard } from "@/components/stat-card";
import Image from "next/image";
import { HeroAnnouncement } from "@/components/hero-announcement";

// Define the specific icon names we're using
type IconName =
  | "BarChart"
  | "Handshake"
  | "Zap"
  | "CheckCircle"
  | "Calendar"
  | "Filter"
  | "Users";

export default function Home() {
  const eventDate = new Date("2025-06-29T16:00:00");
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex-col flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
          <div className="noise" />
        </div>
        <HeroAnnouncement
          title="New Event"
          message="Join us at our exclusive Cannes Demo Day during ETHCC [8] Week. Limited spots available for founders and investors."
          link="/events/cannes-2025"
          linkText="View Event Details"
          eventDate={eventDate}
          showCountdown={true}
        />
        <div className="container-xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <RevealText>
              <h1 className="heading-xl mb-6">
                Curating the Next <span className="text-gradient">100</span>{" "}
                Web3 Unicorns
              </h1>
            </RevealText>

            <RevealText delay={0.2}>
              <p className="body-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                BackersStage connects early-stage blockchain startups with
                global investors, mentors, and partners through curated Demo
                Days and long-term collaboration.
              </p>
            </RevealText>

            {/* Fix the hero section arrow and improve button hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RevealText delay={0.3}>
                <MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                  >
                    <Link
                      href="https://lu.ma/user/BackersStage"
                      target="_blank"
                    >
                      <span className="relative z-10">Apply to Pitch</span>
                      <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </MagneticButton>
              </RevealText>

              <RevealText delay={0.4}>
                <MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="relative overflow-hidden group"
                  >
                    <Link href="/collaborate">
                      <span className="relative z-10">Host a Demo Day</span>
                      <span className="absolute inset-0 bg-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </MagneticButton>
              </RevealText>
            </div>

            {/* Replace the arrow with a scroll-triggered arrow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-opacity duration-700"
              id="scroll-arrow"
            >
              <div className="animate-bounce">
                <ArrowRight className="h-10 w-10 text-accent" />
              </div>
            </div>

            {/* Add script to show arrow on scroll */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  const arrow = document.getElementById('scroll-arrow');
                  window.addEventListener('scroll', function() {
                    if (window.scrollY > 100) {
                      arrow.style.opacity = '0';
                    } else {
                      arrow.style.opacity = '1';
                    }
                  });
                });
              `,
              }}
            />
          </div>
        </div>
      </section>

      {/* Demo Day Highlight */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Demo Day Highlight"
            subtitle="We hosted one of the most exclusive Demo Days at Token2049 Dubai 2025 — 500+ projects registered and 50+ VCs showed interest in joining."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealImage
              src="https://ik.imagekit.io/d2v6okduo/PXL_20250429_130050697_2_.jpg?updatedAt=1747558918658"
              alt="Token2049 Dubai Demo Day"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg overflow-hidden"
              imgClassName="w-full h-auto object-cover"
            />

            <div className="space-y-6">
              <RevealText delay={0.1}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-1 w-10 bg-accent"></div>
                  <Link
                    href={"https://lu.ma/ka7540hd"}
                    target="_blank"
                    className="text-accent font-medium"
                  >
                    Demo day & Pitch compition @Token2049
                  </Link>
                </div>
                <h3 className="heading-md">
                  BackersStage hosted a focused Demo Day during Token2049 Dubai
                </h3>
              </RevealText>

              <RevealText delay={0.2}>
                <p className="text-neutral-400">
                  Designed to connect high-potential Web3 projects with aligned
                  investors and ecosystem partners. The event featured
                  structured 1:1 meetings between founders and VCs, offering
                  direct access to strategic capital and guidance. Supported by
                  NEAR Foundation and Camp Network, the format emphasized
                  quality matchmaking and founder-centric outcomes
                  over volume or hype.
                </p>
              </RevealText>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <RevealText delay={0.3}>
                  <div className="custom-card p-6">
                    <div className="text-3xl font-display font-bold text-accent mb-2">
                      500+
                    </div>
                    <p className="text-neutral-400">
                      Projects registered for our Demo Day
                    </p>
                  </div>
                </RevealText>

                <RevealText delay={0.4}>
                  <div className="custom-card p-6">
                    <div className="text-3xl font-display font-bold text-accent mb-2">
                      50+
                    </div>
                    <p className="text-neutral-400">
                      VCs showed interest in joining
                    </p>
                  </div>
                </RevealText>
              </div>

              <RevealText delay={0.5}>
                <MagneticButton>
                  <Button asChild className="mt-4 group">
                    <Link href="/what-weve-done" className="flex items-center">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </MagneticButton>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2025 */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <SectionHeading
            title="Vision 2025"
            subtitle="Our roadmap to building the premier ecosystem for Web3 startups and investors."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Platform Rollout"
              description="Launching our comprehensive platform to connect startups, investors, and mentors in a seamless ecosystem."
              icon="Calendar"
              delay={0.1}
            />

            <FeatureCard
              title="Regional Partnerships"
              description="Expanding our reach through strategic partnerships across key blockchain hubs globally."
              icon="Handshake"
              delay={0.2}
            />

            <FeatureCard
              title="Builder Matching"
              description="Creating a curated network that matches the right builders with the right backers."
              icon="Users"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Marquee Section */}

      <div className="flex items-center  mt-8 justify-center space-x-12 px-8">
        {[
          "https://ik.imagekit.io/d2v6okduo/image(2).png?updatedAt=1747678784783",
          "https://ik.imagekit.io/d2v6okduo/image.png?updatedAt=1747679474133",
          "https://ik.imagekit.io/d2v6okduo/image.png?updatedAt=1747679060514",
        
        ].map((item, i) => (
          <div
            key={i}
            className="text-4xl font-display font-bold text-neutral-800"
          >
            <Image src={item} alt={`${item} logo`} height={80} width={200} />
            <span className="text-accent mx-4">•</span>
          </div>
        ))}
      </div>

      {/* Why BackersStage */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Why BackersStage"
            subtitle="Our unique approach to connecting early-stage blockchain projects with the resources they need to succeed."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="VC-Project Matching"
              description="We connect promising projects with the right investors based on mutual fit and growth potential."
              icon="Handshake"
              delay={0.1}
            />

            <FeatureCard
              title="Event-led Growth"
              description="Our Demo Days create high-impact opportunities for startups to showcase their vision to relevant stakeholders."
              icon="Calendar"
              delay={0.2}
            />

            <FeatureCard
              title="Curation Over Hype"
              description="We focus on quality over quantity, ensuring only the most promising projects reach our platform."
              icon="Filter"
              delay={0.3}
            />

            <FeatureCard
              title="Partner First Mindset"
              description="We build long-term relationships that benefit all parties in the ecosystem."
              icon="Users"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Registered",
                icon: "BarChart" as IconName,
                delay: 0.1,
              },
              {
                number: "50+",
                label: "VCs Interested",
                icon: "Handshake" as IconName,
                delay: 0.2,
              },
              {
                number: "10k+",
                label: "2026 Project Goal",
                icon: "Zap" as IconName,
                delay: 0.3,
              },
              {
                number: "500+",
                label: "2026 VC Goal",
                icon: "CheckCircle" as IconName,
                delay: 0.4,
              },
            ].map((stat, i) => (
              <RevealText key={i} delay={stat.delay}>
                <StatCard
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                  delay={stat.delay}
                />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-border">
        <div className="bg-neutral-900">
          <div className="container-lg py-20">
            <div className="max-w-3xl mx-auto text-center">
              <RevealText>
                <h2 className="heading-lg mb-6">
                  Ready to Join the Ecosystem?
                </h2>
              </RevealText>

              <RevealText delay={0.1}>
                <p className="text-xl text-neutral-400 mb-8">
                  Whether you're a startup looking to pitch, a partner wanting
                  to collaborate, or an investor seeking quality projects, we
                  have a place for you.
                </p>
              </RevealText>

              {/* Improve CTA section button hover effects */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RevealText delay={0.2}>
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                    >
                      <Link href="/collaborate">
                        <span className="relative z-10">Apply to Pitch</span>
                        <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  </MagneticButton>
                </RevealText>

                <RevealText delay={0.3}>
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="relative overflow-hidden group"
                    >
                      <Link href="/collaborate">
                        <span className="relative z-10">Collaborate</span>
                        <span className="absolute inset-0 bg-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  </MagneticButton>
                </RevealText>

                <RevealText delay={0.4}>
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="relative overflow-hidden group"
                    >
                      <Link href="/contact">
                        <span className="relative z-10">Talk to Team</span>
                        <span className="absolute inset-0 bg-accent/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  </MagneticButton>
                </RevealText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
