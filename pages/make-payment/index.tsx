import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Make payment"
    superheading="End to end service prototype"
    cta={{ href: '/make-payment/push-notification', label: 'Get started' }}
  >
    Your goods have been inspected by a Departmental Authorised Officer. You’ve just set up a repayment plan and a
    payment is due.
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
