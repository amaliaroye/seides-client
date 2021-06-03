import React, { useState, useEffect } from 'react'

const Alert = (props) => {
  const [show, setShow] = useState(true)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    setTimeoutId(handleClose, 5000)
  }, [timeoutId])

  const handleClose = () => setShow(false)

  const { variant, message, id, deleteAlert } = props

  // Delete this alert after the fade animation time (300 ms by default)
  if (!show) {
    setTimeoutId(() => {
      deleteAlert(id)
    }, 300)
  }

  return (
    <Alert
      dismissible
      show={show}
      variant={variant}
      onClose={handleClose}
    >
      <div className="container">
        <p className="alert-body">{message}</p>
      </div>
    </Alert>
  )
}

export default Alert
