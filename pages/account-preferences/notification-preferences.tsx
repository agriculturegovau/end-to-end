import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import Todo from 'components/Todo';
import AUcallout from 'components/@gov.au/AUcallout';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';

const Page: NextPage = () => (
  <WizardLayout
    title="Notification preferences"
    navigator={false}
    backbreadcrumb={false}
    frontmatter={<strong>Set up account preferences</strong>}
  >
    <p style={{ fontSize: '1.2em' }}>Choose how you get notified about your export account activity.</p>

    <AUcallout>
      <AUheading level={3} size="md">
        Your contact details
      </AUheading>
      <p>
        Email: j.meyxxx@xxxxany.com
        <br />
        Phone number: XXXX XXX 123
      </p>
    </AUcallout>

    <AUheading level={2} size="lg">
      Compliance and account updates
    </AUheading>
    <p>Choose how you receive updates about regulation, compliance and your account.</p>
    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox type="radio" name="prefs-updates" id="prefs-updates_email" label="Email" block />
      <AUcheckbox type="radio" name="prefs-updates" id="prefs-updates_sms" label="Text message" block />
    </AUformGroup>

    <AUheading level={2} size="lg">
      News, events and opportunities
    </AUheading>
    <p>Choose how you receive personalised market insights, news, updates and invitations.</p>
    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox type="radio" name="prefs-news" id="prefs-news_email" label="Email" block />
      <AUcheckbox type="radio" name="prefs-news" id="prefs-news_sms" label="Text message" block />
      <AUcheckbox type="radio" name="prefs-news" id="prefs-news_none" label="Don't send me notifications" block />
    </AUformGroup>

    <Hr />

    <ButtonGroup>
      <Link passHref href="/account-preferences/sharing-preferences">
        <AUbutton link>Apply and continue</AUbutton>
      </Link>
      <AUbutton as="secondary">Skip</AUbutton>
      <AUbutton as="tertiary">Cancel</AUbutton>
    </ButtonGroup>

    <Todo style={{ marginTop: '2em' }}>
      <h1>👈 needs progress panel</h1>
    </Todo>
  </WizardLayout>
);

export default Page;