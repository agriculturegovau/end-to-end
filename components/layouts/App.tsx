import * as React from 'react';
import { Box } from '@ag.ds-next/box';

export const App: React.FC<React.ComponentProps<typeof Box>> = ({ children, ...boxProps }) => (
  <Box
    as="div"
    {...boxProps}
    className="App"
    css={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    }}
  >
    {children}
  </Box>
);
