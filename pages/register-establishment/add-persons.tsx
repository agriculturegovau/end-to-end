import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import TextInput from 'components/TextInput';
import { Navigator, registerEstablishmentPages } from 'components/wizard/navigator';
import { IntroText } from 'components/IntroText';

const Step = styled.div`
  border: 1px solid black;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Add persons who manage or control your establishment"
    navigator={<Navigator pages={registerEstablishmentPages} progress={2} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Register an establishment</strong>
      </div>
    }
  >
    <IntroText>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
    </IntroText>

    <AUheading level={2} size="xl">
      Person 1 (the applicant)
    </AUheading>
    <p>Some details have automatically been pulled in from your myGovID.</p>

    <Hr />

    <AUheading level={3} size="lg">
      Personal details
    </AUheading>
    <TextInput id="given_name" label="First name" type="text" width="xl" />
    <TextInput id="surname" label="Last name" type="text" width="xl" />
    <TextInput id="dob" label="Date of birth" type="text" width="md" />
    <TextInput id="birthplace" label="Place of birth" type="text" width="xl" />
    <TextInput id="job title" label="Job title" type="text" width="xl" />

    <AUheading level={3} size="lg">
      Address
    </AUheading>
    <TextInput id="address" label="Street address" type="text" width="xl" />
    <TextInput id="suburb" label="Suburb, town or city" type="text" width="lg" />
    <TextInput id="state" label="State or Territory" type="text" width="lg" />
    <TextInput id="postcode" label="Postcode" type="text" width="md" />

    <Hr />

    <AUheading level={2} size="xl">
      Add a person
    </AUheading>
    <p>
      You can do this later via your export account. Make sure you have the following before adding a person to manage
      and control your establishment:
    </p>
    <ul>
      <li>Contact and address details for the person you are adding.</li>
      <li>Personal details such as date of birth, and town of birth for the person you are adding.</li>
      <li>
        A list of known associates relating to the person you are adding.{' '}
        <Link href="/todo">Learn more about what we mean by &apos;associates&apos;</Link>
      </li>
    </ul>
    <p>
      You must also get the consent of individuals to disclose their personal information and sensitive information to
      the department in this application.
    </p>
    <div style={{ marginTop: '1em' }}>
      <AUbutton as="secondary">Add a person</AUbutton>
    </div>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <AUbutton link="/register-establishment/compliance">Continue</AUbutton>
        <AUbutton as="secondary">Save and continue later</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
