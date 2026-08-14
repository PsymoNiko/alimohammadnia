"use client"

import * as Sentry from "@sentry/react"
import { useEffect } from "react"

export default function SentryProvider() {
  useEffect(() => {
    // guard against double-init during HMR
    if ((window as any).__sentry_initialized) return

    Sentry.init({
      dsn: "http://608031aa61abff0cab7d216d65d3ee23@192.168.1.138:9000/4",
      // minimal: only capture errors/messages
    })

    ;(window as any).__sentry_initialized = true
    // eslint-disable-next-line no-console
    console.log("[sentry] initialized (client)")
  }, [])

  return null
}
