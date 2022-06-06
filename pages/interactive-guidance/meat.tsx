import { LayoutPage } from 'components/LayoutPage';
import { H1 } from '@ag.ds-next/heading';
import { useNextServicePage } from 'components/Contents';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';

const Page: LayoutPage = () => (
  <>
    <H1>What is the product for?</H1>

    <ControlGroup block>
      <Radio name="meat-kind">Human food</Radio>
      <Radio name="meat-kind">Pet food</Radio>
      <Radio name="meat-kind">Pharmaceutical use</Radio>
      <Radio name="meat-kind">Other</Radio>
    </ControlGroup>

    <ButtonGroup>
      <ButtonLink href={useNextServicePage()}>Continue</ButtonLink>
    </ButtonGroup>
  </>
);

export default Page;
