import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import { Navigator, preferencesPages } from 'components/wizard/navigator';

const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Page: NextPage = () => (
  <WizardLayout
    title="Information sharing preferences"
    navigator={<Navigator pages={preferencesPages} progress={2} />}
    backbreadcrumb={false}
    frontmatter={<strong>Set up account preferences</strong>}
  >
    <p style={{ fontSize: '1.2em' }}>
      Choose how you share information across government departments and other third-parties.
    </p>
    <p>
      The following services are linked to your export account. Any changes to information in those services will be
      automatically updated here. Uncheck services to turn off automatic updates.
    </p>

    <AUheading level={2} size="xl">
      NSW Department of Primary Industry
    </AUheading>
    <p>2 permissions</p>
    <Hr />

    <Split>
      <AUheading level={3} size="lg">
        Citrus sweetness certificate
      </AUheading>
      <Link href="/todo">Delete permission</Link>
    </Split>

    <p>How this information is used:</p>
    <ul>
      <li>we will use this as your certification to comply with importing country requirements</li>
      <li>
        any changes to your NSW Citrus sweetness certificate will be automatically updated in your export account.
      </li>
    </ul>
    <Hr />

    <Split>
      <AUheading level={3} size="lg">
        Cold storage operations audits
      </AUheading>
      <Link href="/todo">Delete permission</Link>
    </Split>

    <p>How this information is used:</p>
    <ul>
      <li>
        we will use your NSW audit details to meet your export compliance obligations - your cold storage arrangments
        will not need to be re-audited by our department
      </li>
      <li>any changes to your NSW audit status will be automatically updated in your export account.</li>
    </ul>
    <Hr />

    <AUheading level={2} size="xl">
      South Australian Growers Association
    </AUheading>
    <p>1 permission</p>
    <Hr />

    <Split>
      <AUheading level={3} size="lg">
        Regional provenance certificate
      </AUheading>
      <Link href="/todo">Delete permission</Link>
    </Split>

    <p>How this information is used:</p>
    <ul>
      <li>we will use this as your certification to comply with importing country requirements</li>
      <li>any changes to your Regional provenance certificate will be automatically updated in your export account.</li>
    </ul>

    <Hr />

    <ButtonGroup>
      <Link passHref href="/account-preferences/success">
        <AUbutton link>Apply and continue</AUbutton>
      </Link>
      <AUbutton as="secondary">Skip</AUbutton>
      <AUbutton as="tertiary">Cancel</AUbutton>
    </ButtonGroup>
  </WizardLayout>
);

export default Page;
