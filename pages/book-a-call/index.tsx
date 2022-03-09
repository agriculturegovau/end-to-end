import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Support hand-offs – book a call"
    superheading="Export Service Tranche 1"
    cta={{ href: '/book-a-call/push-notification', label: 'Get started' }}
  >
    <p>Enabling users to book personalised phone support when and where they need it.</p>
    <p>
      <strong>Purpose:</strong> help support users by predicting friction points in their journey and by providing a
      seamless transition to a support pathways at the moment they may need help.
    </p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
