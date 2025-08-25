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
      <section className="py-24">
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
                  infrastructure projects w/- the right resources to scale
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
              src="https://ik.imagekit.io/d2v6okduo/PXL_20250429_132947890.PORTRAIT.ORIGINAL_1_.jpg?updatedAt=1747559023669"
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
      {/* <section className="py-24">
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

      {/* Media Kit Section */}
      <section className="py-24">
        <div className="container-lg">
          <SectionHeading
            title="Media Kit & Pitch Deck"
            subtitle="Access our comprehensive media kit and company overview to learn more about BackersStage."
            center
          />

          <div className="max-w-4xl mx-auto">
            <RevealText delay={0.1}>
              <div className="custom-card p-8 rounded-lg text-center">
                <div className="mb-6">
                  <div className="h-16 w-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-sm mb-4">BackersStage Brand Kit</h3>
                  <p className="text-neutral-400 mb-6">
                    Access our comprehensive brand kit including logos, company overview, 
                    brand guidelines, and design assets for media and partnership use.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.figma.com/design/H8PynBhm4SzxT8D9Ch4loQ/Backers-Stage-Brand-Kit?node-id=0-1&p=f&t=L1KlmbtRcglQIAfL-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg transition-colors duration-300 font-medium"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Brand Kit
                  </a>
                  <a
                    href="/Media%20Kit%20BackersStage%20Capital.pdf"
                    download="BackersStage-Media-Kit.pdf"
                    className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg transition-colors duration-300 font-medium"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24 bg-neutral-900/30">
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
              title="Ongoing Support"
              description="Our commitment extends beyond introductions. We provide ongoing support to help projects navigate their growth journey."
              icon="Target"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 bg-neutral-900/30">
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
      {/* <section className="py-24">
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
      </section> */}

    </>
  );
}
