'use client'

interface GTag {
  (command: 'event', eventName: string, params?: Record<string, any>): void
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
    gtag: GTag
  }
}

export function trackEvent(name: string, payload = {}) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: name,
    ...payload,
  })

  if (
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
    typeof window.gtag === 'function'
  ) {
    window.gtag('event', name, payload)
  } else {
    console.info('[analytics]', name, payload)
  }
}
