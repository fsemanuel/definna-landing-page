"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  delay?: number;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      }
    }, duration);

    return () => {
      clearTimeout(typingEffect);
    };
  }, [duration, i, text]);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setI(0);
      setDisplayedText("");
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}