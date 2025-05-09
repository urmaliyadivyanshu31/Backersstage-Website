import Link from "next/link"
import { ArrowRight, Building, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CollaboratePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Collaborate with Us</h1>
            <p className="text-xl text-muted-foreground">
              Whether you're a startup, investor, or ecosystem partner, we have opportunities for meaningful
              collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Options */}
      <section className="section-padding bg-cool-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* For Startups */}
            <div className="glass relative group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  For Startups
                </h3>
                <p className="text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors duration-300 flex-grow">
                  Ready to showcase your project? Apply to pitch at our next Demo Day and get in front of vetted
                  investors and partners.
                </p>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group mt-auto"
                >
                  <Link href="https://forms.gle/YourFormLink" target="_blank">
                    <span className="relative z-10 flex items-center">
                      Apply to Pitch
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* For Ecosystems */}
            <div className="glass relative group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  For Ecosystems
                </h3>
                <p className="text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors duration-300 flex-grow">
                  Want to showcase your ecosystem? Partner with us to host a Demo Day focused on your ecosystem.
                </p>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group mt-auto"
                >
                  <Link href="https://forms.gle/YourFormLink" target="_blank">
                    <span className="relative z-10 flex items-center">
                      Host a Demo Day
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* For VCs/Partners */}
            <div className="glass relative group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  For VCs/Partners
                </h3>
                <p className="text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors duration-300 flex-grow">
                  Looking for quality projects? Join our network of investors and partners to get early access to
                  curated projects.
                </p>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group mt-auto"
                >
                  <Link href="https://forms.gle/YourFormLink" target="_blank">
                    <span className="relative z-10 flex items-center">
                      Partner With Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Partnership Benefits */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-lg relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.1)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold mb-6 group-hover:text-accent transition-colors duration-300">
                For Projects
              </h3>
              <ul className="space-y-4">
                {[
                  "Direct access to vetted investors",
                  "Mentorship from industry experts",
                  "Increased visibility in the ecosystem",
                  "Long-term support beyond Demo Days",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-accent/30 transition-colors duration-300">
                      <ArrowRight className="h-3 w-3 text-accent group-hover/item:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-8 rounded-lg relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.1)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold mb-6 group-hover:text-accent transition-colors duration-300">
                For Investors & Partners
              </h3>
              <ul className="space-y-4">
                {[
                  "Access to curated, high-quality projects",
                  "Efficient deal flow through our vetting process",
                  "Network with other leading investors and partners",
                  "Co-investment opportunities",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-accent/30 transition-colors duration-300">
                      <ArrowRight className="h-3 w-3 text-accent group-hover/item:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Fill out our application form or reach out directly to discuss collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-contrast text-white hover:bg-dark-contrast/90">
                <Link href="https://forms.gle/YourFormLink" target="_blank">
                  Apply Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/20 text-accent hover:bg-accent/10 relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 bg-accent/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
