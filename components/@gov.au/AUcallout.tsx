import * as React from 'react'
import clsx from 'clsx'

interface IAUcallout {
  title?: string | React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
  srOnlyTitle?: boolean
  alt?: boolean
  dark?: boolean
  children: React.ReactNode
}

type AUcalloutFC = React.ComponentProps<'section'> & IAUcallout

type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const AUcallout = React.forwardRef<any, AUcalloutFC>(
  (
    {
      title,
      level = 2,
      srOnlyTitle = false,
      alt = false,
      dark = false,
      className = '',
      children,
      ...otherProps
    }: AUcalloutFC,
    ref
  ) => {
    const sectionClasses = clsx([
      'au-callout',
      className,
      alt && 'au-callout--alt',
      dark && 'au-callout--dark',
    ])

    const titleClasses = clsx([
      'au-callout__heading',
      srOnlyTitle && 'au-callout__heading--sronly',
    ])

    const HeadingTag = `h${level}` as HeadingComponent

    return (
      <section ref={ref} className={sectionClasses} {...otherProps}>
        {title && <HeadingTag className={titleClasses}>{title}</HeadingTag>}
        {children}
      </section>
    )
  }
)

AUcallout.displayName = 'AUcallout'

export default AUcallout
