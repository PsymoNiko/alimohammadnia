import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"
import React from "react"

export default function SentryProvider() {
  if (typeof window === "undefined") return null

  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    enableConsoleCapturing: true,
  })

  return null
}
