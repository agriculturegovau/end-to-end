import React, { forwardRef } from 'react'

interface IAUheading {
  level: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  children: React.ReactNode
}

type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type AUheadingFC = React.HTMLAttributes<HTMLHeadingElement> & IAUheading

const AUheading = forwardRef<HTMLHeadingElement, AUheadingFC>(
  (
    { level, size, className = '', children, ...otherProps }: AUheadingFC,
    ref
  ) => {
    const HeadingTag = `h${level}` as HeadingComponent

    return (
      <HeadingTag
        ref={ref}
        className={`au-display-${size} ${className}`}
        style={{
          ...(otherProps.style || {}),
          fontWeight: 'bold',
        }}
        {...otherProps}
      >
        {children}
      </HeadingTag>
    )
  }
)

AUheading.displayName = 'AUheading'

export default AUheading
