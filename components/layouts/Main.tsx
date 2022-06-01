import * as React from 'react';

const Main: React.FC = ({ children }) => (
  <main role="main" css={{ flex: 1 }} id="main-content">
    {children}
  </main>
);

export default Main;
