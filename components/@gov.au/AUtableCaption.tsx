import React, { forwardRef } from 'react'

interface IAUtableCaption {
  tableCaption: string
}

type AUtableCaptionProps = React.ComponentProps<'caption'> & IAUtableCaption

const AUtableCaption = forwardRef<HTMLElement, AUtableCaptionProps>(
  (
    { tableCaption, className = '', ...otherProps }: AUtableCaptionProps,
    ref
  ) => {
    return (
      <caption
        ref={ref}
        className={`au-table__caption ${className}`}
        {...otherProps}
      >
        {tableCaption}
      </caption>
    )
  }
)

AUtableCaption.displayName = 'AUtableCaption'

export default AUtableCaption
