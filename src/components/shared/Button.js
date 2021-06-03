import React from 'react'

const Button = props => {
  const { text, value, className, handleSubmit } = props
  return (
    <button
      value={value}
      className={className}
      onClick={handleSubmit}
    >
      {text}
    </button>
  )
}

export default Button
