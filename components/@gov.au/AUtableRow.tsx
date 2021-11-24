import React, { forwardRef } from 'react'

type AUtableRowProps = React.ComponentProps<'tr'>

const AUtableRow = forwardRef<HTMLTableRowElement, AUtableRowProps>(
  ({ children, className = '', ...otherProps }: AUtableRowProps, ref) => {
    return (
      <tr ref={ref} className={`au-table__row ${className}`} {...otherProps}>
        {children}
      </tr>
    )
  }
)

AUtableRow.displayName = 'AUtableRow'

export default AUtableRow
