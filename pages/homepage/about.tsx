import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import AUheading from 'components/@gov.au/AUheading';
import { ButtonGroup } from 'components/button-group';
import { NextPage } from 'next';
import AUcallout from 'components/@gov.au/AUcallout';

const Home: NextPage = () => (
  <WizardLayout
    title="About the Export Service"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/homepage',
      },
      { text: 'About the Export Service' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      We&apos;re building a service to help Australians export. Exporters will be able to create an account and from
      there, they&apos;ll be able to manage interactions with us.
    </p>

    <AUheading size="xl" level="2" style={{ marginTop: '1em' }}>
      Services you can use now
    </AUheading>

    <p>We&apos;re building and releasing the service in stages. At the moment, you can create an account to:</p>
    <ul>
      <li>let us know about your establishments</li>
      <li>vary your establishment details</li>
      <li>manage your Corrective Action Requests (CARs)</li>
    </ul>

    <AUheading size="xl" level="2" style={{ marginTop: '1em' }}>
      Using the Export Service in the future
    </AUheading>
    <p>We&apos;ll keep adding to the service. You&apos;ll be able to do things like:</p>
    <ul>
      <li>choose to have us tell you when there&apos;s an export opportunity</li>
      <li>book phone calls with us</li>
      <li>manage your audit appointments</li>
    </ul>

    <AUcallout>
      <AUheading level={3} size="md">
        How to get started
      </AUheading>
      <p>Learn how to access the Export Service, using your myGovID and relationship authorisation manager.</p>

      <ButtonGroup style={{ marginTop: '1em' }}>
        <Link passHref href="https://agriculture-exports.awe.gov.au/account/help/">
          <AUbutton link>Create an account</AUbutton>
        </Link>
        <AUbutton as="secondary">Sign in</AUbutton>
      </ButtonGroup>
    </AUcallout>
  </WizardLayout>
);

export default Home;
