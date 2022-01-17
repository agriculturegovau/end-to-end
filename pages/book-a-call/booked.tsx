import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import AUcallout from 'components/@gov.au/AUcallout';
import AUAlert from 'components/@gov.au/AUAlert';

const Home: NextPage = () => (
  <WizardLayout
    title="What happens next"
    navigator={false}
    backbreadcrumb={false}
    frontmatter={
      <AUAlert title="Your call is booked" type="success">
        <p>We&apos;ve emailed you a confirmation, don&apos;t forget to check your junk mail folder.</p>

        <p>
          Date: Thursday 16 December 2021
          <br />
          Time: 9.00am - 9.15 am
          <br />
          <Link href="/todo">Add to calendar</Link>
        </p>

        <p>
          <strong>Reference: 99TR98IH</strong>
        </p>
      </AUAlert>
    }
  >
    <p>One of our finance staff will call you then to discuss your payment options.</p>
    <p>If you need to change or cancel your call, you can do this at any time through your export services account.</p>

    <AUcallout>
      <AUheading level={2} size="lg">
        Urgent enquiries
      </AUheading>
      <p>If you have an urgent enquiry, call our support centre.</p>
      <p>Staff are available between 8am and 8pm, weekdays.</p>
      <p>Call 1800 900 090.</p>
    </AUcallout>
  </WizardLayout>
);

export default Home;
