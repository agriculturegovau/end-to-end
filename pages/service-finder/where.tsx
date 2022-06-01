import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUformGroup from 'components/@gov.au/AUformGroup';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';
import { IntroText } from 'components/IntroText';
import TextInput from 'components/TextInput';
import { TextLink } from '@ag.ds-next/text';

const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1em;

  & > * + * {
    margin-left: 1em;
  }
`;

const Tag = styled.span<{ secondary?: boolean }>`
  border: 1px solid var(--agds-foreground-action);
  ${(props) =>
    props.secondary === true
      ? css`
          border-color: transparent;
        `
      : css``};
  color: var(--agds-foreground-action);
  border-radius: 4px;
  padding: 0 8px;

  margin-right: 6px;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Home: NextPage = () => {
  const countryField = useRef<HTMLInputElement>(null);
  const [countries, setCountries] = useState<string[]>(['Zuy']);
  const addCountry = (country: string) => setCountries([...countries, country]);
  const delCountry = (country: string) => setCountries(countries.filter((c) => c !== country));

  return (
    <WizardLayout
      title="Where do you want to export it?"
      navigator={<Navigator pages={serviceFinderPages} progress={3} />}
      frontmatter={
        <div style={{ marginTop: '2em' }}>
          <strong>Service finder</strong>
        </div>
      }
    >
      <IntroText>Import conditions vary depending on the country, product and the end use of a product.</IntroText>

      <AUheading size="lg" level={2}>
        Search for destination countries
      </AUheading>

      <TextInput label="Add one or more countries." placeholder="Search countries" ref={countryField} />

      <ButtonGroup>
        <AUbutton
          as="secondary"
          onClick={(e) => {
            if (countryField === null) {
              return;
            }

            if (countryField.current === null) {
              return;
            }

            const country = countryField.current.value;
            if (country !== undefined && country.length > 0) {
              countryField.current.value = '';
              addCountry(country);
            }
          }}
        >
          Add country
        </AUbutton>
      </ButtonGroup>

      <Tags style={{ marginTop: '1em' }}>
        {countries.map((country, n) => (
          <Tag key={`tag-${n}`}>
            {country}{' '}
            <span style={{ cursor: 'pointer' }} onClick={() => delCountry(country)}>
              ⨯
            </span>
          </Tag>
        ))}
      </Tags>

      <div style={{ marginTop: '2em' }}>
        Or <TextLink href="/todo">learn more about your options</TextLink>.
      </div>

      <Hr />

      <div style={{ marginTop: '3em' }}>
        <ButtonGroup>
          <AUbutton link="/service-finder/results">Continue</AUbutton>
          <AUbutton as="secondary">Cancel</AUbutton>
        </ButtonGroup>
      </div>
    </WizardLayout>
  );
};

export default Home;
