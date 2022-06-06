import { LayoutPage } from 'components/LayoutPage';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { H1, H3 } from '@ag.ds-next/heading';
import { Stack } from '@ag.ds-next/box';

const EasyCard: React.FC<{ title: string; href: string } & React.ComponentProps<typeof Card>> = ({
  title,
  href,
  children,
  ...cardProps
}) => (
  <Card {...cardProps}>
    <CardInner>
      <Stack>
        <H3>
          <CardLink href={href}>{title}</CardLink>
        </H3>
        {children}
      </Stack>
    </CardInner>
  </Card>
);

const Page: LayoutPage = () => (
  <>
    <H1>Results</H1>

    <EasyCard title="Result one" href="/todo">
      How to gain accreditation for a property for meat and meat producers
    </EasyCard>

    <EasyCard title="Result two" href="/todo">
      How to register an establishment for meat and meat products
    </EasyCard>

    <EasyCard title="Result three" href="/todo">
      How to become an exporter of meat and meat products
    </EasyCard>

    <EasyCard title="Result four" href="/todo">
      Exporting meat
    </EasyCard>
  </>
);

export default Page;
