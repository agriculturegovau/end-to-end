import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';

const Page: LayoutPage = () => (
  <IntroLayout heading="Book an inspection" cta={{ href: '/book-an-inspection/sign-in', label: 'Get started' }}>
    Production of your goods has exceeded your expectations this season. You decide to explore your options of what to
    do with your excess goods. You’ve never exported anything before. You decide to go and search online to find out how
    to export your goods.
  </IntroLayout>
);

const Wut: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Wut;

export default Page;
