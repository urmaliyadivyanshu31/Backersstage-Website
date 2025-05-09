"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? "hidden" : ""
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What We've Done", path: "/what-weve-done" },
    { name: "Vision & Roadmap", path: "/vision" },
    { name: "Collaborate", path: "/collaborate" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled ? "py-3 bg-neutral-950/80 backdrop-blur-md" : "py-6",
        )}
      >
        <div className="container-xl flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <span className="font-display text-2xl font-bold">
              Backers<span className="text-accent">Stage</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-accent",
                  pathname === link.path ? "text-accent" : "text-neutral-300",
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Update the Apply to Pitch button in navbar to look more like a button with better hover effects */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
            >
              <Link href="/collaborate">
                <span className="relative z-10">Apply to Pitch</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={cn(
                  "bg-neutral-100 h-0.5 w-6 transform transition-all duration-300 origin-left",
                  isOpen && "rotate-[42deg]",
                )}
              />
              <div
                className={cn(
                  "bg-neutral-100 h-0.5 w-6 rounded transform transition-all duration-300",
                  isOpen && "translate-x-10",
                )}
              />
              <div
                className={cn(
                  "bg-neutral-100 h-0.5 w-6 transform transition-all duration-300 origin-left",
                  isOpen && "-rotate-[42deg]",
                )}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-neutral-950 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        "text-2xl font-display font-bold transition-colors hover:text-accent",
                        pathname === link.path ? "text-accent" : "text-neutral-100",
                      )}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12"
              >
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/collaborate" onClick={closeMenu}>
                    Apply to Pitch
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
