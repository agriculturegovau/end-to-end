import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout heading="Oops! Sorry about that 👻" cta={{ href: '/', label: 'Start over again' }}>
    <p>Seems we&apos;ve gotten our wires crossed, why not️</p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
