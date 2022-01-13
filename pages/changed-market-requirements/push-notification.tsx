import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';
import StaticImage from 'components/StaticImage';
import Link from 'next/link';

const Page: LayoutPage = () => (
  <IntroLayout heading="Changed market requirements" logo={null}>
    <Link href="/changed-market-requirements/email-inbox">
      <a>
        <StaticImage src="/changed-market-requirements_push-notification.png" width="425" height="860" />
      </a>
    </Link>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
