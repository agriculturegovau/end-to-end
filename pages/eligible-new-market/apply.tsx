import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcallout from 'components/@gov.au/AUcallout';
import StaticImage from 'components/StaticImage';
import styled from '@emotion/styled';
import Dialog, { DialogContext } from 'components/Dialog';
import TextInput from 'components/TextInput';
import { ButtonGroup } from 'components/button-group';
import { useContext, useState } from 'react';

const Hstack = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Centered = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

// Super quick-and-dirty just pulled colors from embedded figma image 💀
const ServiceNSWButton = styled(AUbutton)`
  &.au-btn {
    color: white;
    background-color: rgb(188, 20, 47);
    border: 2px solid rgb(155, 26, 45);
  }

  &.au-btn:not(disabled):hover {
    background-color: rgb(155, 26, 45);
  }
`;

// hack. ugly dialog container.
const ContainerWithoutAnyReasonableSemanticName = styled.div`
  margin-top: 2em;
  margin-bottom: 1em;
  max-width: 20em;

  & ${ServiceNSWButton} {
    width: 100%;
  }

  & > * + p, // specificity hack
  & > * + * {
    margin-top: 1em;
  }
`;

const Captcha = styled.div`
  background-color: rgba(249, 249, 249);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0.75em 1em;
  justify-content: space-between;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const SNSWDialog: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const { setShowing } = useContext(DialogContext);

  if (loggedIn) {
    return (
      <>
        <Centered>
          <StaticImage src="/eligible-market_servicensw-header-logo.png" alt="AWE logo" width={193} height={49} />
          <strong style={{ paddingTop: '6px' }}>MyServiceNSW Account</strong>
        </Centered>

        <AUheading level={2} size="lg" style={{ marginBottom: '1em', marginTop: '1em' }}>
          Send the information below to your export account?
        </AUheading>
        <AUcallout>
          <AUheading level={3} size="md" style={{ marginBottom: '1em' }}>
            Pressure standard certificate - Boonberries
          </AUheading>

          <Hstack>
            <StaticImage src="/eligible-market_servicensw-logo.png" alt="Service NSW logo" width={114} height={58} />
            &nbsp;&nbsp;&nbsp;
            <div style={{ fontSize: '30px' }}>→</div>&nbsp;&nbsp;&nbsp;
            <StaticImage src="/eligible-market_awe-logo.png" alt="AWE logo" width={218} height={76} />
          </Hstack>
        </AUcallout>

        <ButtonGroup style={{ marginTop: '2em' }}>
          <ServiceNSWButton link="/eligible-new-market/confirm">Agree and send</ServiceNSWButton>

          <AUbutton as="secondary" onClick={() => setShowing(false)}>
            Cancel
          </AUbutton>
        </ButtonGroup>
      </>
    );
  }

  return (
    <>
      <Centered>
        <StaticImage src="/eligible-market_servicensw-header-logo.png" alt="AWE logo" width={193} height={49} />
        <strong style={{ paddingTop: '6px' }}>MyServiceNSW Account</strong>
      </Centered>

      <AUheading level={2} size="lg" style={{ marginBottom: '1em', marginTop: '1em' }}>
        Log in
      </AUheading>

      <TextInput block id="snsw_email" label="Email" />

      <ContainerWithoutAnyReasonableSemanticName>
        <Captcha>
          <AUcheckbox id="snsw_robot" name="snsw_robot" label="I'm not a robot" />
          <StaticImage src="/eligible-market_recaptcha-logo.png" alt="reCAPTCHA logo" width={51} height={58} />
        </Captcha>

        <ServiceNSWButton onClick={login}>Continue →</ServiceNSWButton>
        <p>
          <Link href="/todo">Create an account instead</Link>
        </p>
      </ContainerWithoutAnyReasonableSemanticName>

      <AUheading level={3} size="md" style={{ marginTop: '2em' }}>
        Help
      </AUheading>
      <p style={{ marginTop: '1em' }}>
        <Link href="/todo">I forgot my email</Link>
      </p>
      <p style={{ marginTop: '1em' }}>Forgot password? Please enter your email above and continue.</p>
    </>
  );
};

const Home: NextPage = () => (
  <WizardLayout
    title="Apply to export to Fantasia"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Apply to export to Fantasia' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      The Republic of Fantasia now imports pressure-treated boonberries from Australia. Based on your current products
      and export operations, you may be eligible to export your product to Fantasia.
    </p>

    <AUheading size="lg" level={2}>
      Choose to pre-fill or manually provide information
    </AUheading>
    <p>
      If you choose to pre-fill, the department will access to your Boonberry pressure standard certificate issued by
      your state or third party provider. This will allow you an exemption from being re-inspected by the department.
    </p>

    <AUcallout>
      <AUheading size="md" level={3}>
        Pre-fill your application
      </AUheading>

      <Hstack>
        <StaticImage src="/eligible-market_servicensw-logo.png" alt="myGovID" width={114} height={58} />
        &nbsp;&nbsp;&nbsp;
        <div style={{ fontSize: '30px' }}>→</div>&nbsp;&nbsp;&nbsp;
        <StaticImage src="/eligible-market_awe-logo.png" alt="myGovID" width={218} height={76} />
      </Hstack>
    </AUcallout>

    <AUheading size="lg" level={2}>
      Do you allow your export account to get this information from Service NSW for Business?
    </AUheading>
    <p>You’ll be taken to Service NSW to sign in and allow access to the above information.</p>

    <AUformGroup style={{ marginTop: '2em' }}>
      <AUcheckbox
        id="export_option_yes"
        label="Yes, I allow the above information to be prefilled from Service NSW"
        block
      />
      <AUcheckbox id="export_option_no" label="No, I&nbsp;ll fill in the information manually myself." block />
      <AUcheckbox id="export_option_remember" label="Remember this preference for next time" block />
    </AUformGroup>

    <div style={{ marginTop: '3em' }}>
      <Dialog<HTMLButtonElement> trigger={(onClick) => <AUbutton onClick={onClick}>Agree and continue</AUbutton>}>
        <SNSWDialog />
      </Dialog>
    </div>
  </WizardLayout>
);

export default Home;
