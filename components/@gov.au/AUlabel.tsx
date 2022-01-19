import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface IAUlabel {
  text: string | React.ReactNode;
  dark?: boolean;
  inline?: boolean;
}

type AUlabelProps = React.ComponentProps<'label'> & IAUlabel;

const AUlabel = forwardRef<HTMLLabelElement, AUlabelProps>(
  ({ text, dark = false, inline = false, className = '', ...otherProps }: AUlabelProps, ref) => {
    const classNames = clsx(['au-label', className, dark && 'au-label--dark', inline && 'au-label--inline']);

    return (
      <label ref={ref} className={classNames} {...otherProps}>
        {text}
      </label>
    );
  }
);

AUlabel.displayName = 'AUlabel';

export default AUlabel;
