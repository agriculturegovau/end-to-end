import * as React from 'react';
import AUskipLink from 'components/@gov.au/AUskipLink';
import Link from 'next/link';
import LogoDAWE from './LogoDAWE';

const SiteHeader = () => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .au-header.au-header--dark {
          background-color: #162845;
        }
    `,
      }}
    />
    <AUskipLink links={[{ link: '#content', text: 'Skip to content' }]} />
    <header className="au-header au-header--dark" role="banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link href="/">
              <a className="au-header__brand">
                <LogoDAWE />
                <div className="au-header__text">
                  <h1 className="au-header__heading">
                    Export service
                    {/*<span className="header__badge">beta</span> */}
                  </h1>
                  <div className="au-header__subline">Supporting Australian agricultural exports</div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default SiteHeader;
