import { useState, useEffect } from 'react'

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function trackVisit() {
      try {
        // Fetch/increment live counter from public CounterAPI
        const res = await fetch('https://api.counterapi.dev/v1/aadhikabilan-portfolio/views/up')
        if (res.ok) {
          const data = await res.json()
          if (data && typeof data.count === 'number') {
            const totalVisits = data.count + 1280 // seed base offset + live increments
            setCount(totalVisits)
            setLoading(false)
            return
          }
        }
      } catch (e) {
        // Silent fallback to local storage
      }

      // Fallback local storage counter
      const stored = localStorage.getItem('ak_portfolio_visit_count')
      const current = stored ? parseInt(stored, 10) : 1284
      const next = current + 1
      localStorage.setItem('ak_portfolio_visit_count', next.toString())
      setCount(next)
      setLoading(false)
    }

    trackVisit()
  }, [])

  return { count, loading }
}
