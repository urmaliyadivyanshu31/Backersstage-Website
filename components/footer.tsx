import Link from "next/link"
import { ArrowUpRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 pt-20 pb-10">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold">
                Backers<span className="text-accent">Stage</span>
              </span>
            </Link>
            <p className="text-neutral-400 max-w-xs">
              A Web3-native growth ecosystem platform connecting early-stage blockchain startups w/- global investors,
              mentors, and partners.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://t.me/backersstage"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-neutral-400 hover:text-accent transition-colors"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Telegram</span>
              </Link>
              <Link
                href="https://x.com/backersstage"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-neutral-400 hover:text-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
                <span>Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/what-weve-done"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>What We've Done</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/vision"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>Vision & Roadmap</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6">More Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/collaborate"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>Collaborate</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>Media</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-neutral-400 mb-4">Stay updated with our latest news and events.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-neutral-900 border-neutral-700 focus:border-accent h-11 pr-12"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-accent hover:text-accent/80 hover:bg-transparent p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BackersStage. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-neutral-400 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-400 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
