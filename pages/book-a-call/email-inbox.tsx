import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';
import StaticImage from 'components/StaticImage';
import Link from 'next/link';

const Page: LayoutPage = () => (
  <IntroLayout heading="Book a call with finance" logo={null}>
    <Link href="/book-a-call/sign-in">
      <a>
        <StaticImage src="/book-a-call_email-inbox.png" width="1440" height="900" />
      </a>
    </Link>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
