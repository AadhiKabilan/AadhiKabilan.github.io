import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAP(callback: (ctx: gsap.Context) => void, dependencies: unknown[] = []) {
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      callback(ctxRef.current!)
    })

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert()
        ctxRef.current = null
      }
    }
  }, dependencies)
}

export function useGSAPContext() {
  const ctxRef = useRef<gsap.Context | null>(null)

  const createContext = (scope?: Element | string) => {
    if (ctxRef.current) {
      ctxRef.current.revert()
    }
    ctxRef.current = gsap.context(() => {}, scope)
    return ctxRef.current
  }

  const revert = () => {
    if (ctxRef.current) {
      ctxRef.current.revert()
      ctxRef.current = null
    }
  }

  return { context: ctxRef.current, createContext, revert }
}