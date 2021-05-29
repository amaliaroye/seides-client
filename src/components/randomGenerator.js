/* Generator of Random things! */

// accepts a 'type' argument: hex, rgba, rgb and returns a string color value
export const randomColor = (type) => {
  if (type === 'rgb') {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
  }
  if (type === 'rgba') {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b}, ${a})`
  }
  if (type === 'hex') {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  } else {
    return 'Please pass a type argument!'
  }
}

// accepts a 'min' and 'max' and returns an integer between the two
export const randomNumber = (min, max) => {
  return Math.floor((Math.random() * max) + min)
}

// accepts a canvas element, min and max height and width
export const randomRectangle = (c, minWidth, minHeight, maxWidth, maxHeight) => {
  const width = randomNumber(minWidth, maxWidth)
  const height = randomNumber(minHeight, maxHeight)
  const x = randomNumber(0, c.canvas.width)
  const y = randomNumber(0, c.canvas.height)
  console.log(`New Rectangle! x: ${x} y: ${y} width: ${width} height: ${height} `)
  return c.fillRect(x, y, width, height)
}
