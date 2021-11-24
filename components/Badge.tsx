import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IBadge {
  type?: 'default' | 'error' | 'success' | 'warning' | 'info'
  superscript?: boolean
  className?: string
  children: React.ReactNode | React.ReactText
}

type BadgeFC = React.ComponentProps<'span'> & IBadge

const Badge = forwardRef<HTMLSpanElement, BadgeFC>(
  (
    {
      type = 'default',
      superscript = false,
      className = '',
      children,
      ...otherProps
    }: BadgeFC,
    ref
  ) => {
    const classNames = clsx([
      'badge',
      type !== 'default' && `badge__${type}`,
      superscript && 'badge__super',
      className,
    ])

    return (
      <span ref={ref} className={classNames} {...otherProps}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
