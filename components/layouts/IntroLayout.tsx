import React from 'react';
import LogoDAWE from 'components/LogoDAWE';
import { Body } from '@ag.ds-next/body';
import Main from 'components/layouts/Main';
import { App } from 'components/layouts/App';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Heading } from '@ag.ds-next/heading';
import { Flex, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';

type IntroLayoutProps = {
  superheading?: string;
  heading: string;
  cta?: { label?: string; href: string };
  logo?: React.ReactNode;
  extraContent?: React.ReactNode;
};

const CustomContent: React.FC = ({ children }) => (
  <Flex as="section" justifyContent="center" alignItems="center" minHeight="100vh">
    <Stack width="100%" maxWidth={tokens.maxWidth.container} gap={1}>
      {children}
    </Stack>
  </Flex>
);

export const IntroLayout: React.FC<IntroLayoutProps> = ({
  superheading,
  heading,
  cta,
  children,
  logo,
  extraContent = null,
}) => {
  return (
    <App palette="dark">
      <Main background="body">
        <CustomContent>
          {logo === undefined ? <LogoDAWE /> : logo}
          {superheading ? (
            <Heading as="h1" fontSize={'xl'} paddingTop={2}>
              {superheading}
            </Heading>
          ) : null}
          <Heading as="h2" fontSize={'xxxl'}>
            {heading}
          </Heading>

          <Body paddingY={2} css={{ ['--typography-sm']: '1.4rem' }}>
            {children}
          </Body>

          {cta ? (
            <ButtonGroup>
              <ButtonLink href={cta.href}>{cta.label ?? 'Get started'}</ButtonLink>
            </ButtonGroup>
          ) : null}

          {extraContent}
        </CustomContent>
      </Main>
    </App>
  );
};
