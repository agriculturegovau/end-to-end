import styled from '@emotion/styled';

const Hr = styled.hr`
  // specificity required to overwrite govau styling
  &,
  .au-body & {
    border-top: 1px solid #e0e0e0;
  }
`;

export default Hr;
