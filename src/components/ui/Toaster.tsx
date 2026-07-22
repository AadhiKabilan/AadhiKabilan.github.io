import { useToast } from './Toast'
import { cn } from '../../lib/utils'

export function Toaster({
  position = 'bottom-right',
  toastOptions = {},
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
  toastOptions?: {
    className?: string
    duration?: number
    style?: React.CSSProperties
  }
}) {
  const { toasts } = useToast()

  const viewportClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  }

  if (toasts.length === 0) return null

  return (
    <div
      className={cn(
        'fixed z-[1000] flex flex-col gap-2 pointer-events-none w-[320px] max-w-[calc(100vw-2rem)]',
        viewportClasses[position]
      )}
    >
      {toasts.map((toast) => (
        <div key={toast.id} className={cn('pointer-events-auto', toastOptions.className)} style={toastOptions.style}>
          {toast.title && <div className="font-medium text-sm text-[var(--color-fg)]">{toast.title}</div>}
          {toast.description && <div className="text-sm text-[var(--color-fg-muted)] mt-1">{toast.description}</div>}
        </div>
      ))}
    </div>
  )
}
