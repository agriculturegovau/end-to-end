import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcallout from 'components/@gov.au/AUcallout';
import Todo from 'components/Todo';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import Hr from 'components/Hr';

const Home: NextPage = () => (
  <WizardLayout
    title="Apply to export to Fantasia"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      { text: 'Apply to export to Fantasia' },
    ]}
  >
    <AUheading size="lg" level={2}>
      Tools
    </AUheading>
    <AlmostAUCardList columns={3}>
      <AlmostAUCard heading={<Link href="/todo">Help me export</Link>}>
        Answer a few quick questions to find export info and services specific to your needs.
      </AlmostAUCard>
      <AlmostAUCard heading={<Link href="/todo">Micor</Link>}>Check importing country requirements.</AlmostAUCard>
      <AlmostAUCard heading={<Link href="/todo">EXDOC</Link>}>
        Manage export documentation for primary produce.
      </AlmostAUCard>
    </AlmostAUCardList>

    <Hr />

    <AUheading size="lg" level={2}>
      Information for
    </AUheading>
    <AlmostAUCardList columns={3}>
      <AlmostAUCard heading={<Link href="/todo">New exporters</Link>}>
        Follow our step-by-step guide to help you succeed as an agricultural exporter.
      </AlmostAUCard>

      <AlmostAUCard heading={<Link href="/todo">Registered establishments</Link>}>
        How to register your establishment and maintain compliant operations.
      </AlmostAUCard>

      <AlmostAUCard heading={<Link href="/todo">Authorised officers</Link>}>
        Guidelines on policies and processes to follow if you’re an authorised officer.
      </AlmostAUCard>

      <AlmostAUCard heading={<Link href="/todo">Accredited properties</Link>}>
        Accreditation information for farms and packhouses to meet importing country requirements for horticulture.
      </AlmostAUCard>

      <AlmostAUCard heading={<Link href="/todo">Small businesses</Link>}>
        Initiatives and support for small exporting businesses.
      </AlmostAUCard>
    </AlmostAUCardList>
  </WizardLayout>
);

export default Home;
