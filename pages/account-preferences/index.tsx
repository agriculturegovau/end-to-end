import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Account preferences"
    superheading="Export Service Tranche 1 concepts"
    cta={{ href: '/account-preferences/sign-in', label: 'Get started' }}
  >
    <p>
      Giving people visibility, choice and control around how we communicate with them and how their information is
      used.
    </p>

    <p>
      <strong>Purpose:</strong> provide streamlined and personalised interactions with services from one central place.
    </p>

    <p>
      <strong>Context:</strong> Businesses who export agricultural goods from Australia have to interact with multiple
      different systems in different places to satisfy export requirements.
    </p>

    <p>
      The experience is confusing, disjointed and inconsistent, between systems and department areas. Many processes are
      manual, requiring people to provide the same information repeatedly.
    </p>

    <p>
      Clients need and expect more efficiency and transparency from the department. Being uninformed about changes,
      status of applications and timeframes, can have significant financial implications on an export business.
    </p>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
