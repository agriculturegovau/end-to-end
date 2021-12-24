import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';

const labels = [
  'Eggs and/or egg products',
  'Fish and/or fish products',
  'Meat and/or meat products',
  'Milk and/or milk products',
  'Plant and/or plant products',
  'Poultry and/or poultry products',
  'Rabbit and/or rabbit products',
  'Ratite and/or ratite products',
  'Wild game',
];

const Page: NextPage = () => (
  <WizardLayout title="What do you want to export?" navigator={false}>
    <p style={{ fontSize: '1.2em' }}>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
    </p>

    <AUformGroup style={{ marginTop: '2em' }}>
      {labels.map((label, n) => (
        <AUcheckbox key={`option_${n}`} id={`export_option_${n}`} label={label} block />
      ))}
    </AUformGroup>

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link href="/service-finder/where">
          <AUbutton>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
