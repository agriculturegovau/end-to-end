import { LayoutPage } from 'components/LayoutPage';
import { H1 } from '@ag.ds-next/heading';
import { useRouter } from 'next/router';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { establishments } from 'components/exampleEstablishments';

const Page: LayoutPage = () => {
  const router = useRouter();
  const { estno } = router.query;
  const establishment = establishments.find((e) => e.estNo === estno);

  if (establishment === undefined) {
    return <H1>establishment not found</H1>;
  }

  return (
    <>
      <Breadcrumbs
        links={[
          {
            label: 'Find establishments',
            href: '/find-establishment',
          },

          { label: establishment.name },
        ]}
      />

      <H1>showing establishment: {establishment.estNo}</H1>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export async function getStaticPaths() {
  return {
    paths: establishments.map((establishment) => ({
      params: { estno: establishment.estNo },
    })),
    fallback: false,
  };
}

export default Page;
