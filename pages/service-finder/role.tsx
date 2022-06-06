import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import Hr from 'components/Hr';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';
import { IntroText } from 'components/IntroText';

const labels = [
  'I produce an agricultural product I want to export',
  'I want to process agricultural products for export',
  'I want to treat, store or handle agricultural products for export',
  'I want to inspect agricultural products for export',
];

const Page: NextPage = () => (
  <WizardLayout
    title="What is your role in the supply chain?"
    navigator={<Navigator pages={serviceFinderPages} progress={2} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <IntroText>Tell us which aspects of export you’re interested in.</IntroText>
    <p>Select all that apply</p>

    <AUformGroup style={{ marginTop: '2em' }}>
      {labels.map((label, n) => (
        <AUcheckbox key={`option-${n}`} id={`export_option_${n}`} label={label} block />
      ))}
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <AUbutton link="/service-finder/where">Continue</AUbutton>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
