"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date | string;
  className?: string;
  compact?: boolean;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export function CountdownTimer({
  targetDate,
  className,
  compact = false,
  onComplete,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  useEffect(() => {
    const target =
      typeof targetDate === "string" ? new Date(targetDate) : targetDate;

    const calculateTimeLeft = () => {
      const difference = target.getTime() - new Date().getTime();

      if (difference <= 0) {
        if (onComplete) onComplete();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (timeLeft.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (compact) {
    return (
      <div className={cn("flex items-center gap-2 text-sm", className)}>
        <span className="text-accent font-medium">
          {timeLeft.days > 0 && `${timeLeft.days}d `}
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
        <span className="text-neutral-400">remaining</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center">
          <div className="bg-neutral-800/50 backdrop-blur-sm px-3 py-2 rounded-md min-w-[3rem] text-center">
            <span className="text-lg font-display font-bold text-white">
              {timeLeft.days}
            </span>
          </div>
          <span className="text-xs text-neutral-400 mt-1">Days</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-neutral-800/50 backdrop-blur-sm px-3 py-2 rounded-md min-w-[3rem] text-center">
            <span className="text-lg font-display font-bold text-white">
              {timeLeft.hours}
            </span>
          </div>
          <span className="text-xs text-neutral-400 mt-1">Hours</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-neutral-800/50 backdrop-blur-sm px-3 py-2 rounded-md min-w-[3rem] text-center">
            <span className="text-lg font-display font-bold text-white">
              {timeLeft.minutes}
            </span>
          </div>
          <span className="text-xs text-neutral-400 mt-1">Mins</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-neutral-800/50 backdrop-blur-sm px-3 py-2 rounded-md min-w-[3rem] text-center">
            <span className="text-lg font-display font-bold text-white">
              {timeLeft.seconds}
            </span>
          </div>
          <span className="text-xs text-neutral-400 mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
}
