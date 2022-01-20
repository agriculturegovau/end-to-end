import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUAlert from 'components/@gov.au/AUAlert';
import AUcallout from 'components/@gov.au/AUcallout';
import AUheading from 'components/@gov.au/AUheading';
import Link from 'next/link';

const Home: NextPage = () => (
  <WizardLayout
    title="What happens next?"
    backbreadcrumb={false}
    frontmatter={
      <AUAlert title="Your document was submitted" type="success">
        <p>You have successfully uploaded your citrus sweetness certificate.</p>
        <p>
          <strong>Reference: 66TR99PL</strong>
        </p>
      </AUAlert>
    }
  >
    <p>Your application will be finalised within 5 business days. You’ll be notified of the result via email.</p>
    <p>You can also view the progress of your application in your export service account.</p>
    <AUcallout>
      <AUheading level={2} size="lg">
        Meeting Zuy’s new import requirements
      </AUheading>
      <p>
        For more information on the new legislation and how it affects Australian agricultural exporters, see{' '}
        <Link href="/todo">Zuy import legislation for Australian exporters.</Link>
      </p>
    </AUcallout>
  </WizardLayout>
);

export default Home;
