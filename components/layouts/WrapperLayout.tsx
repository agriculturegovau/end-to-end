import * as React from 'react';
import SiteHeader from 'components/SiteHeader';
import SiteMainNav from 'components/SiteMainNav';
import SiteFooter from 'components/SiteFooter';

const WrapperLayout: React.FC = ({ children }) => (
  <div className="App">
    <SiteHeader />
    <SiteMainNav />
    {children}
    <SiteFooter />
  </div>
);

export default WrapperLayout;
