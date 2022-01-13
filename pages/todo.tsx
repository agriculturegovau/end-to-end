import { IntroLayout } from 'components/layouts/IntroLayout';
import React from 'react';
import { LayoutPage } from 'components/LayoutPage';
import { ButtonGroup } from 'components/button-group';
import Link from 'next/link';
import AUbutton from 'components/@gov.au/AUbutton';
import { useRouter } from 'next/router';

const Page: LayoutPage = () => {
  const router = useRouter();

  return (
    <IntroLayout heading="Oops! 🛠">
      <p>We&apos;re still working on that</p>
      <ButtonGroup style={{ marginTop: '2em' }}>
        <AUbutton
          dark
          link
          as="tertiary"
          onClick={() => {
            router.back();
          }}
        >
          ← Back
        </AUbutton>
        <Link passHref href="/">
          <AUbutton dark link>
            Start over again
          </AUbutton>
        </Link>
      </ButtonGroup>
    </IntroLayout>
  );
};

const Layout: React.FC = ({ children }) => <>{children}</>;

Page.getLayout = Layout;

export default Page;
