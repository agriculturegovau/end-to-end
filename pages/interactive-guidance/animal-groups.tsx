import { LayoutPage } from 'components/LayoutPage';
import { Body } from '@ag.ds-next/body';
import { Card, CardFooter, CardInner, CardLink } from '@ag.ds-next/card';
import { useNextServicePage, useServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { H1, IntroText } from 'components/IntroText';

interface AnimalGroups {
  group?: string[];
}

const Page: LayoutPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AnimalGroups>();

  const exitPage = useServicePage('exit');
  const nextPage = useNextServicePage();

  const onSubmit: SubmitHandler<AnimalGroups> = (data) => {
    if (data?.group?.find((group) => group === 'unsure')) {
      router.push(exitPage);
      return;
    }

    router.push(nextPage);
  };

  return (
    <>
      <H1>Is the product derived from any of the following animal groups?</H1>
      <IntroText>Choose all that apply</IntroText>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlGroup block>
          <Checkbox {...register('group')} value="bovine">
            bovine (cows, bison, and others)
          </Checkbox>
          <Checkbox {...register('group')} value="ovine">
            ovine (sheep and others)
          </Checkbox>
          <Checkbox {...register('group')} value="caprine">
            caprine (goats and others)
          </Checkbox>
          <Checkbox {...register('group')} value="procine">
            porcine (pigs and others)
          </Checkbox>
          <Checkbox {...register('group')} value="bubaline">
            bubaline (buffalo and others)
          </Checkbox>
          <Checkbox {...register('group')} value="camelid">
            camelid (camels, alpacas, llamas and others)
          </Checkbox>
          <Checkbox {...register('group')} value="cervid">
            cervid (deer and others)
          </Checkbox>
          <Checkbox {...register('group')} value="soliped">
            soliped (horses, donkeys, and others)
          </Checkbox>
          <Checkbox {...register('group')} value="poultry">
            poultry (chickens, ducks, geese, fowl, turkeys, pheasants, quail, and others)
          </Checkbox>
          <Checkbox {...register('group')} value="ratite">
            ratite (emus, ostriches, and others)
          </Checkbox>
          <Checkbox {...register('group')} value="rabbits">
            rabbits,
          </Checkbox>
          <Checkbox {...register('group')} value="wild">
            wild caught animals.
          </Checkbox>
          <Checkbox {...register('group')} value="unsure">
            unsure
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
