import React from 'react';
import AUbutton from 'components/@gov.au/AUbutton';
import Link from 'next/link';
import AUheading from 'components/@gov.au/AUheading';
import AlmostAUCard, { AlmostAUCardList } from 'components/@gov.au/AlmostAUCard';
import Hr from 'components/Hr';
import { LayoutPage } from 'components/LayoutPage';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { imageURL } from 'components/StaticImage';
import { ButtonGroup } from 'components/button-group';
import { TodoLink } from 'components/Todo';

const heroImage = imageURL('/farm-landscape-medium.jpg');

const Home: LayoutPage = () => (
  <main id="content" className="au-body">
    <div
      style={{
        ...{ background: 'rgb(245,245,245)' },
        ...{
          background: `linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 100%), url(${heroImage})`,
        },
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="container">
        <AUheading size="xxl" level="1" style={{ marginTop: '1rem' }}>
          Get help to grow and manage your export business
        </AUheading>
        <p>Find digital services, guidance and support to export agricultural products.</p>

        <ButtonGroup style={{ marginTop: '1em' }}>
          <AUbutton>Create an account</AUbutton>
          <AUbutton as="secondary">Sign in</AUbutton>
        </ButtonGroup>
      </section>
    </div>

    <section className="container">
      <AUheading size="lg" level={2}>
        Tools
      </AUheading>
      <AlmostAUCardList columns={3}>
        <AlmostAUCard heading={<TodoLink href="/todo">Help me export</TodoLink>} shadow>
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
        <AlmostAUCard heading={<Link href="/discovery/guide">New exporters</Link>} shadow>
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
    </section>

    <div style={{ backgroundColor: '#f5f5f5' }}>
      <section className="container">
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
      </section>
    </div>

    <section className="container">
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
    </section>
  </main>
);

Home.getLayout = WrapperLayout;

export default Home;
