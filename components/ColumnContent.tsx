import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Column, Columns } from '@ag.ds-next/columns';

export const ColumnContent: React.FC<{ navigator?: React.ReactNode }> = ({ navigator, children }) => (
  <Content>
    <Columns>
      {navigator ? <Column columnSpan={[12, 12, 12, 4]}>{navigator}</Column> : null}
      <Column columnSpan={[12, 12, 12, 8]}>
        <Stack gap={1}>{children}</Stack>
      </Column>
    </Columns>
  </Content>
);
