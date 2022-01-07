import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import Link from 'next/link';
import AUheading from 'components/@gov.au/AUheading';
import MyGovID from 'components/MyGovID';

const A: React.FC<{}> = ({ children }) => <Link href="/todo">{children}</Link>;

const Page: NextPage = () => (
  <WizardLayout title="Sign in to your Export Service account" navigator={false}>
    <p style={{ fontSize: '1.2em' }}>Access our export services and manage your transactions with us.</p>

    <div style={{ marginTop: '3em' }}>
      <p style={{ marginBottom: '1em' }}>
        <strong>
          I have <A>myGovID</A> and <A>RAM</A> set up
        </strong>
      </p>
      <MyGovID />
    </div>

    <hr style={{ borderTop: '1px solid #E0E0E0' }} />

    <AUheading level={2} size="lg">
      Don’t have myGovID and RAM set up?
    </AUheading>
    <p>
      Everyone who uses our export services will need a <A>MyGovID</A> account linked to{' '}
      <A>Relationship Authorisation Manager (RAM)</A>. We’ll show you how to set it up.
    </p>

    <div style={{ marginTop: '3em' }}>
      <AUbutton as="secondary">Create an account</AUbutton>
    </div>
  </WizardLayout>
);

export default Page;
