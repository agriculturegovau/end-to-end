import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const DescripionListLayout = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;

  dt,
  dd {
    margin: 0;
    padding: 12px;
  }

  dt {
    font-weight: bold;
    grid-column: 1;
  }

  dd {
    grid-column: 2;
  }
`;

/*
Unfortunately supporting supporting zebra-stripes or borders for lists with
subsequent dd or dt terms (or nested divs) is unsupported as of now.

Use a plain prop to turn off stripes and borders
*/
const DescripionList = styled(DescripionListLayout)<{ fixedTermWidth?: boolean; plain?: boolean; split?: boolean }>`
  ${(props) =>
    props.fixedTermWidth
      ? css`
          grid-template-columns: 15em 1fr;
        `
      : css``}

  ${(props) =>
    props.split
      ? css`
          dd {
            text-align: right;
          }
        `
      : css``}

  ${(props) =>
    props.plain
      ? css``
      : css`
          dt ~ dt,
          dt ~ dt + dd {
            border-top: 1px solid var(--agds-light-border);
          }

          dt:last-of-type,
          dd:last-of-type {
            border-bottom: 1px solid var(--agds-light-border);
          }

          dt:nth-of-type(odd),
          dt:nth-of-type(odd) + dd,
          dt:nth-of-type(odd) + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd + dd + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd + dd + dd + dd + dd + dd,
          dt:nth-of-type(odd) + dd + dd + dd + dd + dd + dd + dd + dd + dd + dd {
            background-color: var(--agds-light-border-muted);
            background-color: #f2f2f2;
          }
        `}
`;

export default DescripionList;
