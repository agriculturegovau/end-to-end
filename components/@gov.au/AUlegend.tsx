import React, { forwardRef } from 'react'

type AUlegendFC = React.ComponentProps<'legend'> & { children: React.ReactNode }

const AUlegend = forwardRef<HTMLLegendElement, AUlegendFC>(
  ({ className = '', children, ...otherProps }: AUlegendFC, ref) => {
    return (
      <legend
        ref={ref}
        className={`au-fieldsetLegend__legend ${className}`}
        {...otherProps}
      >
        {children}
      </legend>
    )
  }
)

AUlegend.displayName = 'AUlegend'

export default AUlegend
