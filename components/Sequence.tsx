import styled from '@emotion/styled';

const Sequence = styled.ol`
  list-style: none;
  counter-reset: sequence;
  margin: 0;
  padding: 0;
  border-left: 2px solid #808080;

  & li {
    counter-increment: sequence;
    position: relative;
    border-top: 1px solid #bbb;
    padding: 34px 32px;
  }

  & li:last-of-type {
    border-bottom: 1px solid #bbb;
  }

  & li:before {
    content: counter(sequence);
    font-weight: bold;
    position: absolute;
    left: -18px;
    top: 36px;
    background-color: var(--AU-color-background);
    border: 2px solid #808080;
    border-radius: 100%;

    width: 2em;
    height: 2em;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

Sequence.displayName = 'Sequence';

export default Sequence;
