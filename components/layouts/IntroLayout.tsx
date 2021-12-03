import React from 'react';
import BackBreadcrumb from '../BackBreadcrumb';
import AUheading from '../@gov.au/AUheading';
import { Navigator, ProgressPages } from '../wizard/navigator';
import LogoDAWE from 'components/LogoDAWE';
import AUbutton from 'components/@gov.au/AUbutton';
import Link from 'next/link';

type IntroLayoutProps = {
  superheading?: string;
  heading: string;
  cta?: { label: string; href: string };
};

export const IntroLayout: React.FC<IntroLayoutProps> = ({ superheading, heading, cta, children }) => {
  return (
    <div className="App">
      <main id="content">
        <section className="container" style={{ fontSize: '1.2em' }}>
          <LogoDAWE />
          {superheading ? (
            <AUheading size="xl" level={1}>
              {superheading}
            </AUheading>
          ) : null}
          <AUheading size="xxxl" level={2}>
            {heading}
          </AUheading>
          <div style={{ fontSize: '1.2em' }}>{children}</div>

          {cta ? <Link href={cta.href}>{cta.label}</Link> : null}
        </section>
      </main>
    </div>
  );
};
