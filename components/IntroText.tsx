import { Text } from '@ag.ds-next/text';

export const IntroText: React.FC = ({ children }) => (
  <Text as="p" fontSize="md" color="muted">
    {children}
  </Text>
);
