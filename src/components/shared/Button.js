import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  
`

const Button = props => {
  return (
    <StyledButton
      name={props.name}
      value={props.value}
      className={props.className}
      onClick={props.handleSubmit}
    >
      {props.text}
    </StyledButton>
  )
}

export default Button
