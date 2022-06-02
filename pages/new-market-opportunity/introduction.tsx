import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import DescripionList from 'components/DescriptionList';

const Page: NextPage = () => (
  <WizardLayout
    title="Market opportunity: Export navel oranges to Canada and Malaysia"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        label: 'Home',
        href: '/todo',
      },
      { label: 'Market opportunity: Export navel oranges to Canada and Malaysia' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      From 8 December 2021, Canada and Malaysia will be importing navel oranges from Australia.
    </p>

    <AUheading level={2} size="lg">
      Requirements to export to Canada
    </AUheading>
    <DescripionList>
      <dt>Preconditions for market access</dt>
      <dd>Australian-grown navel oranges, cold treated and certified by Australian government.</dd>
      <dt>Required documents</dt>
      <dd>
        Cold treatment certificate
        <br />
        Endorsement 3358
      </dd>
    </DescripionList>

    <AUheading level={2} size="lg">
      Requirements to export to Malaysia
    </AUheading>
    <DescripionList>
      <dt>Preconditions for market access</dt>
      <dd>Australian-grown navel oranges, cold treated and certified by Australian government.</dd>
      <dt>Required documents</dt>
      <dd>Cold treatment certificate</dd>
    </DescripionList>

    <AUheading level={2} size="lg">
      Which new markets would you like to apply for?
    </AUheading>
    <p style={{ marginBottom: '2em' }}>We’ll check whether you meet the requirements in the next step.</p>
    <AUcheckbox name="new_markets" id="new_markets1" label="Export navel oranges to Canada" block />
    <AUcheckbox name="new_markets" id="new_markets2" label="Export navel oranges to Malaysia" block />
    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <AUbutton link="/new-market-opportunity/apply">Apply to export</AUbutton>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
