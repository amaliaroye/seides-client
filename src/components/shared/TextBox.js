import React from 'react'
// import Button from './Button'
import styled, { keyframes } from 'styled-components'

// Define Styled Components outside of the render method
const TextBox = ({ text }) => {
  return <StyledText text={text}>{text}</StyledText>
}

const textKeyframes = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.text.length}ch;
  }
`

const StyledText = styled.div`
  animation: ${textKeyframes};
  animation-duration: 2s;
  animation-timing-function: steps(${props => props.text.length}, end);
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Source Code Pro', monospace;
  font-size: 28px;
  color: rgba(255,255,255,.70);
`

export default TextBox
