"use client"

import type { LucideIcon } from "lucide-react"
import * as icons from "lucide-react"

interface IconWrapperProps {
  name: keyof typeof icons
  className?: string
}

export function IconWrapper({ name, className }: IconWrapperProps) {
  const Icon = icons[name] as LucideIcon
  return <Icon className={className} />
} 