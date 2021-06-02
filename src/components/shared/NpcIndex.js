import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { npcIndex } from '../../api/npc'

const NpcShow = props => {
  const [npcs, setNpcs] = useState([])

  useEffect(() => {
    npcIndex()
      .then(res => setNpcs(res.data.npcs))
      .then(console.log(npcs))
      .catch(console.error)
  }, [])

  const listNpcs = npcs.map(npc => (
    <div key={npc.id} className='npc-index'>
      <ul>
        <li>Name: {npc.name}</li>
        <li>Points: {npc.points}</li>
        <li>Request: {npc.request}</li>
        <li>Options: {npc.options.map(option => (
          <p key={option}>{option}</p>
        ))}</li>
        <li>ID: {npc.id}</li>
      </ul>
    </div>
  ))

  return (
    <div>
      <div>
        {listNpcs}
      </div>
    </div>
  )
}

export default NpcShow
