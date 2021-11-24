import React, { forwardRef } from 'react'

type AUtableResponsiveWrapperFC = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

const AUtableResponsiveWrapper = forwardRef<
  HTMLDivElement,
  AUtableResponsiveWrapperFC
>(
  (
    { className = '', children, ...otherProps }: AUtableResponsiveWrapperFC,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`au-table__wrapper ${className}`}
        {...otherProps}
      >
        {children}
      </div>
    )
  }
)

AUtableResponsiveWrapper.displayName = 'AUtableResponsiveWrapper'

export default AUtableResponsiveWrapper
