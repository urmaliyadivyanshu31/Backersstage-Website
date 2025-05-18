"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Calendar, Clock, Users, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { InteractiveVenueMap } from "@/components/interactive-venue-map"

export default function VenuePage() {
  const [activeTab, setActiveTab] = useState<"map" | "info" | "travel">("map")

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-lg">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/events/cannes-2025"
            className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Event
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="heading-lg mb-4">Espace Croisette Venue</h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm">Espace Croisette, Cannes, France</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm">June 29, 2025</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm">4:00 PM – 7:30 PM</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm">300+ Attendees</span>
            </div>
          </div>
          <p className="text-lg text-neutral-300 max-w-3xl">
            Explore the venue layout for BackersStage: Founder-Powered Demo Day. Find key areas, meeting points, and
            plan your experience at the event.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-800 mb-8">
          <button
            className={`px-4 py-2 font-medium text-sm relative ${
              activeTab === "map" ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("map")}
          >
            Venue Map
            {activeTab === "map" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm relative ${
              activeTab === "info" ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Venue Information
            {activeTab === "info" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm relative ${
              activeTab === "travel" ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("travel")}
          >
            Travel & Accommodation
            {activeTab === "travel" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === "map" && (
            <div>
              {/* <InteractiveVenueMap className="mb-8" /> */}

              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">About the Interactive Map</h3>
                <p className="text-neutral-300 mb-4">
                  Our interactive venue map helps you navigate the Espace Croisette during the BackersStage Demo Day.
                  Click on points of interest to learn more about each area and plan your event experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Info className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Navigation Tips</h4>
                      <p className="text-sm text-neutral-400">
                        Use the zoom controls to get a better view. Click and drag to move around the map. Click on any
                        point to see detailed information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Meeting Points</h4>
                      <p className="text-sm text-neutral-400">
                        The Networking Lounge is the primary meeting point. For private discussions, book one of our
                        meeting rooms at the registration desk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "info" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">About Espace Croisette</h3>
                  <p className="text-neutral-300 mb-4">
                    Espace Croisette is a premier event venue located in the heart of Cannes, France. Known for its
                    elegant design and versatile spaces, it regularly hosts high-profile events during major Cannes
                    festivals and conferences.
                  </p>
                  <p className="text-neutral-300">
                    For the BackersStage Demo Day, we've configured the space to maximize networking opportunities while
                    providing dedicated areas for demos, presentations, and private meetings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Venue Facilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "High-Speed WiFi", description: "Enterprise-grade connectivity throughout the venue" },
                      { title: "AV Equipment", description: "Professional sound and projection systems" },
                      { title: "Catering", description: "Premium refreshments and beverages" },
                      { title: "Accessibility", description: "Wheelchair accessible entrances and facilities" },
                      { title: "Security", description: "Professional security staff and controlled access" },
                      { title: "Technical Support", description: "On-site tech team for presenters and demos" },
                    ].map((facility, i) => (
                      <div key={i} className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                        <h4 className="font-medium mb-1">{facility.title}</h4>
                        <p className="text-sm text-neutral-400">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Event Schedule</h3>
                  <div className="space-y-4">
                    {[
                      {
                        time: "3:30 PM - 4:00 PM",
                        title: "Registration & Welcome",
                        description: "Check-in, badge collection, and welcome refreshments",
                      },
                      {
                        time: "4:00 PM - 4:15 PM",
                        title: "Opening Remarks",
                        description: "Introduction and event overview",
                      },
                      {
                        time: "4:15 PM - 5:30 PM",
                        title: "Builder Showcases",
                        description: "Technical demonstrations from selected projects",
                      },
                      {
                        time: "5:30 PM - 6:15 PM",
                        title: "Panel Discussion",
                        description: "Industry experts discuss the future of Web3 infrastructure",
                      },
                      {
                        time: "6:15 PM - 7:30 PM",
                        title: "Networking Reception",
                        description: "Connect with founders, investors, and industry leaders",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex border-l-2 border-accent pl-4">
                        <div className="w-32 flex-shrink-0">
                          <div className="text-sm font-medium">{item.time}</div>
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-neutral-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/luxury-cannes-venue.png"
                      alt="Espace Croisette"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-neutral-400">Address</div>
                        <div>Espace Croisette, La Croisette, Cannes, France</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">Event Contact</div>
                        <div>events@backersstage.com</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">Emergency Contact</div>
                        <div>+33 (0) 123 456 789</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                          Open in Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "travel" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Getting to Cannes</h3>
                  <div className="space-y-6">
                    <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                      <h4 className="font-medium mb-3">By Air</h4>
                      <p className="text-neutral-300 mb-4">
                        The nearest airport is Nice Côte d'Azur International Airport (NCE), located approximately 27 km
                        from Cannes. It offers direct flights from major European cities and connections worldwide.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">Taxi:</span> Available outside the terminal.
                            Journey time to Cannes is approximately 30-45 minutes, costing €80-100.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">Shuttle Bus:</span> Express Coach 210 runs
                            between Nice Airport and Cannes. Journey time is approximately 50 minutes, costing €22.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">Train:</span> Take a shuttle to Nice-Ville
                            station, then a train to Cannes. Total journey time is approximately 1 hour.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                      <h4 className="font-medium mb-3">By Train</h4>
                      <p className="text-neutral-300 mb-4">
                        Cannes is well-connected by rail to major French and European cities. The main station, Gare de
                        Cannes, is located in the city center, approximately 1 km from Espace Croisette.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">From Paris:</span> High-speed TGV trains run
                            regularly from Paris to Cannes, with a journey time of approximately 5-6 hours.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">From Nice:</span> Regular regional trains
                            connect Nice to Cannes, with a journey time of approximately 30 minutes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                      <h4 className="font-medium mb-3">By Car</h4>
                      <p className="text-neutral-300 mb-4">
                        Cannes is accessible via the A8 motorway, which runs along the French Riviera. Note that parking
                        in central Cannes can be limited and expensive.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">From Nice:</span> Take the A8 motorway
                            westbound, then exit at Junction 42 for Cannes. Journey time is approximately 30-45 minutes.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            <span className="font-medium text-neutral-300">Parking:</span> Several public parking
                            garages are available near La Croisette, including Parking Laubeuf and Parking Suquet
                            Forville.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Local Transportation</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Taxis", description: "Readily available throughout Cannes. Most accept credit cards." },
                      { title: "Ride-sharing", description: "Uber and other ride-sharing services operate in Cannes." },
                      { title: "Bus", description: "Cannes has an extensive bus network operated by Palm Bus." },
                      { title: "Walking", description: "Espace Croisette is within walking distance of many hotels." },
                    ].map((item, i) => (
                      <div key={i} className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-neutral-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24 space-y-6">
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Accommodation</h3>
                    <p className="text-neutral-300 mb-4">
                      We've secured special rates at several hotels near the venue for BackersStage Demo Day attendees.
                    </p>
                    <div className="space-y-4">
                      {[
                        { name: "Hotel Martinez", distance: "5 min walk", rate: "€350/night" },
                        { name: "InterContinental Carlton", distance: "7 min walk", rate: "€320/night" },
                        { name: "Hôtel Barrière Le Majestic", distance: "3 min walk", rate: "€380/night" },
                        { name: "JW Marriott Cannes", distance: "10 min walk", rate: "€290/night" },
                      ].map((hotel, i) => (
                        <div key={i} className="flex justify-between border-b border-neutral-700 pb-2">
                          <div>
                            <div className="font-medium">{hotel.name}</div>
                            <div className="text-xs text-neutral-400">{hotel.distance}</div>
                          </div>
                          <div className="text-accent">{hotel.rate}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button asChild variant="outline" className="w-full">
                        <a href="mailto:events@backersstage.com">Request Booking Code</a>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Weather</h3>
                    <p className="text-neutral-300 mb-4">
                      Cannes in late June typically enjoys warm Mediterranean weather.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-neutral-800/70 rounded-lg p-3">
                        <div className="text-sm text-neutral-400">Average High</div>
                        <div className="text-2xl font-medium">26°C</div>
                        <div className="text-xs text-neutral-500">79°F</div>
                      </div>
                      <div className="bg-neutral-800/70 rounded-lg p-3">
                        <div className="text-sm text-neutral-400">Average Low</div>
                        <div className="text-2xl font-medium">19°C</div>
                        <div className="text-xs text-neutral-500">66°F</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-neutral-400">
                      We recommend light business attire for the event, with a light jacket or blazer for the evening.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/20 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to join us at Espace Croisette?</h3>
            <p className="text-neutral-300 mb-6">
              Secure your spot at the BackersStage Demo Day and connect with the most promising Web3 founders and
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://forms.gle/YourFormLink" target="_blank">
                  Register Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events/cannes-2025">Back to Event Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
