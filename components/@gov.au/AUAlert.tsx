import React from 'react';
import clsx from 'clsx';
import AUheading from './AUheading';

interface AUAlertProps {
  title?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
}

const AUAlert: React.FC<AUAlertProps> = ({ title, type = 'info', children }) => (
  <div className={clsx('au-page-alerts', `au-page-alerts--${type}`)}>
    {title ? (
      <AUheading size="xl" level="2" style={children ? { marginBottom: '1rem' } : undefined}>
        {title}
      </AUheading>
    ) : null}
    {children ? children : null}
  </div>
);

AUAlert.displayName = 'AUalert';

export default AUAlert;
