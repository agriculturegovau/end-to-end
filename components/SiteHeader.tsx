import { Header } from '@ag.ds-next/header';
import { Logo } from '@ag.ds-next/ag-branding';

const SiteHeader = () => (
  <Header
    heading="Export Service"
    subline="Supporting Australian agricultural exports"
    logo={<Logo />}
    variant="dark"
    badgeLabel="beta"
  />
);

export default SiteHeader;
