import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import { ExitButton } from 'components/exit-button';
import TextInput from 'components/TextInput';
import AUheading from 'components/@gov.au/AUheading';

const Page: NextPage = () => (
  <WizardLayout title="Suggested for you" navigator={false}>
    <p style={{ fontSize: '1.2em' }}>Based on your answers you may be interested in one or more of the following.</p>

    <div
      style={{
        border: '1px solid grey',
        borderRadius: '4px',
        marginTop: '1em',
        padding: '1em',
      }}
    >
      <AUheading level={3} size="md">
        Exporting citrus to China
      </AUheading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo, non rhoncus neque. Nunc et dui
        cursus, euismod felis eget, tristique augue.
      </p>
    </div>

    <div
      style={{
        border: '1px solid grey',
        borderRadius: '4px',
        marginTop: '1em',
        padding: '1em',
      }}
    >
      <AUheading level={3} size="md">
        Awards and grants
      </AUheading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo, non rhoncus neque. Nunc et dui
        cursus, euismod felis eget, tristique augue.
      </p>
    </div>

    <div
      style={{
        border: '1px solid grey',
        borderRadius: '4px',
        marginTop: '1em',
        padding: '1em',
      }}
    >
      <AUheading level={3} size="md">
        International freight subsidy
      </AUheading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo, non rhoncus neque. Nunc et dui
        cursus, euismod felis eget, tristique augue.
      </p>
    </div>

    <AUheading level={2} size="lg">
      Couldn’t find what you’re looking for?
    </AUheading>
    <p>Try again and change the answers to your questions for a different result.</p>

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link href="/service-finder/where">
          <AUbutton>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
