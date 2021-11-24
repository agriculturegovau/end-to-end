import React, { forwardRef } from 'react'
import AUcheckbox from './AUcheckbox'

interface IAUradio {
  dark?: boolean
  alt?: boolean
  small?: boolean
  block?: boolean
  label?: string
  status?: 'valid' | 'invalid'
  id: string
  children: any
}

type AUradioFC = React.ComponentProps<'input'> & IAUradio

const AUradio = forwardRef<HTMLInputElement, AUradioFC>(
  (props: AUradioFC, ref) => (
    <AUcheckbox
      // @ts-ignore
      ref={ref}
      type="radio"
      {...props}
    />
  )
)

AUradio.displayName = 'AUradio'

export default AUradio
