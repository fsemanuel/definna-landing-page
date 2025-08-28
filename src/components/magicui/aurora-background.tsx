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
              "repeating-linear-gradient(100deg,hsl(var(--brand))_10%,hsl(var(--brand)/0.8)_15%,hsl(var(--brand)/0.6)_20%,hsl(var(--brand)/0.4)_25%,hsl(var(--brand))_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,hsl(var(--background))_0%,hsl(var(--background))_7%,transparent_10%,transparent_12%,hsl(var(--background))_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,hsl(var(--background))_0%,hsl(var(--background))_7%,transparent_10%,transparent_12%,hsl(var(--background))_16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-30 blur-[10px] invert-0 filter will-change-transform`,
            `[background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,
            `dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_50%_50%,black_10%,transparent_70%)]`,
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};