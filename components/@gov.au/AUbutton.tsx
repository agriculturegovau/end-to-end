import React, { forwardRef } from 'react';
import { Button, ButtonLink } from '@ag.ds-next/button';

type ComponentType = React.ElementType | keyof JSX.IntrinsicElements;

interface IAUbutton {
  linkComponent?: ComponentType;
  link?: string;
  as?: 'primary' | 'secondary' | 'tertiary';
  dark?: boolean;
  type?: string;
  block?: boolean;
  children: React.ReactNode;
}

type AUbuttonFC = React.ComponentProps<'button'> & IAUbutton; // TODO: Make this accept props for the value of 'linkComponent'

const AUbutton = forwardRef<HTMLButtonElement, AUbuttonFC>(
  (
    {
      linkComponent = 'a',
      link,
      as = 'primary',
      dark,
      type = 'button',
      block,
      className,
      children,
      onClick,
      ...otherProps
    }: AUbuttonFC,
    ref
  ) => {
    return link === undefined ? (
      <Button onClick={onClick} variant={as} className={className}>
        {children}
      </Button>
    ) : (
      <ButtonLink variant={as} href={link} className={className}>
        {children}
      </ButtonLink>
    );
  }
);

AUbutton.displayName = 'AUbutton';

export default AUbutton;
