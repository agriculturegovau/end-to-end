import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Column, Columns } from '@ag.ds-next/columns';

export const ColumnContent: React.FC = ({ children }) => (
  <Content>
    <Columns>
      <Column columnSpan={[12, 12, 12, 8]}>
        <Stack gap={1}>{children}</Stack>
      </Column>
    </Columns>
  </Content>
);
