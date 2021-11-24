import React, { forwardRef } from 'react'

type AUtableBodyProps = React.ComponentProps<'tbody'>

const AUtableBody = forwardRef<HTMLTableSectionElement, AUtableBodyProps>(
  (props: AUtableBodyProps, ref) => {
    const { children, className = '', ...otherProps } = props

    return (
      <tbody
        ref={ref}
        className={`au-table__body ${className}`}
        {...otherProps}
      >
        {children}
      </tbody>
    )
  }
)

AUtableBody.displayName = 'AUtableBody'

export default AUtableBody
