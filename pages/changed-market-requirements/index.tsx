import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Concept: Proactive service delivery – changed market requirements"
    superheading="Export Service Tranche 1 concepts"
    cta={{ href: '/changed-market-requirements/push-notification', label: 'Get started' }}
  >
    <p>
      <strong>Purpose:</strong>
      provide streamlined and personalised interactions with services from one central place.
    </p>

    <p>
      <strong>Context:</strong>
      Policy and importing country requirements are not always communicated to clients in a timely way. The
      communications can arrive via multiple channels, and the regulatory requirements can be difficult to understand.
    </p>
    <p>By designing a service that:</p>
    <ul>
      <li>responds to changes to an export business's circumstances in real-time</li>
      <li>proactively reaches provides guidance and support relevant to their situation,</li>
    </ul>
    <p>
      We can help people understand and more easily comply with changes in requirements in a timely, efficient and
      cost-effective way.
    </p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
