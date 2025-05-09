"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  containerClassName?: string
  delay?: number
}

export function AnimatedIcon({ icon: Icon, className, containerClassName, delay = 0 }: AnimatedIconProps) {
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
      className={cn("flex items-center justify-center", containerClassName)}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      <Icon className={className} />
    </motion.div>
  )
} 