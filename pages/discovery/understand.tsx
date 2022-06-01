import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import styled from '@emotion/styled';
import AUbutton from 'components/@gov.au/AUbutton';
import AUcallout from 'components/@gov.au/AUcallout';
import AUheading from 'components/@gov.au/AUheading';
import { ButtonGroup } from 'components/button-group';
import { IntroText } from 'components/IntroText';
import { WizardLayout } from 'components/layouts/WizardLayout';
import { TodoLink } from 'components/Todo';
import type { NextPage } from 'next';

const Contents = styled.div`
  border-left: 3px solid var(--agds-foreground-action);
  margin: 1em 0;
  padding: 0 1em;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & ul li {
    margin-top: 0.5rem;
  }
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Understand the export rules for your product"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        label: 'Home',
        href: '/discovery/homepage',
      },
      { label: 'New exporters', href: '/discovery/guide' },
      { label: 'Understand the export rules for your product' },
    ]}
  >
    <IntroText>
      Australia’s rules and requirements differ, depending on the type of products you plan to export. Here’s how to
      know which rules apply to you.
    </IntroText>

    <Contents>
      <strong>Contents</strong>
      <ul>
        <li>
          <a href="#check">Check how your product is classified</a>
        </li>
        <li>
          <a href="#commodities">Commodities controlled by the department</a>
        </li>
        <li>
          <a href="#goods">Goods that aren’t regulated</a>
        </li>
        <li>
          <a href="#other">Goods regulated by other departments</a>
        </li>
      </ul>
    </Contents>

    <Body>
      <h2>Check how your product is classified</h2>
      <p>
        The process you&apos;ll need to follow to export depends on your type of goods. Under Australian export laws,
        agricultural productsfall into one of 3 categories:
      </p>
      <ul>
        <li>
          commodities controlled by the department - these are listed or &apos;prescribed&apos; in the legislation
        </li>
        <li>
          goods that aren&apos;t regulated by Australian export laws - these are called &apos;non-prescribed&apos; goods
        </li>
        <li>export goods handled by other Federal Government departments.</li>
      </ul>

      <h2>Commodities controlled by the department</h2>
      <p>Prescribed goods are controlled by the department under Australian export laws. These include:</p>
      <ul>
        <li>eggs and egg products</li>
        <li>fish and fish products</li>
        <li>fodder, straw, timber products, nursery stock, tissue cultures and cotton</li>
        <li>fresh fruit and vegetables</li>
        <li>grains, nuts and seeds</li>
        <li>organic produce</li>
        <li>meat and meat products</li>
        <li>milk and milk products.</li>
      </ul>
      <p>To export products in any of these categories, you&apos;ll need to follow product-specific export rules.</p>

      <h2>Goods that aren&apos;t regulated</h2>
      <p>
        We don&apos;t control the export of non-prescribed agricultural goods. But your importing country may still have
        requirements you need to meet.
      </p>
      <p>Non-prescribed goods include:</p>
      <ul>
        <li>animal by-products - such as wool, feathers, skins and hides, and inedible blood products</li>
        <li>processed foods</li>
        <li>honey and apiary products</li>
        <li>water</li>
        <li>pet food</li>
        <li>rendered animal products</li>
        <li>processed animal manure and fertilisers.</li>
      </ul>
      <p>
        There are no Australian export rules you need to follow for products in any of these categories. But you may
        need to meet specific requirements in the importing country.
      </p>

      <h2>Goods handled by other departments</h2>
      <p>Some types of agricultural goods are handled by other Australian government departments. These include:</p>
      <ul>
        <li>Animal vaccine and veterinary medicine</li>
        <li>Human vaccine and human therapeutics</li>
        <li>Australian wine.</li>
      </ul>
      <p>
        You won&apos;t need to engage with the Department of Agriculture, Water and the Environment to export products
        in any of these categories. Check which department handles the exports.
      </p>
    </Body>

    <h3>
      <TodoLink href="/todo">Step 2 - Confirm the importing country’s rules →</TodoLink>
    </h3>

    <AUcallout>
      <AUheading level={3} size="md">
        Sign up for an export account
      </AUheading>
      <p>Get updates, insights and advice to get you started as an exporter.</p>

      <ButtonGroup style={{ marginTop: '1em' }}>
        <AUbutton link="/discovery/create-account">Create an account</AUbutton>
        <AUbutton as="secondary">Sign in</AUbutton>
      </ButtonGroup>
    </AUcallout>
  </WizardLayout>
);

export default Home;
