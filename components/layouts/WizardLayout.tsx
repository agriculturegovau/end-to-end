import React from 'react';
import BackBreadcrumb from '../BackBreadcrumb';
import AUheading from '../@gov.au/AUheading';
import { Navigator, ProgressPages } from '../wizard/navigator';
import { IAUlinkListItem } from 'components/@gov.au/AUlinkList';
import AUbreadcrumbs from 'components/@gov.au/AUbreadcrumbs';

type WizardLayoutProps = {
  title: string;
  frontmatter?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  backHref?: string;

  breadcrumbs?: IAUlinkListItem[];
  backbreadcrumb?: boolean;
  navigator?: boolean;
};

export const WizardLayout = ({
  title,
  children,
  backHref,
  breadcrumbs,
  frontmatter,
  backbreadcrumb = true,
  navigator = true,
}: WizardLayoutProps) => {
  return (
    <div className="row">
      <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em' }}>
        {breadcrumbs ? <AUbreadcrumbs label="bc" items={breadcrumbs} /> : null}
        {backbreadcrumb ? <BackBreadcrumb backHref={backHref} /> : null}
        {frontmatter === undefined ? null : frontmatter}

        <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
          {title}
        </AUheading>

        {children}
      </div>

      <div className="col-md-4 col-xs-12">
        {navigator ? <Navigator formData={{}} stepCompleted={() => false} /> : null}
      </div>
    </div>
  );
};
