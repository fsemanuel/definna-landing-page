import * as React from "react";
import { cn } from "@/lib/utils";

const cardVariants = {
  variant: {
    default: "bg-card border-border",
    glass: "glass hover:bg-zinc-900/60",
    "glass-brand": "glass bg-gradient-to-br from-brand-400/10 to-brand-600/20 border-brand-500/30 hover:glow-green",
    "glass-success": "glass border-green-500/30 hover:bg-green-600/10 hover:glow-green",
    brand: "bg-gradient-to-br from-brand-400/20 to-brand-600/30 border-brand-500/30 glow-green",
  },
};

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof cardVariants.variant;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border text-card-foreground shadow-sm transition-all duration-300",
        cardVariants.variant[variant],
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};