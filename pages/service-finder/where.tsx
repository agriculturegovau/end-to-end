import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import TextInput from 'components/TextInput';

const Home: NextPage = () => (
  <WizardLayout title="Where do you want to export it?" navigator={false}>
    <p style={{ fontSize: '1.2em' }}>
      Import conditions vary depending on the country, product and the end use of a product.
    </p>

    <TextInput id="service_finder_where_search" label="Search countries" type="text" width="lg" />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/service-finder/suggested">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
