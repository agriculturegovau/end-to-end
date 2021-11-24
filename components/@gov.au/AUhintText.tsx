import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUhintText {
  text: string
  dark?: boolean
  alt?: boolean
}

type AUhintTextProps = React.ComponentProps<'span'> & IAUhintText

const AUhintText = forwardRef<HTMLSpanElement, AUhintTextProps>(
  (
    {
      text,
      dark = false,
      alt = false,
      className = '',
      ...otherProps
    }: AUhintTextProps,
    ref
  ) => {
    const classNames = clsx([
      'au-hint-text',
      className,
      dark && 'au-label--dark',
      alt && 'au-label--alt',
    ])

    return (
      <span ref={ref} className={classNames} {...otherProps}>
        {text}
      </span>
    )
  }
)

AUhintText.displayName = 'AUhintText'

export default AUhintText
