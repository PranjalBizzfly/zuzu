import Button from './Button'

function CheckmarkDraw({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`animate-success-pop ${className}`} aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        pathLength="1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-checkmark-draw"
      />
    </svg>
  )
}

/*
  Drop-in replacement for a form's `<Button type="submit">`, driven by
  a `status` state machine the parent form owns ('idle' | 'loading' |
  'success') -- see Contact.jsx / GetInTouchSection.jsx for the state
  machine itself. This component only renders the micro-interaction;
  it never validates or submits anything, so the parent's existing
  submit handler is the single source of truth for when each status
  applies (in particular, `status` only ever reaches 'loading' after
  the parent's own validation has already passed).

  Content between states crossfades via `key={status}` + the
  content-fade-in animation (remounting a span replays a CSS
  `animation`, unlike a `transition`, which needs an actual property
  change to trigger) -- no width/layout measurement, no animation
  library, just the site's existing motion.css primitives.
*/
export default function SubmitButton({
  status,
  shake = false,
  idleLabel = 'Submit Inquiry',
  loadingLabel = 'Sending',
  successLabel = 'Inquiry Sent!',
  fullWidth = false,
  className = '',
}) {
  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  return (
    <div className={`relative ${fullWidth ? 'flex w-full' : 'inline-flex'}`}>
      <Button
        type="submit"
        variant="primary"
        size="md"
        fullWidth={fullWidth}
        disabled={isLoading || isSuccess}
        aria-busy={isLoading}
        className={`transition-transform duration-200 ${shake ? 'animate-shake' : ''} ${className}`}
      >
        <span key={status} className="animate-content-fade-in inline-flex items-center gap-2">
          {status === 'idle' && idleLabel}
          {isLoading && (
            <>
              <span className="sr-only">{loadingLabel}</span>
              <span className="inline-flex items-center gap-1" aria-hidden="true">
                <span className="loading-dot" />
                <span className="loading-dot" />
                <span className="loading-dot" />
              </span>
            </>
          )}
          {isSuccess && (
            <>
              <CheckmarkDraw />
              {successLabel}
            </>
          )}
        </span>
      </Button>
    </div>
  )
}
