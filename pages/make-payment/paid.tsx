import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import AUcallout from 'components/@gov.au/AUcallout';
import AUAlert from 'components/@gov.au/AUAlert';

const Calendar = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid var(--custom-color-foreground-hint);
  border-radius: 5px;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="What happens next"
    navigator={false}
    backbreadcrumb={false}
    frontmatter={
      <AUAlert title="Your payment was successful" type="success">
        <p>Amount paid: $950</p>
        <p>Reference: 45TR66IH</p>
      </AUAlert>
    }
  >
    <p>We’ll email you a reminder when your next payment towards your inspection is due. </p>

    <p>
      <AUbutton as="secondary">Close this window</AUbutton>
    </p>

    <AUcallout>
      <AUheading level={2} size="lg">
        Get more help
      </AUheading>
      <p>To change your repayment plan, or for more help you can:</p>
      <ul>
        <li>call us on 1800 900 090, or</li>
        <li>
          find <Link href="/todo">guidance and documents</Link> to export.
        </li>
      </ul>
    </AUcallout>
  </WizardLayout>
);

export default Home;
