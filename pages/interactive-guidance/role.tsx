import { LayoutPage } from 'components/LayoutPage';
import { H1 } from '@ag.ds-next/heading';
import { useNextServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';

const Page: LayoutPage = () => (
  <>
    <H1>What is your role in the export process?</H1>

    <ControlGroup block>
      <Checkbox name="export-role">I manage a cattle farm, feedlot or a saleyard</Checkbox>
      <Checkbox name="export-role">I process, prepare or store goods for export</Checkbox>
      <Checkbox name="export-role">I source goods and export them</Checkbox>
    </ControlGroup>

    <ButtonGroup>
      <ButtonLink href={useNextServicePage()}>Continue</ButtonLink>
    </ButtonGroup>
  </>
);

export default Page;
