import { Box } from '@ag.ds-next/box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { TextLink } from '@ag.ds-next/text';
import AUbutton from 'components/@gov.au/AUbutton';
import { useRouter } from 'next/router';

const BackBreadcrumb = ({ backHref }: { backHref?: string }) => {
  const router = useRouter();

  return (
    <Box>
      <TextLink
        onClick={() => {
          if (backHref) {
            return router.push(backHref);
          }
          router.back();
        }}
      >
        ← Back
      </TextLink>
    </Box>
  );
};

export default BackBreadcrumb;
