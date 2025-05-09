"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  center = false,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const titleWords = title.split(" ")

  return (
    <div ref={ref} className={cn("mb-16", center && "text-center", className)}>
      <h2 className={cn("heading-lg overflow-hidden", titleClassName)}>
        <span className="inline-block">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h2>

      {subtitle && (
        <motion.p
          className={cn("text-neutral-400 text-lg max-w-3xl mt-4", center && "mx-auto", subtitleClassName)}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.7,
            delay: titleWords.length * 0.1 + 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className={cn("h-1 w-16 bg-accent mt-6", center && "mx-auto")}
        variants={{
          hidden: { width: 0, opacity: 0 },
          visible: { width: 64, opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.7,
          delay: titleWords.length * 0.1 + 0.2,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      />
    </div>
  )
}

export default SectionHeading
