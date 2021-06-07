import React, { useState } from 'react'
import { gameCreate } from '../../api/game'
import { npcCreate } from '../../api/npc'
import { npcData } from '../../data/npcData'

const GameCreate = (props) => {
  const [game, setGame] = useState({
    map: 'a-cool-map',
    npcs: [],
    logs: []
  })
  const [npcArray, setNpcArray] = useState([])
  const [newNpc, setNewNpc] = useState(null)

  const generateNpc = () => {
    const randomNpcIndex = npcData[Math.floor(Math.random() * npcData.length)]
    // make axios request to create an npc using the npcdata of that index
    npcCreate(randomNpcIndex)
      .then(res => setNewNpc(res.data.npc._id))
      // I don't know why it insists on adding null to the array, but...
      // .then(setNpcArray((npcArray[0] === null)
    // set array to the new npc
    // ? [newNpc]
    // : [...npcArray, newNpc]))
      .then(setNpcArray([...npcArray, newNpc]))
      .catch(console.error)
  }

  const updateGame = () => {
    // generate 5 npcs and add to npcArray
    for (let i = 0; i < 5; i++) {
      generateNpc()
    }
    // set game.npcs to the npcArray
    setGame(Object.assign({ ...game, npcs: npcArray }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // updateGame()
    gameCreate(game, props.user)
      .then(res => setGame(res.data.game))
      // .then(console.log(game))
      .catch(console.error)
  }

  return (
    <section>
      <h3>Wanna Play a Game?</h3>
      <button onClick={handleSubmit}>submit</button>
      <button onClick={updateGame}>update game</button>
      <button onClick={() => console.log(game)}>Game</button>
      <button onClick={() => console.table(npcArray)}>npcArray</button>
      <button onClick={generateNpc}>generatenpc</button>
    </section>
  )
}
export default GameCreate
