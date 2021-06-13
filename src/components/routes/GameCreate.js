import React, { useState, useEffect } from 'react'
import { gameCreate } from '../../api/game'
import { npcCreate } from '../../api/npc'
import { npcData } from '../../data/npcData'

const GameCreate = (props) => {
  const [game, setGame] = useState({
    owner: '60b7b0eac90e9a58b490dc36',
    npcs: [],
    logs: []
  })
  const [npcArray, setNpcArray] = useState([])
  const [newNpc, setNewNpc] = useState(null)

  const generateNpc = () => {
    const randomNpc = npcData[Math.floor(Math.random() * npcData.length)]
    // make axios request to create an npc using the npcdata of that index
    npcCreate(randomNpc)
      .then(res => setNewNpc(res.data.npc._id))
      // I don't know why it insists on adding null to the array, but...
      .catch(() => props.alert({
        message: 'I want my NPCs! :(',
        variant: 'danger'
      }))
  }

  // whenever an npc is returned from the axios request, update the array.
  useEffect(() => {
    setNpcArray([...npcArray, newNpc])
  }, [newNpc])

  // whenever the npc array is updated, update the game state
  useEffect(() => {
    setGame(Object.assign({ ...game, npcs: npcArray }))
  }, [npcArray])

  const generateNpcLoop = () => {
    // generate 5 npcs
    for (let i = 0; i < 5; i++) {
      generateNpc()
    }
  }

  const deleteFirstItem = () => {
    const newArray = game.npcs.slice(1)
    setGame(Object.assign({ ...game, npcs: newArray }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (game.npcs[0] === null) {
      const newArray = game.npcs.slice(1)
      setGame(Object.assign({ ...game, npcs: newArray }))
    }
    gameCreate(game)
      .then(res => console.log(res.data.game))
      .then(() => props.alert({
        message: 'Game Created!',
        variant: 'success'
      }))
      .catch(() => props.alert({
        message: 'Sorry! Something went wrong. Please try again!',
        variant: 'danger'
      }))
  }

  return (
    <section>
      <h1>Create New Game</h1>
      <button onClick={generateNpcLoop}>generate the npcs</button>
      <button onClick={deleteFirstItem}>deleteFirstItem</button>
      <button onClick={handleSubmit}>submit game</button>

    </section>
  )
}
export default GameCreate
