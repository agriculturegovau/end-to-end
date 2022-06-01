import React from 'react';
import AUformGroup, { FormGroup } from 'components/@gov.au/AUformGroup';
import { TextInput as AgdsTextInput } from '@ag.ds-next/text-input';

interface ITextInput {
  id?: string;
  label: React.ComponentProps<typeof AgdsTextInput>['label'];
  type?: string;
  error?: Error;
  status?: 'valid' | 'invalid';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  number?: boolean;
  block?: boolean;
  dark?: boolean;
  hint?: string;
}

type TextInputFC = React.ComponentProps<'input'> & ITextInput;

const TextInput: React.FC<ITextInput & React.ComponentProps<typeof AgdsTextInput>> = ({
  id,
  label,
  type = 'text',
  error,
  width,
  number,
  block,
  dark,
  hint,
  children,
  ref,
}) => {
  return <AgdsTextInput label={label} hint={hint} block={block} maxWidth={width} message={error?.message} ref={ref} />;
};

TextInput.displayName = 'TextInput';

export default TextInput;
