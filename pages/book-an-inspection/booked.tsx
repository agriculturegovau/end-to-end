import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import AUcallout from 'components/@gov.au/AUcallout';
import AUAlert from 'components/@gov.au/AUAlert';

const Calendar = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid var(--custom-color-foreground-hint);
  border-radius: 5px;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="What happens next"
    backbreadcrumb={false}
    frontmatter={
      <AUAlert title="Your inspection is booked" type="success">
        Date: Thursday 12 December 2021 <br />
        Time: 9.00am - 10.00 am <br />
        <Link href="/todo">Add to calendar</Link>
        <br />
        <p>Reference: 99TR98IH</p>
      </AUAlert>
    }
  >
    <p>
      Your goods will be inspected at the agreed time and location. Inspections take around 2 hours and cost $3,700.00.
    </p>
    <p>After the inspection, you’ll recieve a report via email along with an invoice for payment.</p>

    <AUcallout>
      <AUheading level={2} size="lg">
        Prepare for the inspection
      </AUheading>
      <p>Follow our checklist, hints and tips to ensure you’re well prepared.</p>
      <p>
        <Link href="/todo">Getting ready for an inspection</Link>
      </p>
    </AUcallout>
  </WizardLayout>
);

export default Home;
