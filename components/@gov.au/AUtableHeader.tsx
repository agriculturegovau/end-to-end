import * as React from 'react'
import clsx from 'clsx'

type IAUtableHeader = Omit<React.ComponentProps<'th'>, 'title'> & {
  title: string | React.ReactNode
  type?: 'text' | 'numeric'
  width?: '10' | '20' | '25' | '33' | '50' | '75' | 10 | 20 | 25 | 33 | 50 | 75
  scope?: 'row' | 'col'
}

const AUtableHeader = (props: IAUtableHeader) => {
  const { title, type, width, scope, className, ...attributeOptions } = props

  const classNames = clsx([
    'au-table__header',
    className,
    width && `au-table__header--width-${width}`,
    type === 'numeric' && 'au-table__header--numeric',
  ])

  return (
    <th className={classNames} scope={scope} {...attributeOptions}>
      {title}
    </th>
  )
}

export default AUtableHeader
