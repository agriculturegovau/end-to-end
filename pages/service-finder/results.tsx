import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import DescripionList from 'components/DescriptionList';
import styled from '@emotion/styled';
import AUcallout from 'components/@gov.au/AUcallout';
import Sequence from 'components/Sequence';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';

const Card = styled.div`
  margin-top: 1em;
  padding: 1em;

  border: 1px solid #d3d3d3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

const SplitDD = styled.dd`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Page: NextPage = () => (
  <WizardLayout
    title="Exporting oranges to Zuy"
    navigator={<Navigator pages={serviceFinderPages} progress={4} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      There are regulations around getting oranges out of Australia. Zuy has import requirements.{' '}
    </p>

    <AUheading size="lg" level={2}>
      Your details
    </AUheading>

    <DescripionList>
      <dt>Experience</dt>
      <SplitDD>
        <span>New exporter</span>
        <Link href="/todo">Change</Link>
      </SplitDD>
      <dt>Products</dt>
      <SplitDD>
        <span>Navel oranges, Valencia oranges</span>
        <Link href="/todo">Change</Link>
      </SplitDD>
      <dt>Role in supply chain</dt>
      <SplitDD>
        <span>Producer of agricultural products</span>
        <Link href="/todo">Change</Link>
      </SplitDD>
      <dt>Destination country</dt>
      <SplitDD>
        <span>Zuy</span>
        <Link href="/todo">Change</Link>
      </SplitDD>
    </DescripionList>

    <AUheading size="xl" level={2}>
      Guide to exporting oranges to Zuy
    </AUheading>

    <Sequence style={{ marginTop: '2em' }}>
      <li>
        <AUheading level={2} size="lg">
          Export rules for oranges
        </AUheading>
        <p>
          All oranges exported from Australia must meet export control rules. We can help you understand and meet the
          requirements.
        </p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          Zuy’s rules for Australian oranges
        </AUheading>
        <p>These are the rules Australian produce needs to meet to be imported into Zuy.</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          Have your property accredited
        </AUheading>
        <p>
          Your property will need to be accredited by the department. Were’s what you need to do, based on your product,
          and the country you plan to export to.
        </p>
        <p style={{ fontSize: '0.9em' }}>3 months</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          Export your product
        </AUheading>
        <p>
          Once you’re set up to start exporting, you’re ready to send your consignment. Here’s how to find a buyer,
          organise transport and get the permits, certificates and labels you need.
        </p>
        <p style={{ fontSize: '0.9em' }}>5 - 10 days</p>
      </li>
    </Sequence>

    <div style={{ marginTop: '1em' }}>
      <Link href="/todo">Read the full guide →</Link>
    </div>

    <AUheading size="xl" level={2}>
      Related information
    </AUheading>

    <Card>
      <AUheading level={3} size="md">
        <Link href="/todo">Market trends for oranges in Zuy</Link>
      </AUheading>
      <p>
        Austrade can tell you about market trends, challenges and opportunities for selling oranges to Zuy. This
        includes distribution channels, setting up and promoting your business.
      </p>
    </Card>

    <Card>
      <AUheading level={3} size="md">
        <Link href="/todo">State and territory government support</Link>
      </AUheading>
      <p>
        Your local government agency will have a range of resources and guidance about exporting oranges from your state
        or territory.
      </p>
    </Card>

    <Card>
      <AUheading level={3} size="md">
        <Link href="/todo">International freight assistance</Link>
      </AUheading>
      <p>
        The International Freight Assistance Mechanism (IFAM) is an emergency support measure, to keep global air links
        open in response to the ongoing effects of the COVID-19 pandemic.
      </p>
    </Card>
    <div style={{ marginTop: '1em' }}>
      <Link href="/todo">More resources to help you get started as an exporter →</Link>
    </div>

    <AUcallout>
      <AUheading level={3} size="md">
        Save your details
      </AUheading>
      <p>
        Create an export service account to save your details and results. From your account, you can also choose to
        receive updates, insights and advice.
      </p>
      <Link passHref href="/service-finder/create-account">
        <AUbutton link>Save and create an account</AUbutton>
      </Link>
    </AUcallout>
  </WizardLayout>
);

export default Page;
