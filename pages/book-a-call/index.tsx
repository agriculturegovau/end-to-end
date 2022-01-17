import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Book a call with finance"
    superheading="End to end service prototype"
    cta={{ href: '/book-a-call/push-notification', label: 'Get started' }}
  >
    You have a payment due to the Department.
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
