import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import TextInput from 'components/TextInput';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUlabel from 'components/@gov.au/AUlabel';
import styled from '@emotion/styled';
import Hr from 'components/Hr';

const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1em;

  & > * + * {
    margin-left: 1em;
  }
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Where do you want to export it?"
    navigator={false}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      Import conditions vary depending on the country, product and the end use of a product.
    </p>

    <AUheading size="lg" level={2}>
      Search for destination countries
    </AUheading>

    <AUformGroup>
      <AUlabel
        text={
          <>
            Add one or more countries. <Link href="/todo">Learn more about your options</Link>.
          </>
        }
        htmlFor="service_finder_where_search"
      />
      <Split>
        <input
          type="text"
          id="service_finder_where_search"
          className="au-text-input au-text-input--width-xl"
          placeholder="Search countries"
        />

        <AUbutton as="secondary">Add country</AUbutton>
      </Split>
    </AUformGroup>

    <div style={{ marginTop: '2em' }}>
      <AUcheckbox id="not_sure" label="I'm not sure" block />
    </div>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/service-finder/results">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
