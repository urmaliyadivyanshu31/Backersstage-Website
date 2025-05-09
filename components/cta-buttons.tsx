import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAButtonsProps {
  className?: string
  variant?: "default" | "outline" | "secondary"
}

const CTAButtons = ({ className = "", variant = "default" }: CTAButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button
        asChild
        size="lg"
        className={variant === "default" ? "bg-dark-contrast text-white hover:bg-dark-contrast/90" : ""}
        variant={variant === "default" ? "default" : variant}
      >
        <Link href="/collaborate">Apply to Pitch</Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant={variant === "default" ? "outline" : variant}
        className={variant === "default" ? "border-dark-contrast text-dark-contrast hover:bg-dark-contrast/10" : ""}
      >
        <Link href="/collaborate">Host a Demo Day</Link>
      </Button>
    </div>
  )
}

export default CTAButtons
