import { FormStack } from '@ag.ds-next/form-stack';
import { ControlGroup } from '@ag.ds-next/control-input';
import React from 'react';

export const AUformGroup: React.FC<{ style?: any }> = ({ children }) => <FormStack>{children}</FormStack>;

export const FormGroup: React.FC<React.ComponentProps<typeof ControlGroup>> = ({ children, ...controlProps }) => (
  <FormStack>
    <ControlGroup {...controlProps}>{children}</ControlGroup>
  </FormStack>
);

export default AUformGroup;
