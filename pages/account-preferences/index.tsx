import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Account preferences"
    superheading="End to end service prototype"
    cta={{ href: '/account-preferences/sign-in', label: 'Get started' }}
  >
    Imagining you’ve created an export account for your current business, walk us through what you would do on the next
    few screens.
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
