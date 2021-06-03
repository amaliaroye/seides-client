import React, { Fragment, useState } from 'react'
import { gameCreate } from '../../api/game'

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
    if ( name === 'npcs') {
      setNpc(value)
      console.log(value)
    }
    if (name === 'logs') {
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
    if (npc) {setNpcArray([...npcArray, npc])
    if (log) {setLogArray([...logArray, log])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    gameCreate(game)
      .then(res => console.log(res))
      .catch(console.error)
  }

  return (
    <Fragment>
      <form onSubmit={createGame}>
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
            placeholder='Map Name'
            name='map'
            value={game.npcs}
            onChange={handleChange}
            className='form-input'
            type='text'
          />
        </div>

      </form>
    </Fragment>
  )
}
export default GameCreate
