import { tokens } from '@ag.ds-next/core';
import { H1 as AH1, H2 as AH2, H3 as AH3, H4 as AH4, H5 as AH5, H6 as AH6 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export const IntroText: React.FC = ({ children }) => (
  <Text as="p" fontSize="md" color="muted">
    {children}
  </Text>
);

export const P: React.FC<React.ComponentProps<typeof Text>> = (props) => (
  <Text as="p" maxWidth={tokens.maxWidth.bodyText} {...props} />
);

export const H1: React.FC<React.ComponentProps<typeof AH1>> = (props) => <AH1 maxWidth={'42rem'} {...props} />;

export const H2: React.FC<React.ComponentProps<typeof AH2>> = (props) => <AH2 maxWidth={'42rem'} {...props} />;

export const H3: React.FC<React.ComponentProps<typeof AH3>> = (props) => <AH3 maxWidth={'42rem'} {...props} />;

export const H4: React.FC<React.ComponentProps<typeof AH4>> = (props) => <AH4 maxWidth={'42rem'} {...props} />;

export const H5: React.FC<React.ComponentProps<typeof AH5>> = (props) => <AH5 maxWidth={'42rem'} {...props} />;

export const H6: React.FC<React.ComponentProps<typeof AH6>> = (props) => <AH6 maxWidth={'42rem'} {...props} />;
