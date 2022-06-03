import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import { Navigator, preferencesPages } from 'components/wizard/navigator';
import { Text, TextLink } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';

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
    <Text as="p" fontSize="md" color={'muted'}>
      Choose how you share information across government departments and other third-parties.
    </Text>

    <Body>
      <p>
        The following services are linked to your export account. Any changes to information in those services will be
        automatically updated here. Uncheck services to turn off automatic updates.
      </p>

      <h2>NSW Department of Primary Industry</h2>
      <p>2 permissions</p>
      <hr />

      <Split>
        <AUheading level={3} size="lg">
          Citrus sweetness certificate
        </AUheading>
        <TextLink href="/todo">Delete permission</TextLink>
      </Split>

      <p>How this information is used:</p>
      <ul>
        <li>we will use this as your certification to comply with importing country requirements</li>
        <li>
          any changes to your NSW Citrus sweetness certificate will be automatically updated in your export account.
        </li>
      </ul>

      <hr />

      <Split>
        <AUheading level={3} size="lg">
          Cold storage operations audits
        </AUheading>
        <TextLink href="/todo">Delete permission</TextLink>
      </Split>

      <p>How this information is used:</p>
      <ul>
        <li>
          we will use your NSW audit details to meet your export compliance obligations - your cold storage arrangments
          will not need to be re-audited by our department
        </li>
        <li>any changes to your NSW audit status will be automatically updated in your export account.</li>
      </ul>

      <hr />

      <h2>South Australian Growers Association</h2>
      <p>1 permission</p>
      <hr />
      <Split>
        <AUheading level={3} size="lg">
          Regional provenance certificate
        </AUheading>
        <TextLink href="/todo">Delete permission</TextLink>
      </Split>

      <p>How this information is used:</p>
      <ul>
        <li>we will use this as your certification to comply with importing country requirements</li>
        <li>
          any changes to your Regional provenance certificate will be automatically updated in your export account.
        </li>
      </ul>

      <hr />

      <ButtonGroup>
        <AUbutton link="/account-preferences/success">Apply and continue</AUbutton>
        <AUbutton as="secondary">Skip</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </Body>
  </WizardLayout>
);

export default Page;
