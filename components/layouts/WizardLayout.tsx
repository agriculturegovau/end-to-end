import React from 'react'
import BackBreadcrumb from '../BackBreadcrumb'
import AUheading from '../@gov.au/AUheading'
import { Navigator, ProgressPages } from '../wizard/navigator'

type WizardLayoutProps = {
  title: string
  children: React.ReactNode | React.ReactNode[]
  backHref?: string
  breadcrumbs?: boolean
  navigator?: boolean
}

export const WizardLayout = ({
  title,
  children,
  backHref,
  breadcrumbs = true,
  navigator = true,
}: WizardLayoutProps) => {
  return (
    <div className="row">
      <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em' }}>
        {breadcrumbs ? <BackBreadcrumb backHref={backHref} /> : null}

        <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
          {title}
        </AUheading>

        {children}
      </div>

      <div className="col-md-4 col-xs-12">
        {navigator ? (
          <Navigator formData={{}} stepCompleted={() => false} />
        ) : null}
      </div>
    </div>
  )
}
