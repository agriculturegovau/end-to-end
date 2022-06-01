import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import { IntroText } from 'components/IntroText';

const Page: NextPage = () => (
  <WizardLayout
    title="Sign in to your Export Service account"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        label: 'Home',
        href: '/todo',
      },
      { label: 'Sign in' },
    ]}
  >
    <IntroText>Access our export services and manage your transactions with us.</IntroText>

    <div style={{ marginTop: '3em' }}>
      <AUbutton link="/book-an-inspection/select-date">Sign in</AUbutton>
    </div>

    <Hr />

    <AUheading level={2} size="lg">
      Don’t have an account yet?
    </AUheading>

    <div style={{ marginTop: '3em' }}>
      <AUbutton as="secondary">Create an account</AUbutton>
    </div>
  </WizardLayout>
);

export default Page;
