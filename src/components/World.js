import React, { useState, useEffect, useRef } from 'react'
import Dialogue from './Dialogue'

const World = props => {
  const canvasRef = useRef(null) // refs allow you to access dom nodes without rerendering?
  const [counter, setCounter] = useState(0)

  // this renders the canvas
  useEffect(() => {
    const canvas = canvasRef.current // the actual html canvas element
    // if (canvas.getContext) {

    // getContext returns the canvas built-in object with methods and properties for drawing
    const c = canvas.getContext('2d')
    c.fillStyle = 'lightgray'
    c.fillRect(0, 0, c.canvas.width, c.canvas.height)
    console.log('Rendering the Canvas!')
    // console.log(entity)
    // }
  }, []) // every time the component first renders, it runs this function to draw the canvas.

  // const entityCreator = (width, height, color, x, y) => {
  //   this.width = width
  //   this.height = height
  //   this.x = x
  //   this.y = y
  //   const c = (canvasRef.current).getContext('2d')
  //   c.fillStyle = color
  //   c.fillRect(this.x, this.y, this.width, this.height)
  // }
  // const entity = entityCreator(30, 30, 'red', 10, 120)

  // object
  // const gameArea = {
  //   canvas: canvasRef.current
  //   const
  // }

  return (
    <React.Fragment>
      <div><Dialogue /></div>
      <div className='game-wrapper'>
        <canvas ref={canvasRef} id='canvas-base'></canvas>
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </div>
    </React.Fragment>
  )
}

export default World
