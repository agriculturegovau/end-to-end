import React from 'react';
import Image from 'next/image';

interface IMyGovID {
  callbackURL?: string;
}

const MyGovID: React.FC<IMyGovID> = ({ callbackURL = '/' }) => (
  <div
    style={{
      borderRadius: '7px',
      background: '#163A3E',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
    }}
  >
    <div style={{ margin: '0 14px' }}>Sign in with</div>
  </div>
);

export default MyGovID;
