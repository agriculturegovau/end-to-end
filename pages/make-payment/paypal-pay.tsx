import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import Todo from 'components/Todo';

const Page: NextPage = () => (
  <WizardLayout title="Paypal" backbreadcrumb={false}>
    <Todo>
      <div>
        <AUbutton link="/make-payment/paid">Pay</AUbutton>
      </div>
    </Todo>
  </WizardLayout>
);

export default Page;
