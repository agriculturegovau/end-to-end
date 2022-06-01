import Head from 'next/head';
import { DefaultLayout } from 'components/layouts/DefaultLayout';
import { LayoutPageProps } from 'components/LayoutPage';
import { OverlayCapture } from 'components/Contents';
import { theme } from '@ag.ds-next/ag-branding';
import { Core } from '@ag.ds-next/core';
import { InternalLink } from 'components/InternalLink';

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
        <meta name="description" content="Supporting Australian agricultural exports" />
      </Head>
      <Core theme={theme} linkComponent={InternalLink}>
        <OverlayCapture>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </OverlayCapture>
      </Core>
    </>
  );
};

export default App;
