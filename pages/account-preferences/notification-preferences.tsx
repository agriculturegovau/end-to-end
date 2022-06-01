import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUcallout from 'components/@gov.au/AUcallout';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { Navigator, preferencesPages } from 'components/wizard/navigator';
import { IntroText } from 'components/IntroText';

const Page: NextPage = () => (
  <WizardLayout
    title="Notification preferences"
    backbreadcrumb={false}
    navigator={<Navigator pages={preferencesPages} progress={1} />}
    frontmatter={<strong>Set up account preferences</strong>}
  >
    <IntroText>Choose how you get notified about your export account activity.</IntroText>

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
      <AUbutton link="/account-preferences/sharing-preferences">Apply and continue</AUbutton>
      <AUbutton as="secondary">Skip</AUbutton>
      <AUbutton as="tertiary">Cancel</AUbutton>
    </ButtonGroup>
  </WizardLayout>
);

export default Page;
