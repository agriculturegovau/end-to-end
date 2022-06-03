import * as React from 'react';
import Main from 'components/layouts/Main';
import WrapperLayout from 'components/layouts/WrapperLayout';
import { ColumnContent } from 'components/ColumnContent';
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

export const ColumnLayout: React.FC = (props) => <DefaultLayout {...props} ContentComponent={ColumnContent} />;

/*
export const ColumnLayoutx: (navigator?: React.ReactNode) => React.FC = (navigator) => (props) =>
  <DefaultLayout {...props} ContentComponent={(props) => <ColumnContent navigator={navigator} {...props} />} />;
*/

export const EmptyLayout: React.FC = ({ children }) => <>{children}</>;
