import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { forwardRef, SVGAttributes } from 'react'

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  icon: LucideIcon
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
}

const sizeClasses = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = 'md', className, ...props }, ref) => {
    const sizeClass = typeof size === 'number' ? `h-[${size}px] w-[${size}px]` : sizeClasses[size]
    return (
      <IconComponent
        ref={ref}
        className={cn(sizeClass, 'flex-shrink-0', className)}
        {...props}
      />
    )
  }
)

Icon.displayName = 'Icon'