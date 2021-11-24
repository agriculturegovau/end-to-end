import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUerrorText {
  text: string
  dark?: boolean
  inline?: boolean
}

type AUerrorTextProps = React.ComponentProps<'span'> & IAUerrorText

const AUerrorText = forwardRef<HTMLSpanElement, AUerrorTextProps>(
  (
    {
      text,
      dark = false,
      inline = false,
      className = '',
      ...otherProps
    }: AUerrorTextProps,
    ref
  ) => {
    const classNames = clsx([
      'au-error-text',
      className,
      dark && 'au-label--dark',
      inline && 'au-label--inline',
    ])

    return (
      <span ref={ref} className={classNames} {...otherProps}>
        {text}
      </span>
    )
  }
)

AUerrorText.displayName = 'AUerrorText'

export default AUerrorText
