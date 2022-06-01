import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import DescripionList from 'components/DescriptionList';
import { Body } from '@ag.ds-next/body';
import { IntroText } from 'components/IntroText';

const Home: NextPage = () => (
  <WizardLayout
    title="Confirm"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        label: 'Home',
        href: '/todo',
      },
      { label: 'Apply to export to Fantasia' },
    ]}
  >
    <IntroText>Check details are correct and complete.</IntroText>

    <AUheading size="lg" level={2}>
      Details
    </AUheading>

    <DescripionList>
      <dt>Business details</dt>
      <dd>ProduceCo</dd>

      <dt>Prefill information</dt>
      <dd>Pressure standard certificate - boonberries</dd>

      <dt>Importing country</dt>
      <dd>Fantasia</dd>
    </DescripionList>

    <Body>
      <h2>Declaration</h2>
      <p>I declare that:</p>
      <ul>
        <li>I am an authorised person in management and control of the business.</li>
        <li>I have conducted appropriate due diligence to compile the information set out in this application.</li>
        <li>
          I have read and understood the privacy notice and consent to the collection, use and disclosure of my personal
          information as outlined in the privacy notice.
        </li>
      </ul>
      <AUformGroup style={{ marginTop: '2em' }}>
        <AUcheckbox
          id="agree"
          label="I agree, and consent to the collection, use and disclosure of my information to the relevant authorities in the importing country as outlined in the privacy notice."
        />
      </AUformGroup>
      <div style={{ marginTop: '3em' }}>
        <ButtonGroup>
          <AUbutton link="/eligible-new-market/success">Apply now</AUbutton>
          <AUbutton as="secondary">Cancel</AUbutton>
        </ButtonGroup>
      </div>
    </Body>
  </WizardLayout>
);

export default Home;
