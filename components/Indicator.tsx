import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

// Seeking a better name for this component.
// Some content with a 'tick' or 'cross' next to it.
// Similar to an inline au-alert-icon

interface IndicatorProps {
  type?: 'success' | 'warning' | 'error' | 'info';
}

const Indicator = styled.span<{ type: 'success' | 'warning' | 'error'; dark?: boolean }>`
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  position: relative;

  &:before,
  &:after {
    content: ' ';

    position: absolute;
    top: 50%;
    left: -2.25rem;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: -0.75rem;
    border-left-width: -0.75rem;
    display: block;
    background-repeat: no-repeat;
  }

  &:after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%ffffff00' d='M10.4 16.9l-4.7-4.7 1.4-1.4 3.3 3.3 6.3-6.3 1.4 1.4z'/%3E%3C/svg%3E");
  }

  &:before {
    border-radius: 100%;
    //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230b996c' d='M0,0v24h24V0H0z M12,23C5.9,23,1,18.1,1,12C1,5.9,5.9,1,12,1s11,4.9,11,11C23,18.1,18.1,23,12,23z'/%3E%3C/svg%3E");
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFFFFF' d='M10.4 16.9l-4.7-4.7 1.4-1.4 3.3 3.3 6.3-6.3 1.4 1.4z'/%3E%3C/svg%3E");
  }
`;

const Path = styled.path``;

const Svg = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;

export const IndicatorComponent = styled.span<IndicatorProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  ${Path} {
    fill: var(--AU-colordark-foreground-text);
  }

  ${Svg} {
    border-radius: 100%;
    background-color: var(--AU-color-${(props) => props.type}, var(--AU-color-info));
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

interface IndicatorProps {
  type?: 'success' | 'warning' | 'error' | 'info';
}

const icons = {
  success: SuccessSVG,
  warning: WarningSVG,
  error: ErrorSVG,
  info: InfoSVG,
};

export const IndicatorC: React.FC<IndicatorProps & React.ComponentProps<'span'>> = ({
  type = 'info',
  children,
  ...props
}) => {
  const Icon = icons[type];

  return (
    <IndicatorComponent type={type} {...props}>
      <Icon />
      &nbsp;{children}
    </IndicatorComponent>
  );
};

export default Indicator;
