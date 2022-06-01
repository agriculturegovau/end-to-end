import { LayoutPage } from 'components/LayoutPage';
import AUheading from 'components/@gov.au/AUheading';
import LogoDAWE from 'components/LogoDAWE';
import styled from '@emotion/styled';
import Hr from 'components/Hr';
import { indexContents } from 'components/Contents';
import { Text, TextLink } from '@ag.ds-next/text';
import { Flex } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';

const App = styled(Flex)``;

const Aside = styled.div`
  grid-area: logo;
  background-color: #0a1931;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Contents = styled.div`
  grid-area: contents;
`;

const Main = styled.main`
  color: var(--agds-foreground-text);
  background-color: var(--agds-background-body);
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-areas:
    'logo'
    'contents';
  grid-template-rows: auto 2fr;

  & > * {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-areas: 'logo contents';
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;

    & > * {
      padding: 4rem;
    }
  }
`;

const Home: LayoutPage = () => (
  <App palette="dark" className="App">
    <Main id="content">
      <Aside>
        <LogoDAWE />
      </Aside>

      <Contents>
        <Body>
          <h1>Contents</h1>
          <hr />
          <p>This is an alpha prototype.</p>
          <p>
            It&apos;s designed to capture key interactions in the tranche 1 view of the agricultural export experience
            with the department.
          </p>
          <p>
            These concepts have been tested, refined and validated through user research – but they don&apos;t represent
            the whole tranche 1 end-to-end view.
          </p>
          <p>
            We&apos;ll continue to expand on and evolve the prototype, to define reusable patterns to support a simple,
            intuitive service that meets user needs.
          </p>

          <nav style={{ paddingTop: '2em' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {Array.from(indexContents).map(([root, label]) => (
                <li key={root}>
                  <TextLink href={`/${root}`}>{label}</TextLink>
                </li>
              ))}
            </ul>
          </nav>
        </Body>
      </Contents>
    </Main>
  </App>
);

const Layout: React.FC = ({ children }) => <>{children}</>;

Home.getLayout = Layout;

export default Home;
