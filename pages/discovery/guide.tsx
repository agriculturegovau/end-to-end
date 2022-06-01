import AUbutton from 'components/@gov.au/AUbutton';
import AUcallout from 'components/@gov.au/AUcallout';
import AUheading from 'components/@gov.au/AUheading';
import { ButtonGroup } from 'components/button-group';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Sequence from 'components/Sequence';
import { TodoLink } from 'components/Todo';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <WizardLayout
    title="Guide to export agricultural goods from Australia"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/discovery/homepage',
      },
      { text: 'New exporters' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      Follow these steps to export goods from Australia to another country. Our guide can also help you understand how
      long the process takes.
    </p>

    <Sequence style={{ marginTop: '2em' }}>
      <li>
        <AUheading level={2} size="lg">
          <Link href="/discovery/understand">Understand the export rules for your products</Link>
        </AUheading>
        <p>
          The rules and requirements differ, depending on the type of goods you plan to export. Here’s how to know which
          ones apply to you.
        </p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Confirm the importing country’s rules</TodoLink>
        </AUheading>
        <p>
          The country you wish to export to may have additional rules. Find out what the importing country requirements
          are for your product, and how to meet them.
        </p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Register, list or get accredited with us</TodoLink>
        </AUheading>
        <p>
          You may need to register or list your establishment, or get your property accredited with the Department.
          Check what you need to do for your product, and the importing country.
        </p>
        <p style={{ fontSize: '0.9em' }}>2 to 3 months</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Check if you need a permit</TodoLink>
        </AUheading>
        <p>
          You only need an export permit if you’re exporting prescribed goods over a certain volume. Check the volume of
          your shipment before you export.
        </p>
        <p style={{ fontSize: '0.9em' }}>3 - 5 days</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Arrange your shipping</TodoLink>
        </AUheading>
        <p>
          Book a freight forwarder to transport your goods. They’ll also manage the collection of your shipment and
          documents in the importing country. It’s important there are no delays.
        </p>
        <p style={{ fontSize: '0.9em' }}>7 - 14 days</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Apply for export documents</TodoLink>
        </AUheading>
        <p>
          Request documents you need to export such as certificates and permits. You can apply for documents in our
          Export Documentation System (EXDOC).
        </p>
        <p style={{ fontSize: '0.9em' }}>2 hours</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Get an inspection</TodoLink>
        </AUheading>
        <p>
          Your products, documents and transport unit may need to be inspected before you export them. Here’s how to
          prepare for your inspection and book an appointment.
        </p>
        <p style={{ fontSize: '0.9em' }}>24 hours</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          <TodoLink href="/todo">Export your products</TodoLink>
        </AUheading>
        <p>If you’ve followed the steps in our guide and your goods meet all requirements, you’re ready to export.</p>
        <p style={{ fontSize: '0.9em' }}>1 - 3 days</p>
      </li>
    </Sequence>

    <AUcallout>
      <AUheading level={3} size="md">
        Sign up for an export account
      </AUheading>
      <p>Get updates, insights and advice to get you started as an exporter.</p>

      <ButtonGroup style={{ marginTop: '1em' }}>
        <AUbutton link="/discovery/create-account">Create an account</AUbutton>
        <AUbutton as="secondary">Sign in</AUbutton>
      </ButtonGroup>
    </AUcallout>
  </WizardLayout>
);

export default Home;
