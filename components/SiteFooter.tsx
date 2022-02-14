import React, { useMemo } from 'react';
import Link from 'next/link';

const SiteFooter = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
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
      <footer className="au-body au-body--dark au-footer au-footer--dark" role="contentinfo">
        <div className="container">
          <nav className="au-footer__navigation row" aria-label="footer">
            <div className="col-sm-12">
              <ul className="au-link-list au-link-list--inline">
                <li style={{ marginRight: '1em' }}>
                  <a href={'https://www.awe.gov.au/about'} rel={'external'}>
                    About
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <a href={'https://www.awe.gov.au/about/commitment/accessibility'} rel={'external'}>
                    Accessibility
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <a href={'https://www.awe.gov.au/disclaimer'} rel={'external'}>
                    Disclaimer
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <Link href={'/todo'}>Privacy</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-sm-12">
              <div className="au-footer__end">
                <p style={{ marginBottom: '1em' }}>
                  We acknowledge the traditional owners of country throughout Australia and recognise their continuing
                  connection to land, waters and culture. We pay our respects to their Elders past, present and
                  emerging.
                </p>
                <p>© Commonwealth of Australia.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;
