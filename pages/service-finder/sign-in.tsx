import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import { ExitButton } from 'components/exit-button';
import TextInput from 'components/TextInput';
import AUheading from 'components/@gov.au/AUheading';
import MyGovID from 'components/myGovID';

const A: React.FC<{}> = ({ children }) => <a href="javascript:;">{children}</a>;

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
