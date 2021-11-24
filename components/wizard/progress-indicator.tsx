import React from 'react'

type ProgressIndicatorIconProps = {
  status: 'todo' | 'doing' | 'done'
  disabled?: boolean
}

const Fill = ({ status }: ProgressIndicatorIconProps) => {
  if (status === 'todo') {
    return null
  }
  if (status === 'doing') {
    return (
      <>
        <circle cx="6.5" cy="12" r="1.5" fill="#00558B" />
        <circle cx="12" cy="12" r="1.5" fill="#00558B" />
        <circle cx="17.5" cy="12" r="1.5" fill="#00558B" />
      </>
    )
  }
  if (status === 'done') {
    return (
      <path
        d="M18.7442 9.23753C18.7442 9.48294 18.6628 9.71391 18.5 9.88714L11.3895 17.7257C11.2267 17.8989 10.9961 18 10.7655 18C10.5484 18 10.3178 17.8989 10.155 17.7257L5.24419 12.5C5.0814 12.3268 5 12.0958 5 11.8504C5 11.605 5.0814 11.3596 5.24419 11.1864L6.47868 9.88714C6.64147 9.71391 6.85853 9.61286 7.08915 9.61286C7.31977 9.61286 7.53682 9.71391 7.69961 9.88714L10.7655 13.1496L16.0446 7.27428C16.2074 7.10105 16.4244 7 16.655 7C16.8857 7 17.1027 7.10105 17.2655 7.27428L18.5 8.57349C18.6628 8.74672 18.7442 8.99213 18.7442 9.23753Z"
        fill="#0b996c"
      />
    )
  }
  return null
}

export const ProgressIndicatorIcon = ({
  status,
  disabled = false,
}: ProgressIndicatorIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24C5.4 24 0 18.6 0 12ZM2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12Z"
      fill={status === 'done' ? '#0b996c' : '#636363'}
      opacity={disabled ? 0.5 : undefined}
    />
    <Fill status={status} />
  </svg>
)
