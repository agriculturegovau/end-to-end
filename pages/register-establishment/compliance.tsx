import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import DescripionList from 'components/DescriptionList';
import Todo from 'components/Todo';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import TextInput from 'components/TextInput';
import AUfieldset from 'components/@gov.au/AUfieldset';

const Step = styled.div`
  border: 1px solid black;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="Compliance"
    navigator={false}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Register an establishment</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      To add new people to management control, we need to assess and approve them first.
    </p>

    <p>
      All people who manage or control exporting agricultural goods from Australia need to be of a trustworthy nature,
      and demonstrate the personal integrity we need.
    </p>
    <p>
      To determine this, we do a <Link href="/todo">Fit and Proper Person test</Link> on the proposed person. This form
      will ask the information the department needs in order to perform this test.
    </p>
    <p>
      This is similar to, but less involved than a security clearance vetting process. We’re looking for honesty and
      transarency up-front.
    </p>

    <AUheading level={2} size="xl">
      People in this application
    </AUheading>
    <ul>
      <li>John Smith</li>
    </ul>

    <Hr />

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Do you or any of the people above have any outstanding charges?
      </AUheading>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="charges" id="charges_yes" label="Yes" block />
        <AUcheckbox type="radio" name="charges" id="charges_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Do you or any of the people above have any outstanding charges? Do you or any of the people above, alone or
        jointly with another person, owe the Commonwealth for:
      </AUheading>
      <ul>
        <li>a fee for service performed at a registered establishment</li>
        <li>a charge or levy</li>
        <li>a penalty for failure to pay a charge or levy?</li>
      </ul>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="debt" id="debt_yes" label="Yes" block />
        <AUcheckbox type="radio" name="debt" id="debt_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Have you or any of the people above, alone or jointly with another person, made a false or misleading statement
        in any application or notice under the Export Control Act 2020 or under Regulations, Rules or Orders made under
        the Export Control Act 2020 or the Export Control Act 1982?
      </AUheading>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="lied" id="lied_yes" label="Yes" block />
        <AUcheckbox type="radio" name="lied" id="lied_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Have you or any of the people above, alone or jointly with another person:
      </AUheading>
      <ul>
        <li>been refused a licence, permit or approval to export prescribed goods</li>
        <li>had a licence to export prescribed goods suspended, revoked or cancelled?</li>
      </ul>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="refused" id="refused_yes" label="Yes" block />
        <AUcheckbox type="radio" name="refused" id="refused_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Have you or any of the people above failed to comply with any other notice, instruction, condition or
        restriction under the Export Control Act 2020 or under Regulations or Rules made under that Act?
      </AUheading>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="failed" id="failed_yes" label="Yes" block />
        <AUcheckbox type="radio" name="failed" id="failed_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Do you or any of the people above have an associate who has been convicted of any offence against any law of the
        Commonwealth or a state or territory?
      </AUheading>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="convicted" id="convicted_yes" label="Yes" block />
        <AUcheckbox type="radio" name="convicted" id="convicted_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Do you or any of the people above have an associate who, alone or jointly with another person, owe the
        Commonwealth for:
      </AUheading>
      <ul>
        <li>a fee for service performed at a registered establishment</li>
        <li>a charge or levy</li>
        <li>a penalty for failure to pay a charge or levy?</li>
      </ul>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="owe" id="owe_yes" label="Yes" block />
        <AUcheckbox type="radio" name="owe" id="owe_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <AUfieldset style={{ marginTop: '2em' }}>
      <AUheading size="sm" level={3}>
        Do you or any of the people above have <Link href="/todo">an associate</Link> who, alone or jointly with another
        person:
      </AUheading>
      <ul>
        <li>
          has made a false or misleading statement in any application or notice under the Export Control Act 2020 or
          under Regulations or Rules made under that Act
        </li>
        <li>
          has made a false or misleading statement in any application or notice under the Export Control Act 1982 or
          under Regulations or Orders made under that Act
        </li>
        <li>has been refused a licence, permit or approval to export prescribed goods</li>
        <li>
          has been granted a licence, permit or approval to export prescribed goods that has been revoked, suspended or
          cancelled
        </li>
        <li>
          has failed to comply with any direction under the Export Control Act 2020 or under Regulations or Rules made
          under that Act?
        </li>
      </ul>
      <AUformGroup style={{ marginTop: '1em' }}>
        <AUcheckbox type="radio" name="act" id="act_yes" label="Yes" block />
        <AUcheckbox type="radio" name="act" id="act_no" label="No" block />
      </AUformGroup>
    </AUfieldset>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/register-establishment/confirm">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Save and continue later</AUbutton>
        <AUbutton as="tertiary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Home;
