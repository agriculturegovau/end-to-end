import { Stack } from '@ag.ds-next/box';
import { Column, Columns } from '@ag.ds-next/columns';

export const ColumnContent: React.FC<{ navigator?: React.ReactNode }> = ({ navigator, children }) => (
  <Columns>
    {navigator ? <Column columnSpan={[12, 12, 12, 4]}>{navigator}</Column> : null}
    <Column columnSpan={[12, 12, 12, 8]}>
      <Stack gap={1}>{children}</Stack>
    </Column>
  </Columns>
);
