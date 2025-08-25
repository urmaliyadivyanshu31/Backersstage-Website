"use client";

import Image from "next/image";
import {
  Calendar,
  Users,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { RevealText } from "@/components/reveal-text";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function WhatWeveDonePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSlides = 5; // Update this to match your number of images

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = 300; // Width of each slide
      const gap = 16; // Space between slides (space-x-4 = 16px)
      scrollRef.current.scrollTo({
        left: index * (slideWidth + gap),
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = 300 + 16; // Width + gap
      const scrollPosition = scrollRef.current.scrollLeft;
      const newSlide = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  // Add autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      scrollToSlide(nextSlide);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    scrollToSlide(nextIndex);
  };

  const previousSlide = () => {
    const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    scrollToSlide(prevIndex);
  };

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
                Our journey has expanded across multiple major Web3 conferences,
                successfully connecting 1000+ projects with 100+ VCs through our
                curated Demo Day format across 3 major events.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="h-1 w-20 bg-accent mx-auto"></div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Our Events Timeline */}
      <section className="pb-20">
        <div className="container-lg">
          <SectionHeading
            title="Our Event Timeline"
            subtitle="From Dubai to Bali, we've built a track record of successful Demo Days across 3 major Web3 conferences."
            center
          />

          <div className="space-y-12">
            {/* Token2049 Dubai */}
            <div className="glass p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 bg-accent rounded-full mr-3"></div>
                    <h2 className="text-2xl font-bold">Token2049 Dubai 2025</h2>
                  </div>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Event Date:</span>
                        <p className="text-neutral-400">April 29, 2025</p>
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
                        <p className="text-neutral-400">50+ VCs engaged</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-neutral-400 mb-4">
                    Our inaugural Demo Day at Token2049 Dubai validated our approach with
                    massive founder and investor interest. The event featured curated 1:1 
                    meetings and strategic partnerships with NEAR Foundation and Camp Network.
                  </p>
                  <Link
                    className="text-accent hover:underline"
                    target="_blank"
                    href={"https://lu.ma/ka7540hd"}
                  >
                    View Event Details →
                  </Link>
                </div>
                <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/d2v6okduo/PXL_20250429_132947890.PORTRAIT.ORIGINAL_1_.jpg?updatedAt=1747559023669"
                    alt="Token2049 Dubai Demo Day"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ETHCC France */}
            <div className="glass p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="https://ik.imagekit.io/d2v6okduo/PXL_20250429_130934569_1_(1).jpg?updatedAt=1747559181346"
                      alt="ETHCC France Demo Day"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 bg-accent rounded-full mr-3"></div>
                    <h2 className="text-2xl font-bold">ETHCC France 2025</h2>
                  </div>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Event Date:</span>
                        <p className="text-neutral-400">July 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Focus:</span>
                        <p className="text-neutral-400">Technical founders showcase</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Building className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Outcome:</span>
                        <p className="text-neutral-400">High-quality founder-VC connections</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-neutral-400 mb-4">
                    During ETHCC [8] Week, we hosted a technical-focused Demo Day emphasizing
                    infrastructure projects and protocol development. The event strengthened
                    our reputation for curating serious builders in the Web3 space.
                  </p>
                  <Link
                    className="text-accent hover:underline"
                    target="_blank"
                    href={"https://lu.ma/1cpw5eaj"}
                  >
                    View Event Details →
                  </Link>
                </div>
              </div>
            </div>

{/* Coinfest Asia */}
            <div className="glass p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 bg-accent rounded-full mr-3"></div>
                    <h2 className="text-2xl font-bold">Coinfest Asia 2025</h2>
                  </div>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Event Date:</span>
                        <p className="text-neutral-400">August 20, 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Format:</span>
                        <p className="text-neutral-400">Founder x VC Happy Hour</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Building className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Location:</span>
                        <p className="text-neutral-400">Bali, Indonesia</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-neutral-400 mb-4">
                    Our most recent event in Bali featured a relaxed networking format with
                    curated founders, VCs, and ecosystem participants. Co-hosted with leading
                    partners including Coineasy, Fambam, and Blocksquare.
                  </p>
                  <div className="text-sm text-neutral-500 mb-4">
                    Featured $500-$5000 BTC giveaway by Bitcoin.com Wallet
                  </div>
                  <Link
                    className="text-accent hover:underline"
                    target="_blank"
                    href={"https://lu.ma/kww0f7r4"}
                  >
                    View Event Details →
                  </Link>
                </div>
                <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/d2v6okduo/PXL_20250429_130050697_2_.jpg?updatedAt=1747558918658"
                    alt="Coinfest Asia Happy Hour"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Event Gallery"
            subtitle="Highlights from our Demo Days across Dubai, France, and Bali."
            center
          />

          <div className="relative overflow-hidden">
            {/* Add Arrow Controls */}
            <button
              onClick={previousSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex space-x-4 pb-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >
              {[
                "https://ik.imagekit.io/d2v6okduo/PXL_20250429_130050697_2_.jpg?updatedAt=1747558918658",
                "https://ik.imagekit.io/d2v6okduo/PXL_20250429_132947890.PORTRAIT.ORIGINAL_1_.jpg?updatedAt=1747559023669",
                "https://ik.imagekit.io/d2v6okduo/PXL_20250429_130934569_1_(1).jpg?updatedAt=1747559181346",
                "https://ik.imagekit.io/d2v6okduo/PXL_20250429_132802494.PORTRAIT.ORIGINAL_1_.jpg?updatedAt=1747559217287",
                "https://ik.imagekit.io/d2v6okduo/PXL_20250429_141537936.MP_1_.jpg?updatedAt=1747559334860",
              ].map((item, i) => {
                const eventNames = ["Token2049 Dubai", "Token2049 Dubai", "ETHCC France", "Token2049 Dubai", "Token2049 Dubai"];
                return (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[300px] h-[300px] rounded-lg overflow-hidden snap-center hover-lift custom-glow group"
                >
                  <Image
                    src={item}
                    alt={`Event photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm text-white font-medium">
                      {eventNames[i]} Demo Day
                    </p>
                  </div>
                </div>
              );
              })}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === currentSlide ? "bg-accent" : "bg-neutral-700"
                  } hover:bg-accent/50`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
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
  );
}
