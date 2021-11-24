import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link' // adding Next.js Link component for convenience

export interface IAUlinkListItem {
  text: string
  link?: string
  href?: string
  active?: boolean
  li?: React.ComponentProps<'li'>
}

export type LinkComponent =
  | typeof Link
  | React.ElementType
  | keyof JSX.IntrinsicElements

interface IAUlinkList {
  items?: IAUlinkListItem[]
  inline?: boolean
  linkComponent?: LinkComponent
}

type AUlinkListItemProps = React.ComponentProps<'ul'> &
  IAUlinkListItem & {
    linkComponent?: LinkComponent
  }

type AUlinkListProps = React.ComponentProps<'ul'> & IAUlinkList

const AUlinkListItem = (props: AUlinkListItemProps) => {
  const {
    text,
    link: propsLink,
    href,
    active: _active = false,
    linkComponent: LinkComponent = Link, // this defaults to 'a' in AuDS
    li = {},
    children,
    ...otherProps
  } = props

  let link = propsLink

  if (typeof otherProps?.onClick === 'function' && !link) {
    link = '#'
  }

  // @ts-ignore
  otherProps['href'] = href || link // in AuDS there is a check and a mysterious "to" prop.

  return (
    <li {...li}>
      {link && <LinkComponent {...otherProps}>{text}</LinkComponent>}
      {!link && text}
      {children}
    </li>
  )
}

const AUlinkList = (props: AUlinkListProps) => {
  const {
    items = [],
    inline = false,
    linkComponent,
    className = '',
    ...otherProps
  } = props

  const classNames = clsx([
    'au-link-list',
    className,
    inline && 'au-link-list--inline',
  ])

  return (
    <ul className={classNames} {...otherProps}>
      {items.map((item, i) => (
        <AUlinkListItem
          key={`${i}${item.text}`}
          linkComponent={linkComponent}
          {...item}
        />
      ))}
    </ul>
  )
}

export default AUlinkList
