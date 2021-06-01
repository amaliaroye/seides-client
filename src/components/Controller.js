import React, {
  useState,
  useEffect
} from 'react'
// import Player from './Player'

const Controller = (props) => {
  const [action, setAction] = useState(false)
  const [direction, setDirection] = useState('R')

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp)
    return () => document.removeEventListener('keyup', onKeyUp)
  }, [])

  // callback functions
  const onKeyDown = (event) => {
    setAction(true)
    if (event.key === 'ArrowLeft') {
      setDirection('L')
      console.log('Hit the left arrow!')
    }
    if (event.key === 'ArrowRight') {
      setDirection('R')
      console.log('Hit the right arrow!')
    }
  }
  const onKeyUp = (event) => {
    setAction(false)
    if (event.key === 'ArrowLeft') {
      console.log('Released the left arrow!')
    }
    if (event.key === 'ArrowRight') {
      console.log('Released the right arrow!')
    }
  }

  const moveBG = () => {
    if (action === false) {
      return ''
    } else if (direction === 'R' && action === true) {
      return 'move-R'
    } else if (direction === 'L' && action === true) {
      return 'move-L'
    }
  }

  return (
    <main className="main">
      <div className="viewport">
      </div>
    </main>
  )
}

export default Controller
