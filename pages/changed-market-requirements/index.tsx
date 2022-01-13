import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Changed market requirements"
    superheading="End to end service prototype"
    cta={{ href: '/changed-market-requirements/push-notification', label: 'Get started' }}
  >
    You’ve been successfully exporting your products to the fake country of Zuy for a while, when you receive the
    following message...
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
