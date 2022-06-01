import React, { forwardRef } from 'react';
import clsx from 'clsx';
import AUerrorText from './AUerrorText';
import { Radio, Checkbox } from '@ag.ds-next/control-input';

interface IAUcheckbox {
  dark?: boolean;
  alternate?: boolean;
  small?: boolean;
  block?: boolean;
  label?: string | React.ReactNode;
  status?: 'valid' | 'invalid';
  id: string;
  error?: Error;
}

type AUcheckboxFC = React.ComponentProps<'input'> & IAUcheckbox;

interface OldRadioProps {
  dark?: boolean;
  alternate?: boolean;
  small?: boolean;
  block?: boolean;
  status?: 'valid' | 'invalid';
  error?: Error;
}

interface RadioProps {
  label?: string | React.ReactNode;
  name?: string;
}

const AUcheckboxOld = forwardRef<HTMLInputElement, AUcheckboxFC>(
  (
    {
      dark = false,
      alternate = false,
      small = false,
      block = false,
      label,
      status,
      id,
      type = 'checkbox',
      className = '',
      children: _children,
      error,
      ...otherProps
    }: AUcheckboxFC,
    ref
  ) => {
    const classNames = clsx([
      'au-control-input',
      className,
      dark && 'au-control-input--dark',
      alternate && 'au-control-input--alt',
      small && 'au-control-input--small',
      block && 'au-control-input--block',
      status === 'valid' && 'au-control-input--valid',
      status === 'invalid' && 'au-control-input--invalid',
    ]);

    return (
      <div className={classNames}>
        <input ref={ref} className="au-control-input__input" id={id} type={type} {...otherProps} />
        <label className="au-control-input__text" htmlFor={id}>
          {label}
        </label>
        {error?.message ? <AUerrorText text={error?.message} dark={!!dark} role="alert" /> : null}
      </div>
    );
  }
);

AUcheckboxOld.displayName = 'AUcheckbox';

const AUcheckbox: React.FC<
  { type?: 'radio' | 'checkbox' } & OldRadioProps &
    RadioProps &
    React.ComponentProps<'input'> &
    React.ComponentProps<typeof Radio>
> = ({ type, label, name, checked, ref, onChange }) =>
  type === 'radio' ? (
    <Radio name={name} checked={checked} ref={ref} onChange={onChange}>
      {label}
    </Radio>
  ) : (
    <Checkbox name={name} checked={checked} ref={ref} onChange={onChange}>
      {label}
    </Checkbox>
  );

export default AUcheckbox;
