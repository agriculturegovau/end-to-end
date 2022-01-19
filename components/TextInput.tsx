import React, { forwardRef } from 'react';
import clsx from 'clsx';
import AUlabel from 'components/@gov.au/AUlabel';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUerrorText from 'components/@gov.au/AUerrorText';
import AUhintText from './@gov.au/AUhintText';

interface ITextInput {
  id: string;
  label: string;
  type?: string;
  error?: any;
  status?: 'valid' | 'invalid';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  number?: boolean;
  block?: boolean;
  dark?: boolean;
  hint?: string;
}

type TextInputFC = React.ComponentProps<'input'> & ITextInput;

const TextInput = forwardRef<HTMLInputElement, TextInputFC>(
  (
    {
      id,
      label,
      type = 'text',
      error,
      width,
      number,
      block,
      dark,
      hint,
      className = '',
      children,
      ...otherProps
    }: TextInputFC,
    ref
  ) => {
    const status = error ? 'invalid' : undefined;

    const classNames = clsx([
      'au-text-input',
      className,
      dark && 'au-text-input--dark',
      block && 'au-text-input--block',
      number && 'au-text-input--number',
      status && `au-text-input--${status}`,
      width && `au-text-input--width-${width}`,
    ]);

    return (
      <AUformGroup status={status}>
        <AUlabel text={label} htmlFor={id} dark={!!dark} />
        {hint !== undefined ? <AUhintText text={hint} /> : null}
        <input
          ref={ref}
          type={type}
          id={id}
          className={classNames}
          aria-invalid={error ? 'true' : 'false'}
          {...otherProps}
        />
        {error && <AUerrorText text={error?.message} dark={!!dark} role="alert" />}
        {children}
      </AUformGroup>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
