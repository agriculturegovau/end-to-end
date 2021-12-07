import * as React from 'react';
import WrapperLayout from './WrapperLayout';

export const Main: React.FC<React.ComponentProps<'section'>> = ({ ...props }) => (
  <main id="content">
    <section className="container au-body" {...props} />
  </main>
);

const DefaultLayout: React.FC = ({ children }) => (
  <WrapperLayout>
    <Main>{children}</Main>
  </WrapperLayout>
);

export default DefaultLayout;
