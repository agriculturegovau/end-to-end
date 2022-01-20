import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import DescripionList from 'components/DescriptionList';
import styled from '@emotion/styled';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { Navigator, registerEstablishmentPages } from 'components/wizard/navigator';

const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Confirm"
    navigator={<Navigator pages={registerEstablishmentPages} progress={4} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Register an establishment</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.{' '}
    </p>

    <Split>
      <AUheading level={2} size="lg">
        Establishment details
      </AUheading>
      <Link href="/todo">Change</Link>
    </Split>
    <DescripionList>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
    </DescripionList>

    <Split style={{ marginTop: '3em' }}>
      <AUheading level={2} size="lg">
        Commodities
      </AUheading>
      <Link href="/todo">Change</Link>
    </Split>
    <DescripionList>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
    </DescripionList>

    <Split style={{ marginTop: '3em' }}>
      <AUheading level={2} size="lg">
        Add persons
      </AUheading>
      <Link href="/todo">Change</Link>
    </Split>
    <DescripionList>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
    </DescripionList>

    <Split style={{ marginTop: '3em' }}>
      <AUheading level={2} size="lg">
        Compliance
      </AUheading>
      <Link href="/todo">Change</Link>
    </Split>
    <DescripionList>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
      <dt>Lorem ipsum</dt>
      <dd>Lorem ipsum</dd>
    </DescripionList>

    <AUheading level={2} size="lg">
      Declaration
    </AUheading>
    <p>I declare that:</p>
    <ul>
      <li>I am an authorised person in management and control of the business.</li>
      <li>I have conducted appropriate due diligence to compile the information set out in this application.</li>
      <li>The information I have provided on behalf of the applicant is true and accurate.</li>
      <li>
        I have read and understood the privacy notice and consent to the collection, use and disclosure of my personal
        information as outlined in the privacy notice.
      </li>
      <li>I have read and understood the terms and conditions.</li>
      <li>I am authorised to agree to the terms and conditions on behalf of the business.</li>
      <li></li>
    </ul>

    <div style={{ marginTop: '1em' }}>
      <AUcheckbox
        name="consent"
        id="consent"
        label="I agree, and consent to the collection, use and disclosure of my information to the relevant authorities in the importing country as outlined in the privacy notice."
        block
      />
    </div>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/register-establishment/establishment-added">
          <AUbutton link>Register establishment</AUbutton>
        </Link>
        <AUbutton as="secondary">Save and continue later</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
