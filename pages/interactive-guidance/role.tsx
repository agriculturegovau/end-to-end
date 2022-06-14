import { LayoutPage } from 'components/LayoutPage';
import { useNextServicePage, useServicePage } from 'components/Contents';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Roles {
  t?: string;
}

const Page: LayoutPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Roles>();

  const exitPage = useServicePage('exit');
  const redirects: Record<string, string> = {
    manage: useServicePage('result-manage'),
    process: useServicePage('result-process'),
    source: useServicePage('result-source'),
  };

  const onSubmit: SubmitHandler<Roles> = (data) => {
    const target = redirects[data.t ?? ''] ?? exitPage;
    router.push(target);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset legend="What is your role in the export process?" hint="Choose all that apply">
          <ControlGroup block>
            <Checkbox {...register('t')} value="manage">
              I manage a cattle farm, feedlot or a saleyard
            </Checkbox>
            <Checkbox {...register('t')} value="process">
              I process, prepare or store goods for export
            </Checkbox>
            <Checkbox {...register('t')} value="source">
              I source goods and export them
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
