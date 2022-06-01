import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import DescripionList from 'components/DescriptionList';
import { IntroText } from 'components/IntroText';

const Home: NextPage = () => (
  <WizardLayout
    title="Market eligibility: pressure-treated boonberries - Fantasia"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        label: 'Home',
        href: '/todo',
      },
      { label: 'Market eligibility: pressure-treated boonberries - Fantasia' },
    ]}
  >
    <IntroText>From 8 December 2021, Fantasia will be importing pressure-treated boonberries from Australia.</IntroText>

    <AUheading size="lg" level={2}>
      Importing country requirements
    </AUheading>

    <DescripionList fixedTermWidth>
      <dt>Preconditions for market access</dt>
      <dd>Australian-grown boonberries, pressure-treated and certified by Australian government.</dd>

      <dt>Documentation requirements</dt>
      <dd>Boonberry pressure standard certificate</dd>

      <dt>Other requirements</dt>
      <dd>None</dd>
    </DescripionList>

    <div style={{ marginTop: '3em' }}>
      <AUbutton link="/eligible-new-market/apply">Apply to export</AUbutton>
    </div>
  </WizardLayout>
);

export default Home;
