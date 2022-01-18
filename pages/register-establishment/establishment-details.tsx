import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import DescripionList from 'components/DescriptionList';
import Todo from 'components/Todo';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import TextInput from 'components/TextInput';

const Step = styled.div`
  border: 1px solid black;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Establishment details"
    navigator={false}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Register an establishment</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.{' '}
    </p>

    <AUheading level={2} size="xl">
      Trading name/s
    </AUheading>
    <p>Details must match the trading name/s on your ABN registration.</p>
    <TextInput id="trading_name" label="Trading name" type="text" width="xl" />
    <p>
      <Link href="/todo">Add another trading name</Link>
    </p>

    <AUheading level={2} size="xl">
      Phone and email
    </AUheading>
    <p>At least one contact number is required.</p>
    <TextInput id="work_phone" label="Work phone" type="text" width="xl" />
    <TextInput id="mobile_phone" label="Mobile phone" type="text" width="lg" />
    <TextInput id="email_address" label="Email address" type="text" width="md" />

    <AUheading level={2} size="xl">
      Postal address
    </AUheading>
    <p>At least one contact number is required.</p>
    <TextInput id="address" label="Postal address" type="text" width="xl" />
    <TextInput id="suburb" label="Suburb, town or city" type="text" width="lg" />
    <TextInput id="state" label="State or territory" type="text" width="md" />
    <TextInput id="postcode" label="Postcode" type="text" width="sm" />

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/register-establishment/commodities">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Save and continue later</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
