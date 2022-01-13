import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import Todo from 'components/Todo';

const Home: NextPage = () => (
  <WizardLayout
    title="Confirm"
    navigator={false}
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Apply to export to Fantasia' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>Check details are correct and complete.</p>
    <AUheading size="lg" level={2}>
      Details
    </AUheading>
    <Todo>
      <dl>
        <dt>Business details</dt>
        <dd>ProduceCo</dd>

        <dt>Prefill information</dt>
        <dd>Pressure standard certificate - boonberries</dd>

        <dt>Importing country</dt>
        <dd>Fantasia</dd>
      </dl>
    </Todo>

    <AUheading size="lg" level={2}>
      Declaration
    </AUheading>
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
        <Link passHref href="/eligible-new-market/success">
          <AUbutton link>Apply now</AUbutton>
        </Link>

        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;