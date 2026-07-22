import { cn } from '../../lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong' | 'hover-lift'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-[var(--glass-bg)] backdrop-[var(--glass-backdrop)] border border-[var(--glass-border)] shadow-[var(--glass-shadow)]',
      strong: 'bg-[var(--glass-bg)] backdrop-[var(--glass-backdrop)] border border-[var(--glass-border)] shadow-[var(--glass-shadow)], var(--shadow-2)',
      'hover-lift': 'bg-[var(--glass-bg)] backdrop-[var(--glass-backdrop)] border border-[var(--glass-border)] shadow-[var(--glass-shadow)] transition-all duration-300 ease-out hover:shadow-[var(--glass-shadow)], var(--shadow-3) hover:-translate-y-1',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--radius-xl)]',
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'