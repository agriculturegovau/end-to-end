import '../styles/styles.scss';
import Head from 'next/head';
import DefaultLayout from 'components/layouts/DefaultLayout';
import React from 'react';
import { LayoutPageProps } from 'components/LayoutPage';
import { OverlayCapture } from 'components/Contents';

const App = ({ Component, pageProps }: LayoutPageProps) => {
  const Layout = Component.getLayout ?? DefaultLayout;

  const title = 'Department of Agriculture, Water and the Environment | End-to-end prototype';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
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
