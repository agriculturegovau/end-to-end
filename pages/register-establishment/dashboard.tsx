import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import Todo from 'components/Todo';
import { TextLink } from '@ag.ds-next/text';

const Home: NextPage = () => (
  <WizardLayout title="Welcome to the Export Service" backbreadcrumb={false}>
    <Todo>
      <TextLink href="/register-establishment/register-establishment">Register establishment</TextLink>
    </Todo>
  </WizardLayout>
);

export default Home;
