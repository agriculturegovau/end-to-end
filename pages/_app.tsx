import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import DefaultLayout from 'components/layouts/DefaultLayout';
import React, { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type PageLayout = NextPage & {
  getLayout?: React.FC;
};

type AppLayoutProps = AppProps & {
  Component: PageLayout;
};

const App = ({ Component, pageProps }: AppLayoutProps) => {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

// IMPORTANT - This code disables Next's Automatic Static Optimization. Don't delete it.
App.getInitialProps = async () => {
  return {};
};

export default App;
