import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Events</h1>
            <p className="body-lg text-neutral-400 mb-8">
              High-signal showcases connecting technical founders with the
              resources they need to succeed.
            </p>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join us at our next event to connect with founders, investors, and ecosystem partners."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="/cannes-event-bg.png"
                alt="Cannes Event"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-70"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-800/70 backdrop-blur-sm text-sm">
                    <Calendar className="h-3 w-3 text-accent" />
                    <span>June 29, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-800/70 backdrop-blur-sm text-sm">
                    <Clock className="h-3 w-3 text-accent" />
                    <span>4:00 PM – 7:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-800/70 backdrop-blur-sm text-sm">
                    <MapPin className="h-3 w-3 text-accent" />
                    <span>Cannes, France</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  BackersStage: Founder-Powered Demo Day
                </h3>
                <p className="text-neutral-200 mb-4">
                  Aligned with ETHCC [8] Week
                </p>
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link
                    href="/events/cannes-2025"
                    className="flex items-center"
                  >
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="heading-md">
                BackersStage: Founder-Powered Demo Day
              </h3>
              <p className="text-neutral-400">
                A high-signal showcase for technical founders building
                foundational Web3 infrastructure. From zero-knowledge
                applications to next-gen L2s and AI x crypto, we're curating the
                kind of builders VCs actually want to back — no fluff, just real
                products and real traction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="custom-card p-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-neutral-500">Date</div>
                      <div className="font-medium">June 29, 2025</div>
                    </div>
                  </div>
                </div>

                <div className="custom-card p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-neutral-500">Time</div>
                      <div className="font-medium">4:00 PM – 7:30 PM</div>
                    </div>
                  </div>
                </div>

                <div className="custom-card p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-neutral-500">Location</div>
                      <div className="font-medium">
                        Espace Croisette, Cannes, France
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/events/cannes-2025">View Event Details</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="https://lu.ma/user/BackersStage">Apply to Pitch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <SectionHeading
            title="Past Events"
            subtitle="Explore our previous events and their outcomes."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="custom-card overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/dubai-event.png"
                  alt="Token2049 Dubai Demo Day"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-neutral-800/70 backdrop-blur-sm text-neutral-200 px-3 py-1 rounded-full text-sm">
                    April 2025
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  Token2049 Dubai Demo Day
                </h3>
                <p className="text-neutral-400 mb-4">
                  Our inaugural Demo Day at Token2049 Dubai connected promising
                  projects with investors and partners.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-neutral-500">
                    <span className="text-accent font-medium">700+</span>{" "}
                    Registrations
                  </div>
                  <Link
                    href="/what-weve-done"
                    className="text-accent hover:text-accent/80 transition-colors flex items-center"
                  >
                    <span className="mr-1">Learn More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
