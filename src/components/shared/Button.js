import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0 15px;
  margin: 10px;
  border-radius: 6px;
  border-style: none;
  color: white;
  background-color: #E65078;
  font-family: "LycheeSoda";
  font-size: 2rem;

  &:hover {
    background-color: #FFE65A;
    color:#AA143C;
  }
  &:active {
    background-color: #c9ffbf;
    border: none;
  }
`

const Button = ({ text }) => {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
}

export default Button
