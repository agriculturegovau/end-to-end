import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import { ButtonGroup } from 'components/button-group';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import DescripionList from 'components/DescriptionList';
import Todo from 'components/Todo';

const Page: NextPage = () => (
  <WizardLayout
    title="Confirm and apply"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Confirm and apply' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>Confirm the details below and supply any missing documentation before applying.</p>

    <AUheading level={2} size="lg">
      Requirements not met to export to Canada
    </AUheading>
    <p>Upload the missing document to apply for this market opportunity.</p>
    <Todo>
      <div> styling needs work 👇 </div>
      <DescripionList>
        <dt>Cold treatment certificate</dt>
        <dd>
          <strong>Supplied</strong> (prefilled)
        </dd>
        <dt>Endorsement 3358</dt>
        <dd>
          <strong>Missing</strong>
        </dd>
      </DescripionList>
    </Todo>
    <AUbutton as="secondary">Upload missing document</AUbutton>

    <AUheading level={2} size="lg">
      Requirements met to export to Malaysia
    </AUheading>
    <Todo>
      <div> styling needs work 👇 </div>
      <DescripionList>
        <dt>Cold treatment certificate</dt>
        <dd>
          <strong>Supplied</strong> (prefilled)
        </dd>
      </DescripionList>
    </Todo>

    <AUheading level={2} size="lg">
      Declaration
    </AUheading>

    <p>I declare that:</p>
    <ul style={{ marginBottom: '2em' }}>
      <li>I am an authorised person in management and control of the business.</li>
      <li>I have conducted appropriate due diligence to compile the information set out in this application.</li>
      <li>
        I have read and understood the privacy notice and consent to the collection, use and disclosure of my personal
        information as outlined in the privacy notice.
      </li>
    </ul>

    <AUcheckbox
      name="export_confirm"
      id="export_confirm1"
      label="I agree, and consent to the collection, use and disclosure of my information to the relevant authorities in the importing country as outlined in the privacy notice."
      block
    />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/new-market-opportunity/success">
          <AUbutton link>Confirm and apply</AUbutton>
        </Link>

        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
