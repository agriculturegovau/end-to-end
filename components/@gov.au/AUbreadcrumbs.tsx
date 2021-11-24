import * as React from 'react'
import clsx from 'clsx'
import AUlinkList, {
  IAUlinkListItem,
  LinkComponent,
} from 'components/@gov.au/AUlinkList'

interface IAUbreadcrumbs {
  label: string
  items: IAUlinkListItem[]
  linkComponent?: LinkComponent
  dark?: boolean
}

type AUbreadcrumbsProps = React.ComponentProps<'nav'> & IAUbreadcrumbs

const AUbreadcrumbs = (props: AUbreadcrumbsProps) => {
  const {
    linkComponent,
    label,
    items,
    dark,
    className = '',
    ...otherProps
  } = props

  const classNames = clsx(['au-breadcrumbs', className, dark && 'au-btn--dark'])

  return (
    <nav className={classNames} aria-label={label} {...otherProps}>
      <AUlinkList inline linkComponent={linkComponent} items={items} />
    </nav>
  )
}

export default AUbreadcrumbs
