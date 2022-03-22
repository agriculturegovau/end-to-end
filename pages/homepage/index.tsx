import AUbutton from 'components/@gov.au/AUbutton';
import Link from 'next/link';
import AUheading from 'components/@gov.au/AUheading';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import { ButtonGroup } from 'components/button-group';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { LayoutPage } from 'components/LayoutPage';
import StaticImage, { imageURL } from 'components/StaticImage';

const heroImage = imageURL('/homepage-harvest-medium.jpg');

const Home: LayoutPage = () => (
  <main id="content" className="au-body">
    <div
      style={{
        ...{ background: 'rgb(245,245,245)' },
        ...{
          background: `linear-gradient(90deg, rgba(245, 245, 245,1) 0%, rgba(245, 245, 245,1) 50%, rgba(245, 245, 245, 0.75) calc(50vw + 100px), rgba(245,245,245,0) 100%), url(${heroImage})`,
        },
        backgroundPositionX: 'right',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12" style={{ marginBottom: '3em', marginTop: '3em' }}>
            <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
              Manage export transactions securely online
            </AUheading>

            <p>Access and manage your agricultural export requirements in one place</p>

            <ButtonGroup style={{ marginTop: '1em' }}>
              <Link passHref href="https://agriculture-exports.awe.gov.au/account/help/">
                <AUbutton link>Create an account</AUbutton>
              </Link>
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
        <AlmostAUCardList className="col-xs-12">
          <AlmostAUCard
            heading={
              <>
                <StaticImage src="/homepage-establishment.png" width={60} height={60} alt="Establishment icon" />
                <br />
                Establishment details
              </>
            }
            shadow={false}
          >
            Get a single view of the establishment details you have registered with the department, including staff
            listed in management and control.
          </AlmostAUCard>
          <AlmostAUCard
            heading={
              <>
                <StaticImage
                  src="/homepage-document-question.png"
                  width={60}
                  height={60}
                  alt="document question icon"
                />
                <br />
                Variation requests
              </>
            }
            shadow={false}
          >
            Save time and effort using pre-filled establishment details when you apply to vary a registration, approved
            arrangement or operations.
          </AlmostAUCard>
          <AlmostAUCard
            heading={
              <>
                <StaticImage src="/homepage-data.png" width={60} height={60} alt="data icon" />
                <br />
                Data transparency
              </>
            }
            shadow={false}
          >
            One place for all your performance data. Experience more efficient regulation processes and monitor your key
            compliance risks.
          </AlmostAUCard>
          <AlmostAUCard
            heading={
              <>
                <StaticImage src="/homepage-document-tick.png" width={60} height={60} alt="document tick icon" />
                <br />
                Corrective actions
              </>
            }
            shadow={false}
          >
            View and respond to open corrective actions requests (CARs). Access closed CARs, and track your activity
            history securely online.
          </AlmostAUCard>
        </AlmostAUCardList>
      </div>

      <hr style={{ margin: '3em 0' }} />

      <div className="row">
        <AlmostAUCardList className="col-xs-12">
          <AlmostAUCard heading={<Link href="/homepage/about">About the Export Service</Link>} shadow>
            Learn more about how we&apos;re supporting Australian exporters – now and into the future.
          </AlmostAUCard>

          <AlmostAUCard
            heading={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.awe.gov.au/biosecurity-trade/market-access-trade/transforming-export-services"
                >
                  Participate in research
                </a>

                <div>
                  <StaticImage src="/homepage-external-link.png" width={16} height={16} alt="external link icon" />
                </div>
              </div>
            }
            shadow
          >
            We run research activities with exporters to help us expand and improve this service to meet your needs.
          </AlmostAUCard>

          <AlmostAUCard
            heading={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a target="_blank" rel="noopener noreferrer" href="https://haveyoursay.awe.gov.au/">
                  Engage with us
                </a>

                <div>
                  <StaticImage src="/homepage-external-link.png" width={16} height={16} alt="external link icon" />
                </div>
              </div>
            }
            shadow
          >
            We want to hear from you. Help shape our policies and decisions. Share your ideas through our consultation
            forums.
          </AlmostAUCard>
        </AlmostAUCardList>
      </div>
    </section>
  </main>
);

Home.getLayout = WrapperLayout;

export default Home;
