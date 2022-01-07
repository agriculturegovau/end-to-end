import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';

const Page: NextPage = () => (
  <WizardLayout
    title="Sign in to your Export Service account"
    navigator={false}
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Sign in' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>Access our export services and manage your transactions with us.</p>

    <div style={{ marginTop: '3em' }}>
      <Link passHref href="/book-an-inspection/select-date">
        <AUbutton link>Sign in</AUbutton>
      </Link>
    </div>

    <hr style={{ borderTop: '1px solid #E0E0E0' }} />

    <AUheading level={2} size="lg">
      Don’t have an account yet?
    </AUheading>

    <div style={{ marginTop: '3em' }}>
      <AUbutton as="secondary">Create an account</AUbutton>
    </div>
  </WizardLayout>
);

export default Page;
