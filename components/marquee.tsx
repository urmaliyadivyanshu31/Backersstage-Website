"use client"

import { useState } from "react"

import { useRef, useEffect, type ReactNode } from "react"
import { useAnimationFrame } from "framer-motion"

interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({ children, direction = "left", speed = 50, pauseOnHover = true, className }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [duplicates, setDuplicates] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const x = useRef(0)
  const directionFactor = direction === "left" ? -1 : 1

  useEffect(() => {
    if (contentRef.current && marqueeRef.current) {
      const calculateWidth = () => {
        const contentWidth = contentRef.current?.offsetWidth || 0
        const marqueeWidth = marqueeRef.current?.offsetWidth || 0
        setContentWidth(contentWidth)
        setMarqueeWidth(marqueeWidth)

        // Calculate how many duplicates we need to fill the marquee
        const duplicatesNeeded = Math.ceil(marqueeWidth / contentWidth) + 1
        setDuplicates(duplicatesNeeded)
      }

      calculateWidth()
      window.addEventListener("resize", calculateWidth)
      return () => window.removeEventListener("resize", calculateWidth)
    }
  }, [])

  useAnimationFrame((delta) => {
    if (isPaused || !contentWidth) return

    // Calculate the movement based on speed and delta time
    const moveBy = ((speed * delta) / 1000) * directionFactor

    // Update the position
    x.current += moveBy

    // Reset position when we've moved one full content width
    if (Math.abs(x.current) >= contentWidth) {
      x.current = 0
    }

    // Apply the transform
    if (contentRef.current) {
      contentRef.current.style.transform = `translateX(${x.current}px)`
    }
  })

  return (
    <div
      ref={marqueeRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={contentRef} className="flex" style={{ willChange: "transform" }}>
        {/* Original content */}
        {children}

        {/* Duplicated content to create seamless loop */}
        {Array.from({ length: duplicates }).map((_, i) => (
          <div key={i} className="flex">
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
