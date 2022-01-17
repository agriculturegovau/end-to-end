import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import Todo from 'components/Todo';
import { ButtonGroup } from 'components/button-group';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';

const Page: NextPage = () => (
  <WizardLayout title="Pay your document processing" navigator={false} backbreadcrumb={false}>
    <p style={{ fontSize: '1.2em' }}>You need to pay for the processing of your documents, before you can export.</p>

    <Todo>
      <div style={{ marginTop: '3em' }}>
        <AUheading level={2} size="xl">
          Invoice
        </AUheading>
      </div>
    </Todo>

    <AUheading level={2} size="lg">
      Select how to pay
    </AUheading>
    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox type="radio" name="payment-method" id="a" label="Pay with a debit or credit card" block />
      <AUcheckbox type="radio" name="payment-method" id="b" label="Pay by direct deposit" block />
      <AUcheckbox type="radio" name="payment-method" id="c" label="Add to monthly account" block />
      <AUcheckbox type="radio" name="payment-method" id="d" label="Talk to finance support" block />
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/book-a-call/book-a-call">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
