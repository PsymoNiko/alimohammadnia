import * as Sentry from "@sentry/react"
import React from "react"

export default function SentryProvider() {
  if (typeof window === "undefined") return null

  // Initialize Sentry with the provided DSN — no env, no tracing, no replay.
  // This keeps the integration minimal so only logs/errors are sent to Sentry for testing.
  Sentry.init({
    dsn: "http://608031aa61abff0cab7d216d65d3ee23@192.168.1.138:9000/4",
    // Do not add BrowserTracing or replay integrations here — we only want basic log/error capture.
  })

  return null
}
