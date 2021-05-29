import React, { useEffect, useRef } from 'react'

const World = props => {
  // refs allow you to access dom nodes
  const canvasRef = useRef(null)
  // height: 24 * $tile;
  // width: 32 * $tile;

  useEffect(() => {
    const canvas = canvasRef.current // the html canvas element
    if (canvas.getContext) {
      const c = canvas.getContext('2d')
      c.fillStyle = 'lightgray'
      c.fillRect(0, 0, c.canvas.width, c.canvas.height)
    }
  }, []) // every time the component renders, it runs this function to draw the canvas.

  const drawEntity = () => {
    const canvas = canvasRef.current // the html canvas element
    const c = canvas.getContext('2d')
    c.fillStyle = 'gray'
    c.fillRect(50, 50, 32, 32)
  }

  return (
    <React.Fragment>
      <div className='game-wrapper'>
        <canvas ref={canvasRef} id='canvas-base'></canvas>
      </div>
      <button value='do the thing' onClick={drawEntity}>Do the thing!</button>
    </React.Fragment>
  )
}

export default World
