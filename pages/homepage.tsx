import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import AUheading from 'components/@gov.au/AUheading';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { LayoutPage } from 'components/LayoutPage';
import { Main } from 'components/layouts/DefaultLayout';
import Image from 'next/image';

const Home: LayoutPage = () => (
  <main id="content" className="au-body">
    <div
      style={{
        ...{ background: 'rgb(245,245,245)' },
        ...{
          background:
            'linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 100%), url(/farm-landscape-medium.jpg)',
        },
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em', marginTop: '3em' }}>
            <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
              A simpler way to manage export transactions
            </AUheading>

            {/*
            <Image src="/farm-landscape-large.jpg" width={1000} height={800} alt="what" />
*/}

            <p>Access and manage your agricultural export requirements in one place.</p>

            <ButtonGroup style={{ marginTop: '1em' }}>
              <AUbutton>How to get started</AUbutton>
              <AUbutton as="secondary">Sign in</AUbutton>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>

    <section className="container">
      <div className="row">
        <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em' }}>
          <AUheading size="xl" level="2" style={{ marginTop: '1rem' }}>
            Benefits of having an account
          </AUheading>
        </div>
      </div>

      <div className="row" style={{ marginTop: 0 }}>
        <AlmostAUCardList>
          <AlmostAUCard
            heading={
              <>
                <Image src="/portrait-icon.png" width={60} height={60} alt="portrait icon" />
                <br />
                Establishment details
              </>
            }
            style={{ border: '0', boxShadow: 'none' }}
          >
            Get a single view of the establishment details you have registered with the department, including staff
            listed in management and control.
          </AlmostAUCard>
          <AlmostAUCard
            heading={
              <>
                <Image src="/portrait-icon.png" width={60} height={60} alt="portrait icon" />
                <br />
                Variation requests
              </>
            }
            style={{ border: '0', boxShadow: 'none' }}
          >
            Save time and effort using pre-filled establishment details when you apply to vary a registration, approved
            arrangement or operations.
          </AlmostAUCard>
          <AlmostAUCard
            heading={
              <>
                <Image src="/portrait-icon.png" width={60} height={60} alt="portrait icon" />
                <br />
                Data dashboard
              </>
            }
            style={{ border: '0', boxShadow: 'none' }}
          >
            Monitor your risk profile and improve regulatory efficiencies. Connect business performance data to your
            account for convenience and access.
          </AlmostAUCard>
          <AlmostAUCard
            heading={
              <>
                <Image src="/portrait-icon.png" width={60} height={60} alt="portrait icon" />
                <br />
                Corrective actions
              </>
            }
            style={{ border: '0', boxShadow: 'none' }}
          >
            Access and manage open corrective action requests (CARs). Get a single view of the CARs history for an
            establishment.
          </AlmostAUCard>
        </AlmostAUCardList>
      </div>

      <hr style={{ margin: '3em 0' }} />

      <div className="row">
        <AlmostAUCardList>
          <AlmostAUCard heading={<Link href="javascript:;">About the Export Service</Link>}>
            Deserunt anim non sunt irure do ex nulla sunt. Id exercitation dolore culpa.
          </AlmostAUCard>

          <AlmostAUCard heading={<Link href="javascript:;">How to get started</Link>}>
            Deserunt anim non sunt irure do ex nulla sunt. Id exercitation dolore culpa.
          </AlmostAUCard>

          <AlmostAUCard heading={<Link href="javascript:;">Contact us</Link>}>
            Deserunt anim non sunt irure do ex nulla sunt. Id exercitation dolore culpa.
          </AlmostAUCard>
        </AlmostAUCardList>
      </div>
    </section>
  </main>
);

Home.getLayout = WrapperLayout;

export default Home;
