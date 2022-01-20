import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcallout from 'components/@gov.au/AUcallout';
import Todo from 'components/Todo';

const Home: NextPage = () => (
  <WizardLayout
    title="Apply to export to Fantasia"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Apply to export to Fantasia' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      The Republic of Fantasia now imports pressure-treated boonberries from Australia. Based on your current products
      and export operations, you may be eligible to export your product to Fantasia.
    </p>

    <AUheading size="lg" level={2}>
      Choose to pre-fill or manually provide information
    </AUheading>
    <p>
      If you choose to pre-fill, the department will access to your Boonberry pressure standard certificate issued by
      your state or third party provider. This will allow you an exemption from being re-inspected by the department.
    </p>

    <AUcallout>
      <Todo>
        <AUheading size="md" level={3}>
          Pre-fill your application
        </AUheading>
      </Todo>
    </AUcallout>

    <AUheading size="lg" level={2}>
      Do you allow your export account to get this information from Service NSW?
    </AUheading>
    <p>You’ll be taken to Service NSW to sign in and allow access to the above information.</p>

    <AUformGroup style={{ marginTop: '2em' }}>
      <AUcheckbox
        id="export_option_yes"
        label="Yes, I allow the above information to be prefilled from Service NSW"
        block
      />
      <AUcheckbox id="export_option_no" label="Remember this preference for next time" block />
    </AUformGroup>

    <div style={{ marginTop: '3em' }}>
      <Link passHref href="/eligible-new-market/confirm">
        <AUbutton link>Agree and continue</AUbutton>
      </Link>
    </div>
  </WizardLayout>
);

export default Home;
