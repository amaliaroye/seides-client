import React, { useEffect, useRef } from 'react'
import Player from './Player'
// import Entity from './Entity'

const World = props => {
  // event listeners
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])
  useEffect(() => {
    document.addEventListener('keyup', onKeyUp)
    return () => document.removeEventListener('keyup', onKeyUp)
  }, [])
  // event handler callback functions
  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      console.log('Hit the left arrow!')
    }
    if (event.key === 'ArrowRight') {
      console.log('Hit the right arrow!')
    }
  }
  const onKeyUp = (event) => {
    if (event.key === 'ArrowLeft') {
      console.log('Released the left arrow!')
    }
    if (event.key === 'ArrowRight') {
      console.log('Released the right arrow!')
    }
  }

  // pause game turns off event handlers for movement??

  // allows access to the `canvas` element through the `useRef` hook
  // `refs`, like `state` persists between renders of component but does not cause the component to reupdate like state does.
  // can reference elements in the html with the `ref` attribute
  const canvasRef = useRef(null)

  useEffect(() => {
    // selects the canvas element in the dom
    const canvas = canvasRef.current
    const ctx = (canvas).getContext('2d')
    ctx.fillStyle = 'lightgray'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }, [])

  return (
    <canvas ref={canvasRef} {...props}>
      <Player />

    </canvas>
  )
}

export default World
