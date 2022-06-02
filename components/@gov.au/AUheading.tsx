import { Heading } from '@ag.ds-next/heading';
import React from 'react';

interface IAUheading {
  level: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

const AUheading: React.FC<IAUheading & React.ComponentProps<typeof Heading>> = ({
  level,
  size,
  children,
  ...headingProps
}) => (
  <Heading as={`h${level}`} fontSize={size} {...headingProps}>
    {children}
  </Heading>
);

AUheading.displayName = 'AUheading';

export default AUheading;
