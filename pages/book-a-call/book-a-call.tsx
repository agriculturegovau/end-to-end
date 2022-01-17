import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import Calendar from 'components/Calendar';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import Hr from 'components/Hr';
import Todo from 'components/Todo';

const Home: NextPage = () => (
  <WizardLayout title="Book a call to talk to finance support" navigator={false} backbreadcrumb={false}>
    <p style={{ fontSize: '1.2em' }}>We can call you on XXXX XXX 123 at a time that suits you.</p>
    <p>
      <Link href="/todo">Change phone number</Link>
    </p>
    <Hr />

    <AUheading level={2} size="lg">
      Select a date for your call
    </AUheading>

    <Calendar style={{ marginTop: '1em' }}>December 2021</Calendar>

    <Todo>
      <p>👆 make this respond to calendar selection</p>
      <AUheading level={2} size="lg">
        Select a time
      </AUheading>
      <p>Select an available time on this date.</p>

      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="call-date" id="a" label="9:00am - 9:15 am" block />
        <AUcheckbox type="radio" name="call-date" id="b" label="9:15am - 9:30 am" block />
        <AUcheckbox type="radio" name="call-date" id="c" label="1:00pm - 1:15 pm" block />
        <AUcheckbox type="radio" name="call-date" id="d" label="1:15pm - 1:30 pm" block />
        <AUcheckbox type="radio" name="call-date" id="e" label="2:30pm - 2:45pm" block />
      </AUformGroup>
    </Todo>

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/book-a-call/booked">
          <AUbutton link>Book a call</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
