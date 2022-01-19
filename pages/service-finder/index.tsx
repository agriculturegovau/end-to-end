import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout
    heading="Scenario 1"
    superheading="End to end service prototype"
    cta={{ href: '/service-finder/previous-exports', label: 'Get started' }}
  >
    Production of your goods has exceeded your expectations this season. You decide to explore your options of what to
    do with your excess goods. You’ve never exported anything before. You decide to go and search online to find out how
    to export your goods.
  </IntroLayout>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
