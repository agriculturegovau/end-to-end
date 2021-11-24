import React from 'react'

type ButtonGroupProps = {
  children: React.ReactNode[]
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <div style={{ display: 'flex' }}>
      {children.map((C, idx, arr) => (
        <div
          style={{ marginRight: idx < arr.length ? '1em' : undefined }}
          key={idx}
        >
          {C}
        </div>
      ))}
    </div>
  )
}
