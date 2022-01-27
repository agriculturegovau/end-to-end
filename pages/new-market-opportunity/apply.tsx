import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import DescripionList from 'components/DescriptionList';
import AUcallout from 'components/@gov.au/AUcallout';
import Todo from 'components/Todo';
import { MouseEventHandler, useRef, useState } from 'react';
import styled from '@emotion/styled';
import TextInput from 'components/TextInput';

const Dialog = styled.div`
  position: relative;
  background: white;

  border: none !important;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  //box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.6rem;

  min-width: 400px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 101; // form inputs are 100
`;

const Captcha = styled.div`
  background-color: rgba(249, 249, 249);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 1.25em 0.75em;
`;

const Page: NextPage = () => {
  const [showingDialog, setDialog] = useState(false);
  const showDialog = () => setDialog(true);
  const hideDialog = () => setDialog(false);

  return (
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
          <Link passHref href="/new-market-opportunity/confirm">
            <AUbutton link>Agree and continue</AUbutton>
          </Link>

          <AUbutton as="secondary">Cancel</AUbutton>
        </ButtonGroup>
      </div>
      <button onClick={showDialog}>trigger ServiceNSW login dialog</button>

      {showingDialog ? (
        <Backdrop
          onClickCapture={(e) => {
            if (e.currentTarget !== e.target) {
              return;
            }

            hideDialog();
          }}
        >
          <Dialog>
            <AUheading level={2} size="lg" style={{ marginBottom: '1em' }}>
              Log in
            </AUheading>

            <TextInput block id="snsw_email" label="Email" />

            <div style={{ marginTop: '2em', marginBottom: '1em' }}>
              <Captcha>
                <AUcheckbox id="snsw_robot" name="snsw_robot" label="I'm not a robot" />
              </Captcha>
            </div>

            <AUbutton>Continue</AUbutton>
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
          </Dialog>
        </Backdrop>
      ) : null}
    </WizardLayout>
  );
};

export default Page;
