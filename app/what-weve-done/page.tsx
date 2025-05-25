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
                We're in the early stages of our journey, with our first
                successful Demo Day already demonstrating the power of our
                approach.
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
                <h2 className="text-2xl font-bold mb-4">
                  Token2049 Dubai 2025
                </h2>
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
                      <span className="font-medium">
                        Project Registrations:
                      </span>
                      <p className="text-neutral-400">500+</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">VC Interest:</span>
                      <p className="text-neutral-400">
                        50+ VCs showed interest
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-neutral-400">
                  Our inaugural Demo Day at Token2049 Dubai was a
                  proof-of-concept that validated our approach. We're now
                  scaling our operations based on the success and learnings from
                  this event.
                </p>
                <Link
                  className="text-accent mt-3"
                  target="_blank"
                  href={"https://lu.ma/user/BackersStage"}
                >
                  Demo day & Pitch compition @Token2049
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
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="section-padding">
        <div className="container-lg">
          <SectionHeading
            title="Event Gallery"
            subtitle="Highlights from our inaugural Demo Day at Token2049 Dubai."
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
              ].map((item, i) => (
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
                      Token2049 Dubai Demo Day
                    </p>
                  </div>
                </div>
              ))}
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
