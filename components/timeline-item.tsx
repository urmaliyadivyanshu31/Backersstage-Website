"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { IconWrapper } from "./icon-wrapper"

// Define the specific icon names we're using
type IconName = "CheckCircle" | "Clock" | "Construction" | "Sparkles" | "X"

interface TimelineItemProps {
  date: string
  title: string
  description: string
  icon: IconName
  status: "completed" | "current" | "upcoming"
  isLast?: boolean
  delay?: number
}

export function TimelineItem({
  date,
  title,
  description,
  icon,
  status,
  isLast = false,
  delay = 0,
}: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-12 bottom-0 w-px bg-neutral-800" />
      )}

      <div className="relative flex items-start space-x-6">
        {/* Icon */}
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
            status === "completed" && "bg-accent/20 text-accent",
            status === "current" && "bg-accent/20 text-accent",
            status === "upcoming" && "bg-neutral-800 text-neutral-400"
          )}
        >
          <IconWrapper name={icon} className="w-4 h-4" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium text-accent">{date}</span>
              {status === "current" && (
                <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full">
                  Current
                </span>
              )}
            </div>
            <h3 className="text-lg font-display font-medium mb-2">{title}</h3>
            <p className="text-neutral-400">{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
