import { Box } from '@ag.ds-next/box';
import * as React from 'react';

const Main: React.FC<React.ComponentProps<typeof Box>> = ({ children, ...boxProps }) => (
  <Box as="main" {...boxProps} role="main" css={{ flex: 1 }} id="main-content">
    {children}
  </Box>
);

export default Main;
