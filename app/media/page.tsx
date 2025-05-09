import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function MediaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Media Mentions</h1>
            <p className="text-xl text-muted-foreground">BackersStage in the press and across the Web3 ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="section-padding bg-cool-gray">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {["COIN GABBAR", "Unstoppable24x7", "Nukelancer", "HER DAO", "Blockchained India", "Bhopal DAO"].map(
              (partner, index) => (
                <div key={index} className="glass-card p-6 rounded-lg flex items-center justify-center h-32">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=120&width=200&query=${partner} logo`}
                    alt={partner}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Link
                href="#"
                key={i}
                className="glass-card rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&query=blockchain article ${i + 1}`}
                    alt={`Article ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">May 2025</span>
                    <span className="text-sm font-medium">{["COIN GABBAR", "Unstoppable24x7", "Nukelancer"][i]}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-dark-contrast/80 transition-colors">
                    {
                      [
                        "BackersStage Hosts Successful Demo Day at Token2049",
                        "Web3 Startups Find New Opportunities Through BackersStage",
                        "The Future of Blockchain Startup Funding",
                      ][i]
                    }
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {
                      [
                        "BackersStage's inaugural Demo Day at Token2049 Dubai connects promising projects with investors...",
                        "Early-stage blockchain startups are finding new pathways to growth through BackersStage's ecosystem...",
                        "How platforms like BackersStage are changing the landscape for Web3 startup funding and growth...",
                      ][i]
                    }
                  </p>
                  <div className="flex items-center text-dark-contrast group-hover:text-dark-contrast/80 transition-colors">
                    <span className="mr-2">Read more</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="section-padding bg-banana-cream/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Press Kit</h2>
            <p className="text-xl mb-8">For media inquiries or to request our press kit, please contact our team.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-dark-contrast px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-dark-contrast/90"
            >
              Contact for Press Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
