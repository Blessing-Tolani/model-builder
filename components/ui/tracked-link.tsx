'use client'

import { trackEvent } from '@/lib/analytics'
import Link from 'next/link'

export function TrackedLink({
  href,
  eventName,
  eventPayload,
  children,
  className,
}: {
  href: string
  eventName: string
  eventPayload?: Record<string, any>
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, eventPayload)}
    >
      {children}
    </Link>
  )
}
