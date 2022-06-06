import { LayoutPage } from 'components/LayoutPage';
import { H1 } from '@ag.ds-next/heading';
import { useNextServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';

const Page: LayoutPage = () => (
  <>
    <H1>Is the product derived from any of the following animal groups?</H1>

    <Fieldset legend="The product is:" hint="Choose all that apply">
      <ControlGroup block>
        <Checkbox name="product-kind">soup, soup power or soup concentrate</Checkbox>
        <Checkbox name="product-kind">meat extracts</Checkbox>
        <Checkbox name="product-kind">tallow</Checkbox>
        <Checkbox name="product-kind">gelatine</Checkbox>
        <Checkbox name="product-kind">regenerated collagen products</Checkbox>
        <Checkbox name="product-kind">animal food</Checkbox>
        <Checkbox name="product-kind">pharmaceutical products</Checkbox>
        <Checkbox name="product-kind">less than 5% meat, by weight</Checkbox>
        <Checkbox name="product-kind">in a consignment weighing less than 10kg</Checkbox>
        <Checkbox name="product-kind">
          for consumption of passengers or crew of an aircraft or vessel on a flight or voyage from Australian
          territory.
        </Checkbox>
        <Checkbox name="product-kind">none of the above</Checkbox>
      </ControlGroup>
    </Fieldset>

    <Fieldset legend="The product is in a consignment for export to:" hint="Choose all that apply">
      <ControlGroup block>
        <Checkbox name="product-consignment">New Zealand for consumption in New Zealand</Checkbox>
        <Checkbox name="product-consignment">an external territory for consumption in that territory</Checkbox>
        <Checkbox name="product-consignment">
          a resource industry structure in any of the following areas, for consumption in that structure:
        </Checkbox>
        <Checkbox name="product-consignment">the Greater Sunrise special regime area</Checkbox>
        <Checkbox name="product-consignment">the Greater Sunrise pipeline international offshore area</Checkbox>
        <Checkbox name="product-consignment">the Bayu-Undan Gas Field</Checkbox>
        <Checkbox name="product-consignment">the Bayu-Undan pipeline international offshore area</Checkbox>
        <Checkbox name="product-consignment">the Kitan Oil Field.</Checkbox>
        <Checkbox name="product-consignment">none of the above</Checkbox>
      </ControlGroup>
    </Fieldset>

    <Fieldset legend="The product is imported into Australian territory and" hint="Choose all that apply">
      <ControlGroup block>
        <Checkbox name="product-3">held in bond at all times until export</Checkbox>
        <Checkbox name="product-3">
          then exported in the same covering in which and with the same trade description.
        </Checkbox>
        <Checkbox name="product-3">none of the above</Checkbox>
      </ControlGroup>
    </Fieldset>

    <ButtonGroup>
      <ButtonLink href={useNextServicePage()}>Continue</ButtonLink>
    </ButtonGroup>
  </>
);

export default Page;
