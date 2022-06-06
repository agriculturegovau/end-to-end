import { LayoutPage } from 'components/LayoutPage';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { H1, H3 } from '@ag.ds-next/heading';
import { Stack } from '@ag.ds-next/box';
import { useNextServicePage } from 'components/Contents';

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
    <H1>What do you want to export?</H1>

    <EasyCard title="Dairy" href="/todo">
      Includes milk, milk pwoder products, butter, cream, cheese and other processed dairy products
    </EasyCard>

    <EasyCard title="Eggs" href="/todo">
      Includes shell eggs and egg products intended to exported as food
    </EasyCard>

    <EasyCard title="Seafood" href="/todo">
      Includes finifish, other saefood such as bivalves, crusaceans, echinoderms, gastropods, cephalopods, tunicates and
      crocodile meat
    </EasyCard>

    <EasyCard title="Meat" href={useNextServicePage()}>
      Includes fresh meat, processed meat, and animal by-products such as skins, hides, petfood, rendered products and
      technical products
    </EasyCard>

    <EasyCard title="Live Animals" href="/todo">
      Includes livestock, companion animals, horses, zoo animals, birds, hatching eggs, fish (not for export as food),
      bees and other invertebrates, and reproductive material
    </EasyCard>

    <EasyCard title="Plants" href="/todo">
      Includes fruit, vegetables, nursery stock, cut flowers and foliage, seeds, grains, stockfeed, timber and other
      plant products
    </EasyCard>

    <EasyCard title="Other" href="/todo">
      Includes all other goods not described in the other categories
    </EasyCard>

    <EasyCard title="Other" href="/todo">
      Includes goods that are organic or bio-dynamic
    </EasyCard>
  </>
);

export default Page;
