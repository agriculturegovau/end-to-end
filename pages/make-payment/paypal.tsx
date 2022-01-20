import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import AUcallout from 'components/@gov.au/AUcallout';
import { ButtonGroup } from 'components/button-group';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUfieldset from 'components/@gov.au/AUfieldset';
import AUlegend from 'components/@gov.au/AUlegend';
import Todo from 'components/Todo';

const Page: NextPage = () => (
  <WizardLayout title="Paypal" backbreadcrumb={false}>
    <Todo>
      <div>
        <Link passHref href="/make-payment/paypal-pay">
          <AUbutton link>Pay</AUbutton>
        </Link>
      </div>
    </Todo>
  </WizardLayout>
);

export default Page;
