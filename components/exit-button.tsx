import Modal from './Modal'
import AUbutton from './@gov.au/AUbutton'
import AUheading from './@gov.au/AUheading'
import React from 'react'
import { useStore } from '../store'
import { useRouter } from 'next/router'
import { ButtonGroup } from './button-group'

export const ExitButton = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useStore()
  const router = useRouter()
  const handleExit = () => {
    dispatch({ type: 'RESET_STATE' })
    router.push('/exit-service')
  }
  return (
    <Modal
      trigger={(handleOpen) => (
        <div className="trigger-wrapper">
          <div>
            <AUbutton as={'tertiary'} onClick={handleOpen}>
              Exit
            </AUbutton>
          </div>
        </div>
      )}
    >
      {(close) => {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <AUheading size={'lg'} level={'2'}>
                  Are you sure you want to exit?
                </AUheading>
              </div>
              <div>
                <a
                  href={''}
                  onClick={(e) => {
                    e.preventDefault()
                    close()
                  }}
                >
                  Close
                </a>
              </div>
            </div>

            <p style={{ marginBottom: '2em' }}>
              If you choose to exit you will lose all information.
            </p>
            <ButtonGroup>
              <AUbutton onClick={close}>No, I want to stay</AUbutton>
              <AUbutton as={'secondary'} onClick={handleExit}>
                Yes, I want to exit
              </AUbutton>
            </ButtonGroup>
          </>
        )
      }}
    </Modal>
  )
}
