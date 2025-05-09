import * as icons from "lucide-react"

interface IconProps {
  name: keyof typeof icons
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = icons[name]
  return <IconComponent className={className} />
} 