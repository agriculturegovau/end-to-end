import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import { Body } from '@ag.ds-next/body';
import { IntroText } from 'components/IntroText';

const Page: NextPage = () => (
  <WizardLayout title="Welcome to the Export Service" backbreadcrumb={false}>
    <IntroText>Set up your account preferences to personalise your experience.</IntroText>
    <Body>
      <p>Choose the way you receive updates and help us tailor services to suit your needs.</p>
      <p>
        <strong>You can choose:</strong>
      </p>
      <ul>
        <li>updates by email, text message or both</li>
        <li>which notifications you&apos;re most interested in, and which you&apos;d rather not receive</li>
        <li>the topics you want to receive updates about.</li>
      </ul>

      <hr />
    </Body>

    <ButtonGroup>
      <AUbutton link="/account-preferences/personalisation">Set up account preferences</AUbutton>
      <AUbutton as="secondary">Remind me later</AUbutton>
    </ButtonGroup>
  </WizardLayout>
);

export default Page;
