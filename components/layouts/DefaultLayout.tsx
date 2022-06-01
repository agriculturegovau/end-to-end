import * as React from 'react';
import Main from 'components/layouts/Main';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { Content } from '@ag.ds-next/content';

interface LayoutProps {
  ContentComponent?: React.FC;
}

export const DefaultLayout: React.FC<LayoutProps> = ({ children, ContentComponent = Content }) => (
  <WrapperLayout>
    <Main>
      <ContentComponent>{children}</ContentComponent>
    </Main>
  </WrapperLayout>
);
