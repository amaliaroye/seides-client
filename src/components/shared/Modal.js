import React from 'react'
import ReactDom from 'react-dom'
// import Modal from 'react-overlays/Modal'
// https://react-bootstrap.github.io/react-overlays/api/Modal

const modalStyles = {
  position: 'fixed',
  // for centering!
  top: '50%',
  left: '50%',
  // because the guy didn't use flexbox in the video!
  transform: 'translate(-50, -50)',
  backgroundColor: '#fff',
  padding: '50px',
  // makes sure the modal is on top of everything
  zIndex: '1000'
}

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .4)',
  zIndex: 1000
}

export default function Modal ({ open, children, onClose }) {
  // if the modal ain't open, it ain't open.
  if (!open) return null

  // the modal will usually be the child of another element and cannot render on top, so we gotta make a portal and stuff. The portal is linked to a div with the id 'portal' in the index.html folder.
  // Portals allow us to do event delegation when the render can't.
  // Good to keep parent/child relations and stuff.
  return ReactDom.createPortal(
    <React.Fragment>
      <div style={overlayStyles} />

      <div style={modalStyles}>
        <button onClick={onClose}>✖</button>
        {children}
      </div>
    </React.Fragment>,
    document.getElementById('portal')
  )
}
