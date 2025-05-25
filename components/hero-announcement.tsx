"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "./countdown-timer";

interface HeroAnnouncementProps {
  title: string;
  message: string;
  link: string;
  linkText?: string;
  dismissible?: boolean;
  expiryDays?: number;
  eventDate?: Date | string;
  showCountdown?: boolean;
}

export function HeroAnnouncement({
  title,
  message,
  link,
  linkText = "Learn more",
  dismissible = true,
  eventDate,
  showCountdown = false,
}: Omit<HeroAnnouncementProps, "expiryDays">) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-3xl mx-auto mb-10"
        >
          <div className="relative bg-neutral-900/80 backdrop-blur-md border border-accent/20 rounded-lg overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-50"></div>

            <div className="relative p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-5 bg-accent rounded-full"></div>
                  <span className="text-xs uppercase tracking-wider text-accent font-medium">
                    {title}
                  </span>
                </div>

                {dismissible && (
                  <button
                    onClick={handleDismiss}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Dismiss"
                  >
                    <X className="h-4 w-4 text-neutral-400 hover:text-white" />
                  </button>
                )}
              </div>

              <div className="mt-2">
                <p className="text-sm text-neutral-200">{message}</p>
              </div>

              {showCountdown && eventDate && (
                <div className="mt-4 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-xs text-neutral-400">
                      Event starts in:
                    </span>
                  </div>
                  <CountdownTimer targetDate={eventDate} />
                </div>
              )}

              <div className="mt-3 flex justify-end">
                <Link
                  href={link}
                  className="text-sm font-medium text-accent flex items-center hover:underline group"
                >
                  {linkText}
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
