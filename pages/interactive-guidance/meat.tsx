import { LayoutPage } from 'components/LayoutPage';
import { useNextServicePage } from 'components/Contents';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';

const Page: LayoutPage = () => (
  <>
    <Fieldset legend="What is the product for?" hint="Choose one">
      <ControlGroup block>
        <Radio name="meat-kind">Human food</Radio>
        <Radio name="meat-kind">Pet food</Radio>
        <Radio name="meat-kind">Pharmaceutical use</Radio>
        <Radio name="meat-kind">Other</Radio>
      </ControlGroup>
    </Fieldset>

    <ButtonGroup>
      <ButtonLink href={useNextServicePage()}>Continue</ButtonLink>
    </ButtonGroup>
  </>
);

export default Page;
