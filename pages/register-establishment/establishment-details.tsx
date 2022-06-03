import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import TextInput from 'components/TextInput';
import { Navigator, registerEstablishmentPages } from 'components/wizard/navigator';
import { Text, TextLink } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';

const Step = styled.div`
  border: 1px solid black;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Establishment details"
    navigator={<Navigator pages={registerEstablishmentPages} progress={0} />}
    frontmatter={<strong>Register an establishment</strong>}
  >
    <Text as="p" fontSize="md" color="muted">
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.{' '}
    </Text>

    <AUheading level={2} size="xl">
      Trading name/s
    </AUheading>
    <p>Details must match the trading name/s on your ABN registration.</p>
    <TextInput id="trading_name" label="Trading name" type="text" width="xl" />
    <p>
      <TextLink href="/todo">Add another trading name</TextLink>
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
        <AUbutton link="/register-establishment/commodities">Continue</AUbutton>
        <AUbutton as="secondary">Save and continue later</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
