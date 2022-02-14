import React from 'react';

const SiteMainNav = () => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .au-main-nav.au-main-nav--dark {
            background-color: #0a1931;
            border-color: #f36c52;
          }

          .au-main-nav.au-main-nav--dark .au-main-nav__menu {
            background-color: #0a1931;
          }

          .au-main-nav.au-main-nav--dark a,
          .au-main-nav.au-main-nav--dark .au-main-nav__toggle {
            color: #9ee8ff;
          }

          .au-main-nav.au-main-nav--dark a::-moz-focus-inner,
          .au-main-nav.au-main-nav--dark .au-main-nav__toggle::-moz-focus-inner {
            border: 0;
          }

          .au-main-nav.au-main-nav--dark a:hover,
          .au-main-nav.au-main-nav--dark .au-main-nav__toggle:hover {
            background-color: #0a1931;
          }

          .au-main-nav.au-main-nav--dark .active a {
            border-color: #0a1931;
          }

          .au-main-nav.au-main-nav--dark .active a:hover {
            border-color: #0a1931;
          }

          .au-main-nav.au-main-nav--dark .au-link-list > li {
            border-color: #89afb8;
          }
    `,
      }}
    />
    <nav className={'au-main-nav au-main-nav--dark'} aria-label="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="main-nav-default" className="au-main-nav__content">
              <div className="au-main-nav__menu">
                <div className="au-main-nav__menu-inner" style={{ height: '52px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default SiteMainNav;
