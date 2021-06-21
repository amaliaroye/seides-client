import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { gameCreate } from '../api/game'
import { npcCreate } from '../api/npc'
import { npcData } from '../data/npcData'

const GameCreate = (props) => {
  if (!props.user) return (<Redirect to={'/'} />)

  const [game, setGame] = useState({ npcs: [] })
  const [newNpc, setNewNpc] = useState('')
  const [npcQty, setNpcQty] = useState(1)
  const [isCreated, setIsCreated] = useState(false)

  //. Whenever a newNpc is created, add it to the game.npcs array
  useEffect(() => {
    async function addNpcToGame() {
      try {
        setGame((prev) =>
          ({ ...prev, npcs: [...prev.npcs, newNpc] })
        )
      } catch {
        console.error()
      }
    }
    if (newNpc) addNpcToGame()
  }, [newNpc])

  //. Checks if the game is up to date and sends an axios request
  useEffect(() => {
    if (game.npcs.length == npcQty && !isCreated) {
      gameCreate(game, props.user)
        .then(res => setGame(res.data.game))
        .then(setIsCreated(true))
        .catch(console.error)
    }
  }, [game])

  const generateOneNpc = () => {
    return new Promise((resolve) => {
      const randomNpcData = npcData[Math.floor(Math.random() * npcData.length)]
      npcCreate(randomNpcData)
        .then(res => {setNewNpc(() => res.data.npc.id)})
        .catch(console.error)
    })
  }

  //. Generates npcs for the game
  const generateNpcLoop = (npcQty) => {
    return new Promise((resolve) => {
      for (let i = 0; i < npcQty; i++) {
        generateOneNpc()
      }
    })
  }

  // const generateGame = () => {
  //   console.log('game generating!')
  //   return new Promise((resolve) => {
  //     gameCreate(game, props.user)
  //       .then(res => setGame(res.data.game))
  //       .catch(console.error)
  //   })
  // }

  //. When the form is submitted, but doesn't really work?
  const handleSubmit = (event) => {
    event.preventDefault()
    generateNpcLoop(npcQty)
      // .then(generateGame())
      .catch(console.error)
  }

  // Redirects to the game!
  if (isCreated === true && game.id) {
    return (<Redirect to={`/games/${game.id}`} />)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor='npcQty'>Number of NPCs to generate: </label>
          <input
            value={npcQty}
            type='number'
            name='npcQty'
            onChange={event => setNpcQty(event.target.value)}
            min='1'
          />
        </div>
        <button className='big' type='submit'>Start New Game</button>
      </form>
    </section>
  )
}

export default GameCreate
