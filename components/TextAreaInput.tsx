import React, { forwardRef } from 'react'
import clsx from 'clsx'
import AUformGroup from 'components/@gov.au/AUformGroup'
import AUlabel from 'components/@gov.au/AUlabel'
import AUerrorText from 'components/@gov.au/AUerrorText'
import AUhintText from './@gov.au/AUhintText'

interface ITextInput {
  id: string
  label: string
  type?: string
  error?: any
  status?: 'valid' | 'invalid'
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  number?: boolean
  block?: boolean
  dark?: boolean
  hint?: string
}

type TextAreaInputFC = React.ComponentProps<'textarea'> & ITextInput

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputFC>(
  (
    {
      id,
      label,
      type: _type = 'text',
      error,
      width,
      number,
      block,
      dark,
      hint,
      className = '',
      ...otherProps
    }: TextAreaInputFC,
    ref
  ) => {
    const status = error ? 'invalid' : undefined

    const classNames = clsx([
      'au-text-input',
      className,
      dark && 'au-text-input--dark',
      block && 'au-text-input--block',
      number && 'au-text-input--number',
      status && `au-text-input--${status}`,
      width && `au-text-input--width-${width}`,
    ])

    return (
      <AUformGroup status={status}>
        <AUlabel text={label} htmlFor={id} dark={!!dark} />
        {hint !== undefined ? <AUhintText text={hint} /> : null}
        {error && (
          <AUerrorText text={error?.message} dark={!!dark} role="alert" />
        )}
        <textarea
          ref={ref}
          id={id}
          className={classNames}
          aria-invalid={error ? 'true' : 'false'}
          {...otherProps}
        />
      </AUformGroup>
    )
  }
)

TextAreaInput.displayName = 'TextAreaInput'

export default TextAreaInput
