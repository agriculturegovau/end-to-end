import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';
import StaticImage from 'components/StaticImage';
import Link from 'next/link';

const Page: LayoutPage = () => (
  <IntroLayout heading="Support hand-offs – book a call" logo={null}>
    <Link href="/book-a-call/email-inbox">
      <a>
        <StaticImage src="/book-a-call_push-notification.png" width="425" height="860" />
      </a>
    </Link>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
