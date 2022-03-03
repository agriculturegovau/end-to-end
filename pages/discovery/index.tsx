import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Discovery content with step-by-step guidance"
    superheading="Export Service Tranche 1 concepts"
    cta={{ href: '/discovery/homepage', label: 'Get started' }}
  >
    <p>Enabling users to:</p>
    <ul>
      <li>discover information beyond the transactional context of the authenticated space</li>
      <li>more easily understand and navigate the export complexity.</li>
    </ul>
    <p>through unauthenticated content and simplified, well-signposted content patterns.</p>

    <p>
      <strong>Purpose:</strong> give users a holistic and connected view of information to help them plan and make
      decisions.
    </p>

    <p>
      <strong>Context:</strong> Users find the current department website and systems difficult to navigate. Relevant
      and detailed information is available, but they find it difficult to locate, understand and connect.
    </p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
