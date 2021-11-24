import React, { forwardRef } from 'react'
import clsx from 'clsx'

type ComponentType = React.ElementType | keyof JSX.IntrinsicElements

interface IAUbutton {
  linkComponent?: ComponentType
  link?: string | boolean
  as?: 'primary' | 'secondary' | 'tertiary'
  dark?: boolean
  type?: string
  block?: boolean
  children: React.ReactNode
}

type AUbuttonFC = React.ComponentProps<'button'> & IAUbutton // TODO: Make this accept props for the value of 'linkComponent'

const AUbutton = forwardRef<HTMLButtonElement, AUbuttonFC>(
  (
    {
      linkComponent = 'a',
      link = false,
      as = 'primary',
      dark,
      type = 'button',
      block,
      className = '',
      children,
      ...otherProps
    }: AUbuttonFC,
    ref
  ) => {
    let ButtonComponent: ComponentType = 'button'

    if (link) {
      ButtonComponent = linkComponent

      if (!link) {
        const attributeName = linkComponent === 'a' ? 'href' : 'to' // Qns for design system team: Why does the attribute change? Why 'to'? Should this be configurable?
        // @ts-ignore
        otherProps[attributeName] = link
      }
    }

    const classNames = clsx([
      'au-btn',
      className,
      as !== 'primary' && `au-btn--${as}`,
      block && 'au-btn--block',
      dark && 'au-btn--dark',
    ])

    return (
      <ButtonComponent
        ref={ref}
        type={type}
        className={classNames}
        {...otherProps}
      >
        {children}
      </ButtonComponent>
    )
  }
)

AUbutton.displayName = 'AUbutton'

export default AUbutton
