import * as React from "react";
import { cn } from "../../libs/utils.js";

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-primary text-card-foreground shadow",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(function CardHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardSummary = React.forwardRef(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
CardSummary.displayName = "CardSummary";

const CardContent = React.forwardRef(function CardContent({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(function CardFooter({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardSummary,
  CardFooter,
  CardHeader,
  CardTitle,
};