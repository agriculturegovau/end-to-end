import React, { forwardRef } from 'react'
import clsx from 'clsx'
import AUerrorText from './AUerrorText'
import { FieldError } from 'react-hook-form'

interface IAUcheckbox {
  dark?: boolean
  alternate?: boolean
  small?: boolean
  block?: boolean
  label?: string | React.ReactNode
  status?: 'valid' | 'invalid'
  id: string
  error?: Error | FieldError
}

type AUcheckboxFC = React.ComponentProps<'input'> & IAUcheckbox

const AUcheckbox = forwardRef<HTMLInputElement, AUcheckboxFC>(
  (
    {
      dark = false,
      alternate = false,
      small = false,
      block = false,
      label,
      status,
      id,
      type = 'checkbox',
      className = '',
      children: _children,
      error,
      ...otherProps
    }: AUcheckboxFC,
    ref
  ) => {
    const classNames = clsx([
      'au-control-input',
      className,
      dark && 'au-control-input--dark',
      alternate && 'au-control-input--alt',
      small && 'au-control-input--small',
      block && 'au-control-input--block',
      status === 'valid' && 'au-control-input--valid',
      status === 'invalid' && 'au-control-input--invalid',
    ])

    return (
      <div className={classNames}>
        <input
          ref={ref}
          className="au-control-input__input"
          id={id}
          type={type}
          {...otherProps}
        />
        <label className="au-control-input__text" htmlFor={id}>
          {label}
        </label>
        {error?.message ? (
          <AUerrorText text={error?.message} dark={!!dark} role="alert" />
        ) : null}
      </div>
    )
  }
)

AUcheckbox.displayName = 'AUcheckbox'

export default AUcheckbox
