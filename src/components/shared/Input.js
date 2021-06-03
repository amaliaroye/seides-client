import React from 'react'

const Input = props => {
  return (
    <div>
      <label>{props.name}</label>
      <input
        value={props.value}
        name={props.name}
        className={props.className}
        onClick={props.handleSubmit}
        onChange={props.handleChange}
        type={props.type}
      />
    </div>
  )
}

export default Input
