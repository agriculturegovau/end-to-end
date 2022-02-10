import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Concept: Interactive guidance"
    superheading="Export Service Tranche 1 concepts"
    cta={{ href: '/service-finder/previous-exports', label: 'Get started' }}
  >
    <p>
      Enabling users to choose criteria relevant to their circumstances and providing tailored, service-related content
      relevant to their goals.
    </p>
    <p>
      <strong>Purpose:</strong> support users to feel confident that they know what to do, how to do it and what will
      happen next to reach their objective.
    </p>
    <p>
      <strong>Context</strong>: From our discovery work, we know that exporters want to be confident they're doing the
      right thing when interacting with the department.
    </p>
    <p>
      The combined legislative and regularity context, complicated and disconnected supporting information and high
      business stakes (including potential loss of market access) drive high user motivation for certainty in task
      completion.
    </p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
