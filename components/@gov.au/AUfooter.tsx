import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUfooter {
  dark?: boolean
  alt?: boolean
  children: React.ReactNode
}

type AUfooterFC = React.ComponentProps<'footer'> & IAUfooter

const AUfooter = forwardRef<any, AUfooterFC>(
  (
    {
      dark = false,
      alt = false,
      role = 'contentinfo',
      className = '',
      children,
      ...otherProps
    }: AUfooterFC,
    ref
  ) => {
    const classNames = clsx([
      'au-footer',
      className,
      dark && 'au-footer--dark',
      alt && 'au-footer--alt',
    ])

    return (
      <footer ref={ref} className={classNames} role={role} {...otherProps}>
        {children}
      </footer>
    )
  }
)

AUfooter.displayName = 'AUfooter'

export default AUfooter
