import React, { useState, useEffect } from 'react'

const Alert = ({ color, message, id, deleteAlert }) => {
  const [show, setShow] = useState(true)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    setTimeoutId(handleClose, 5000)
  }, [timeoutId])

  const handleClose = () => setShow(false)

  // Delete this alert after the fade animation time (300 ms by default)
  if (!show) {
    setTimeoutId(() => {
      deleteAlert(id)
    }, 300)
  }

  return (
    <div
      show={show}
      color={color}
      onClose={handleClose}
    >
      <div className="container">
        <p className="alert-body">{message}</p>
      </div>
    </div>
  )
}

export default Alert
