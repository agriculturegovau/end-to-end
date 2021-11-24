import React from 'react'
import AUcallout from './@gov.au/AUcallout'
import AUheading from './@gov.au/AUheading'
import { CONTACT_EMAIL } from '../store/constants'

export const NeedHelp: React.FC = () => (
  <AUcallout>
    <AUheading size="md" level="3">
      Need help?
    </AUheading>
    <p style={{ marginTop: 0 }}>
      Contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </p>
  </AUcallout>
)
