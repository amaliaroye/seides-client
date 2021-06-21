import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const GameOver = (props) => {

  return (
    <section>
      <h1>Game Over!</h1>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </section>
  )

}

export default GameOver
