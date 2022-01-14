import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';

const Page: NextPage = () => (
  <WizardLayout title="Welcome to the Export Service" navigator={false} backbreadcrumb={false}>
    <p style={{ fontSize: '1.2em' }}>Set up your account preferences to personalise your experience.</p>
    <p>Choose the way you receive updates and help us tailor services to suit your needs.</p>
    <p>
      <strong>You can choose:</strong>
    </p>
    <ul>
      <li>updates by email, text message or both</li>
      <li>which notifications you&apos;re most interested in, and which you&apos;d rather not receive</li>
      <li>the topics you want to receive updates about.</li>
    </ul>

    <Hr />

    <ButtonGroup>
      <Link passHref href="/account-preferences/personalisation">
        <AUbutton link>Set up account preferences</AUbutton>
      </Link>
      <AUbutton as="secondary">Remind me later</AUbutton>
    </ButtonGroup>
  </WizardLayout>
);

export default Page;
