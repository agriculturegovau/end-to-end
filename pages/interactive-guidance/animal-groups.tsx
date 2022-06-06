import { LayoutPage } from 'components/LayoutPage';
import { Body } from '@ag.ds-next/body';
import { Card, CardFooter, CardInner, CardLink } from '@ag.ds-next/card';
import { useNextServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';

const Page: LayoutPage = () => (
  <>
    <Fieldset legend="Is the product derived from any of the following animal groups?" hint="Choose all that apply">
      <ControlGroup block>
        <Checkbox name="animal-group">bovine (cows, bison, and others)</Checkbox>
        <Checkbox name="animal-group">ovine (sheep and others)</Checkbox>
        <Checkbox name="animal-group">caprine (goats and others)</Checkbox>
        <Checkbox name="animal-group">porcine (pigs and others)</Checkbox>
        <Checkbox name="animal-group">bubaline (buffalo and others)</Checkbox>
        <Checkbox name="animal-group">camelid (camels, alpacas, llamas and others)</Checkbox>
        <Checkbox name="animal-group">cervid (deer and others)</Checkbox>
        <Checkbox name="animal-group">soliped (horses, donkeys, and others)</Checkbox>
        <Checkbox name="animal-group">
          poultry (chickens, ducks, geese, fowl, turkeys, pheasants, quail, and others)
        </Checkbox>
        <Checkbox name="animal-group">ratite (emus, ostriches, and others)</Checkbox>
        <Checkbox name="animal-group">rabbits,</Checkbox>
        <Checkbox name="animal-group">wild caught animals.</Checkbox>
        <Checkbox name="animal-group">unsure</Checkbox>
      </ControlGroup>
    </Fieldset>

    <ButtonGroup>
      <ButtonLink href={useNextServicePage()}>Continue</ButtonLink>
    </ButtonGroup>
  </>
);

export default Page;
