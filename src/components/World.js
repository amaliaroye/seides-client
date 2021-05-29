import React, { useEffect, useRef } from 'react'
import { randomNumber, randomColor, randomRectangle } from './randomGenerator'

const World = props => {
  // refs allow you to access dom nodes
  const baseRef = useRef(null)
  // let renderCount = useRef(0) // value gets updated without rerendering
  // const randomNumber = useRef(0) // value gets updated without rerendering

  useEffect(() => {
    const canvas = baseRef.current // the html canvas element
    if (canvas.getContext) {
      const c = canvas.getContext('2d')
      c.fillStyle = 'lightgray'
      c.fillRect(0, 0, c.canvas.width, c.canvas.height)
      console.log('rendering canvas')
    }
  }, []) // every time the component renders, it runs this function to draw the canvas.

  const drawEntity = () => {
    const canvas = baseRef.current // the html canvas element
    const c = canvas.getContext('2d')
    c.fillStyle = randomColor('rgb')
    // c.fillRect(100, 100, 100, 100)
    randomRectangle(c, 0, 0, c.canvas.width, c.canvas.height)
  }

  return (
    <React.Fragment>
      <div className='game-wrapper'>
        <canvas ref={baseRef} id='canvas-base'></canvas>
      </div>
      <div>
        <button onClick={drawEntity}>Random Rectangle!</button>
        <button onClick={() => console.log(randomNumber(1, 100))}>Random Number</button>
        <button onClick={() => console.log(randomColor('rgb'))}>Random Color</button>
      </div>
    </React.Fragment>
  )
}

export default World
