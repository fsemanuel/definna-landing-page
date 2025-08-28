"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 h-screen w-screen overflow-hidden z-0",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#3ECF8E 10%,rgba(62,207,142,0.8) 15%,rgba(62,207,142,0.6) 20%,rgba(62,207,142,0.4) 25%,#3ECF8E 30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#0a0a0a 0%,#0a0a0a 7%,transparent 10%,transparent 12%,#0a0a0a 16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#0a0a0a 0%,#0a0a0a 7%,transparent 10%,transparent 12%,#0a0a0a 16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert-0 filter will-change-transform`,
            `bg-gradient-to-r from-brand-500/20 via-brand-400/10 to-brand-500/20`,
            `[background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:mix-blend-difference after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_50%_50%,black_30%,transparent_90%)]`,
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};