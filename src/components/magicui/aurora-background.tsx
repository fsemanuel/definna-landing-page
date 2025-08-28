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
    <>
      {/* Simple animated background */}
      <div
        className="fixed inset-0 w-full h-full z-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, #3ECF8E 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #60A5FA 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #A78BFA 0%, transparent 50%)
          `,
          animation: 'aurora-move 20s ease-in-out infinite alternate',
        }}
      />
      
      {/* Aurora effect */}
      <div
        className={cn(
          "fixed inset-0 w-full h-full z-0",
          className,
        )}
        {...props}
      >
        <div 
          className="absolute inset-0 animate-aurora opacity-30"
          style={{
            background: `
              linear-gradient(100deg, 
                transparent 40%, 
                rgba(62, 207, 142, 0.6) 50%, 
                rgba(96, 165, 250, 0.4) 60%,
                transparent 70%
              )
            `,
            backgroundSize: '200% 100%',
          }}
        />
        {children}
      </div>
    </>
  );
};