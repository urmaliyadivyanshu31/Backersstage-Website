import { RevealText } from "@/components/reveal-text"
import { SectionHeading } from "@/components/section-heading"
import { TimelineItem } from "@/components/timeline-item"
import { IconWrapper } from "@/components/icon-wrapper"

export default function VisionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <RevealText>
              <h1 className="heading-xl mb-6">Vision & Roadmap</h1>
            </RevealText>

            <RevealText delay={0.1}>
              <p className="body-lg text-neutral-400 mb-8">
                Our journey to connect 10,000+ early-stage projects to 500+ vetted VCs and ecosystem partners by 2026.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="h-1 w-20 bg-accent mx-auto"></div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-md">
          {/* <SectionHeading
            title="Our Roadmap"
            subtitle="The path we're taking to build the premier ecosystem for Web3 startups and investors."
            center
          /> */}

          <div className="max-w-3xl mx-auto mt-16 space-y-12">
            <TimelineItem
              date="Q1 2025"
              title="BackersStage Founded"
              description="Launch of BackersStage with a mission to connect early-stage blockchain projects with the resources they need to succeed."
              icon="CheckCircle"
              status="completed"
              delay={0.1}
            />

            <TimelineItem
              date="Q2 2025"
              title="Demo Day (Token2049 Dubai)"
              description="Our inaugural Demo Day at Token2049 Dubai, connecting promising projects with investors and partners."
              icon="CheckCircle"
              status="completed"
              delay={0.2}
            />

            <TimelineItem
              date="Q3 2025"
              title="Platform Beta + Regional Outreach"
              description="Launch of our platform beta and expansion of our network through regional partnerships and events."
              icon="Construction"
              status="current"
              delay={0.3}
            />

            <TimelineItem
              date="2026"
              title="Mentorship Platform Launch"
              description="Introduction of our comprehensive mentorship platform, connecting startups with experienced advisors and industry experts."
              icon="Clock"
              status="upcoming"
              delay={0.4}
            />

            <TimelineItem
              date="Late 2026"
              title="Connect 10,000+ startups, 500+ VCs"
              description="Achieving our vision of connecting 10,000+ early-stage projects to 500+ vetted VCs and ecosystem partners."
              icon="Sparkles"
              status="upcoming"
              delay={0.5}
            />

            {/* <TimelineItem
              date="No Token Plans"
              title="No Token Plans"
              description="We are focused on building value, not tokens. Our commitment is to creating a sustainable ecosystem without the need for tokenization."
              icon="X"
              status="upcoming"
              isLast={true}
              delay={0.6}
            /> */}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <SectionHeading
            title="Our Long-Term Vision"
            subtitle="The future we're working to create for the Web3 ecosystem."
            center
          />

          <RevealText delay={0.1}>
            <div className="custom-card p-12 rounded-lg text-center max-w-3xl mx-auto">
              <div className="h-16 w-16 mx-auto mb-6 text-accent">
                <IconWrapper name="Users" className="h-16 w-16" />
              </div>
              <p className="text-2xl font-display font-medium mb-6">
                "To create a self-sustaining ecosystem where early-stage Web3 projects can find the resources,
                mentorship, and connections they need to build the future of blockchain technology."
              </p>
              <p className="text-neutral-400">
                We're building BackersStage for the long term, with a focus on creating sustainable value for all
                participants in the Web3 ecosystem.
              </p>
            </div>
          </RevealText>
        </div>
      </section>
    </>
  )
}
