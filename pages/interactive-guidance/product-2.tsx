import { LayoutPage } from 'components/LayoutPage';
import { useNextServicePage, useServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { Button, ButtonGroup } from '@ag.ds-next/button';
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
      <H1>The product is in a consignment for export to:</H1>
      <IntroText>Choose all that apply</IntroText>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlGroup block>
          <Checkbox {...register('option')} value="nz">
            New Zealand for consumption in New Zealand
          </Checkbox>
          <Checkbox {...register('option')} value="external-territory">
            an external territory for consumption in that territory
          </Checkbox>
          <Checkbox {...register('option')} value="resource-industry">
            a resource industry structure in any of the following areas, for consumption in that structure:
            <Body>
              <ul>
                <li>the Greater Sunrise special regime area</li>
                <li>the Greater Sunrise pipeline international offshore area</li>
                <li>the Bayu-Undan Gas Field</li>
                <li>the Bayu-Undan pipeline international offshore area</li>
                <li>the Kitan Oil Field.</li>
              </ul>
            </Body>
          </Checkbox>
          <Checkbox {...register('option')} value="none">
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
