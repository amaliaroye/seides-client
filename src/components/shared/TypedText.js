import React, {useEffect} from 'react'

const TypedText = ({ text, name, next }) => {

  useEffect(() => {
    clearType()
    setType()
  }, [text])

  const speed = 20
  let i = 0

  const setType = () => {
    // set the type in the <p>
    if (i < text.length) {
      document.getElementById('type').innerHTML += text.charAt(i)
      i++
      // I'm a recursive function!
      setTimeout(setType, speed)
    }
  }

  const clearType = () => {
    // clears out the <p>
    document.getElementById('type').innerHTML = ''
  }

  return (
    <div className="textBox" onClick={next}>
      <h2 className="displayName">{name}</h2>
      <p id="type"></p>
    </div>
  )
}

export default TypedText
