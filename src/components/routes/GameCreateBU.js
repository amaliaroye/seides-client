import React, { Fragment, useState } from 'react'
import { gameCreate } from '../../api/game'

/*
What does a game do?
Generates a game with random NPCs and passes to gameshow
how many npcs? - npcindex randomize?

Add date created to log array?

*/

const GameCreate = (props) => {
  const [npcArray, setNpcArray] = useState([])
  const [logArray, setLogArray] = useState([])
  // can't these just be let npc = null?
  const [npc, setNpc] = useState('')
  const [log, setLog] = useState('')

  const [game, setGame] = useState({
    owner: props.user,
    map: '',
    over: false,
    score: 0,
    npcs: npcArray,
    logs: logArray
  })

  const handleChange = (event) => {
    event.persist()
    const { name, value } = event.target
    if (name === 'npc') {
      setNpc(value)
      console.log(value)
    }
    if (name === 'log') {
      setLog(value)
      console.log(value)
    } else {
      setGame(prevGame => {
        const updatedField = { [name]: value }
        const gameToCreate = Object.assign({}, prevGame, updatedField)
        return gameToCreate
      })
    }
  }
  const handleAdd = (event) => {
    event.preventDefault()
    // if there is an option, add it to the optionArray
    if (npc) {
      setNpcArray([...npcArray, npc])
      setNpc('')
    }
    if (log) {
      setLogArray([...logArray, log])
      setLog('')
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    gameCreate(game, props.user)
      .then(res => console.log(res))
      .catch(console.error)
  }

  return (
    <Fragment>
      <h3>Create a New Game!</h3>
      <form onSubmit={gameCreate}>
        <div>
          <label className='form-input label'>Map</label>
          <input
            placeholder='Map Name'
            name='map'
            value={game.map}
            onChange={handleChange}
            className='form-input'
            type='text'
          />
        </div>
        <div>
          <label className='form-input label'>NPCs</label>
          <input
            placeholder='NPCs'
            name='npc'
            value={npc}
            onChange={handleChange}
            className='form-input'
            type='text'
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div>
          <label className='form-input label'>LOG</label>
          <input
            placeholder='Log Events'
            name='log'
            value={log}
            onChange={handleChange}
            className='form-input'
            type='text'
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <button onClick={handleSubmit}>New Map!</button>
      </form>
    </Fragment>
  )
}
export default GameCreate
