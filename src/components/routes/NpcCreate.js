import React, { Fragment, useState } from 'react'

import { npcCreate } from '../../api/npc'
// import NpcIndex from './NpcIndex'
// creates new NPCs for the game with data from

import { npcData } from '../../data/npcData'

const NpcCreate = props => {
  // game creation starts with no npcs in the array
  const [npcs, setNpcs] = useState([])
  const [newNpc, setNewNpc] = useState(null)

  // user enters how many npcs to generate props.amtOfNpcs?
  const addNpc = () => {
    // event.preventDefault()
    // selects 1 npc from the array npcData
    const randomNpc = npcData[Math.floor(Math.random() * npcData.length)]
    // make axios request to create an npc on the database with id
    npcCreate(randomNpc)
      .then(res => setNewNpc(res.data.npc))
      .then(setNpcs([...npcs, newNpc]))
      .then(console.log(npcs))
      .catch(console.error)
  }

  return (
    <Fragment>
      <button onClick={addNpc}>New Npc!</button>
      <button onClick={() => console.table(npcs)}>Npcs!</button>
    </Fragment>
  )
}

export default NpcCreate
