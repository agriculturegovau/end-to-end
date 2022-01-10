import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import Calendar from 'components/Calendar';
import AUradio from 'components/@gov.au/AUradio';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';

const Home: NextPage = () => (
  <WizardLayout
    title="Market eligibility: pressure-treated boonberries - Fantasia"
    navigator={false}
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Market eligibility: pressure-treated boonberries - Fantasia' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      From 8 December 2021, Fantasia will be importing pressure-treated boonberries from Australia.
    </p>
    <AUheading size="lg" level={2}>
      Importing country requirements
    </AUheading>

    <dl>
      <dt>Preconditions for market access</dt>
      <dd>Australian-grown boonberries, pressure-treated and certified by Australian government.</dd>

      <dt>Documentation requirements</dt>
      <dd>Boonberry pressure standard certificate</dd>

      <dt>Other requirements</dt>
      <dd>None</dd>
    </dl>

    <div style={{ marginTop: '3em' }}>
      <Link passHref href="/eligible-new-market/apply">
        <AUbutton link>Apply to export</AUbutton>
      </Link>
    </div>
  </WizardLayout>
);

export default Home;
