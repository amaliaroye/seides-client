import React, { useEffect, useRef } from 'react'
import Dialogue from './Dialogue'

const World = props => {
  const canvasRef = useRef(null) // refs allow you to access dom nodes without rerendering?
  // const [counter, setCounter] = useState(0)

  // this renders the canvas
  useEffect(() => {
    const canvas = canvasRef.current // the actual html canvas element
    // if (canvas.getContext) {
    // .getContext('2d') returns the canvas's built-in object with methods and properties for drawing
    const c = canvas.getContext('2d')
    c.fillStyle = 'lightgray'
    c.fillRect(0, 0, c.canvas.width, c.canvas.height)
    console.log('Rendering the Canvas!')
    //   console.log(canvasRef)
    // }
  }, []) // every time the component first mounts (no page load), it runs this function to draw the canvas.

  return (
    <React.Fragment>
      <div className='game-wrapper'>
        <canvas ref={canvasRef} id='canvas-base'></canvas>
      </div>
      <div>
        <button>I am a button that does nothing.</button>
      </div>
      <div><Dialogue /></div>
    </React.Fragment>
  )
}

export default World
