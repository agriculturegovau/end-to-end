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
import MyGovID from 'components/myGovID';

const Page: NextPage = () => (
  <WizardLayout title="Exporting citrus to Zuy" navigator={false}>
    <p style={{ fontSize: '1.2em' }}>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
    </p>

    <div
      style={{
        border: '1px solid grey',
        borderLeftWidth: '2px',
        marginTop: '1em',
        padding: '1em',
      }}
    >
      <AUheading level={3} size="md">
        Check before you start
      </AUheading>
      <p>
        Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
        Exerci verterem ad ius, at mea tibique atomorum.
      </p>
    </div>

    <div
      style={{
        border: '1px solid grey',
        borderLeftWidth: '2px',
        padding: '1em',
      }}
    >
      <AUheading level={3} size="md">
        Prepare application
      </AUheading>
      <p>
        Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
        Exerci verterem ad ius, at mea tibique atomorum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
        Exerci verterem ad ius, at mea tibique atomorum.
      </p>
    </div>

    <div
      style={{
        border: '1px solid grey',
        borderLeftWidth: '2px',
        padding: '1em',
      }}
    >
      <AUheading level={3} size="md">
        Apply
      </AUheading>
      <p>
        Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
        Exerci verterem ad ius, at mea tibique atomorum.
      </p>
    </div>

    <div style={{ marginTop: '3em' }}>
      <AUbutton>Sign in to apply</AUbutton>
    </div>
  </WizardLayout>
);

export default Page;
