import React from 'react';
import BackBreadcrumb from '../BackBreadcrumb';
import AUheading from '../@gov.au/AUheading';
import { Navigator, ProgressPages } from '../wizard/navigator';
import LogoDAWE from 'components/LogoDAWE';
import AUbutton from 'components/@gov.au/AUbutton';
import Link from 'next/link';
import styled from '@emotion/styled';

type IntroLayoutProps = {
  superheading?: string;
  heading: string;
  cta?: { label?: string; href: string };
};

const App = styled.div``;

const Main = styled.main`
  color: var(--AU-color-background);
  background-color: var(--AU-colordark-background);
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const IntroLayout: React.FC<IntroLayoutProps> = ({ superheading, heading, cta, children }) => {
  return (
    <App className="App">
      <Main id="content">
        <section className="container" style={{ fontSize: '1.2em' }}>
          <LogoDAWE />
          {superheading ? (
            <AUheading size="lg" level={1}>
              {superheading}
            </AUheading>
          ) : null}
          <AUheading size="xxxl" level={2}>
            {heading}
          </AUheading>
          <div style={{ fontSize: '1.2em', maxWidth: '36em' }}>{children}</div>

          {cta ? (
            <Link passHref href={cta.href}>
              <AUbutton dark link>
                {cta.label || 'Get started'}
              </AUbutton>
            </Link>
          ) : null}
        </section>
      </Main>
    </App>
  );
};
