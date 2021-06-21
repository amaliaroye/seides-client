import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const createToast = () => keyframes`
  0% {transform: translateY(150%)}
  20% {transform: translateY(0)}
  25% {transform: translateY(.5em)}
  30% {transform: translateY(0)}
`

const Toast = styled.div`
  animation-name: ${createToast};
  animation-direction: alternate;
  animation-iteration-count: 2;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  background-color: ${props=>props.theme};
  background-color: hsla(0, 0%, 100%, .3);
  position: absolute;
  padding: .5em;
  max-width: 60%;
  width: max-content;
  font-size: 2rem;
  cursor: pointer;
  align-self: center;
  margin-bottom: 1.5em;
`

const Toaster = (props) => {
  const { theme, message, removeToast, id } = props
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(handleClose, 4000)
    return () => clearTimeout(timer)
  },[])

  const handleClose = () => {
    setShow(false)
  }

  if (!show) {
    setTimeout(()=> {removeToast(id)}, 100)}

  return (
    <Toast theme={theme} onClick={handleClose}>
      {message}
    </Toast>
  )
}

export default Toaster
