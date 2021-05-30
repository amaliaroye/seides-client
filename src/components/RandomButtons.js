import React from 'react'
import { randomNumber, randomColor, randomRectangle } from '../utils/randomGenerator'

const RandomButtons = (props) => {
  const drawEntity = () => {
    const canvas = props.baseRef.current // the html canvas element
    const c = canvas.getContext('2d')
    c.fillStyle = randomColor('rgb')
    // c.fillRect(100, 100, 100, 100)
    randomRectangle(c, 0, 0, c.canvas.width, c.canvas.height)
  }
  return (
    <div>
      <button onClick={drawEntity}>Random Rectangle!</button>
      <button onClick={() => console.log(randomNumber(1, 100))}>Random Number</button>
      <button onClick={() => console.log(randomColor('rgb'))}>Random Color</button>
    </div>)
}

export default RandomButtons
