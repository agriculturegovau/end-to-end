import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Support hand-offs – book an appointment"
    superheading="Export Service Tranche 1 concepts"
    cta={{ href: '/book-an-inspection/select-date', label: 'Get started' }}
  >
    <p>Enabling users to book in-person services and support when and where they need it.</p>
    <p>
      <strong>Purpose:</strong> provide a reusable interaction pattern to enable people to book and self-manage
      appointments from their export account.
    </p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
