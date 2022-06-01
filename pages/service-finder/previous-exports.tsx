import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import Hr from 'components/Hr';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';
import { IntroText } from 'components/IntroText';

const Page: NextPage = () => (
  <WizardLayout
    title="Have you previously exported goods from Australia?"
    navigator={<Navigator pages={serviceFinderPages} progress={0} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <IntroText>This includes if someone else exports on your behalf.</IntroText>

    <AUformGroup>
      <AUcheckbox type="radio" name="previous_exporter" id="previous_no" label="No - I’m new to exporting" block />
      <AUcheckbox type="radio" name="previous_exporter" id="previous_yes" label="Yes - I’ve exported before" block />
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <AUbutton link="/service-finder/categories">Continue</AUbutton>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
