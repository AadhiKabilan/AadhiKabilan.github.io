import { cn } from '../../lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'hover-lift'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
      elevated: 'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-md',
      'hover-lift': 'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-1',
    }

    const paddings = {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-7',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg',
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