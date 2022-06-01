import AUbutton from 'components/@gov.au/AUbutton';
import AUheading from 'components/@gov.au/AUheading';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import { ButtonGroup } from 'components/button-group';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { LayoutPage } from 'components/LayoutPage';
import StaticImage, { imageURL } from 'components/StaticImage';
import { HeroBanner } from '@ag.ds-next/hero-banner';
import { Content } from '@ag.ds-next/content';
import { TextLink } from '@ag.ds-next/text';
import Hr from 'components/Hr';
import { Stack } from '@ag.ds-next/box';

const heroImage = imageURL('/homepage-harvest-medium.jpg');

const Home: LayoutPage = () => (
  <>
    <HeroBanner
      title="Get help to grow and manage your export business"
      subTitle="Find digital services, guidance and support to export agricultural products."
      image={<img src={heroImage} alt="hero image" />}
    >
      <ButtonGroup style={{ marginTop: '1em' }}>
        <AUbutton>Create an account</AUbutton>
        <AUbutton as="secondary">Sign in</AUbutton>
      </ButtonGroup>
    </HeroBanner>

    <Content>
      <Stack gap={3}>
        <AUheading size="xl" level="2" paddingTop={1}>
          Benefits of having an account
        </AUheading>

        <AlmostAUCardList>
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

        <Hr />

        <AlmostAUCardList>
          <AlmostAUCard heading={<TextLink href="/homepage/about">About the Export Service</TextLink>} shadow>
            Learn more about how we&apos;re supporting Australian exporters – now and into the future.
          </AlmostAUCard>

          <AlmostAUCard
            heading={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.awe.gov.au/biosecurity-trade/market-access-trade/transforming-export-services"
                >
                  Participate in research
                </TextLink>

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
                <TextLink target="_blank" rel="noopener noreferrer" href="https://haveyoursay.awe.gov.au/">
                  Engage with us
                </TextLink>

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
      </Stack>
    </Content>
  </>
);

Home.getLayout = WrapperLayout;

export default Home;
