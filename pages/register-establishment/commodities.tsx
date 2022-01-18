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
    title="Commodities"
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
      Which commodities would you like to be registered for?
    </AUheading>
    <p>Select the commodity area that the establishment operation variation relates to.</p>

    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox name="commodities" id="commodities1" label="Eggs and/or egg products" block />
      <AUcheckbox name="commodities" id="commodities2" label="Fish and/or fish products" block />
      <AUcheckbox name="commodities" id="commodities3" label="Meat and/or meat products" block />
      <AUcheckbox name="commodities" id="commodities4" label="Milk and/or milk products" block />
      <AUcheckbox name="commodities" id="commodities5" label="Plant and/or plant products" block />
      <AUcheckbox name="commodities" id="commodities6" label="Poultry and/or poultry products" block />
      <AUcheckbox name="commodities" id="commodities7" label="Rabbit and/or rabbit products" block />
      <AUcheckbox name="commodities" id="commodities8" label="Ratite and/or ratite products" block />
      <AUcheckbox name="commodities" id="commodities9" label="Wild game" block />
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/register-establishment/add-persons">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Save and continue later</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
