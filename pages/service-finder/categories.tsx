import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import Hr from 'components/Hr';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';

const labels = [
  'Animal by-products (such as wool, feathers or bones)',
  'Fodder, straw, timber products and/or nursery stock',
  'Fresh fruit and/or vegetables ',
  'Grains, nuts and/or seeds',
  'Honey and/or apiary products',
  'Organic produce',
  'Processed foods',
  'Other - not listed above',
  'I’m not sure',
];

const Page: NextPage = () => (
  <WizardLayout
    title="What do you want to export?"
    navigator={<Navigator pages={serviceFinderPages} progress={1} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      Export requirements differ, depending on the type of product you want to export from Australia.
    </p>
    <p>Select all that apply</p>

    <AUformGroup style={{ marginTop: '2em' }}>
      {labels.map((label, n) => (
        <AUcheckbox key={`option-${n}`} id={`export_option_${n}`} label={label} block />
      ))}
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/service-finder/role">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
