import React from 'react';
import BackBreadcrumb from '../BackBreadcrumb';
import AUheading from '../@gov.au/AUheading';
import { IAUlinkListItem } from 'components/@gov.au/AUlinkList';
import AUbreadcrumbs from 'components/@gov.au/AUbreadcrumbs';
import clsx from 'clsx';

type WizardLayoutProps = {
  title: string;
  frontmatter?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  backHref?: string;

  breadcrumbs?: React.ComponentProps<typeof AUbreadcrumbs>['items'];
  backbreadcrumb?: boolean;
  navigator?: React.ReactNode;
};

export const WizardLayout = ({
  title,
  children,
  backHref,
  breadcrumbs,
  frontmatter,
  backbreadcrumb = true,
  navigator,
}: WizardLayoutProps) => {
  return (
    <div className="row">
      {navigator ? <div className="col-md-3 col-xs-12">{navigator}</div> : null}

      <div
        className={clsx('col-md-8', 'col-xs-12', { ['col-xs-offset-1']: !!navigator })}
        style={{ marginBottom: '3em' }}
      >
        {breadcrumbs ? <AUbreadcrumbs items={breadcrumbs} /> : null}
        {backbreadcrumb ? <BackBreadcrumb backHref={backHref} /> : null}
        {frontmatter === undefined ? null : frontmatter}

        <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
          {title}
        </AUheading>

        {children}
      </div>
    </div>
  );
};
