import React from 'react';
import BackBreadcrumb from '../BackBreadcrumb';
import AUheading from '../@gov.au/AUheading';
import AUbreadcrumbs from 'components/@gov.au/AUbreadcrumbs';
import { ColumnContent } from 'components/ColumnContent';

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
    <ColumnContent navigator={navigator}>
      {breadcrumbs ? <AUbreadcrumbs items={breadcrumbs} /> : null}
      {backbreadcrumb ? <BackBreadcrumb backHref={backHref} /> : null}
      {frontmatter === undefined ? null : frontmatter}

      <AUheading size="xxl" level="1" paddingTop={1}>
        {title}
      </AUheading>

      {children}
    </ColumnContent>
  );
};
