import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { gameCreate } from '../../api/game'
import { npcCreate } from '../../api/npc'
import { npcData } from '../../data/npcData'

export default function GameCreate (props) {
  if (!props.user) return (<Redirect to={'/'} />)

  const [game, setGame] = useState({
    npcs: []
  })
  const [newNpc, setNewNpc] = useState(null)
  const [npcQuantity, setNpcQuantity] = useState('')
  const [isCreated, setIsCreated] = useState(false)

  /*
    This function updates the game state whenever the newNpc state changes
    It has a condition to prevent the initial state of null being passed into the array when the component mounts
  */
  useEffect(() => {
    if (newNpc) {
      setGame((prevState) =>
        ({ ...prevState, npcs: [...prevState.npcs, newNpc] })
      )
    }
  }, [newNpc])

  const generateOneNpc = () => {
    return new Promise(resolve => {
      const randomNpcData = npcData[Math.floor(Math.random() * npcData.length)]
      npcCreate(randomNpcData)
        .then(res => {
          setNewNpc(() => res.data.npc.id)
        })
        .catch(console.error)
    })
  }

  /*
  This function returns a Promise that generates multiple npcs in a loop.
  It takes in an npcQuantity argument that defaults to 5 unless changed by user
  */
  const generateNpcs = (npcQuantity) => {
    return new Promise(resolve => {
      for (let i = 0; i < npcQuantity; i++) {
        generateOneNpc()
      }
    })
  }

  /* This function sends the game data to the api */
  const generateGame = () => {
    return new Promise(resolve => {
      resolve(
        gameCreate(game, props.user)
          // set the state to response so the id can be used for the redirect
          .then(res => setGame(res.data.game))
          .then(() => setIsCreated(true))
          .catch(console.error)
      )
    })
  }

  const handleChange = (event) => {
    setNpcQuantity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    generateNpcs(npcQuantity)
      .then(generateGame())
      .catch(console.error)
  }

  if (isCreated === true) return (<Redirect to={`/games/${game.id}`} />)

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          value={npcQuantity}
          placeholder='How many NPCs?'
          type='number'
          onChange={handleChange}
        />
        <input type='submit' value='Start New Game'/>
      </form>
    </section>
  )
}
