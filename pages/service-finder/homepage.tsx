import AUbutton from 'components/@gov.au/AUbutton';
import AUheading from 'components/@gov.au/AUheading';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import Hr from 'components/Hr';
import { LayoutPage } from 'components/LayoutPage';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { imageURL } from 'components/StaticImage';
import { ButtonGroup } from 'components/button-group';
import { TodoLink } from 'components/Todo';
import { HeroBanner } from '@ag.ds-next/hero-banner';
import { Content } from '@ag.ds-next/content';
import { Box, Stack } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text';

const heroImage = imageURL('/farm-landscape-medium.jpg');

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
        <AUheading size="lg" level={2}>
          Tools
        </AUheading>

        <AlmostAUCardList columns={3}>
          <AlmostAUCard heading={<TextLink href="/service-finder/previous-exports">Help me export</TextLink>} shadow>
            Answer a few quick questions to find export info and services specific to your needs.
          </AlmostAUCard>
          <AlmostAUCard heading={<TodoLink href="/todo">Micor</TodoLink>} shadow>
            Check importing country requirements.
          </AlmostAUCard>
          <AlmostAUCard heading={<TodoLink href="/todo">EXDOC</TodoLink>} shadow>
            Manage export documentation for primary produce.
          </AlmostAUCard>
        </AlmostAUCardList>

        <Hr />

        <AUheading size="lg" level={2}>
          Information for
        </AUheading>
        <AlmostAUCardList columns={3}>
          <AlmostAUCard heading={<TodoLink href="/todo">New exporters</TodoLink>} shadow>
            Follow our step-by-step guide to help you succeed as an agricultural exporter.
          </AlmostAUCard>

          <AlmostAUCard heading={<TodoLink href="/todo">Registered establishments</TodoLink>} shadow>
            How to register your establishment and maintain compliant operations.
          </AlmostAUCard>

          <AlmostAUCard heading={<TodoLink href="/todo">Authorised officers</TodoLink>} shadow>
            Guidelines on policies and processes to follow if you’re an authorised officer.
          </AlmostAUCard>

          <AlmostAUCard heading={<TodoLink href="/todo">Accredited properties</TodoLink>} shadow>
            Accreditation information for farms and packhouses to meet importing country requirements for horticulture.
          </AlmostAUCard>

          <AlmostAUCard heading={<TodoLink href="/todo">Small businesses</TodoLink>} shadow>
            Initiatives and support for small exporting businesses.
          </AlmostAUCard>
        </AlmostAUCardList>
      </Stack>
    </Content>

    <Box css={{ backgroundColor: '#f5f5f5' }}>
      <Content>
        <AUheading size="lg" level={2}>
          Commodity-specific information
        </AUheading>
        <p>Find rules, requirements, guidance and updates by commodity area.</p>

        <AlmostAUCardList columns={4}>
          <AlmostAUCard heading={<TodoLink>Dairy</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Eggs and egg products</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Fish and fish products</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Live animals</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Meats</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Organic and biodynamic</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Plant and plant products</TodoLink>} shadow />
          <AlmostAUCard heading={<TodoLink>Other products</TodoLink>} shadow />
        </AlmostAUCardList>
      </Content>
    </Box>

    <Content>
      <AUheading size="lg" level={2}>
        Resources
      </AUheading>
      <AlmostAUCardList>
        <AlmostAUCard heading={<TodoLink>Certificates, declarations and forms</TodoLink>} shadow>
          Apply for certificates and documents you need to export agricultural products.
        </AlmostAUCard>
        <AlmostAUCard heading={<TodoLink>Fees and charges</TodoLink>} shadow>
          Learn about our fees and charges for agricultural services and documents.
        </AlmostAUCard>
        <AlmostAUCard heading={<TodoLink>Insights and updates</TodoLink>} shadow>
          Get the latest market insights and changes to importing country requirements.
        </AlmostAUCard>
      </AlmostAUCardList>
    </Content>
  </>
);

Home.getLayout = WrapperLayout;

export default Home;
