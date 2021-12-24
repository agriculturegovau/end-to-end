import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <WizardLayout title="end-to-end" navigator={false} backbreadcrumb={false}>
    <ul>
      <li>
        <Link href="/service-finder">Service finder</Link>
      </li>
    </ul>
  </WizardLayout>
);

export default Home;
