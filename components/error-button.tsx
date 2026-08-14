import * as Sentry from '@sentry/react'

// Add this button component to your app to test Sentry's error tracking
export default function ErrorButton() {
  return (
    <button
      onClick={() => {
        // Send a log before throwing the error
        Sentry.logger.info('User triggered test error', {
          action: 'test_error_button_click',
        })
        // Send a test metric before throwing the error
        // Note: Sentry.metrics may not be available in all SDK versions; keep this optional
        try {
          // @ts-ignore
          Sentry.metrics?.count?.('test_counter', 1)
        } catch (e) {
          // ignore if metrics API is not present
        }
        throw new Error('This is your first error!')
      }}
      className="px-4 py-2 rounded bg-red-600 text-white"
    >
      Break the world
    </button>
  )
}
