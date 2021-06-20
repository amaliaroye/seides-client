import React from 'react'

const Typing = ({ text }) => {
  const speed = 100
  let i = 0

  const typewriter = () => {
    if (i < text.length) {
      document.getElementById('type').innerHTML += text.charAt(i)
      i++
      setTimeout(typewriter, speed)
    }
  }
  return (
    <div>
      <button onClick={typewriter}>Type!</button>
      <p id='type'></p>
    </div>
  )
}

export default Typing
