import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { gameCreate } from '../../api/game'
import { npcCreate } from '../../api/npc'
import { npcData } from '../../data/npcData'

const GameCreate = (props) => {
  if (!props.user) return (<Redirect to={'/'} />)

  const [game, setGame] = useState({ npcs: [] })
  const [newNpc, setNewNpc] = useState('')
  const [npcQty, setNpcQty] = useState(1)
  const [isCreated, setIsCreated] = useState(false)


  useEffect(() => { // updates game state with npcs?
    async function addNpcToGame() {
      try {
        console.log('using an effect')
        setGame((prev) =>
          ({ ...prev, npcs: [...prev.npcs, newNpc] })
        )
      } catch {
        console.error()
      }
    }
    if (newNpc) addNpcToGame()
  }, [newNpc])

  useEffect(() => {
    if (game.npcs.length == npcQty && !isCreated) {
      console.log('%cSending axios request!', 'color:green')
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
        .then(console.log('making one npc'))
        .catch(console.error)
    })
  }

  const generateNpcLoop = (npcQty) => {
    console.log('generating npcs!')
    return new Promise((resolve) => {
      for (let i = 0; i < npcQty; i++) {
        generateOneNpc()
      }
      console.log('I generated some npcs')
    })
  }

  const generateGame = () => {
    console.log('game generating!')
    return new Promise((resolve) => {
      gameCreate(game, props.user)
        .then(res => setGame(res.data.game))
        .catch(console.error)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    generateNpcLoop(npcQty)
      // .then(generateGame())
      .catch(console.error)
  }

  if (isCreated === true && game.id) {
    console.log('redirecting? here is the game')
    console.log(game)
    // return (<Redirect to={`/games/${game.id}`} />)
  }

  return (
    <section>
      <button onClick={()=>console.log(game)}>Game!</button>
      <form onSubmit={handleSubmit}>
        <input
          value={npcQty}
          type='number'
          onChange={event => setNpcQty(event.target.value)}
          placeholder='how many NPCs to create'
        />
        <input type='submit' value='Start New Game'/>
      </form>
    </section>
  )
}

export default GameCreate
