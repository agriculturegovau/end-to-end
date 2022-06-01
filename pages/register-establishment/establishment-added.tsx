import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUAlert from 'components/@gov.au/AUAlert';
import AUcallout from 'components/@gov.au/AUcallout';
import AUheading from 'components/@gov.au/AUheading';
import Link from 'next/link';

const Home: NextPage = () => (
  <WizardLayout
    title="What will happen next?"
    backbreadcrumb={false}
    breadcrumbs={[
      {
        label: 'Home',
        href: '/todo',
      },
      {
        label: 'Get started',
        href: '/todo',
      },
      { label: 'Register an establishment' },
    ]}
    frontmatter={
      <AUAlert title="Your application to register an establishment was submitted" type="success">
        <p>
          Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.{' '}
        </p>
      </AUAlert>
    }
  >
    <p>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.{' '}
    </p>
    <AUcallout>
      <AUheading level={3} size="md">
        Support options
      </AUheading>
      <p>For help, book a time for support staff to call you at a convenient time.</p>
      <p>
        <Link href="/todo">Book callback</Link>
      </p>
    </AUcallout>
  </WizardLayout>
);

export default Home;
