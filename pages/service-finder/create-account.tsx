import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import TextInput from 'components/TextInput';
import AUformGroup from 'components/@gov.au/AUformGroup';

const Page: NextPage = () => (
  <WizardLayout
    title="Create an Export Service account"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Create an account' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>Get updates, insights and advice to get you started as an exporter.</p>
    <p>
      Stay informed of market news and export events, and choose the way you receive updates and help us tailor services
      to suit your needs.
    </p>

    <AUformGroup style={{ marginTop: '2em' }}>
      <TextInput id="name" label="Full name" type="text" width="xl" />
      <TextInput id="email" label="Email address" type="text" width="xl" />
    </AUformGroup>

    <div style={{ marginTop: '2em' }}>
      <AUbutton as="primary">Create an account</AUbutton>
    </div>

    <Hr />
    <AUheading size="lg" level={2}>
      Already have an account?
    </AUheading>

    <div style={{ marginTop: '2em' }}>
      <AUbutton as="secondary">Sign in</AUbutton>
    </div>
  </WizardLayout>
);

export default Page;
