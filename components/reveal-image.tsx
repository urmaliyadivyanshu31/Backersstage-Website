"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  imgClassName?: string
  priority?: boolean
  delay?: number
  once?: boolean
}

export function RevealImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
  delay = 0,
  once = true,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      <div className="overflow-hidden w-full h-full">
        <motion.div
          variants={{
            hidden: { scale: 1.2 },
            visible: { scale: 1 },
          }}
          transition={{
            duration: 1.2,
            delay: delay + 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="w-full h-full"
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={imgClassName}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
