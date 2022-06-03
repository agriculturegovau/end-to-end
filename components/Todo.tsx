import styled from '@emotion/styled';

const Todo = styled.div`
  background-color: var(--agds-background-body);
  background-color: #e8eaec;
  padding: 2em;
  box-shadow: 4px 3px 10px #00000038, 0 0 0 3px #221c19;
  outline: 3px dashed #e5cd22;

  &::before {
    font-size: 3rem;
    content: '🚧';
  }
`;

export const TodoText = styled.span`
  font-weight: normal;
  color: var(--agds-foreground-muted);
  border-bottom: 2px dashed var(--agds-foreground-muted);
`;

export const TodoLink: React.FC<{ href?: string }> = ({ children, href }) => <TodoText>{children}</TodoText>;

export default Todo;
