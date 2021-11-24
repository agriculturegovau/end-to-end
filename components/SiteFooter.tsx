import React, { useMemo } from 'react'
import Link from 'next/link'

const SiteFooter = () => {
  const year = useMemo(() => new Date().getFullYear(), [])
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
      <footer
        className="au-body au-body--dark au-footer au-footer--dark"
        role="contentinfo"
      >
        <div className="container">
          <nav className="au-footer__navigation row" aria-label="footer">
            <div className="col-sm-12">
              <ul className="au-link-list au-link-list--inline">
                <li style={{ marginRight: '1em' }}>
                  <a
                    href={'https://www.awe.gov.au/about/contact'}
                    rel={'external'}
                  >
                    Contact us
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <a
                    href={
                      'https://www.awe.gov.au/about/commitment/accessibility'
                    }
                    rel={'external'}
                  >
                    Accessibility
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <a
                    href={'https://www.awe.gov.au/disclaimer'}
                    rel={'external'}
                  >
                    Disclaimer
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <a href={'https://www.awe.gov.au/copyright'} rel={'external'}>
                    Copyright
                  </a>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <Link href={'/privacy-notice'}>Privacy</Link>
                </li>
                <li style={{ marginRight: '1em' }}>
                  <Link href={'/terms-and-conditions'}>
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-sm-12">
              <div className="au-footer__end">
                <p style={{ marginBottom: '1em' }}>
                  &copy; {year} Department of Agriculture, Water and the
                  Environment
                </p>
                <p>
                  We acknowledge the traditional owners of country throughout
                  Australia and recognise their continuing connection to land,
                  waters and culture. We pay our respects to their Elders past,
                  present and emerging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
