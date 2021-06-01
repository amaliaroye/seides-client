import React, { useState, useEffect } from 'react'

const Player = (props) => {
  const [spriteClass, setSpriteClass] = useState('idle-R')

  useEffect(() => {
    if (props.direction === 'R' && props.action === false) {
      setSpriteClass('idle-R')
    }
    if (props.direction === 'R' && props.action === true) {
      setSpriteClass('run-R')
    }
    if (props.direction === 'L' && props.action === false) {
      setSpriteClass('idle-L')
    }
    if (props.direction === 'L' && props.action === true) {
      setSpriteClass('run-L')
    }
  }, [props.direction, props.action])

  return (
    <div className="character-sprite">
      <img
        src="./spritesheet.png"
        className={`spritesheet ${spriteClass}`}
        alt='me'/>
    </div>
  )
}

export default Player
