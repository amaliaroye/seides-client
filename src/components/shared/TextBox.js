import React from 'react'
// import Button from './Button'
import styled, { keyframes } from 'styled-components'

const textKeyframes = ({ char }) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${char}ch;
  }
`

const StyledText = styled.div`
  animation: ${textKeyframes};
  animation-duration: 2s;
  animation-timing-function: steps(${props => props.char}, end);
  animation-delay: .5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Source Code Pro', monospace;
  font-size: 28px;
`

const TextBox = ({ text }) => {
  const char = parseInt(text.length)
  return <StyledText char={char}>{text}</StyledText>
}

export default TextBox
