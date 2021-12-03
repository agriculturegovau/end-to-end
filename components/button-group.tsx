import React from 'react';

export const ButtonGroup: React.FC<React.ComponentProps<'div'>> = ({ children, style, ...props }) => (
  <div
    style={{
      display: 'flex',
      ...style,
    }}
    {...props}
  >
    {React.Children.toArray(children).map((C, idx, arr) => (
      <div style={{ marginRight: idx < arr.length ? '1em' : undefined }} key={idx}>
        {C}
      </div>
    ))}
  </div>
);
