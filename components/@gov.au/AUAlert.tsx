import React from 'react';
import { PageAlert } from '@ag.ds-next/page-alert';

interface AUAlertProps {
  title?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
}

const AUAlert: React.FC<AUAlertProps> = ({ title, type = 'info', children = null }) => (
  <PageAlert tone={type} title={title}>
    {children}
  </PageAlert>
);

AUAlert.displayName = 'AUalert';

export default AUAlert;
