import styled from '@emotion/styled';

const Todo = styled.div`
  background-color: var(--AU-color-background);
  background-color: #e8eaec;
  padding: 2em;
  box-shadow: 4px 3px 10px #00000038, 0 0 0 3px #221c19;
  outline: 3px dashed #e5cd22;

  &::before {
    font-size: 3rem;
    content: '🚧';
  }
`;

export default Todo;
