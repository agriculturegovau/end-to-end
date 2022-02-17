import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';
import StaticImage from 'components/StaticImage';
import Link from 'next/link';

const Page: LayoutPage = () => (
  <IntroLayout heading="Concept: Discovery content with step-by-step guidance" logo={null}>
    <Link href="/discovery/homepage">
      <a>
        <StaticImage src="/discovery-search.png" width="1440" height="900" />
      </a>
    </Link>
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
