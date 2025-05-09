import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  imageSrc: string
}

const TestimonialCard = ({ quote, author, role, company, rating, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="premium-card p-8 flex flex-col h-full">
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-gold text-gold" : "fill-muted text-muted"}`} />
        ))}
      </div>
      <blockquote className="flex-grow mb-6">
        <p className="italic text-muted-foreground">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
