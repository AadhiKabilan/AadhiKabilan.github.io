import { Switch } from '@radix-ui/react-switch'
import { useTheme } from '../../app/providers/ThemeProvider'
import { Sun, Moon, Monitor } from 'lucide-react'
import { cn } from '../../lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themes: { value: 'light' | 'dark' | 'system'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  return (
    <div className="flex items-center gap-1 p-1 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[var(--radius-xl)] backdrop-[var(--glass-backdrop)]" role="group" aria-label="Theme selector">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          className={cn(
            'relative flex items-center justify-center gap-2 px-3 py-2 rounded-[var(--radius-lg)] transition-all duration-200 ease-out',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
            theme === value
              ? 'bg-[var(--color-accent-light)] text-[var(--color-accent)] shadow-sm'
              : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)]'
          )}
          aria-pressed={theme === value}
          aria-label={label}
        >
          <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  )
}

export function ThemeToggleSimple() {
  const { resolvedTheme, toggleTheme } = useTheme()

  return (
    <Switch
      checked={resolvedTheme === 'dark'}
      onCheckedChange={toggleTheme}
      className={cn(
        'relative h-6 w-11 flex items-center rounded-full border-2 transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
        'data-[state=checked]:bg-[var(--color-accent)] data-[state=checked]:border-[var(--color-accent)]',
        'data-[state=unchecked]:bg-[var(--color-bg-subtle)] data-[state=unchecked]:border-[var(--color-border)]'
      )}
      aria-label="Toggle dark mode"
    >
      <span className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300 ease-spring',
        'translate-x-0 data-[state=checked]:translate-x-5'
      )}>
        <Sun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-[var(--color-accent)] opacity-0 data-[state=checked]:opacity-100 transition-opacity" aria-hidden="true" />
        <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-[var(--color-fg-muted)] opacity-100 data-[state=checked]:opacity-0 transition-opacity" aria-hidden="true" />
      </span>
    </Switch>
  )
}
