import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';

const Calendar = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid var(--custom-color-foreground-hint);
  border-radius: 5px;
`;

const Home: NextPage = () => (
  <WizardLayout title="Book an inspection" navigator={false} backbreadcrumb={false}>
    <p style={{ fontSize: '1.2em' }}>Choose a date and time that’s convenient for you. </p>
    <p>
      Inspections take around 2 hours and cost $3,700.00. After the inspection, you’ll recieve a report via email along
      with an invoice for payment.
    </p>

    <AUheading level={2} size="lg">
      Select a date
    </AUheading>

    <Calendar style={{ marginTop: '1em' }}>December 2021</Calendar>

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link href="/book-an-inspection/booked">
          <AUbutton>Book inspection</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
