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
  animation-duration:${props => (props.char) * 0.05}s;
  animation-timing-function: steps(${props => props.char}, end);
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'MinimalFont5x7', monospace;
  font-size: 2.5rem;
  text-transform: full-width;
  box-sizing: border-box;
  border: 1px solid yellow;
  margin: 0;
`
const Box = styled.div`
  background-color: #fff;
  width: 500px;
  overflow: hidden;
`

const TextBox = ({ text }) => {
  const char = parseFloat(text.length)
  return (
    <Box>
      <StyledText char={char}>
        {text}
      </StyledText>
    </Box>)
}

export default TextBox
