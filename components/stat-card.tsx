"use client"

import { cn } from "@/lib/utils"
import { IconWrapper } from "./icon-wrapper"

// Define the specific icon names we're using
type IconName = "BarChart" | "Handshake" | "Zap" | "CheckCircle" | "Calendar" | "Filter" | "Users"

interface StatCardProps {
  number: string
  label: string
  icon: IconName
  delay?: number
}

export function StatCard({ number, label, icon, delay = 0 }: StatCardProps) {
  return (
    <div className="custom-card p-8 text-center hover-lift">
      <div className="mb-4 text-accent bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
        <IconWrapper name={icon} className="h-8 w-8" />
      </div>
      <div className="text-4xl font-display font-bold text-accent mb-2">{number}</div>
      <p className="text-neutral-400">{label}</p>
    </div>
  )
} 