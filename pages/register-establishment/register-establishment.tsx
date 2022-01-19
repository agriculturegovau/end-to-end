import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Sequence from 'components/Sequence';

const Home: NextPage = () => (
  <WizardLayout
    title="Register an establishment"
    navigator={false}
    backbreadcrumb={false}
    breadcrumbs={[
      {
        text: 'Home',
        link: '/todo',
      },
      {
        text: 'Get started',
        link: '/todo',
      },
      { text: 'Register an establishment' },
    ]}
  >
    <p style={{ fontSize: '1.2em' }}>
      Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.{' '}
    </p>

    <Sequence style={{ marginTop: '2em' }}>
      <li>
        <AUheading level={2} size="lg">
          Check before you start
        </AUheading>
        <p>
          Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
          Exerci verterem ad ius, at mea tibique atomorum.
        </p>
        <p style={{ fontSize: '0.9em' }}>3 - 5 days</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          Prepare application
        </AUheading>
        <p>
          Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
          Exerci verterem ad ius, at mea tibique atomorum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
          Exerci verterem ad ius, at mea tibique atomorum.
        </p>
        <p style={{ fontSize: '0.9em' }}>3 - 5 days</p>
      </li>

      <li>
        <AUheading level={2} size="lg">
          Apply
        </AUheading>
        <p>
          Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an.
          Exerci verterem ad ius, at mea tibique atomorum.
        </p>
        <p style={{ fontSize: '0.9em' }}>3 - 5 days</p>
      </li>
    </Sequence>

    <div style={{ marginTop: '3em' }}>
      <Link passHref href="/register-establishment/establishment-details">
        <AUbutton link>Register an establishment</AUbutton>
      </Link>
    </div>
  </WizardLayout>
);

export default Home;
