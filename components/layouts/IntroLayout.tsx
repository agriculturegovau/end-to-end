import React from 'react';
import LogoDAWE from 'components/LogoDAWE';
import { Content } from '@ag.ds-next/content';
import { Body } from '@ag.ds-next/body';
import Main from 'components/layouts/Main';
import { App } from 'components/layouts/App';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { Heading } from '@ag.ds-next/heading';

type IntroLayoutProps = {
  superheading?: string;
  heading: string;
  cta?: { label?: string; href: string };
  logo?: React.ReactNode;
  extraContent?: React.ReactNode;
};

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
        <Content>
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
        </Content>
      </Main>
    </App>
  );
};
