import * as React from 'react';
import SiteHeader from 'components/SiteHeader';
import SiteMainNav from 'components/SiteMainNav';
import SiteFooter from 'components/SiteFooter';
import { App } from './App';

const WrapperLayout: React.FC = ({ children }) => (
  <App>
    <SiteHeader />
    <SiteMainNav />
    {children}
    <SiteFooter />
  </App>
);

export default WrapperLayout;
