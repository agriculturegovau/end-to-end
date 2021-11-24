import * as React from 'react'

export interface IAUskipLinkItem {
  text: string
  link?: string
}

interface IAUskipLink {
  links?: IAUskipLinkItem[]
  ariaLabel?: string
}

type AUskipLinkItemProps = React.ComponentProps<'a'> & IAUskipLinkItem

type AUskipLinkProps = React.ComponentProps<'nav'> & IAUskipLink

export const AUskipLinkItem = (props: AUskipLinkItemProps) => {
  const { text, link, className = '', ...otherProps } = props

  return (
    <a
      className={`au-skip-link__link ${className}`}
      href={link}
      {...otherProps}
    >
      {text}
    </a>
  )
}

const AUskipLink = (props: AUskipLinkProps) => {
  const {
    links = [],
    ariaLabel = 'skip links navigation',
    className = '',
    ...otherProps
  } = props

  return (
    <nav
      className={`au-skip-link ${className}`}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {links.map((link, i) => (
        <AUskipLinkItem key={`${i}${link.text}`} {...link} />
      ))}
    </nav>
  )
}

export default AUskipLink
