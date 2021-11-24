import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUformGroup {
  status?: 'valid' | 'invalid'
  children: React.ReactNode
}

type AUformGroupFC = React.ComponentProps<'div'> & IAUformGroup

const AUformGroup = forwardRef<HTMLDivElement, AUformGroupFC>(
  ({ status, className = '', children, ...otherProps }: AUformGroupFC, ref) => {
    const classNames = clsx([
      'au-form-group',
      className,
      status === 'invalid' && 'au-form-group--invalid',
    ])

    return (
      <div ref={ref} className={classNames} {...otherProps}>
        {children}
      </div>
    )
  }
)

AUformGroup.displayName = 'AUformGroup'

export default AUformGroup
