import * as React from 'react'
import MicroModal, { MicroModalProps } from 'react-micro-modal'

type ModalFC = React.FC<MicroModalProps>

const Modal: ModalFC = ({
  children,
  overrides = { Dialog: { className: '' } },
  ...props
}: any) => {
  const mergedOverrides = {
    ...overrides,
    Dialog: {
      ...overrides?.Dialog,
      className: `modal-dialog ${overrides?.Dialog?.className}`,
    },
  }

  // @ts-ignore
  if (props?.['aria-label']) {
    // @ts-ignore
    mergedOverrides.Dialog['aria-label'] = props['aria-label']
  }

  // @ts-ignore
  if (props?.['aria-labelledby']) {
    // @ts-ignore
    mergedOverrides.Dialog['aria-labelledby'] = props['aria-labelledby']
  }

  const [isBrowser, setIsBrowser] = React.useState(false)

  React.useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) {
    // Don't server-render the modal because MicroModal requires the global 'document' variable which isn't present on the server
    return <></>
  }

  return (
    <MicroModal overrides={mergedOverrides} {...props}>
      {children}
    </MicroModal>
  )
}

export default Modal
