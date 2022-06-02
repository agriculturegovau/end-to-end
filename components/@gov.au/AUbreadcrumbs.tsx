import * as React from 'react';
import clsx from 'clsx';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';

interface BreadcrumbProps {
  items: React.ComponentProps<typeof Breadcrumbs>['links'];
}

const AUbreadcrumbs = ({ items }: BreadcrumbProps) => <Breadcrumbs links={items} />;

export default AUbreadcrumbs;
