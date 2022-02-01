import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

// Seeking a better name for this component.
// Some content with a 'tick' or 'cross' next to it.
// Similar to an inline au-alert-icon

interface IndicatorProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  trailing?: boolean;
}

const Path = styled.path``;

const Svg = styled.svg`
  width: 1em;
  height: 1em;
`;

export const IndicatorComponent = styled.span<IndicatorProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  ${Path} {
    fill: var(--AU-colordark-foreground-text);
  }

  ${Svg} {
    border-radius: 100%;
    background-color: var(--AU-color-${(props) => props.type}, var(--AU-color-info));

    ${(props) =>
      props.trailing
        ? css`
            margin-left: 0.5em;
          `
        : css`
            margin-right: 0.5em;
          `}
  }
`;

export const SuccessSVG = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path fill="#313131" d="M10.4 16.9l-4.7-4.7 1.4-1.4 3.3 3.3 6.3-6.3 1.4 1.4z" />
  </Svg>
);

export const ErrorSVG = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path
      fill="#313131"
      d="M17 8.4L15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6 8.4 17l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z"
    />
  </Svg>
);

export const WarningSVG = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path fill="#313131" d="M11 17h2v-2h-2v2zm0-8.6v5h2v-5h-2z" />
  </Svg>
);

export const InfoSVG = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path fill="#313131" d="M11 17.8h2v-8h-2v8zm0-11.6v2h2v-2h-2z" />
  </Svg>
);

export const Indicator: React.FC<IndicatorProps & React.ComponentProps<'span'>> = ({
  type = 'info',
  trailing,
  children,
  ...props
}) => {
  const Icon = {
    success: SuccessSVG,
    warning: WarningSVG,
    error: ErrorSVG,
    info: InfoSVG,
  }[type];

  return (
    <IndicatorComponent type={type} trailing={trailing} {...props}>
      {trailing ? (
        <>
          {children}
          <Icon />
        </>
      ) : (
        <>
          <Icon />
          {children}
        </>
      )}
    </IndicatorComponent>
  );
};

export default Indicator;
