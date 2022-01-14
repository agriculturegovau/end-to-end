import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Todo from 'components/Todo';

const Tag = styled.span<{ secondary?: boolean }>`
  border: 1px solid var(--AU-color-foreground-action);
  ${(props) =>
    props.secondary === true
      ? css`
          border-color: transparent;
        `
      : css``};
  color: var(--AU-color-foreground-action);
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

const Page: NextPage = () => (
  <WizardLayout
    title="Personalisation preferences"
    navigator={false}
    backbreadcrumb={false}
    frontmatter={<strong>Set up account preferences</strong>}
  >
    <p style={{ fontSize: '1.2em' }}>Choose how we personalise your export service experience to meet your needs.</p>

    <Section>
      <AUheading level={2} size="md">
        Locations
      </AUheading>
      <p>You’ll be updated on information for the following regions:</p>
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
      <p>Stay updated on information and export requirements for:</p>
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
      <p>Get updates based on the following roles:</p>
      <Tags>
        <Tag>Producers of agricultural products</Tag>
        <Tag secondary>+ Add role</Tag>
      </Tags>
    </Section>

    <Section>
      <AUheading level={2} size="md">
        Destination country
      </AUheading>
      <p>Stay updated on opportunities and requirements for the following destination markets:</p>
      <Tags>
        <Tag>Zuy</Tag>
        <Tag secondary>+ Add import market</Tag>
      </Tags>
    </Section>

    <Hr />

    <ButtonGroup>
      <Link passHref href="/account-preferences/notification-preferences">
        <AUbutton link>Apply and continue</AUbutton>
      </Link>
      <AUbutton as="secondary">Skip</AUbutton>
      <AUbutton as="tertiary">Cancel</AUbutton>
    </ButtonGroup>

    <Todo style={{ marginTop: '2em' }}>
      <h1>👈 needs progress panel</h1>
    </Todo>
  </WizardLayout>
);

export default Page;
