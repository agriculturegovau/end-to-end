import styled from '@emotion/styled';
import React, { useState } from 'react';

const DialogComponent = styled.div`
  position: relative;
  background: white;

  border: none !important;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  //box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.6rem;

  min-width: 400px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 101; // form inputs are 100
`;

export interface DialogProps<T> {
  trigger: (onClick: React.MouseEventHandler<T>) => React.ReactNode;
  open?: boolean;
}

const Dialog = <T,>(props: DialogProps<T> & React.ComponentProps<'div'>) => {
  const { trigger, open = false, ...dialogProps } = props;
  const [showingDialog, setDialog] = useState(open);
  const showDialog = () => setDialog(true);
  const hideDialog = () => setDialog(false);

  return (
    <>
      {trigger(showDialog)}

      {showingDialog ? (
        <Backdrop
          onClickCapture={(e) => {
            if (e.currentTarget !== e.target) {
              return;
            }

            hideDialog();
          }}
        >
          <DialogComponent {...dialogProps} />
        </Backdrop>
      ) : null}
    </>
  );
};

export default Dialog;
