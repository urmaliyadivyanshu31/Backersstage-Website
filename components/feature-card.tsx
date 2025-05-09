"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import { IconWrapper } from "./icon-wrapper"

// Define the specific icon names we're using
type IconName = "BarChart" | "Handshake" | "Zap" | "CheckCircle" | "Calendar" | "Filter" | "Users" | "Target" | "Shield" | "Lightbulb"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconName
  className?: string
  delay?: number
}

export function FeatureCard({ title, description, icon, className, delay = 0 }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={cn("group custom-card p-8 hover-lift", className)}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <IconWrapper name={icon} className="h-7 w-7" />
      </div>
      <h3 className="heading-sm mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">{description}</p>
    </motion.div>
  )
}
