import { LayoutPage } from 'components/LayoutPage';
import { useNextServicePage, useServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';
import { Body } from '@ag.ds-next/body';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { H1, IntroText } from 'components/IntroText';

interface Product {
  option: false | string[];
}

const Page: LayoutPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Product>();

  const exitPage = useServicePage('exit');
  const npgPage = useServicePage('result-npg');
  const nextPage = useNextServicePage();

  const onSubmit: SubmitHandler<Product> = (data) => {
    if (data?.option === false || data?.option?.length === 0) {
      router.push(exitPage);
      return;
    }

    if (data?.option?.find((t) => t === 'none')) {
      router.push(nextPage);
      return;
    }

    router.push(npgPage);
  };

  return (
    <>
      <H1>Do any of the following apply to your product?</H1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset legend="The product is imported into Australian territory and" hint="Choose all that apply">
          <ControlGroup block>
            <Checkbox {...register('option')} value="bond">
              held in bond at all times until export
            </Checkbox>
            <Checkbox {...register('option')} value="exported">
              then exported in the same covering in which and with the same trade description.
            </Checkbox>
            <Checkbox {...register('option')} value="none">
              none of the above
            </Checkbox>
          </ControlGroup>
        </Fieldset>

        <ButtonGroup>
          <Button type="submit">Continue</Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Page;
