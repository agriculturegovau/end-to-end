import { LayoutPage } from 'components/LayoutPage';
import { H1 } from '@ag.ds-next/heading';
import { useNextServicePage, useServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';
import { Body } from '@ag.ds-next/body';
import { IntroText } from 'components/IntroText';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Product {
  kind: false | string[];
}

const Page: LayoutPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Product>();

  const exitPage = useServicePage('exit');
  const npgPage = useServicePage('result-npg');
  const nextPage = useNextServicePage();

  const onSubmit: SubmitHandler<Product> = (data) => {
    if (data?.kind === false || data?.kind?.length === 0) {
      router.push(exitPage);
      return;
    }

    if (data?.kind?.find((product) => product === 'none')) {
      router.push(nextPage);
      return;
    }

    router.push(npgPage);
  };

  return (
    <>
      <H1>Do any of the following apply to your product?</H1>
      <IntroText>Choose all that apply</IntroText>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlGroup block>
          <Checkbox {...register('kind')} value="soup">
            soup, soup power or soup concentrate
          </Checkbox>
          <Checkbox {...register('kind')} value="extract">
            meat extracts
          </Checkbox>
          <Checkbox {...register('kind')} value="tallow">
            tallow
          </Checkbox>
          <Checkbox {...register('kind')} value="gelatine">
            gelatine
          </Checkbox>
          <Checkbox {...register('kind')} value="collagen">
            regenerated collagen products
          </Checkbox>
          <Checkbox {...register('kind')} value="animal_food">
            animal food
          </Checkbox>
          <Checkbox {...register('kind')} value="pharma">
            pharmaceutical products
          </Checkbox>
          <Checkbox {...register('kind')} value="five_percent">
            less than 5% meat, by weight
          </Checkbox>
          <Checkbox {...register('kind')} value="unheavy">
            in a consignment weighing less than 10kg
          </Checkbox>
          <Checkbox {...register('kind')} value="aircraft_food">
            for consumption of passengers or crew of an aircraft or vessel on a flight or voyage from Australian
            territory.
          </Checkbox>
          <Checkbox {...register('kind')} value="none">
            none of the above
          </Checkbox>
        </ControlGroup>

        <ButtonGroup>
          <Button type="submit">Continue</Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Page;
