import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="New market opportunity"
    superheading="End to end service prototype"
    cta={{ href: 'new-market-opportunity/push-notification', label: 'Get started' }}
  >
    Stephan has been successfully exporting produce for a while, when he receives the following message.
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
