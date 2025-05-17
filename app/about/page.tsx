import { CheckCircle, Target, Users } from "lucide-react";
import { RevealText } from "@/components/reveal-text";
import { RevealImage } from "@/components/reveal-image";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { IconWrapper } from "@/components/icon-wrapper";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText>
              <h1 className="heading-xl mb-6">About BackersStage</h1>
            </RevealText>

            <RevealText delay={0.1}>
              <p className="body-lg text-neutral-400 mb-8">
                We're building the premier ecosystem for Web3 startups and
                investors, focusing on quality connections and long-term growth.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="h-1 w-20 bg-accent mx-auto"></div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* What is BackersStage */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="What is BackersStage?"
                subtitle="We are a builder-first Web3 growth company curating scalable infrastructure for startups via Demo Days and long-term collaboration."
              />

              <RevealText delay={0.1}>
                <p className="text-neutral-400 mb-6">
                  BackersStage is focused on connecting early-stage Web3
                  infrastructure projects with the right resources to scale
                  effectively. We provide structured 1:1 access to over 50
                  vetted VCs and strategic investors, along with expert
                  mentorship covering technical, economic, and go-to-market
                  aspects. Beyond the Demo Day, we offer long-term advisory
                  support and early access to promising projects, fostering
                  meaningful founder-investor relationships that drive
                  sustainable growth in the Web3 ecosystem.
                </p>
              </RevealText>

              <RevealText delay={0.2}>
                <p className="text-neutral-400">
                  Our approach combines exclusive Demo Days with ongoing support
                  and mentorship, creating an ecosystem where innovation can
                  thrive. By bringing together visionary builders and strategic
                  backers, we're helping to shape the future of Web3.
                </p>
              </RevealText>
            </div>

            <RevealImage
              src="/about-team.png"
              alt="BackersStage Team"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg overflow-hidden"
              imgClassName="w-full h-auto object-cover"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24  bg-neutral-900/30">
        <div className="container-lg">
          <SectionHeading
            title="Our Vision"
            subtitle="These core principles guide everything we do and define who we are as a company."
            center
          />

          <RevealText delay={0.1}>
            <div className="custom-card p-12 rounded-lg text-center max-w-3xl mx-auto">
              <Target className="h-16 w-16 mx-auto mb-6 text-accent" />
              <p className="text-3xl font-display font-medium mb-4">
                "By 2026, connect 10,000+ early-stage projects to 500+ vetted
                VCs and ecosystem partners."
              </p>
              <p className="text-neutral-400">
                Our vision is to create the premier ecosystem for Web3 startups
                and investors, fostering innovation and growth across the
                blockchain space.
              </p>
            </div>
          </RevealText>
        </div>
      </section>

      {/* Founder's Note */}
      {/* <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Founder's Note"
            subtitle="A message from our founder on the vision and mission behind BackersStage."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealImage
              src="/founder.png"
              alt="Atharv Shrivastava"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg overflow-hidden order-2 lg:order-1"
              imgClassName="w-full h-auto object-cover"
            />

            <div className="order-1 lg:order-2">
              <RevealText>
                <h3 className="heading-md mb-6">Atharv Shrivastava</h3>
              </RevealText>

              <div className="space-y-4 mb-6">
                <RevealText delay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-accent shrink-0 mt-1" />
                    <span className="text-neutral-300">
                      Hosted 50+ events globally
                    </span>
                  </div>
                </RevealText>

                <RevealText delay={0.2}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-accent shrink-0 mt-1" />
                    <span className="text-neutral-300">
                      Angel Investor (3+ years)
                    </span>
                  </div>
                </RevealText>

                <RevealText delay={0.3}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-accent shrink-0 mt-1" />
                    <span className="text-neutral-300">
                      Industry Expert (5+ years)
                    </span>
                  </div>
                </RevealText>
              </div>

              <RevealText delay={0.4}>
                <blockquote className="text-neutral-400 border-l-2 border-accent pl-6 italic">
                  "I founded BackersStage after seeing firsthand the disconnect
                  between promising Web3 projects and the resources they need.
                  Our goal is to build bridges, not walls, in the ecosystem.
                  We're committed to honest curation and long-term support for
                  builders who are creating the future of Web3."
                </blockquote>
              </RevealText>
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Beliefs */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <SectionHeading
            title="Core Beliefs"
            subtitle="The fundamental principles that guide our approach and decisions."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Community-First"
              description="We believe that strong communities build strong projects. Our approach centers on fostering meaningful connections within the Web3 ecosystem."
              icon="Users"
              delay={0.1}
            />

            <FeatureCard
              title="Honest Curation"
              description="We prioritize quality over quantity, ensuring that only the most promising projects reach our platform and partners."
              icon="CheckCircle"
              delay={0.2}
            />

            <FeatureCard
              title="Long-Term Support"
              description="Our commitment extends beyond introductions. We provide ongoing support to help projects navigate their growth journey."
              icon="Target"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <SectionHeading
            title="Our Team"
            subtitle="A diverse group of Web3 enthusiasts, investors, and builders committed to growing the ecosystem."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
           
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our approach to building the Web3 ecosystem."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="custom-card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <IconWrapper name="Shield" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-medium">
                  Trust & Transparency
                </h3>
              </div>
              <p className="text-neutral-400">
                We believe in building trust through transparency. Our platform
                operates with clear guidelines and open communication, ensuring
                all participants understand our processes and expectations.
              </p>
            </div>

            <div className="custom-card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <IconWrapper
                    name="Lightbulb"
                    className="h-6 w-6 text-accent"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">
                  Innovation & Growth
                </h3>
              </div>
              <p className="text-neutral-400">
                We champion innovation and support growth at every stage. Our
                ecosystem is designed to help projects evolve from early-stage
                ideas to successful, sustainable businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
