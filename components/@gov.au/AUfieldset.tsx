import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUfieldset {
  dark?: boolean
  children: React.ReactNode
}

type AUfieldsetFC = React.ComponentProps<'fieldset'> & IAUfieldset

const AUfieldset = forwardRef<HTMLFieldSetElement, AUfieldsetFC>(
  ({ dark, className = '', children, ...otherProps }: AUfieldsetFC, ref) => {
    const classNames = clsx([
      'au-fieldset',
      className,
      dark && 'au-fieldset-dark',
    ])

    return (
      <fieldset ref={ref} className={classNames} {...otherProps}>
        {children}
      </fieldset>
    )
  }
)

AUfieldset.displayName = 'AUfieldset'

export default AUfieldset
