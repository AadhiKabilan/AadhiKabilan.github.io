import { useEffect, useRef, useCallback } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (lenisInstance) {
      lenisRef.current = lenisInstance
      return () => {}
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    })

    lenisInstance = lenis
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
      lenisInstance = null
      lenisRef.current = null
    }
  }, [])

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
      if (!lenisRef.current) return
      if (typeof target === 'string') {
        const element = document.querySelector(target)
        if (element) {
          lenisRef.current.scrollTo(element as HTMLElement, options)
        }
      } else if (typeof target === 'number') {
        lenisRef.current.scrollTo(target, options)
      } else {
        lenisRef.current.scrollTo(target, options)
      }
    },
    []
  )

  const stop = useCallback(() => {
    lenisRef.current?.stop()
  }, [])

  const start = useCallback(() => {
    lenisRef.current?.start()
  }, [])

  return { lenis: lenisRef.current, scrollTo, stop, start }
}

export function getLenis() {
  return lenisInstance
}
