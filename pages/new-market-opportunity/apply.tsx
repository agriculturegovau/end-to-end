import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import { ButtonGroup } from 'components/button-group';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUcallout from 'components/@gov.au/AUcallout';
import Todo from 'components/Todo';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import TextInput from 'components/TextInput';
import Dialog from 'components/Dialog';

const Captcha = styled.div`
  background-color: rgba(249, 249, 249);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 1.25em 0.75em;
`;

const SNSWDialog: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);

  if (loggedIn) {
    return (
      <>
        <AUheading level={2} size="lg" style={{ marginBottom: '1em' }}>
          Log in
        </AUheading>
        <AUcallout>
          <AUheading level={3} size="md" style={{ marginBottom: '1em' }}>
            ProduceCo - Cold treatment certificate
            <Todo>image here</Todo>
          </AUheading>
        </AUcallout>

        <ButtonGroup style={{ marginTop: '2em' }}>
          <Link passHref href="/new-market-opportunity/confirm">
            <AUbutton link>Agree and send</AUbutton>
          </Link>

          <AUbutton>Cancel</AUbutton>
        </ButtonGroup>
      </>
    );
  }

  return (
    <>
      <AUheading level={2} size="lg" style={{ marginBottom: '1em' }}>
        Log in
      </AUheading>

      <TextInput block id="snsw_email" label="Email" />

      <div style={{ marginTop: '2em', marginBottom: '1em' }}>
        <Captcha>
          <AUcheckbox id="snsw_robot" name="snsw_robot" label="I'm not a robot" />
        </Captcha>
      </div>

      <AUbutton onClick={login}>Continue</AUbutton>

      <p>
        <Link href="/todo">Create an account instead</Link>
      </p>
      <p>
        <strong>Help</strong>
      </p>
      <p>
        <Link href="/todo">I forgot my email</Link>
      </p>
      <p>Forgot password? Please enter your email above and continue.</p>
    </>
  );
};

const Page: NextPage = () => (
  <WizardLayout
    title="Apply to export"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Apply to export' },
    ]}
  >
    <AUcallout>
      <AUheading level={3} size="md">
        You’re applying to these new markets
      </AUheading>
      <ul>
        <li>Export navel oranges to Canada</li>
        <li>Export navel oranges to Malaysia</li>
      </ul>
    </AUcallout>

    <AUheading level={2} size="lg">
      Choose to pre-fill or manually provide information
    </AUheading>
    <p>
      If you choose to pre-fill, the department will attempt to access required documentation from your state or third
      party provider. This will allow you an exemption from being re-inspected by the department.
    </p>
    <Todo>
      <div>Service NSW → DAWE</div>
    </Todo>

    <AUheading level={2} size="lg">
      Do you allow your export account to get this information from Service NSW?
    </AUheading>

    <p style={{ marginBottom: '2em' }}>We&apos;ll check whether you meet the requirements in the next step.</p>

    <AUcheckbox
      name="apply_to_export"
      id="apply_to_export1"
      label="Yes, I allow the above information to be pre-filled from Service NSW."
      block
    />
    <AUcheckbox
      name="apply_to_export"
      id="apply_to_export2"
      label="No, I'll fill in the information manually myself."
      block
    />
    <AUcheckbox name="apply_to_export" id="apply_to_export3" label="Remember this preference for next time." block />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Dialog<HTMLButtonElement> trigger={(onClick) => <AUbutton onClick={onClick}>Agree and continue</AUbutton>}>
          <SNSWDialog />
        </Dialog>

        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
