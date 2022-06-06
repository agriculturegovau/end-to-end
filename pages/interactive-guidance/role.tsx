import { LayoutPage } from 'components/LayoutPage';
import { useNextServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';

const Page: LayoutPage = () => (
  <>
    <Fieldset legend="What is your role in the export process?" hint="Choose all that apply">
      <ControlGroup block>
        <Checkbox name="export-role">I manage a cattle farm, feedlot or a saleyard</Checkbox>
        <Checkbox name="export-role">I process, prepare or store goods for export</Checkbox>
        <Checkbox name="export-role">I source goods and export them</Checkbox>
      </ControlGroup>
    </Fieldset>

    <ButtonGroup>
      <ButtonLink href={useNextServicePage()}>Continue</ButtonLink>
    </ButtonGroup>
  </>
);

export default Page;
