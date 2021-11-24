import React, { forwardRef } from 'react'

type AUtableHeadProps = React.ComponentProps<'thead'>

const AUtableHead = forwardRef<HTMLTableSectionElement, AUtableHeadProps>(
  ({ children, className = '', ...otherProps }: AUtableHeadProps, ref) => {
    return (
      <thead
        ref={ref}
        className={`au-table__head ${className}`}
        {...otherProps}
      >
        {children}
      </thead>
    )
  }
)

AUtableHead.displayName = 'AUtableHead'

export default AUtableHead
