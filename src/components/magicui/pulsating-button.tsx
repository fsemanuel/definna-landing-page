"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "0, 230, 118",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black px-4 py-2 bg-gradient-to-r from-brand-500 to-brand-600 animate-pulse",
        className,
      )}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration,
      } as React.CSSProperties}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-ping -translate-x-1/2 -translate-y-1/2"></div>
    </button>
  );
}