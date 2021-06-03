import React from 'react'

const Modal = ({ header, body, variant, button }) => {
  return (
    <div className={`modal ${variant}`} >
      <div>{header}</div>
      <div>{body}</div>
      <button>{button}</button>
    </div>
  )
}

export default Modal
