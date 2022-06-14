import { LayoutPage } from 'components/LayoutPage';
import { useNextServicePage, useServicePage } from 'components/Contents';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { H1, IntroText } from 'components/IntroText';
import { FormStack } from '@ag.ds-next/form-stack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Meats {
  kind?: string;
}

const Page: LayoutPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Meats>();

  const exitPage = useServicePage('exit');
  const nextPage = useNextServicePage();
  const redirects: Record<string, string> = {
    human_food: nextPage,
    other: exitPage,
    pet_food: exitPage,
    pharmaceutical_use: exitPage,
  };

  const onSubmit: SubmitHandler<Meats> = (data) => {
    const target = redirects[data.kind ?? 'other'] ?? exitPage;
    router.push(target);
  };

  return (
    <>
      {/*<Fieldset legend="What is the product for?" hint="Choose one"> */}
      <H1>What is the product for?</H1>
      <IntroText>What the product be used for after being exported.</IntroText>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormStack>
          <ControlGroup block>
            <Radio {...register('kind')} value="human_food">
              Human food
            </Radio>
            <Radio {...register('kind')} value="pet_food">
              Pet food
            </Radio>
            <Radio {...register('kind')} value="pharmaceutical_use">
              Pharmaceutical use
            </Radio>
            <Radio {...register('kind')} value="other">
              Other
            </Radio>
          </ControlGroup>

          <ButtonGroup>
            <Button type="submit">Continue</Button>
          </ButtonGroup>
        </FormStack>
      </form>
    </>
  );
};

export default Page;
