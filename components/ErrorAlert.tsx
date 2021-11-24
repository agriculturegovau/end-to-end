import * as React from 'react'
import { useRouter } from 'next/router'
import AUheading from 'components/@gov.au/AUheading'

interface ErrorAlertProps {
  title?: string
  type?: 'error' | 'success' | 'warning' | 'info'
}

const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
  const router = useRouter()
  const { title, type = 'info', children } = props

  return (
    <div className={`au-body au-page-alerts au-page-alerts--${type}`}>
      {title ? (
        <AUheading
          size="xl"
          level="2"
          style={children ? { marginBottom: '1rem' } : undefined}
        >
          {title}
        </AUheading>
      ) : null}
      {children ? (
        children
      ) : (
        <p>
          Please{' '}
          <a href="#go-back" onClick={() => router.back()}>
            return to the previous page
          </a>{' '}
          and try again.
        </p>
      )}
    </div>
  )
}

export default ErrorAlert
