import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonVariantsProps {
  variant?: "primary" | "secondary" | "ghost" | "glass" | "outline" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantsProps>(
  ({ className, variant = "primary", size = "md", loading = false, asChild = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
      primary: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-[var(--shadow-2)] hover:shadow-[var(--shadow-3)] active:scale-[0.98]",
      secondary: "bg-[var(--color-bg-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)] hover:border-[var(--color-border-strong)]",
      ghost: "bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)]",
      glass: "bg-[var(--glass-bg)] backdrop-[var(--glass-backdrop)] border border-[var(--glass-border)] text-[var(--color-fg)] shadow-[var(--glass-shadow)] hover:bg-[var(--color-bg-elevated)]",
      outline: "bg-transparent text-[var(--color-fg)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)] hover:border-[var(--color-border-strong)]",
      destructive: "bg-[var(--color-error)] text-white hover:bg-[var(--color-error)]/90 shadow-[var(--shadow-2)] hover:shadow-[var(--shadow-3)]",
    };

    const sizes: Record<string, string> = {
      sm: "h-8 px-3 text-xs rounded-[var(--radius-md)]",
      md: "h-10 px-4 text-sm rounded-[var(--radius-lg)]",
      lg: "h-12 px-6 text-base rounded-[var(--radius-xl)]",
      icon: "h-10 w-10 rounded-[var(--radius-lg)]",
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
