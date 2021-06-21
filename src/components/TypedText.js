import React, {useEffect} from 'react'

const TypedText = ({ text }) => {

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
    document.getElementById('type').innerHTML = ''
  }

  return (
    <p id="type"></p>
  )
}

export default TypedText
