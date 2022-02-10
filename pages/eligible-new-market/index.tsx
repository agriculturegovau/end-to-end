import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Concept: Information sharing – new market eligibility"
    superheading="Export Service Tranche 1 concepts"
    cta={{ href: '/eligible-new-market/push-notification', label: 'Get started' }}
  >
    <p>
      <strong>Purpose:</strong> provide streamlined and personalised interactions with services from one central place.
    </p>

    <p>
      <strong>Context:</strong> export businesses have to provide the same information to DAWE and other departments
      repeatedly. The evidence is often manual and not high quality.
    </p>

    <p>
      We can provide agricultural export services with information that has been verified and has a high-level of
      assurance around the provenance, to:
    </p>
    <ul>
      <li>reduce time and effort required to verify that information</li>
      <li>improve processing time around compliance time, and</li>
      <li>reduce the need for audits and inaccurate reporting to government.</li>
    </ul>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
