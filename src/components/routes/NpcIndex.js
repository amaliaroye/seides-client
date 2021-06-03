import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { npcIndex } from '../../api/npc'
import NpcDelete from './NpcDelete'
// import NpcUpdate from './NpcUpdate'

const NpcIndex = props => {
  const [npcs, setNpcs] = useState([])

  useEffect(() => {
    npcIndex()
      .then(res => setNpcs(res.data.npcs))
      .then(console.log('Loaded NPCs!'))
      .catch(console.error)
  }, [])

  const resetNpcs = () => {
    setNpcs([])
    npcIndex()
      .then(res => setNpcs(res.data.npcs))
      .then(console.log('Reloaded NPCs!'))
      .catch(console.error)
      .then(console.log(npcs))
  }

  const listNpcs = npcs.map(npc => (
    <div key={npc.id} className='npc-index-card'>
      <ul>
        <li className='npc-id'>ID: {npc.id}</li>
        <li>Points: {npc.points}</li>
        <li>Request: {npc.requestMessage}</li>

        <NpcDelete npc={npc} onClick={resetNpcs}/>
      </ul>
    </div>
  ))

  return (
    <div>
      <button onClick={resetNpcs}>Reset</button>
      <div className='npc-index'>
        {listNpcs}
      </div>
    </div>
  )
}

export default NpcIndex
