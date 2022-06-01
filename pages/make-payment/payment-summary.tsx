import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import AUcallout from 'components/@gov.au/AUcallout';
import { ButtonGroup } from 'components/button-group';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import Hr from 'components/Hr';

const Page: NextPage = () => (
  <WizardLayout title="Payment details" backbreadcrumb={false}>
    <p style={{ fontSize: '1.2em' }}>You need to make a payment towards the inspection of your goods.</p>

    <AUcallout>
      <AUheading level={2} size="md">
        Inspection with an Authorised Officer
      </AUheading>
      <p>
        Date: Thursday 12 December 2021
        <br />
        Time: 9 am
      </p>
      <p>
        Total amount due: $3,700
        <br />
        Repayment plan: $950 per week
        <br />
        Amount owing: $3,700
      </p>

      <p>
        <strong>Amount due: $200</strong>
        <br />
        Due date: 28 November 2021
      </p>
    </AUcallout>

    <AUheading size="lg" level="2" style={{ marginTop: '1em' }}>
      Choose how to pay
    </AUheading>
    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox type="radio" name="payment-method" id="a" label="Pay with a debit or credit card" block />
      <AUcheckbox type="radio" name="payment-method" id="b" label="Pay by direct deposit" block />
    </AUformGroup>

    <Hr />

    <ButtonGroup style={{ marginTop: '1em' }}>
      <AUbutton link="/make-payment/paypal">Pay now</AUbutton>
      <AUbutton as="secondary">Cancel</AUbutton>
    </ButtonGroup>
  </WizardLayout>
);

export default Page;
