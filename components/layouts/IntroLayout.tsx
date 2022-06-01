import React from 'react';
import AUheading from '../@gov.au/AUheading';
import LogoDAWE from 'components/LogoDAWE';
import AUbutton from 'components/@gov.au/AUbutton';
import Link from 'next/link';
import styled from '@emotion/styled';

type IntroLayoutProps = {
  superheading?: string;
  heading: string;
  cta?: { label?: string; href: string };
  logo?: React.ReactNode;
};

const App = styled.div``;

const Main = styled.main`
  color: var(--agds-background-body);
  background-color: var(--AU-colordark-background);
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const IntroLayout: React.FC<IntroLayoutProps> = ({ superheading, heading, cta, children, logo }) => {
  return (
    <App className="App">
      <Main id="content">
        <section className="container" style={{ fontSize: '1.2em' }}>
          {logo === undefined ? <LogoDAWE /> : logo}
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
            <AUbutton dark link={cta.href}>
              {cta.label || 'Get started'}
            </AUbutton>
          ) : null}
        </section>
      </Main>
    </App>
  );
};
