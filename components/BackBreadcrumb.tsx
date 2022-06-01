import React from 'react';
import AUbutton from 'components/@gov.au/AUbutton';
import { useRouter } from 'next/router';

const BackBreadcrumb = ({ backHref }: { backHref?: string }) => {
  const router = useRouter();

  return (
    <AUbutton
      as="tertiary"
      className="back-btn"
      onClick={() => {
        if (backHref) {
          return router.push(backHref);
        }
        router.back();
      }}
    >
      ← Back
    </AUbutton>
  );
};

export default BackBreadcrumb;
