import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import AUheading from 'components/@gov.au/AUheading';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';

const Home: NextPage = () => (
  <>
    <div
      className="row"
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(94,158,72,1) 77%, rgba(46,92,29,1) 100%)',
      }}
    >
      <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em' }}>
        <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
          A simpler way to manage export transactions
        </AUheading>

        <p>Access and manage your agricultural export requirements in one place.</p>

        <ButtonGroup style={{ marginTop: '1em' }}>
          <AUbutton>How to get started</AUbutton>
          <AUbutton as="secondary">Sign in</AUbutton>
        </ButtonGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em' }}>
        <AUheading size="xl" level="2" style={{ marginTop: '1rem' }}>
          Benefits of having an account
        </AUheading>
      </div>
    </div>

    <div className="row" style={{ marginTop: 0 }}>
      <AlmostAUCardList>
        <AlmostAUCard title="Establishment details">
          Get a single view of the establishment details you have registered with the department, including staff listed
          in management and control.
        </AlmostAUCard>
        <AlmostAUCard title="Variation requests">
          Save time and effort using pre-filled establishment details when you apply to vary a registration, approved
          arrangement or operations.
        </AlmostAUCard>
        <AlmostAUCard title="Data dashboard">
          Monitor your risk profile and improve regulatory efficiencies. Connect business performance data to your
          account for convenience and access.
        </AlmostAUCard>
        <AlmostAUCard title="Corrective actions">
          Access and manage open corrective action requests (CARs). Get a single view of the CARs history for an
          establishment.
        </AlmostAUCard>
      </AlmostAUCardList>
    </div>

    <hr style={{ margin: '3em 0' }} />

    <div className="row">
      <AlmostAUCardList>
        <AlmostAUCard title={<Link href="javascript:;">About the Export Service</Link>}>
          Deserunt anim non sunt irure do ex nulla sunt. Id exercitation dolore culpa.
        </AlmostAUCard>

        <AlmostAUCard title={<Link href="javascript:;">How to get started</Link>}>
          Deserunt anim non sunt irure do ex nulla sunt. Id exercitation dolore culpa.
        </AlmostAUCard>

        <AlmostAUCard title={<Link href="javascript:;">Contact us</Link>}>
          Deserunt anim non sunt irure do ex nulla sunt. Id exercitation dolore culpa.
        </AlmostAUCard>
      </AlmostAUCardList>
    </div>
  </>
);

export default Home;
