import { LayoutPage } from 'components/LayoutPage';
import AUheading from 'components/@gov.au/AUheading';
import LogoDAWE from 'components/LogoDAWE';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import { indexContents } from 'components/Contents';
import Link from 'next/link';

const App = styled.div``;

const Aside = styled.div`
  grid-area: 'logo';
  background-color: var(--custom-colordark-background-alt);
  text-align: center;
`;

const Contents = styled.div`
  grid-area: 'contents';
`;

const Main = styled.main`
  color: var(--AU-color-background);
  background-color: var(--AU-colordark-background);
  a {
    color: var(--AU-colordark-foreground-action);
  }
  a:hover {
    color: var(--AU-colordark-foreground-text);
  }

  min-height: 100vh;
  display: grid;
  grid-template-areas: 'logo contents';
  grid-template-columns: 1fr 2fr;

  & > * {
    padding: 4rem;
  }
`;

const Home: LayoutPage = () => (
  <App className="App">
    <Main id="content">
      <Aside>
        <LogoDAWE />
      </Aside>

      <Contents>
        <AUheading size="xxxl" level={2}>
          Contents
        </AUheading>
        <Hr />
        <nav>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {Array.from(indexContents).map(([root, label]) => (
              <li key={root}>
                <Link href={`/${root}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Contents>
    </Main>
  </App>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Home.getLayout = Layout;

export default Home;
