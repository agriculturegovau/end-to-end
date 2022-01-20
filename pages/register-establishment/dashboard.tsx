import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import AUheading from 'components/@gov.au/AUheading';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import AUformGroup from 'components/@gov.au/AUformGroup';
import DescripionList from 'components/DescriptionList';
import Todo from 'components/Todo';

const Home: NextPage = () => (
  <WizardLayout title="Welcome to the Export Service" backbreadcrumb={false}>
    <Todo>
      <Link href="/register-establishment/register-establishment">Register establishment</Link>
    </Todo>
  </WizardLayout>
);

export default Home;
