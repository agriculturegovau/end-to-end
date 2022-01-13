import '../styles/styles.scss';
import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from 'components/layouts/DefaultLayout';
import React, { useEffect, useState } from 'react';
import { LayoutPageProps } from 'components/LayoutPage';
import styled from '@emotion/styled';

const references = {
  ['eligible-new-market']: [
    'push-notification',
    'email-inbox',
    'sign-in',
    'introduction',
    'apply',
    'servicensw-login',
    'servicensw-agree',
    'confirm',
    'success',
  ],
  ['service-finder']: ['categories', 'sign-in', 'where', 'suggested'],
  ['book-an-inspection']: ['sign-in', 'select-date', 'booked'],
  ['changed-market-requirements']: ['push-notification', 'email-inbox', 'sign-in', 'upload-document', 'submitted'],
  ['make-payment']: ['push-notification', 'email-inbox', 'sign-in', 'payment-summary', 'paypal', 'paypal-pay', 'paid'],
};

const Details = styled.details`
  & + & {
    margin-top: 2em;
  }

  & summary {
    cursor: pointer;
  }
`;

const References: React.FC<{ title: string; root: string; pages: string[] }> = ({ title, root, pages }) => (
  <Details open>
    <summary>{title}</summary>
    <ul>
      <li>
        <Link href={`/${root}`}>index</Link>
      </li>
      {pages.map((page) => (
        <li key={page}>
          <Link href={`/${root}/${page}`}>{page}</Link>
        </li>
      ))}
    </ul>
  </Details>
);

const Overlay = styled.div`
  background-color: var(--AU-color-background);
  background-color: #e8eaec;
  padding: 2em;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20em;
  box-shadow: -4px 3px 10px #00000038;
  z-index: 3;
  border: 2px dashed #f31dc5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  //text-align: right;
  //border: 4px dashed #e46fca;
`;

const OverlayCapture: React.FC = ({ children }) => {
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const el = window;

    const overlayListener = (e: KeyboardEvent) => {
      if (e.code !== 'Period') {
        return;
      }

      setOverlay(!overlay);
    };

    el.addEventListener('keydown', overlayListener);
    return () => {
      el.removeEventListener('keydown', overlayListener);
    };
  });

  return (
    <>
      {overlay ? (
        <Overlay>
          <code style={{ display: 'block' }}>
            e2e tools
            <hr />
            <References title="Service finder" root="service-finder" pages={references['service-finder']} />
            <References
              title="Eligible for new market"
              root="eligible-new-market"
              pages={references['eligible-new-market']}
            />
            <References title="Book an inspection" root="book-an-inspection" pages={references['book-an-inspection']} />
            <References
              title="Changed market requirements"
              root="changed-market-requirements"
              pages={references['changed-market-requirements']}
            />
            <References title="Make payment" root="make-payment" pages={references['make-payment']} />
          </code>
          <span
            style={{
              cursor: 'pointer',
              fontSize: '4em',
              marginTop: 'auto',
              paddingTop: '1rem',
              alignSelf: 'flex-end',
            }}
            onClick={(e) => {
              setOverlay(false);
            }}
          >
            👋
          </span>
        </Overlay>
      ) : null}
      {children}
    </>
  );
};

const App = ({ Component, pageProps }: LayoutPageProps) => {
  const Layout = Component.getLayout ?? DefaultLayout;

  const title = 'Department of Agriculture, Water and the Environment | Register non-prescribed goods';
  const url = 'https://agriculture-exports.awe.gov.au/exportlistings';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <OverlayCapture>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OverlayCapture>
    </>
  );
};

// IMPORTANT - This code disables Next's Automatic Static Optimization. Don't delete it.
App.getInitialProps = async () => {
  return {};
};

export default App;
