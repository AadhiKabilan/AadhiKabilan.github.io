import {
  forwardRef,
  ReactNode,
  useRef,
  useImperativeHandle,
} from 'react'
import { useInView } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  disabled?: boolean
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      className,
      delay = 0,
      duration = 0.5,
      once = true,
      direction = 'up',
      distance = 30,
      disabled = false,
      ...props
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(forwardedRef, () => localRef.current!)

    const isInView = useInView(localRef, {
      once,
      margin: '0px',
    })

    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    }

    return (
      <div
        ref={localRef}
        className={cn(className)}
        style={{
          opacity: disabled || isInView ? 1 : 0,
          transform:
            disabled || isInView
              ? 'translate3d(0,0,0)'
              : direction === 'up' || direction === 'down'
              ? `translateY(${directions[direction].y}px)`
              : `translateX(${directions[direction].x}px)`,
          transition: `opacity ${duration}s ease-out ${delay / 1000}s, transform ${duration}s ease-out ${delay / 1000}s`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ScrollReveal.displayName = 'ScrollReveal'