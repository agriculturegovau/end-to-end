import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Navigator, preferencesPages } from 'components/wizard/navigator';
import { LayoutPage } from 'components/LayoutPage';
import { Text } from '@ag.ds-next/text';
import { IntroText } from 'components/IntroText';

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
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row nowrap;
  & > * + * {
    margin-left: 6px;
  }
`;

const Section = styled.section`
  padding: 1rem 0;

  & * + p,
  & > * + * {
    margin-top: 0.5rem;
  }
`;

const Page: LayoutPage = () => (
  <WizardLayout
    title="Personalisation preferences"
    navigator={<Navigator pages={preferencesPages} progress={0} />}
    backbreadcrumb={false}
    frontmatter={<strong>Set up account preferences</strong>}
  >
    <IntroText>Choose how we personalise your export service experience to meet your needs.</IntroText>

    <Section>
      <AUheading level={2} size="md">
        Locations
      </AUheading>
      <Text as="p">You&apos;ll be updated on information for the following regions:</Text>
      <Tags>
        <Tag>Riverina, NSW</Tag>
        <Tag>Riverland, SA</Tag>
        <Tag secondary>+ Add location</Tag>
      </Tags>
    </Section>

    <Section>
      <AUheading level={2} size="md">
        Products
      </AUheading>
      <Text as="p">Stay updated on information and export requirements for:</Text>
      <Tags>
        <Tag>Oranges</Tag>
        <Tag>Grapefruit</Tag>
        <Tag secondary>+ Add location</Tag>
      </Tags>
    </Section>

    <Section>
      <AUheading level={2} size="md">
        Roles in the supply chain
      </AUheading>
      <Text as="p">Get updates based on the following roles:</Text>
      <Tags>
        <Tag>Producers of agricultural products</Tag>
        <Tag secondary>+ Add role</Tag>
      </Tags>
    </Section>

    <Section>
      <AUheading level={2} size="md">
        Destination country
      </AUheading>
      <Text as="p">Stay updated on opportunities and requirements for the following destination markets:</Text>
      <Tags>
        <Tag>Zuy</Tag>
        <Tag secondary>+ Add import market</Tag>
      </Tags>
    </Section>

    <Hr />

    <ButtonGroup>
      <AUbutton link="/account-preferences/notification-preferences">Apply and continue</AUbutton>
      <AUbutton as="secondary">Skip</AUbutton>
      <AUbutton as="tertiary">Cancel</AUbutton>
    </ButtonGroup>
  </WizardLayout>
);

export default Page;
