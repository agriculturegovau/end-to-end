import React, { forwardRef } from 'react'
import clsx from 'clsx'

interface IAUtableCell {
  type?: 'text' | 'numeric'
  data?: React.ReactNode | React.ReactNode[]
  render?: React.ReactNode | React.ReactNode[]
}

type AUtableCellProps = React.ComponentProps<'td'> & IAUtableCell

const AUtableCell = forwardRef<HTMLTableCellElement, AUtableCellProps>(
  (
    {
      data,
      render,
      type = 'text',
      className = '',
      ...otherProps
    }: AUtableCellProps,
    ref
  ) => {
    const classNames = clsx([
      'au-table__cell',
      className,
      type === 'numeric' && 'au-table__cell--numeric',
    ])

    return (
      <td ref={ref} className={classNames} {...otherProps}>
        {render ? render : data}
      </td>
    )
  }
)

AUtableCell.displayName = 'AUtableCell'

export default AUtableCell
