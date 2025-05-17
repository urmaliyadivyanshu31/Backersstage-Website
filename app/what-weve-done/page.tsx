"use client"

import Image from "next/image"
import { Calendar, Users, Building } from "lucide-react"
import { RevealText } from "@/components/reveal-text"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"

export default function WhatWeveDonePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText>
              <h1 className="heading-xl mb-6">What We've Done</h1>
            </RevealText>

            <RevealText delay={0.1}>
              <p className="body-lg text-neutral-400 mb-8">
                We're in the early stages of our journey, with our first successful Demo Day already demonstrating the
                power of our approach.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="h-1 w-20 bg-accent mx-auto"></div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Token2049 Dubai Event - Improved layout with no gap */}
      <section className="pb-20">
        <div className="container-lg">
          <div className="glass p-8 rounded-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Token2049 Dubai 2025</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Event Date:</span>
                      <p className="text-neutral-400">29, April 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Project Registrations:</span>
                      <p className="text-neutral-400">500+</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">VC Interest:</span>
                      <p className="text-neutral-400">50+ VCs showed interest</p>
                    </div>
                  </li>
                </ul>
                <p className="text-neutral-400">
                  Our inaugural Demo Day at Token2049 Dubai was a proof-of-concept that validated our approach. We're
                  now scaling our operations based on the success and learnings from this event.
                </p>
                <Link className="text-accent mt-3" target="_blank" href={"https://lu.ma/user/BackersStage"}>Demo day & Pitch compition @Token2049</Link>
              </div>
              <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                <Image src="/blockchain-conference.png" alt="Token2049 Dubai Demo Day" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery - Redesigned as a carousel */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Event Gallery"
            subtitle="Highlights from our inaugural Demo Day at Token2049 Dubai."
            center
          />

          <div className="relative overflow-hidden">
            <div className="flex space-x-4 pb-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[300px] h-[300px] rounded-lg overflow-hidden snap-center hover-lift custom-glow group"
                >
                  <Image
                    src={`/blockchain-event.png?height=400&width=400&query=blockchain event ${i + 1}`}
                    alt={`Event photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm text-white font-medium">Token2049 Dubai Demo Day</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(6)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? "bg-accent" : "bg-neutral-700"} transition-colors duration-300`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* <p className="text-center text-neutral-400 mt-8">
            We're in the early stages of growth, with our proof-of-concept validated and scaling in progress.
          </p> */}
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}