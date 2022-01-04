import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import Calendar from 'components/Calendar';
import AUradio from 'components/@gov.au/AUradio';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';

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

    <AUheading level={2} size="lg">
      Select a time
    </AUheading>

    <p>These are the available times on the selected date.</p>

    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox type="radio" id="a" label="9.00am - 11.00am" block />
      <AUcheckbox type="radio" id="b" label="10.00am - 12.00pm" block />
      <AUcheckbox type="radio" id="c" label="1.30pm - 3.30 pm" block />
      <AUcheckbox type="radio" id="c" label="2.30pm - 4.30 pm" block />
    </AUformGroup>

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
