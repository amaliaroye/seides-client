import React, { useState, useEffect } from 'react'
import { gameCreate } from '../../api/game'
import { npcCreate } from '../../api/npc'
import { npcData } from '../../data/npcData'

/*
this.setState((prevState) => {
  const newState = Object.assign({}, prevState);
  newState.movie.title = 'some new title';
  newState.showLength = !prevState.showLength;
  return newState;
});
*/

const GameCreate = ({ alert }) => {
  const [game, setGame] = useState({
    owner: '60b7b0eac90e9a58b490dc36',
    npcs: []
  })
  const [npcArray, setNpcArray] = useState([])
  const [newNpc, setNewNpc] = useState(null)

  // whenever an npc is returned from the axios request, update the array.
  useEffect(() => {
    setNpcArray([...npcArray, newNpc])
  }, [newNpc])

  // whenever the npc array is updated, update the game state
  useEffect(() => {
    setGame(Object.assign({ ...game, npcs: npcArray }))
  }, [npcArray])

  const generateNpcs = (npcAmt) => {
    for (let i = 0; i < npcAmt; i++) {
      const randomNpc = npcData[Math.floor(Math.random() * npcData.length)]
      npcCreate(randomNpc)
        .then(res => setNewNpc(res.data.npc._id))
        .then(console.log('Created NPC!'), newNpc)
        .catch(() => alert({
          message: 'Could not create NPC!',
          variant: 'danger'
        }))
    }
    deleteFirstItem()
    // setGame({ ...game, npcs: (game.npcs.slice(1)) })
  }

  const deleteFirstItem = () => {
    const newArray = game.npcs.slice(1)
    setGame(Object.assign({ ...game, npcs: newArray }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    generateNpcs()
    deleteFirstItem()
    gameCreate(game)
      .then(res => console.log(res.data.game))
      .then(() => alert({
        message: 'Game Created!',
        variant: 'success'
      }))
      .catch(() => alert({
        message: 'Sorry! Something went wrong. Please try again!',
        variant: 'danger'
      }))
  }

  return (
    <section>
      <h1>Create New Game</h1>
      <form>
        <div>
          <label htmlFor='npcAmt'>Number of NPCs to generate: </label>
          <input id='npcAmt' type='number' value='5' placeholder='Number of NPCs'/>
        </div>
        <input onClick={handleSubmit} type='submit' value='New Game' />
      </form>
      <button onClick={() => generateNpcs(5, deleteFirstItem)}>generate the npcs</button>
      <button onClick={() => deleteFirstItem(generateNpcs)}>deleteFirstItem</button>
      <button onClick={handleSubmit}>submit game</button>

      {/* <button onClick={() => console.log(game)}>game</button> */}

    </section>
  )
}
export default GameCreate
