import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUSelectOption {
  text: string
}

interface IAUSelect {
  dark?: boolean
  block?: boolean
  status?: 'valid' | 'invalid'
}

type AUSelectOptionFC = React.ComponentProps<'option'> & IAUSelectOption

type AUSelectFC = React.ComponentProps<'select'> & IAUSelect

const AUselectOption = forwardRef<HTMLOptionElement, AUSelectOptionFC>(
  ({ text, ...props }: AUSelectOptionFC, ref) => (
    <option ref={ref} {...props}>
      {text}
    </option>
  )
)

const AUselect = forwardRef<HTMLSelectElement, AUSelectFC>(
  (
    { dark, block, status, className, children, ...otherProps }: AUSelectFC,
    ref
  ) => {
    const classNames = clsx([
      'au-select',
      className,
      block ? 'au-select--block' : null,
      dark ? 'au-select--dark' : null,
      status ? `au-select--${status}` : null,
    ])

    return (
      <select ref={ref} className={classNames} {...otherProps}>
        {children}
      </select>
    )
  }
)

AUselect.displayName = 'AUselect'
AUselectOption.displayName = 'AUselectOption'

export { AUselect, AUselectOption }
