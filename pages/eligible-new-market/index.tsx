import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Eligibile for new market"
    superheading="End to end service prototype"
    cta={{ href: '/eligible-new-market/push-notification', label: 'Get started' }}
  >
    You’ve been successfully exporting your products to the fake country of Zuy for a while, when you receive the
    following message...
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
